## Awesome Streaming

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome [streaming (stream processing)](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) frameworks, applications, readings and other resources. Inspired by [other awesome projects](https://github.com/sindresorhus/awesome). 

## Table of Contents

- [Streaming Engine](#streaming-engine)
- [IoT](#iot)
- [Reactive Streams](#reactive-streams)
- [DSL](#dsl)
- [Data Pipeline](#data-pipeline)
- [Online Machine Learning](#online-machine-learning)
- [Stream SQL](#stream-sql)
- [Toolkit](#toolkit)
- [Benchmark](#benchmark)
- [Readings](#readings)

### Streaming Engine

* [Apache Apex](https://github.com/apache/incubator-apex-core) [Java] - unified platform for big data stream and batch processing.
* [flink-streaming](http://ci.apache.org/projects/flink/flink-docs-release-0.9/apis/streaming_guide.html) [Java] - system for high-throughput, low-latency data stream processing that supports stateful computation, data-driven windowing semantics and iterative stream processing.
* [gearpump](https://github.com/intel-hadoop/gearpump) [Scala] - lightweight real-time distributed streaming engine built on Akka.
* [heron](https://blog.twitter.com/2015/flying-faster-with-twitter-heron) - Twitter's real-time analytics platform that is fully API-compatible with Storm. Storm has been replaced by Heron at Twitter.
* [Kafka Streams] [Java] (https://cwiki.apache.org/confluence/display/KAFKA/KIP-28+-+Add+a+processor+client) - lightweight stream processing library included in Apache Kafka (since 0.10 version).
* [mantis](http://www.slideshare.net/g9yuayon/qcon-talk-on-netflix-mantis-a-stream-processing-system) - Netflix's event stream processing system.
* [millwheel](http://research.google.com/pubs/pub41378.html) - framework for building low-latency data-processing applications that is widely used at Google.
* [mupd8(muppet)](https://github.com/walmartlabs/mupd8) [Scala/Java] - mapReduce-style framework for processing fast/streaming data.
* [pulsar](http://gopulsar.io/) [Java] - an open-source, real-time analytics platform and stream processing framework.
* [s4](http://incubator.apache.org/s4/) [Java] - general-purpose, distributed, scalable, fault-tolerant, pluggable platform that allows programmers to easily develop applications for processing continuous unbounded streams of data.
* [Apache Samza](http://samza.apache.org/) [Scala/Java] - distributed stream processing framework that build on Kafka(messaging, storage) and YARN(fault tolerance, processor isolation, security and resource management).
* [spark-streaming](https://spark.apache.org/streaming/) [Scala] - makes it easy to build scalable fault-tolerant streaming applications.
* [SPQR](https://github.com/ottogroup/SPQR) [Java] - dynamic framework for processing high volumn data streams through pipelines.
* [Apache Storm](https://storm.apache.org/) [Clojure/Java] - distributed real-time computation system. Storm is to stream processing what Hadoop is to batch processing. 
* [tigon](https://github.com/caskdata/tigon) [C++/Java] - high throughput real-time streaming processing framework built on Hadoop and HBase.
* [hailstorm](https://github.com/hailstorm-hs/hailstorm) [Haskell] - distributed stream processing with exactly-once semantics based on Storm.

### IoT

* [sensorbee](http://sensorbee.io/) [Go] - lightweight stream processing engine for IoT.
* [quarks](http://quarks-edge.github.io/) [Java] - a programming model and runtime that enables continuous streaming analytics on gateways and edge devices which can work with centralized systems to provide efficient and timely analytics across the whole IoT ecosystem: from the center to the edge, opens sourced by IBM.

### Reactive Streams
* [akka-streams](http://doc.akka.io/docs/akka-stream-and-http-experimental/1.0/scala/stream-cookbook.html) [scala] - an implementation of [Reactive Streams](http://www.reactive-streams.org/) in Akka.
* [monifu](https://github.com/monifu/monifu) [scala] - high-performance Scala / Scala.js library for composing asynchronous and event-based programs.

### DSL
* [summingbird](https://github.com/twitter/summingbird) [Scala] - library that lets you write MapReduce programs that look like native Scala or Java collection transformations and execute them on a number of well-known distributed MapReduce platforms, including Storm and Scalding.
* [coast](https://github.com/bkirwi/coast) [Scala] - a DSL that builds DAGs on top of Samza and provides exactly-once semantics.
* [Apache Beam](https://github.com/apache/incubator-beam) [Java] - unified model and set of language-specific SDKs for defining and executing data processing workflows, and also data ingestion and integration flows, supporting Enterprise Integration Patterns (EIPs) and Domain Specific Languages (DSLs), open sourced by Google.

### Data Pipeline

* [Apache Kafka](https://github.com/apache/kafka) [Scala/Java] - distributed, partitioned, replicated commit log service, which provides the functionality of a messaging system, but with a unique design.
* [metaq](https://github.com/killme2008/Metamorphosis) [Java] - Taobao's high available, high performance distributed messaging system
* [nsq](https://github.com/bitly/nsq) [Go] - realtime distributed messaging platform designed to operate at scale, handling billions of messages per day.
* [camus](https://github.com/linkedin/camus) [Java] - Linkedin's Kafka -> HDFS pipeline.
* [databus](https://github.com/linkedin/databus) [Java] - Linkedin's source-agnostic distributed change data capture system.
* [flume](https://github.com/apache/flume) [Java] - distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.
* [suro](https://github.com/Netflix/suro) [Java] - data pipeline service for collecting, aggregating, and dispatching large volume of application events including log data.
* [StreamSets Data Collector](https://github.com/streamsets/datacollector) [Java] - continuous big data ingestion infrastructure that reads from and writes to a large number of end-points, including S3, JDBC, Hadoop, Kafka, Cassandra and many others.

### Online Machine Learning 

* [streamDM](https://github.com/huawei-noah/streamDM) [Scala] - mining Big Data streams using Spark Streaming from Huawei.
* [jubatus](http://jubat.us/en/) [C++] - distributed processing framework and streaming machine learning library.
* [Apache Samoa](https://github.com/yahoo/samoa) [Java] - distributed streaming machine learning (ML) framework that contains a programing abstraction for distributed streaming ML algorithms.
* [trident-ml](https://github.com/pmerienne/trident-ml) [Java] - realtime online machine learning library based on Trident.
* [StormCV](https://github.com/sensorstorm/StormCV) [Java] - enables the use of Apache Storm for video processing by adding computer vision (CV) specific operations and data model.

### Stream SQL

* [pipelinedb](https://github.com/pipelinedb/pipelinedb) [C] - An open-source relational database that runs SQL queries continuously on streams, incrementally storing results in tables.
* [squall](https://github.com/epfldata/squall) [Java] - Squall executes SQL queries on top of Storm for doing online processing.
* [StreamCQL](https://github.com/HuaweiBigData/StreamCQL) [Java] - Continuous Query Language on RealTime Computation System.

### Benchmark

* [storm-benchmark](https://github.com/intel-hadoop/storm-benchmark) [Java] - a set of benchmarks to test Storm performance.
* [storm-perf-test](https://github.com/yahoo/storm-perf-test) [Java] - a simple storm performance/stress test.
* [streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) [Java] - Benchmarks for Low Latency (Streaming) solutions including Apache Storm, Apache Spark, Apache Flink, etc.
* [flotilla](https://github.com/tylertreat/Flotilla) [Go] - Automated message queue orchestration for scaled-up benchmarking.




### Toolkit

* [akka](http://akka.io/) [Scala] - toolkit and runtime for building highly concurrent, distributed, and resilient message-driven application on the JVM.
* [pulsar](http://quantmind.github.io/pulsar/index.html#) [Python] - Actor based event driven concurrent framework for Python.
* [aeron](https://github.com/real-logic/Aeron) [Java/C++] - efficient reliable unicast and multicast message transport.
* [StreamFlow](https://github.com/lmco/streamflow) [Java] - stream processing tool designed to help build and monitor processing workflows.
* [samza-luwak](https://github.com/romseygeek/samza-luwak) [Java] - uses Luwak, a stored-query engine built on Lucene, to implement full-text search on streams.
* [Turbine](https://github.com/Netflix/Turbine) [Java] - tool for aggregating streams of Server-Sent Event (SSE) JSON data into a single stream.

### Readings

#### Blogs

* [Confluent blog](http://blog.confluent.io/)
* [Ingest Tips](http://ingest.tips/)

#### Articles

1. [In-Stream Big Data Processing](https://highlyscalable.wordpress.com/2013/08/20/in-stream-big-data-processing/)
2. [The world beyond batch: Streaming 101](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) by Tyler Akidau. 

#### Streaming Algorithms and their applications 

from [Real Time Analytics: Algorithms and Systems (VLDB 2015)](http://www.vldb.org/pvldb/vol8/p2040-Kejariwal.pdf)

Problem | Description | Application
------- | ----------- | -----------
Sampling | Obtain a representative set of the stream | A/B Testing
Filtering | Extract elements which meet a certain criterion | Set membership
Correlation | Find data subsets (subgraphs) in (graph) data stream which are highly correlated to a given data set | Fraud detection  
Estimating Cardinality | Estimate the number of distinct elements | Site audience analysis
Estimating Quantiles | Estimate quantiles of a data stream with small amount of memory | Network analysis
Estimating Moments | Estimating distribution of frequencies of different elements | Databases
Finding Frequent Elements | Identify items in a multiset with frequency more than a threshold θ | Trending Hashtags
Counting Inversions | Estimate number of inversions | Measure sortedness
Finding Subsequences | Find Longest Increasing Subsequences (LIS), Longest Common Subsequence (LCS), subsequences similar to a given query sequence | Traffic analysis
Path Analysis | Determine whether there exists a path of length ≤ ` between two nodes in a dynamic graph | Web graph analysis
Anomaly Detection | Detect anomalies in a data stream | Sensor networks
Temporal Pattern Analysis | Detect patterns in a data stream | Traffic analysis
Data Prediction | Predict missing values in a data stream | Sensor data analysis
Clustering | Cluster a data stream | Medical imaging
Graph analysis | Extract unweighted and weighted matching, vertex cover, independent sets, spanners, subgraphs (sparsification) and random walks, computing min-cut | Web graph analysis
Basic Counting Estimate | `m'` of the number `m` of 1-bits in the sliding window (of size `n`) such that `|m'  − m| ≤ em` | Popularity Analysis
Significant One Counting | Estimate `m'` of the number `m` of 1-bits in the sliding window (of size `n`) such that if `m ≥ θn`, then `|m' − m| ≤ em` | Traffic accounting


## License 

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png) 

Licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)
