#!/usr/bin/env node

import { appendFile, readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import { pathToFileURL } from "node:url";

const DEFAULT_INACTIVE_YEARS = 2;
const DEFAULT_CONCURRENCY = 8;

export function parseGitHubProjects(markdown) {
  const projects = [];

  for (const [index, line] of markdown.split("\n").entries()) {
    const match = line.match(/^-\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)(.*)$/i);
    if (!match) {
      continue;
    }

    let url;
    try {
      url = new URL(match[2]);
    } catch {
      continue;
    }

    if (!["github.com", "www.github.com"].includes(url.hostname.toLowerCase())) {
      continue;
    }

    const segments = url.pathname.split("/").filter(Boolean);
    if (segments.length < 2) {
      continue;
    }

    const owner = segments[0];
    const repo = segments[1].replace(/\.git$/i, "");
    projects.push({
      name: match[1],
      url: match[2],
      owner,
      repo,
      key: `${owner}/${repo}`.toLowerCase(),
      line: index + 1,
      archivedBadge: /\[archived-badge\]/i.test(match[3]),
    });
  }

  return projects;
}

export function inactivityCutoff(now = new Date(), years = DEFAULT_INACTIVE_YEARS) {
  return new Date(
    Date.UTC(now.getUTCFullYear() - years, now.getUTCMonth(), now.getUTCDate()),
  );
}

export function findingsForProject(project, status, cutoff) {
  if (status.error) {
    return [`Could not check repository: ${status.error}`];
  }

  const findings = [];
  const requestedName = `${project.owner}/${project.repo}`;

  if (status.missing) {
    return ["Repository is missing or inaccessible"];
  }

  if (status.fullName.toLowerCase() !== requestedName.toLowerCase()) {
    findings.push(`Repository moved to ${status.fullName}`);
  }

  if (!project.archivedBadge) {
    if (status.archived) {
      findings.push("GitHub repository is archived but the README has no Archived badge");
    } else if (status.disabled) {
      findings.push("GitHub repository is disabled but the README has no Archived badge");
    } else if (!status.defaultBranch) {
      findings.push("Repository has no default branch or commits");
    } else if (!status.lastCommitDate) {
      findings.push("Could not determine the latest default-branch commit date");
    } else if (new Date(status.lastCommitDate) < cutoff) {
      findings.push(
        `No default-branch activity since ${cutoff.toISOString().slice(0, 10)} (last commit ${status.lastCommitDate.slice(0, 10)})`,
      );
    }
  }

  return findings;
}

export function formatReport({ projects, statuses, cutoff, generatedAt = new Date() }) {
  const rows = [];

  for (const project of projects) {
    const status = statuses.get(project.key);
    const findings = findingsForProject(project, status, cutoff);
    if (findings.length > 0) {
      rows.push({ project, status, findings });
    }
  }

  const uniqueRepositories = new Set(projects.map((project) => project.key)).size;
  const lines = [
    "# Weekly project status report",
    "",
    `Generated: ${generatedAt.toISOString()}`,
    "",
    `Checked ${projects.length} README entries across ${uniqueRepositories} unique GitHub repositories.`,
    `Repositories without an Archived badge are considered inactive when their latest default-branch commit predates ${cutoff.toISOString().slice(0, 10)}.`,
    "",
  ];

  if (rows.length === 0) {
    lines.push("✅ No project-status drift detected.", "");
  } else {
    lines.push(
      `⚠️ Found ${rows.length} README ${rows.length === 1 ? "entry" : "entries"} requiring review.`,
      "",
      "| Project | Repository | Finding | README line |",
      "| --- | --- | --- | ---: |",
    );

    for (const { project, status, findings } of rows) {
      const repository = status.fullName || `${project.owner}/${project.repo}`;
      const repositoryUrl = status.htmlUrl || project.url;
      lines.push(
        `| ${escapeTable(project.name)} | [${escapeTable(repository)}](${repositoryUrl}) | ${findings.map(escapeTable).join("<br>")} | ${project.line} |`,
      );
    }
    lines.push("");
  }

  lines.push(
    "> Existing Archived badges are treated as deliberate. An apparently active repository may still represent an officially discontinued project, so the workflow does not remove badges automatically.",
    "",
    "> Non-GitHub entries and changes to project descriptions or language badges still require human review.",
    "",
  );

  return { markdown: lines.join("\n"), findingCount: rows.length };
}

