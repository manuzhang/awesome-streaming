import assert from "node:assert/strict";
import test from "node:test";

import {
  findingsForProject,
  formatReport,
  inactivityCutoff,
  parseArguments,
  parseGitHubProjects,
} from "./check-project-status.mjs";

test("parses GitHub project entries and archived badges", () => {
  const projects = parseGitHubProjects(`
- [Active](https://github.com/example/active) <sub>![Go][language-go]</sub> - Active.
- [Retired](https://github.com/example/retired) <sub>![Archived][archived-badge]</sub> - Retired.
- [Website](https://example.com/project) - Hosted elsewhere.
1. [Reading](https://github.com/example/article)
`);

  assert.deepEqual(
    projects.map(({ name, key, line, archivedBadge }) => ({ name, key, line, archivedBadge })),
    [
      { name: "Active", key: "example/active", line: 2, archivedBadge: false },
      { name: "Retired", key: "example/retired", line: 3, archivedBadge: true },
    ],
  );
});

test("uses a calendar-based two-year inactivity cutoff", () => {
  assert.equal(
    inactivityCutoff(new Date("2026-08-13T12:00:00Z"), 2).toISOString(),
    "2024-08-13T00:00:00.000Z",
  );
});

test("reports the configured cutoff for inactive unbadged projects", () => {
  const cutoff = new Date("2024-08-13T00:00:00Z");
  const status = {
    archived: false,
    disabled: false,
    defaultBranch: "main",
    fullName: "example/project",
    htmlUrl: "https://github.com/example/project",
    lastCommitDate: "2024-08-12T23:59:59Z",
  };

  assert.equal(
    findingsForProject(
      { owner: "example", repo: "project", archivedBadge: false },
      status,
      cutoff,
    )[0],
    "No default-branch activity since 2024-08-13 (last commit 2024-08-12)",
  );
  assert.deepEqual(
    findingsForProject(
      { owner: "example", repo: "project", archivedBadge: true },
      status,
      cutoff,
    ),
    [],
  );
});

test("accepts only positive whole-year inactivity intervals", () => {
  assert.equal(parseArguments(["--inactive-years", "1"]).inactiveYears, 1);
  assert.throws(
    () => parseArguments(["--inactive-years", "0.5"]),
    /must be a positive integer/,
  );
  assert.throws(
    () => parseArguments(["--inactive-years", "0"]),
    /must be a positive integer/,
  );
});

test("reports archived, moved, and unavailable repositories", () => {
  const cutoff = new Date("2024-08-13T00:00:00Z");
  const projects = [
    {
      name: "Moved",
      owner: "old",
      repo: "project",
      key: "old/project",
      url: "https://github.com/old/project",
      line: 10,
      archivedBadge: false,
    },
    {
      name: "Missing",
      owner: "gone",
      repo: "project",
      key: "gone/project",
      url: "https://github.com/gone/project",
      line: 20,
      archivedBadge: false,
    },
  ];
  const statuses = new Map([
    [
      "old/project",
      {
        archived: true,
        disabled: false,
        defaultBranch: "main",
        fullName: "new/project",
        htmlUrl: "https://github.com/new/project",
        lastCommitDate: null,
      },
    ],
    [
      "gone/project",
      {
        missing: true,
        fullName: "gone/project",
        htmlUrl: "https://github.com/gone/project",
      },
    ],
  ]);

  const report = formatReport({
    projects,
    statuses,
    cutoff,
    generatedAt: new Date("2026-08-13T00:00:00Z"),
  });

  assert.equal(report.findingCount, 2);
  assert.match(report.markdown, /Repository moved to new\/project/);
  assert.match(report.markdown, /GitHub repository is archived/);
  assert.match(report.markdown, /Repository is missing or inaccessible/);
});
