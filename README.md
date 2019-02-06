## Awesome Streaming  [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://travis-ci.org/manuzhang/awesome-streaming.svg?branch=master)](https://travis-ci.org/manuzhang/awesome-streaming)

A curated list of awesome [streaming (stream processing)](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) frameworks, applications, readings and other resources. Inspired by [other awesome projects](https://github.com/sindresorhus/awesome). 

## Table of Contents

- [Streaming Engine](#streaming-engine)
- [Streaming Library](#streaming-library)
- [Streaming Application](#streaming-application)
- [IoT](#iot)
- [DSL](#dsl)
- [Data Pipeline](#data-pipeline)
- [Online Machine Learning](#online-machine-learning)
- [Streaming SQL](#streaming-sql)
- [Toolkit](#toolkit)
- [Benchmark](#benchmark)
- [Readings](#readings)

### Streaming Engine

* [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/) [Java] - real-time, fully managed and scalable data stream engine provided by AWS 
* [Apache Apex](https://github.com/apache/apex-core) [Java] - unified platform for big data stream and batch processing.
* [Apache Flink](https://github.com/apache/flink) [Java] - system for high-throughput, low-latency data stream processing that supports stateful computation, data-driven windowing semantics and iterative stream processing.
* [Apache Gearpump](https://github.com/apache/incubator-gearpump) [Scala] - lightweight real-time distributed streaming engine built on Akka.
* [Apache Samza](https://github.com/apache/samza) [Scala/Java] - distributed stream processing framework that build on Kafka(messaging, storage) and YARN(fault tolerance, processor isolation, security and resource management).
* [Apache Spark Streaming](https://github.com/apache/spark) [Scala] - makes it easy to build scalable fault-tolerant streaming applications.
* [Apache Storm](https://github.com/apache/storm) [Clojure/Java] - distributed real-time computation system. Storm is to stream processing what Hadoop is to batch processing. 
* [Faust](https://github.com/robinhood/faust) [Python] - stream processing library, porting the ideas from Kafka Streams to Python
* [Hazelcast Jet](https://github.com/hazelcast/hazelcast-jet) [Java] - A general purpose distributed data processing engine, built on top of Hazelcast.
* [heron](https://github.com/apache/incubator-heron) - Twitter's real-time analytics platform that is fully API-compatible with Storm. Storm has been replaced by Heron at Twitter.
* [mantis](http://www.slideshare.net/g9yuayon/qcon-talk-on-netflix-mantis-a-stream-processing-system), [tech-blog](https://medium.com/netflix-techblog/stream-processing-with-mantis-78af913f51a6) - Netflix's event stream processing system.
* [millwheel](http://research.google.com/pubs/pub41378.html) - framework for building low-latency data-processing applications that is widely used at Google.
* [mupd8(muppet)](https://github.com/walmartlabs/mupd8) [Scala/Java] - mapReduce-style framework for processing fast/streaming data.
* [s4](https://github.com/apache/incubator-s4) [Java] - general-purpose, distributed, scalable, fault-tolerant, pluggable platform that allows programmers to easily develop applications for processing continuous unbounded streams of data.
* [SPQR](https://github.com/ottogroup/SPQR) [Java] - dynamic framework for processing high volumn data streams through pipelines.
* [tigon](https://github.com/caskdata/tigon) [C++/Java] - high throughput real-time streaming processing framework built on Hadoop and HBase.
* [hailstorm](https://github.com/hailstorm-hs/hailstorm) [Haskell] - distributed stream processing with exactly-once semantics based on Storm.
* [Teknek](https://github.com/edwardcapriolo/teknek-core) [Java] - Simple elegant stream processing with interactive prototying shell SOL (Stream Operator Language)
* [concord](https://www.slideshare.net/concord-io/may-2016-data-by-the-bay-concord-simple-flexible-stream-processing-on-apache-mesos) [C++] - a distributed stream processing framework built in C++ on top of Apache Mesos, designed for high performance data processing jobs that require flexibility & control.
* [StreamBox](https://engineering.purdue.edu/~xzl/xsel/p/streambox/) - a modern stream processing engine which can handle out-of-order streaming data and achieve high throughput with low latency.
* [Wallaroo](https://github.com/WallarooLabs/wallaroo) [Python] - The ultrafast and elastic data processing engine. Big or fast data - no fuss, no Java needed.
* [SABER](https://github.com/lsds/Saber) [Java/C] - Window-Based Hybrid CPU/GPU Stream Processing Engine.
* [Onyx](https://github.com/onyx-platform/onyx) [Clojure] - Distributed, masterless, high performance, fault tolerant data processing.
* [AthenaX](https://github.com/uber/AthenaX) [Java] - Uber's Stream Analytics Framework used in production

### Streaming Library
* [IBM Streams](https://www.ibm.com/analytics/us/en/technology/stream-computing/) [Python/Java/Scala] - platform for distributed processing and real-time analytics. Provides toolkits for advanced analytics like geospatial, time series, etc. out of the box.
* [Apache Kafka Streams](https://github.com/apache/kafka) [Java] - lightweight stream processing library included in Apache Kafka (since 0.10 version).
* [Akka Streams](https://github.com/akka/akka) [Scala] - stream processing library on Akka Actors. 
* [Swave](https://github.com/sirthias/swave) [Scala] - A lightweight Reactive Streams Infrastructure Toolkit for Scala.
* [FS2(prev. 'Scalaz-Stream')](https://github.com/functional-streams-for-scala/fs2) [Scala] - Compositional, streaming I/O library for Scala.
* [monix](https://github.com/monix/monix) [Scala] - high-performance Scala / Scala.js library for composing asynchronous and event-based programs.
* [Benthos](https://github.com/Jeffail/benthos) [Go] - Benthos is a high performance and resilient message streaming service, able to connect various sources and sinks and perform arbitrary actions, transformations and filters on payloads
* [Bistro Streams](https://github.com/asavinov/bistro) [Java] - a light-weight stream processing library which does for stream analytics what column stores did for databases by radically changing the way (stream) data is processed.
* [Streamline](https://github.com/hortonworks/streamline) [Java] - Stream Analytics Framework by Hortonworks, designed as a wrapper around existing streaming solutions like Storm. Aimed to allow users to drag-and-drop streaming components to focus on business logic.
* [StreamAlert](https://github.com/airbnb/streamalert) [Python] - Airbnb's Real-time Data Analysis and Alerting.

### Streaming Application

* [straw](https://github.com/rwalk/straw) [Python/Java] - A platform for real-time streaming search.
* [storm-crawler](https://github.com/DigitalPebble/storm-crawler) [Java] - Web crawler SDK based on Apache Storm.

### IoT

* [sensorbee](https://github.com/sensorbee/sensorbee) [Go] - lightweight stream processing engine for IoT.
* [Apache Edgent](https://github.com/apache/incubator-edgent) [Java] - a programming model and runtime that enables continuous streaming analytics on gateways and edge devices which can work with centralized systems to provide efficient and timely analytics across the whole IoT ecosystem: from the center to the edge, opens sourced by IBM.

### DSL
* [summingbird](https://github.com/twitter/summingbird) [Scala] - library that lets you write MapReduce programs that look like native Scala or Java collection transformations and execute them on a number of well-known distributed MapReduce platforms, including Storm and Scalding.
* [coast](https://github.com/bkirwi/coast) [Scala] - a DSL that builds DAGs on top of Samza and provides exactly-once semantics.
* [Apache Beam](https://github.com/apache/beam) [Java] - unified model and set of language-specific SDKs for defining and executing data processing workflows, and also data ingestion and integration flows, supporting Enterprise Integration Patterns (EIPs) and Domain Specific Languages (DSLs), open sourced by Google.
* [Esper](https://github.com/espertechinc/esper) [Java] - component for complex event processing (CEP) and event series analysis.
* [Streamparse](https://github.com/Parsely/streamparse) [Python] - lets you run Python code against real-time streams of data via Apache Storm.

### Data Pipeline

* [Apache Kafka](https://github.com/apache/kafka) [Scala/Java] - distributed, partitioned, replicated commit log service, which provides the functionality of a messaging system, but with a unique design.
* [Apache Pulsar](https://github.com/apache/incubator-pulsar) [Java] - distributed pub-sub messaging platform with a very flexible messaging model and an intuitive client API.
* [metaq](https://github.com/killme2008/Metamorphosis) [Java] - Taobao's high available, high performance distributed messaging system
* [nsq](https://github.com/nsqio/nsq) [Go] - realtime distributed messaging platform designed to operate at scale, handling billions of messages per day.
* [NATS streaming](https://github.com/nats-io/nats-streaming-server) [Go] - fast disk-backed messaging solution
* [camus](https://github.com/linkedin/camus) [Java] - Linkedin's Kafka -> HDFS pipeline.
* [databus](https://github.com/linkedin/databus) [Java] - Linkedin's source-agnostic distributed change data capture system.
* [flume](https://github.com/apache/flume) [Java] - distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.
* [Redis Streams](http://antirez.com/news/114) - Redis implementation of a unified log structure
* [suro](https://github.com/Netflix/suro) [Java] - data pipeline service for collecting, aggregating, and dispatching large volume of application events including log data.
* [StreamSets Data Collector](https://github.com/streamsets/datacollector) [Java] - continuous big data ingestion infrastructure that reads from and writes to a large number of end-points, including S3, JDBC, Hadoop, Kafka, Cassandra and many others.
* [LogDevice](https://logdevice.io/) [C++] - a high-performant distributed system by Facebook for streaming and storing sequential data, using a log structure

### Online Machine Learning 

* [streamDM](https://github.com/huawei-noah/streamDM) [Scala] - mining Big Data streams using Spark Streaming from Huawei.
* [jubatus](http://jubat.us/en/) [C++] - distributed processing framework and streaming machine learning library.
* [Apache Samoa](https://github.com/apache/incubator-samoa) [Java] - distributed streaming machine learning (ML) framework that contains a programing abstraction for distributed streaming ML algorithms.
* [trident-ml](https://github.com/pmerienne/trident-ml) [Java] - realtime online machine learning library based on Trident.
* [StormCV](https://github.com/sensorstorm/StormCV) [Java] - enables the use of Apache Storm for video processing by adding computer vision (CV) specific operations and data model.
* [DataSketches](https://github.com/DataSketches/sketches-core) [Java] - sketches library from Yahoo!.
* [StreamingBandit](https://github.com/Nth-iteration-labs/streamingbandit) [Python] - Provides a webserver to quickly setup and evaluate possible solutions to contextual multi-armed bandit (cMAB) problems.

### Streaming SQL

* [pipelinedb](https://github.com/pipelinedb/pipelinedb) [C] - An open-source relational database that runs SQL queries continuously on streams, incrementally storing results in tables.
* [squall](https://github.com/epfldata/squall) [Java] - Squall executes SQL queries on top of Storm for doing online processing.
* [StreamCQL](https://github.com/HuaweiBigData/StreamCQL) [Java] - Continuous Query Language on RealTime Computation System.
* [KSQL](https://github.com/confluentinc/ksql) [Java] - a Streaming SQL Engine for Apache Kafka.


### Benchmark

* [storm-benchmark](https://github.com/intel-hadoop/storm-benchmark) [Java] - a set of benchmarks to test Storm performance.
* [storm-perf-test](https://github.com/yahoo/storm-perf-test) [Java] - a simple storm performance/stress test.
* [streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) [Java] - Benchmarks for Low Latency (Streaming) solutions including Apache Storm, Apache Spark, Apache Flink, etc.
* [flotilla](https://github.com/tylertreat/Flotilla) [Go] - Automated message queue orchestration for scaled-up benchmarking.




### Toolkit

* [akka](https://github.com/akka/akka) [Scala] - toolkit and runtime for building highly concurrent, distributed, and resilient message-driven application on the JVM.
* [pulsar](https://github.com/quantmind/pulsar/) [Python] - Actor based event driven concurrent framework for Python.
* [aeron](https://github.com/real-logic/Aeron) [Java/C++] - efficient reliable unicast and multicast message transport.
* [StreamFlow](https://github.com/lmco/streamflow) [Java] - stream processing tool designed to help build and monitor processing workflows.
* [samza-luwak](https://github.com/romseygeek/samza-luwak) [Java] - uses Luwak, a stored-query engine built on Lucene, to implement full-text search on streams.
* [Turbine](https://github.com/Netflix/Turbine) [Java] - tool for aggregating streams of Server-Sent Event (SSE) JSON data into a single stream.

### Readings

1. [In-Stream Big Data Processing](https://highlyscalable.wordpress.com/2013/08/20/in-stream-big-data-processing/)
2. [The world beyond batch: Streaming 101](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) by Tyler Akidau. 
3. [Real Time Analytics: Algorithms and Systems (VLDB 2015)](http://www.vldb.org/pvldb/vol8/p2040-Kejariwal.pdf)


## License 

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png) 

Licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)