function escapeTable(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

async function fetchJson(url, token, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "awesome-streaming-project-status-check",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      headers,
    });

    if (response.ok) {
      return response.json();
    }

    if (response.status === 404) {
      const error = new Error("Not Found");
      error.status = 404;
      throw error;
    }

    if (attempt < attempts && (response.status === 429 || response.status >= 500)) {
      await new Promise((resolve) => setTimeout(resolve, 250 * 2 ** (attempt - 1)));
      continue;
    }

    const detail = await response.text();
    throw new Error(`GitHub API returned ${response.status}: ${detail.slice(0, 200)}`);
  }
}

async function checkRepository(project, token) {
  const apiBase = "https://api.github.com/repos";
  const repositoryPath = `${encodeURIComponent(project.owner)}/${encodeURIComponent(project.repo)}`;

  try {
    const repository = await fetchJson(`${apiBase}/${repositoryPath}`, token);
    let lastCommitDate = null;

    if (!repository.archived && !repository.disabled && repository.default_branch) {
      const commits = await fetchJson(
        `${apiBase}/${repositoryPath}/commits?sha=${encodeURIComponent(repository.default_branch)}&per_page=1`,
        token,
      );
      const commit = commits[0]?.commit;
      lastCommitDate = commit?.committer?.date || commit?.author?.date || null;
    }

    return {
      archived: repository.archived,
      disabled: repository.disabled,
      defaultBranch: repository.default_branch,
      fullName: repository.full_name,
      htmlUrl: repository.html_url,
      lastCommitDate,
    };
  } catch (error) {
    if (error.status === 404) {
      return {
        missing: true,
        fullName: `${project.owner}/${project.repo}`,
        htmlUrl: project.url,
      };
    }
    return {
      error: error.message,
      fullName: `${project.owner}/${project.repo}`,
      htmlUrl: project.url,
    };
  }
}

async function mapWithConcurrency(items, concurrency, callback) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await callback(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );
  return results;
}

export function parseArguments(argv) {
  const options = {
    readme: "README.md",
    output: null,
    inactiveYears: DEFAULT_INACTIVE_YEARS,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--readme") {
      options.readme = argv[++index];
    } else if (argument === "--output") {
      options.output = argv[++index];
    } else if (argument === "--inactive-years") {
      options.inactiveYears = Number(argv[++index]);
    } else if (argument === "--help") {
      options.help = true;
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }

  if (!Number.isInteger(options.inactiveYears) || options.inactiveYears <= 0) {
    throw new Error("--inactive-years must be a positive integer");
  }
  return options;
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(
      "Usage: node scripts/check-project-status.mjs [--readme README.md] [--output report.md] [--inactive-years 2]",
    );
    return;
  }

  const markdown = await readFile(options.readme, "utf8");
  const projects = parseGitHubProjects(markdown);
  if (projects.length === 0) {
    throw new Error(`No GitHub project entries found in ${options.readme}`);
  }

  const uniqueProjects = [...new Map(projects.map((project) => [project.key, project])).values()];
  const results = await mapWithConcurrency(uniqueProjects, DEFAULT_CONCURRENCY, (project) =>
    checkRepository(project, process.env.GITHUB_TOKEN),
  );
  const statuses = new Map(
    uniqueProjects.map((project, index) => [project.key, results[index]]),
  );
  const cutoff = inactivityCutoff(new Date(), options.inactiveYears);
  const report = formatReport({ projects, statuses, cutoff });

  console.log(report.markdown);
  if (options.output) {
    await writeFile(options.output, report.markdown);
  }
  if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, report.markdown);
  }

  if (report.findingCount > 0) {
    process.exitCode = 1;
  }
}

const invokedPath = process.argv[1] ? pathToFileURL(process.argv[1]).href : null;
if (invokedPath === import.meta.url) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 2;
  });
}
