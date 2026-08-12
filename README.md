## Awesome Streaming  [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://github.com/manuzhang/awesome-streaming/workflows/build/badge.svg)](https://github.com/manuzhang/awesome-streaming/actions)

A curated list of awesome [streaming (stream processing)](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) frameworks, applications, readings and other resources. Inspired by [other awesome projects](https://github.com/sindresorhus/awesome). 

## Website

[https://manuzhang.github.io/awesome-streaming/](https://manuzhang.github.io/awesome-streaming/) is a more dynamic website where you can find **updates** of the awesome projects here.

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
- [Closed Source](#closed-source)
- [Readings](#readings)

### Streaming Engine

- [Apache Apex](https://github.com/apache/apex-core) ![Archived][archived-badge] [Java] - Unified platform for big data stream and batch processing.
- [Apache Flink](https://github.com/apache/flink) [Java] - Distributed engine for stateful computation over bounded and unbounded data streams.
- [Apache Heron](https://github.com/apache/incubator-heron) ![Archived][archived-badge] [Java] - Retired distributed, fault-tolerant stream processing engine originally developed at Twitter.
- [Apache Samza](https://github.com/apache/samza) [Java/Scala] - Distributed stream processing framework built on Apache Kafka with standalone and YARN deployment options.
- [Apache Spark Streaming](https://github.com/apache/spark) [Scala/Java/Python/R] - Scalable, fault-tolerant stream processing on Apache Spark.
- [Apache Storm](https://github.com/apache/storm) [Java] - Distributed real-time computation system for reliably processing unbounded streams of data.
- [ArkFlow](https://github.com/arkflow-rs/arkflow) [Rust] - High-performance stream processing engine with pluggable sources, processors, and sinks.
- [Arroyo](https://github.com/ArroyoSystems/arroyo) [Rust] - Distributed stream processing engine for stateful SQL computations over unbounded data.
- [AthenaX](https://github.com/uber-archive/AthenaX) ![Archived][archived-badge] [Java] - Uber's retired SQL-based streaming analytics platform.
- [Bytewax](https://github.com/bytewax/bytewax) [Python/Rust] - Community-maintained Python framework with a Rust-based distributed engine for stateful stream processing.
- [Gearpump](https://github.com/gearpump/gearpump) [Scala] - Lightweight real-time distributed streaming engine built on Akka.
- [Hazelcast Jet](https://github.com/hazelcast/hazelcast-jet) ![Archived][archived-badge] [Java] - Stream and batch processing engine whose development moved into Hazelcast Platform.
- [hailstorm](https://github.com/hailstorm-hs/hailstorm) ![Archived][archived-badge] [Haskell] - Distributed stream processing with exactly-once semantics based on Storm.
- [Maki Nage](https://github.com/maki-nage/makinage) ![Archived][archived-badge] [Python] - Stream processing framework for data scientists based on Kafka and ReactiveX.
- [Mantis](https://github.com/Netflix/mantis) [Java] - Netflix platform for building real-time, operations-focused stream processing applications.
- [mupd8 (Muppet)](https://github.com/walmartlabs/mupd8) ![Archived][archived-badge] [Scala/Java] - MapReduce-style framework for processing fast-moving data streams.
- [NebulaStream](https://github.com/nebulastream/nebulastream) [C++] - Data management system for cloud-edge-sensor environments.
- [Numaflow](https://github.com/numaproj/numaflow) [Rust/Go/TypeScript] - Kubernetes-native, language-agnostic platform for scalable event-driven applications.
- [Onyx](https://github.com/onyx-platform/onyx) ![Archived][archived-badge] [Clojure] - Distributed, masterless, fault-tolerant data processing platform.
- [Pathway](https://github.com/pathwaycom/pathway) [Python/Rust] - Python ETL framework for stream processing, real-time analytics, and AI data pipelines.
- [S4](https://github.com/apache/incubator-retired-s4) ![Archived][archived-badge] [Java] - Retired distributed platform for processing continuous unbounded data streams.
- [SABER](https://github.com/lsds/Saber) ![Archived][archived-badge] [Java/C] - Window-based hybrid CPU/GPU stream processing engine.
- [Scramjet Cloud Platform](https://github.com/scramjetorg/transform-hub) [TypeScript/Python] - Distributed runtime for running and managing data processing programs on edge, server, and cloud infrastructure.
- [SPQR](https://github.com/ottogroup/SPQR) ![Archived][archived-badge] [Java] - Dynamic framework for processing high-volume data streams through pipelines.
- [Tigon](https://github.com/cdapio/tigon) ![Archived][archived-badge] [C++/Java] - High-throughput real-time stream processing framework built on Hadoop and HBase.
- [Teknek](https://github.com/edwardcapriolo/teknek-core) ![Archived][archived-badge] [Java] - Stream processing platform with the interactive Stream Operator Language shell.
- [Trill](https://github.com/microsoft/Trill) ![Archived][archived-badge] [C#] - Single-node query processor for temporal and streaming data from Microsoft Research.
- [Wally](https://github.com/WallarooLabs/wally) ![Archived][archived-badge] [Pony] - Distributed stream processing framework formerly named Wallaroo.
- [Wingfoil](https://github.com/wingfoil-io/wingfoil) [Rust/Python/TypeScript] - Graph-based stream processing engine for latency-critical systems.
- [LightSaber](https://github.com/lsds/LightSaber) ![Archived][archived-badge] [C++] - Multi-core stream processing engine using code generation for window aggregation.
- [HStreamDB](https://github.com/hstreamdb/hstream) [Haskell] - Cloud-native streaming database for IoT data storage and real-time processing.
- [eKuiper](https://github.com/lf-edge/ekuiper) [Go] - Lightweight data stream processing engine for resource-constrained IoT edge devices.
- [WindFlow](https://github.com/ParaGroup/WindFlow) [C++] - Data stream processing parallel library for multi-core CPUs and GPUs.
- [RisingWave](https://github.com/risingwavelabs/risingwave) [Rust] - PostgreSQL-compatible streaming database for event-driven applications, real-time ETL, and continuous analytics.

### Streaming Library

- [Apache Kafka Streams](https://github.com/apache/kafka) [Java] - Stream processing library included with Apache Kafka.
- [Streamiz.Kafka.Net](https://github.com/LGouellec/streamiz) [C#] - .NET stream processing library for Apache Kafka.
- [Akka Streams](https://github.com/akka/akka-core) [Scala/Java] - Reactive Streams implementation built on Akka actors.
- [Daggy](https://github.com/synacker/daggy) [C++] - Utility and developer library for aggregating and capturing data streams.
- [FS2](https://github.com/typelevel/fs2) [Scala] - Compositional streaming I/O library for Scala.
- [FastStream](https://github.com/ag2ai/faststream) [Python] - Asynchronous framework for building event-driven applications with Kafka, RabbitMQ, NATS, Redis, and MQTT.
- [Faust](https://github.com/robinhood/faust) ![Archived][archived-badge] [Python] - Deprecated Python stream processing library inspired by Kafka Streams.
- [Monix](https://github.com/monix/monix) [Scala] - High-performance Scala and Scala.js library for asynchronous and event-based programs.
- [Quix Streams](https://github.com/quixio/quix-streams) [Python] - Python framework for real-time data engineering, analytics, and machine learning on Apache Kafka.
- [Scramjet TypeScript](https://github.com/scramjetorg/framework-js) ![Archived][archived-badge] [TypeScript] - Reactive stream programming framework for asynchronous JavaScript and TypeScript applications.
- [Scramjet Python](https://github.com/scramjetorg/framework-python) ![Archived][archived-badge] [Python] - Reactive stream programming framework for Python.
- [Scramjet C++](https://github.com/scramjetorg/framework-cpp) ![Archived][archived-badge] [C++] - Reactive stream programming framework for C++.
- [Streamline](https://github.com/hortonworks/streamline) ![Archived][archived-badge] [Java] - Hortonworks visual stream analytics framework built around engines such as Apache Storm.
- [StreamAlert](https://github.com/airbnb/streamalert) ![Archived][archived-badge] [Python] - Airbnb serverless framework for real-time security log analysis and alerting.
- [Swave](https://github.com/sirthias/swave) ![Archived][archived-badge] [Scala] - Lightweight Reactive Streams infrastructure toolkit for Scala.
- [Streamz](https://github.com/python-streamz/streamz) [Python] - Library for building continuous data pipelines with branching, joining, flow control, and back pressure.
- [Stream Ops](https://github.com/nanosai/stream-ops-java) ![Archived][archived-badge] [Java] - Embeddable data streaming engine and stream processing API for Java.
- [Tributary](https://github.com/1kbgz/tributary) [Python] - Python library for constructing synchronous, reactive, and lazy dataflow graphs.
- [MediaPipe](https://github.com/google-ai-edge/mediapipe) [C++/Python/Java/TypeScript] - Cross-platform, customizable ML solutions for live and streaming media.
- [Kzmlabs StateFun Actors](https://github.com/kzmlabs/flink-statefun) [Java] - Stateful actors on Apache Flink 2.x with durable per-key state, exactly-once messaging, and Kafka and Kinesis I/O.

### Streaming Application

- [beava](https://github.com/beava-dev/beava) [Rust/Python] - Single-binary feature server for querying fresh per-entity counters and aggregates without a message broker.
- [javactrl-kafka](https://github.com/javactrl/javactrl-kafka) [Java] - Code-first distributed workflow engine for microservice orchestration and business process automation.
- [straw](https://github.com/rwalk/straw) ![Archived][archived-badge] [Python/Java] - Platform for real-time streaming search.
- [Apache StormCrawler](https://github.com/apache/stormcrawler) [Java] - Scalable web crawler SDK based on Apache Storm.
- [Zilla](https://github.com/aklivity/zilla) [Java] - Multi-protocol gateway for connecting applications, APIs, agents, and devices to event streams.

### IoT

- [SensorBee](https://github.com/sensorbee/sensorbee) ![Archived][archived-badge] [Go] - Discontinued lightweight stream processing engine for IoT.
- [Apache Edgent](https://github.com/apache/incubator-retired-edgent) ![Archived][archived-badge] [Java] - Retired programming model and runtime for streaming analytics on gateways and edge devices.
- [Apache StreamPipes](https://github.com/apache/streampipes) [Java/Python/TypeScript] - Self-service industrial IoT platform for connecting, analyzing, and exploring data streams.

### DSL

- [Apache Beam](https://github.com/apache/beam) [Java/Python/Go] - Unified programming model and language-specific SDKs for batch and streaming data processing.
- [coast](https://github.com/bkirwi/coast) ![Archived][archived-badge] [Scala] - DSL that builds exactly-once dataflow graphs on top of Apache Samza.
- [Esper](https://github.com/espertechinc/esper) ![Archived][archived-badge] [Java] - Complex event processing, Streaming SQL, and event series analysis engine.
- [Streamparse](https://github.com/pystorm/streamparse) ![Archived][archived-badge] [Python] - Python API, command-line tools, and topology DSL for Apache Storm.
- [Summingbird](https://github.com/twitter/summingbird) ![Archived][archived-badge] [Scala] - Retired library for expressing streaming MapReduce computations over Storm and Scalding.

### Data Pipeline

- [Apache Kafka](https://github.com/apache/kafka) [Java/Scala] - Distributed event streaming platform for high-performance data pipelines and applications.
- [Apache Pulsar](https://github.com/apache/pulsar) [Java] - Distributed pub-sub messaging and event streaming platform.
- [Apache RocketMQ](https://github.com/apache/rocketmq) [Java] - Cloud-native messaging and streaming platform for event-driven applications.
- [AutoMQ](https://github.com/AutoMQ/automq) [Java/Scala] - Diskless Kafka-compatible streaming platform that stores durable data in object storage.
- [Brooklin](https://github.com/linkedin/Brooklin) [Java] - Distributed system for reliable nearline data streaming between heterogeneous systems at scale.
- [Bruin](https://github.com/bruin-data/bruin) [Go] - End-to-end data pipeline tool combining ingestion, SQL and Python transformations, and data quality checks.
- [Camus](https://github.com/LinkedInAttic/camus) ![Archived][archived-badge] [Java] - LinkedIn's retired, previous-generation Kafka-to-HDFS pipeline.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex) [Rust/Python] - Incremental data transformation engine for continuously updated AI and agent workloads.
- [Databus](https://github.com/linkedin/databus) ![Archived][archived-badge] [Java] - LinkedIn source-agnostic distributed change data capture system.
- [faucet-stream](https://github.com/faucet-hq/faucet-stream) [Rust] - Config-driven platform and embeddable library for ETL, CDC, and streaming data movement.
- [Apache Flume](https://github.com/apache/logging-flume) [Java] - Distributed service for collecting, aggregating, and moving large amounts of log-like data.
- [Fluvio](https://github.com/fluvio-community/fluvio) [Rust/WASM] - Composable, stateful data streaming system with programmable in-line computation.
- [inGestr](https://github.com/bruin-data/ingestr) [Go/Python] - Command-line application and Python SDK for copying data between databases, SaaS applications, and data warehouses.
- [Gazette](https://github.com/gazette/core) [Go] - Cloud-storage-backed streaming infrastructure that combines SQL, batch, and millisecond-latency stream processing.
- [LogDevice](https://github.com/facebookarchive/LogDevice) ![Archived][archived-badge] [C++] - Facebook's archived distributed storage system for sequential data.
- [Metaq](https://github.com/killme2008/Metamorphosis) ![Archived][archived-badge] [Java] - Taobao distributed messaging system.
- [NATS Streaming](https://github.com/nats-io/nats-streaming-server) ![Archived][archived-badge] [Go] - Deprecated disk-backed messaging system superseded by NATS JetStream.
- [NSQ](https://github.com/nsqio/nsq) [Go] - Real-time distributed messaging platform designed to operate at scale.
- [Redpanda](https://github.com/redpanda-data/redpanda) [C++] - Kafka API-compatible streaming data platform without ZooKeeper or a JVM.
- [Redpanda Connect](https://github.com/redpanda-data/connect) [Go] - Declarative stream processor for moving, enriching, transforming, and filtering data between sources and sinks.
- [RudderStack](https://github.com/rudderlabs/rudder-server) [Go] - Developer-focused customer data platform for event streaming and cloud-to-warehouse data pipelines.
- [Substation](https://github.com/brexhq/substation) [Go] - Toolkit for routing, normalizing, and enriching security event and audit logs.
- [Suro](https://github.com/Netflix/suro) ![Archived][archived-badge] [Java] - Netflix data pipeline for collecting, aggregating, and dispatching application events.

### Online Machine Learning 

- [Apache SAMOA](https://github.com/apache/incubator-samoa) ![Archived][archived-badge] [Java] - Retired distributed streaming machine learning framework.
- [CapyMOA](https://github.com/adaptive-machine-learning/CapyMOA) [Python/Java] - Machine learning library for data streams with a Python API and MOA backend.
- [Numalogic](https://github.com/numaproj/numalogic) [Python] - Collection of machine learning models and tools for anomaly detection and forecasting on operational time-series data.
- [River](https://github.com/online-ml/river) [Python] - Online machine learning library for Python.
- [streamDM](https://github.com/huawei-noah/streamDM) ![Archived][archived-badge] [Scala] - Huawei library for mining data streams with Spark Streaming.
- [StreamingBandit](https://github.com/Nth-iteration-labs/streamingbandit) [Python] - Web application for setting up and evaluating contextual multi-armed bandit experiments.
- [StormCV](https://github.com/sensorstorm/StormCV) ![Archived][archived-badge] [Java] - Computer vision operations and data models for Apache Storm.
- [trident-ml](https://github.com/pmerienne/trident-ml) ![Archived][archived-badge] [Java] - Online machine learning library based on Apache Storm Trident.
- [Yurita](https://github.com/paypal/yurita) ![Archived][archived-badge] [Scala] - PayPal anomaly detection framework built on Spark Structured Streaming.
- [Jubatus](https://github.com/jubatus/jubatus) ![Archived][archived-badge] [C++] - Distributed processing framework and library for online machine learning.

### Streaming SQL

- [PipelineDB](https://github.com/pipelinedb/pipelinedb) ![Archived][archived-badge] [C] - Unmaintained PostgreSQL extension for continuous SQL aggregation over time-series data.
- [Squall](https://github.com/epfldata/squall) ![Archived][archived-badge] [Java] - Online SQL query processing engine built on Apache Storm.
- [StreamCQL](https://github.com/Zhiqiang-He/StreamCQL) ![Archived][archived-badge] [Java] - Storm-based continuous query language for real-time computation.
- [ksqlDB](https://github.com/confluentinc/ksql) [Java] - Source-available database purpose-built for stream processing applications.
- [Materialize](https://materialize.com) [Rust] - Incremental SQL engine for maintaining continuously updated views over changing data.
- [Siddhi](https://github.com/siddhi-io/siddhi) [Java] - Streaming SQL and complex event processing engine.
- [Proton](https://github.com/timeplus-io/proton) [C++] - Unified streaming and historical data analytics database powered by ClickHouse.
- [LaminarDB](https://github.com/laminardb/laminardb) [Rust] - Embeddable streaming SQL engine built on Apache Arrow and DataFusion.

### Benchmark

- [storm-perf-test](https://github.com/yahoo/storm-perf-test) ![Archived][archived-badge] [Java] - Apache Storm performance and stress test.
- [streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) ![Archived][archived-badge] [Java] - Benchmarks for low-latency stream processing systems including Storm, Spark, and Flink.
- [Flotilla](https://github.com/tylertreat/Flotilla) ![Archived][archived-badge] [Go] - Automated message queue orchestration for scaled-up benchmarking.

### Toolkit

- [Akka](https://github.com/akka/akka-core) [Scala/Java] - Toolkit and runtime for concurrent, distributed, resilient applications on the JVM.
- [Apache Pekko](https://github.com/apache/pekko) [Scala/Java] - Open-source toolkit for concurrent, distributed, resilient applications, forked from Akka 2.6.
- [DataSketches](https://github.com/apache/datasketches-java) [Java] - Apache library of stochastic streaming algorithms known as sketches.
- [Pulsar](https://github.com/quantmind/pulsar) ![Archived][archived-badge] [Python] - Actor-based event-driven concurrency framework for Python.
- [Aeron](https://github.com/aeron-io/aeron) [Java/C++] - Reliable UDP unicast, multicast, and IPC message transport.
- [StreamFlow](https://github.com/lmco/streamflow) ![Archived][archived-badge] [Java] - Tool for building and monitoring stream processing workflows.
- [samza-luwak](https://github.com/romseygeek/samza-luwak) ![Archived][archived-badge] [Java] - Integration of Apache Samza with the Luwak stored-query engine for full-text stream search.
- [Streamdal](https://github.com/streamdal/streamdal) ![Archived][archived-badge] [TypeScript] - Code-native data privacy controls for detecting PII in application data flows.
- [Turbine](https://github.com/Netflix/Turbine) ![Archived][archived-badge] [Java] - Netflix tool for aggregating Server-Sent Event JSON streams.
- [Nussknacker](https://github.com/TouK/nussknacker) [Scala] - Visual tool for defining and running real-time decision algorithms.
- [Eventum](https://github.com/eventum-generator/eventum) [Python/TypeScript] - Data generation platform for producing synthetic event streams.
- [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) [C/C++/Python] - Open-source GStreamer-based toolkit for real-time AI streaming analytics and multi-sensor processing.

### Closed Source

- [Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/) - Fully managed service for ingesting and processing real-time data streams on AWS.
- [Azure Stream Analytics](https://azure.microsoft.com/en-us/products/stream-analytics) [SQL] - Fully managed service for serverless real-time analytics in the cloud and at the edge.
- [Google Cloud Dataflow](https://cloud.google.com/dataflow/) [Java/Python/Go] - Fully managed service for running Apache Beam batch and streaming pipelines.
- [Concord](https://www.slideshare.net/concord-io/may-2016-data-by-the-bay-concord-simple-flexible-stream-processing-on-apache-mesos) ![Archived][archived-badge] [C++] - Historical distributed stream processing framework built on Apache Mesos.
- [IBM Streams](https://www.ibm.com/support/pages/ibm-streams-life-cycle-guidance) ![Archived][archived-badge] [Python/Java/Scala] - Discontinued platform for distributed stream processing and real-time analytics.

### Readings

1. [In-Stream Big Data Processing](https://highlyscalable.wordpress.com/2013/08/20/in-stream-big-data-processing/)
2. [The world beyond batch: Streaming 101](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) by Tyler Akidau. 
3. [Real Time Analytics: Algorithms and Systems (VLDB 2015)](https://arxiv.org/abs/1708.02621)
4. [Grokking Streaming Systems](https://www.manning.com/books/grokking-streaming-systems) by Josh Fischer & Ning Wang
5. [Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing](https://www.oreilly.com/library/view/streaming-systems/9781491983867/) by Reuven Lax, Slava Chernyak, and Tyler Akidau
6. [Data Pipelines with Apache Airflow](https://www.manning.com/books/data-pipelines-with-apache-airflow) by Bas P. Harenslak and Julian Rutger de Ruiter
7. [MillWheel: Fault-Tolerant Stream Processing at Internet Scale](https://research.google/pubs/millwheel-fault-tolerant-stream-processing-at-internet-scale/)

## License

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

Licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)

[archived-badge]: https://img.shields.io/badge/status-archived-lightgrey
