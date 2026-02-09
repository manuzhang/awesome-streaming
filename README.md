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

- [Apache Apex](https://github.com/apache/apex-core) [Java] - unified platform for big data stream and batch processing.
- [Apache Ballista](https://github.com/apache/arrow-ballista) [Rust] - distributed compute platform powered by Apache Arrow.
- [Apache Flink](https://github.com/apache/flink) [Java] - system for high-throughput, low-latency data stream processing that supports stateful computation, data-driven windowing semantics and iterative stream processing.
- [Apache Heron (incubating)](https://github.com/apache/incubator-heron) [Java] - a realtime, distributed, fault-tolerant stream processing engine from Twitter.
- [Apache Samza](https://github.com/apache/samza) [Scala/Java] - distributed stream processing framework that build on Kafka(messaging, storage) and YARN(fault tolerance, processor isolation, security and resource management).
- [Apache Spark Streaming](https://github.com/apache/spark) [Scala] - makes it easy to build scalable fault-tolerant streaming applications.
- [Apache Storm](https://github.com/apache/storm) [Clojure/Java] - distributed real-time computation system. Storm is to stream processing what Hadoop is to batch processing.
- [ArkFlow](https://github.com/arkflow-rs/arkflow) [Rust] - High-performance Rust stream processing engine, providing powerful data stream processing capabilities, supporting multiple input/output sources and processors.
- [Arroyo](https://github.com/ArroyoSystems/arroyo) [Rust] - a distributed stream processing engine. Supports SQL and Rust pipelines. Scales up to millions of events per second. Supports stateful operations like windows and joins, state checkpointing for fault-tolerance and recovery of pipelines. Uses the Timely Dataflow model.
- [AthenaX](https://github.com/uber/AthenaX) [Java] - Uber's Stream Analytics Framework used in production
- [Bytewax](https://github.com/bytewax/bytewax) [Python] - data parallel, distributed, stateful stream processing framework.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex) [Rust/Python] - ETL framework to build fresh index for AI, with realtime incremental updates.
- [Faust](https://github.com/robinhood/faust) [Python] - stream processing library, porting the ideas from Kafka Streams to Python
- [Gearpump](https://github.com/gearpump/gearpump) [Scala] - lightweight real-time distributed streaming engine built on Akka.
- [Hazelcast Jet](https://github.com/hazelcast/hazelcast-jet) [Java] - A general purpose distributed data processing engine, built on top of Hazelcast.
- [hailstorm](https://github.com/hailstorm-hs/hailstorm) [Haskell] - distributed stream processing with exactly-once semantics based on Storm.
- [Maki Nage](https://github.com/maki-nage/makinage) [Python] - A stream processing framework for data scientists, based on Kafka and ReactiveX.
- [mantis](https://github.com/Netflix/mantis) [Java] - Netflix's platform to build an ecosystem of realtime stream processing applications
- [mupd8(muppet)](https://github.com/walmartlabs/mupd8) [Scala/Java] - mapReduce-style framework for processing fast/streaming data.
- [NebulaStream](https://github.com/nebulastream/nebulastream) [C++] - High-performance, general-purpose, end-to-end data-management system for cloud-edge-sensor environments.
- [Numaflow](https://github.com/numaproj/numaflow) [Java/Python/Go/Rust] - Kubernetes native stream processing platform with language agnostic framework. Scalable and cost-efficient
- [Onyx](https://github.com/onyx-platform/onyx) [Clojure] - Distributed, masterless, high performance, fault tolerant data processing.
- [Pathway](https://github.com/pathwaycom/pathway) [Python] - The fastest data processing engine supporting unified workflows for batch, streaming data, and LLM applications.
- [s4](https://github.com/apache/incubator-s4) [Java] - general-purpose, distributed, scalable, fault-tolerant, pluggable platform that allows programmers to easily develop applications for processing continuous unbounded streams of data.
- [SABER](https://github.com/lsds/Saber) [Java/C] - Window-Based Hybrid CPU/GPU Stream Processing Engine.
- [Scramjet Cloud Platform](https://github.com/scramjetorg/transform-hub) [Python/JavaScript/Node.js] - data processing engine for running multiple data processing apps (sequences) written in Python, JavaScript or TypeScript 
- [SPQR](https://github.com/ottogroup/SPQR) [Java] - dynamic framework for processing high volumn data streams through pipelines.
- [tigon](https://github.com/caskdata/tigon) [C++/Java] - high throughput real-time streaming processing framework built on Hadoop and HBase.
- [Teknek](https://github.com/edwardcapriolo/teknek-core) [Java] - Simple elegant stream processing with interactive prototying shell SOL (Stream Operator Language)
Mesos, designed for high performance data processing jobs that require flexibility & control.
- [Trill](https://github.com/Microsoft/trill) [.NET/C#] - Trill is a high-performance one-pass in-memory streaming analytics engine from Microsoft Research.
- [Wallaroo](https://github.com/WallarooLabs/wallaroo) [Python] - A fast, stream-processing framework. Wallaroo makes it easy to react to data in real-time. By eliminating infrastructure complexity, going from prototype to production has never been simpler.
- [LightSaber](https://github.com/lsds/LightSaber) [C++] - Multi-core Window-Based Stream Processing Engine. LightSaber uses code generation for efficient window aggregation.
- [HStreamDB](https://github.com/hstreamdb/hstream) [Haskell] - The streaming database built for IoT data storage and real-time processing.
- [Kuiper](https://github.com/emqx/kuiper) [Golang] - An edge lightweight IoT data analytics/streaming software implemented by Golang, and it can be run at all kinds of resource-constrained edge devices.
- [WindFlow](https://paragroup.github.io/WindFlow) [C++] - A C++17 Data Stream Processing Parallel Library for Multicores and GPUs.
- [RisingWave](https://github.com/risingwavelabs/risingwave) [Rust] - A PostgreSQL-compatible streaming database that is designed to build event-driven applications, real-time ETL pipelines, continuous analytics services, and feature stores for AI applications. It excels in extracting fresh and consistent insights from real-time event streams, database CDC, and time series data within sub-seconds. It unifies streaming and batch processing, enabling users to ingest, join, and analyze both live and historical data at a cloud scale.

### Streaming Library

- [Apache Kafka Streams](https://github.com/apache/kafka) [Java] - lightweight stream processing library included in Apache Kafka (since 0.10 version).
- [Streamiz](https://github.com/LGouellec/kafka-streams-dotnet) [C#] - a .Net Stream Processing Library for Apache Kafka
- [Akka Streams](https://github.com/akka/akka) [Scala] - stream processing library on Akka Actors.
- [Daggy](https://github.com/synacker/daggy) [C++] - real-time streams aggregation and catching. 
- [Benthos](https://github.com/Jeffail/benthos) [Go] - Benthos is a high performance and resilient message streaming service, able to connect various sources and sinks and perform arbitrary actions, transformations and filters on payloads
- [FS2(prev. 'Scalaz-Stream')](https://github.com/functional-streams-for-scala/fs2) [Scala] - Compositional, streaming I/O library for Scala.
- [FastStream](https://github.com/airtai/faststream) [Python] - powerful and easy-to-use Python library simplifying the process of writing producers and consumers for message queues, handling all the parsing, networking and documentation generation automatically. Supports multiple protocols such as Apache Kafka, RabbitMQ and alike.
- [monix](https://github.com/monix/monix) [Scala] - high-performance Scala / Scala.js library for composing asynchronous and event-based programs.
- [Quix Streams](https://github.com/quixio/quix-streams) [Python] - a streaming library originally designed for the McLaren Formula 1 racing team that can process high volumes of time-series data with up to nanosecond precision using Apache Kafka as a message broker.
- [Scramjet Node.js](https://github.com/scramjetorg/framework-js) - [Node.js] functional reactive stream programming framework written on top of Node.js object streams + [the legacy Scramjet.js version](https://github.com/scramjetorg/scramjet)
- [Scramjet Python](https://github.com/scramjetorg/framework-python) - [Python] functional reactive stream programming framework written from scratch operating on object, string and buffer streams.
- [Scramjet C++](https://github.com/scramjetorg/framework-cpp) - [C++] functional reactive stream programming framework written on top of Node.js object streams.
- [Streamline](https://github.com/hortonworks/streamline) [Java] - Stream Analytics Framework by Hortonworks, designed as a wrapper around existing streaming solutions like Storm. Aimed to allow users to drag-and-drop streaming components to focus on business logic.
- [StreamAlert](https://github.com/airbnb/streamalert) [Python] - Airbnb's Real-time Data Analysis and Alerting.
- [Swave](https://github.com/sirthias/swave) [Scala] - A lightweight Reactive Streams Infrastructure Toolkit for Scala.
- [Streamz](https://github.com/python-streamz/streamz) [Python] - A lightweight library for building pipelines to manage continuous streams of data; supports complex pipelines that involve branching, joining, flow control, feedback, back pressure, and so on.
- [Stream Ops](https://github.com/nanosai/stream-ops-java) [Java] - A fully embeddable data streaming engine and stream processing API for Java.
- [Substation](https://github.com/brexhq/substation) [Go] - Substation is a cloud native data pipeline and transformation toolkit written in Go.
- [SwimOS](https://github.com/swimos/swim-rust) [Rust] - A framework for building real-time streaming data processing applications written in Rust.
- [Tributary](https://github.com/timkpaine/tributary) [Python] - A python library for constructing dataflow graphs. Supports synchronous, reactive data streams built using python generators that mimic complex event processors, as well as lazily-evaluated acyclic graphs and functional currying streams.
- [YoMo](https://github.com/yomorun/yomo) [Go] - An open source Streaming Serverless Framework for building Low-latency Geo-distributed system. YoMo Built atop [QUIC Transport Protocol](https://en.wikipedia.org/wiki/QUIC) and Functional Reactive Programming interface. 
- [Mediapipe](https://github.com/google/mediapipe) - Cross-platform, customizable ML solutions for live and streaming media.

### Streaming Application

- [javactrl-kafka](https://github.com/javactrl/javactrl-kafka) [Java] - An application of a stateful stream processing for workflow as Java code (microservices orchestration, business process automation, and more).
- [straw](https://github.com/rwalk/straw) [Python/Java] - A platform for real-time streaming search.
- [storm-crawler](https://github.com/DigitalPebble/storm-crawler) [Java] - Web crawler SDK based on Apache Storm.
- [Zilla](https://github.com/aklivity/zilla) [Java] - Cross-platform, API gateway built for event-driven architectures and streaming that supports standard protocols such as HTTP, SSE, gRPC, MQTT and the native Kafka protocol.

### IoT

- [sensorbee](https://github.com/sensorbee/sensorbee) [Go] - lightweight stream processing engine for IoT.
- [Apache Edgent](https://github.com/apache/incubator-edgent) [Java] - a programming model and runtime that enables continuous streaming analytics on gateways and edge devices which can work with centralized systems to provide efficient and timely analytics across the whole IoT ecosystem: from the center to the edge, opens sourced by IBM.
- [Apache StreamPipes](https://github.com/apache/incubator-streampipes) [Java] - a self-service (Industrial) IoT toolbox to enable non-technical users to connect, analyze and explore IoT data streams.

### DSL

- [Apache Beam](https://github.com/apache/beam) [Java, Python, SQL, Scala, Go] - unified model and set of language-specific SDKs for defining and executing data processing workflows, and also data ingestion and integration flows, supporting Enterprise Integration Patterns (EIPs) and Domain Specific Languages (DSLs), open sourced by Google.
- [coast](https://github.com/bkirwi/coast) [Scala] - a DSL that builds DAGs on top of Samza and provides exactly-once semantics.
- [Esper](https://github.com/espertechinc/esper) [Java] - component for complex event processing (CEP) and event series analysis.
- [Streamparse](https://github.com/Parsely/streamparse) [Python] - lets you run Python code against real-time streams of data via Apache Storm.
- [summingbird](https://github.com/twitter/summingbird) [Scala] - library that lets you write MapReduce programs that look like native Scala or Java collection transformations and execute them on a number of well-known distributed MapReduce platforms, including Storm and Scalding.

### Data Pipeline

- [Apache Kafka](https://github.com/apache/kafka) [Scala/Java] - distributed, partitioned, replicated commit log service, which provides the functionality of a messaging system, but with a unique design.
- [Apache Pulsar](https://github.com/apache/incubator-pulsar) [Java] - distributed pub-sub messaging platform with a very flexible messaging model and an intuitive client API.
- [Apache RocketMQ](https://github.com/apache/rocketmq) [Java] - distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability.
- [AutoMQ](https://github.com/AutoMQ/automq) [Scala/Java] - cloud-first alternative to Kafka by decoupling durability to S3 and EBS. 100% Kafka compatible. 10x cost-effective. Autoscale in seconds. Single-digit ms latency.
- [brooklin](https://github.com/linkedin/Brooklin/) [Java] - a distributed system intended for streaming data between various heterogeneous source and destination systems with high reliability and throughput at scale from Linkedin (replaced databus).
- [Bruin](https://github.com/bruin-data/bruin) [Go] - End-to-end data pipeline tool combining ingestion from 50+ sources, SQL/Python transformations, and built-in data quality checks in a single CLI.
- [camus](https://github.com/linkedin/camus) [Java] - Linkedin's Kafka -> HDFS pipeline.
- [databus](https://github.com/linkedin/databus) [Java] - Linkedin's source-agnostic distributed change data capture system.
- [flume](https://github.com/apache/flume) [Java] - distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.
- [fluvio](https://github.com/infinyon/fluvio) [Rust/WASM] - Real-time programmable data streaming platform with in-line computation capabilities.
- [ingestr](https://github.com/bruin-data/ingestr) [Python] - CLI tool to copy data between any source and destination with a single command. Supports 50+ connectors including databases, SaaS apps, and data warehouses.
- [Gazette](https://github.com/gazette/core) [golang] - Distributed streaming infrastructure built on cloud storage which makes it easy to mix and match batch and streaming paradigms.
- [LogDevice](https://logdevice.io/) [C++] - a high-performant distributed system by Facebook for streaming and storing sequential data, using a log structure.
- [metaq](https://github.com/killme2008/Metamorphosis) [Java] - Taobao's high available, high performance distributed messaging system
- [NATS streaming](https://github.com/nats-io/nats-streaming-server) [Go] - fast disk-backed messaging solution
- [nsq](https://github.com/nsqio/nsq) [Go] - realtime distributed messaging platform designed to operate at scale, handling billions of messages per day.
- [Redpanda](https://github.com/redpanda-data/redpanda) [C++] - Redpanda is Kafka compatible, ZooKeeper-free, JVM-free and source available.
- [RudderStack](https://github.com/rudderlabs/rudder-server) [Go] - an open source customer data infrastructure (segment, mparticle alternative).
- [suro](https://github.com/Netflix/suro) [Java] - data pipeline service for collecting, aggregating, and dispatching large volume of application events including log data.
- [StreamSets Data Collector](https://github.com/streamsets/datacollector-oss) [Java] - continuous big data ingestion infrastructure that reads from and writes to a large number of end-points, including S3, JDBC, Hadoop, Kafka, Cassandra and many others.

### Online Machine Learning 

- [Apache Samoa](https://github.com/apache/incubator-samoa) [Java] - distributed streaming machine learning (ML) framework that contains a programing abstraction for distributed streaming ML algorithms.
- [DataSketches](https://github.com/DataSketches/sketches-core) [Java] - sketches library from Yahoo!.
- [Numalogic] (https://github.com/numaproj/numalogic) [Python] - Collection of ML models and libraries for real-time anomaly detection and forecasting on time series data. Built on Numaflow, a K8s native stream processing platform
- [River](https://github.com/online-ml/river) [Python] - online machine learning library.
- [streamDM](https://github.com/huawei-noah/streamDM) [Scala] - mining Big Data streams using Spark Streaming from Huawei.
- [StreamingBandit](https://github.com/Nth-iteration-labs/streamingbandit) [Python] - Provides a webserver to quickly setup and evaluate possible solutions to contextual multi-armed bandit (cMAB) problems.
- [StormCV](https://github.com/sensorstorm/StormCV) [Java] - enables the use of Apache Storm for video processing by adding computer vision (CV) specific operations and data model.
- [trident-ml](https://github.com/pmerienne/trident-ml) [Java] - realtime online machine learning library based on Trident.
- [yurita](https://github.com/paypal/yurita) [Scala] - Anomaly detection framework built on Spark Structured Streaming from Paypal.

### Streaming SQL

- [pipelinedb](https://github.com/pipelinedb/pipelinedb) [C] - An open-source relational database that runs SQL queries continuously on streams, incrementally storing results in tables.
- [squall](https://github.com/epfldata/squall) [Java] - Squall executes SQL queries on top of Storm for doing online processing.
- [StreamCQL](https://github.com/Zhiqiang-He/StreamCQL) [Java] - Continuous Query Language on RealTime Computation System.
- [ksqlDB](https://github.com/confluentinc/ksql) [Java] - A cloud-native, source-available [database](https://ksqldb.io/) purpose-built for stream processing applications
- [Materialize](https://materialize.com) [Rust] - A source-available streaming SQL engine for maintaining materialized views on data from message brokers and databases.
- [Siddhi](https://github.com/siddhi-io/siddhi) [Java] - A cloud native Streaming and Complex Event Processing engine that understands Streaming SQL queries in order to capture events from diverse data sources, process them, detect complex conditions, and publish output to various endpoints in real time.
- [Proton](https://github.com/timeplus-io/proton) [C++] - A unified streaming and historical data analytics database in a single binary, powered by ClickHouse.

### Benchmark

- [storm-perf-test](https://github.com/yahoo/storm-perf-test) [Java] - a simple storm performance/stress test.
- [streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) [Java] - Benchmarks for Low Latency (Streaming) solutions including Apache Storm, Apache Spark, Apache Flink, etc.
- [flotilla](https://github.com/tylertreat/Flotilla) [Go] - Automated message queue orchestration for scaled-up benchmarking.

### Toolkit

- [akka](https://github.com/akka/akka) [Scala] - toolkit and runtime for building highly concurrent, distributed, and resilient message-driven application on the JVM.
- [Apache Pekko](https://github.com/apache/incubator-pekko) [Scala, Java] - Fork of Akka 2.6.x, prior to the Akka project's adoption of the Business Source License.
- [pulsar](https://github.com/quantmind/pulsar/) [Python] - Actor based event driven concurrent framework for Python.
- [aeron](https://github.com/real-logic/Aeron) [Java/C++] - efficient reliable unicast and multicast message transport.
- [StreamFlow](https://github.com/lmco/streamflow) [Java] - stream processing tool designed to help build and monitor processing workflows.
- [samza-luwak](https://github.com/romseygeek/samza-luwak) [Java] - uses Luwak, a stored-query engine built on Lucene, to implement full-text search on streams.
- [Streamdal](https://streamdal.com) [Go/Node.js/Python] - A tool to embed privacy controls in your application code to detect PII as it enters and leaves your systems, preventing it from reaching unintended data streams or pipelines.
- [Turbine](https://github.com/Netflix/Turbine) [Java] - tool for aggregating streams of Server-Sent Event (SSE) JSON data into a single stream.
- [Nussknacker](https://github.com/TouK/nussknacker) [Scala] - A visual tool to define and run real-time decision algorithms.

### Closed Source

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/) [Java] - real-time, fully managed and scalable data stream engine provided by AWS. 
- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) [.NET] a massively scalable, fully managed, real-time, data stream engine provided by Microsoft Azure.
- [Cloud Dataflow](https://cloud.google.com/dataflow/)[Java, Python, SQL, Scala] - Google's managed stream and batch data processing engine. Supports running Beam pipelines.
- [concord](https://www.slideshare.net/concord-io/may-2016-data-by-the-bay-concord-simple-flexible-stream-processing-on-apache-mesos) [C++] - a distributed stream processing framework built in C++ on top of Apache.
- [IBM Streams](https://www.ibm.com/analytics/us/en/technology/stream-computing/) [Python/Java/Scala] - platform for distributed processing and real-time analytics. Provides toolkits for advanced analytics like geospatial, time series, etc. out of the box.
- [jubatus](http://jubat.us/en/) [C++] - distributed processing framework and streaming machine learning library.
- [millwheel](http://research.google.com/pubs/pub41378.html) - framework for building low-latency data-processing applications that is widely used at Google.
- [NVIDIA Deep Stream](https://developer.nvidia.com/deepstream-sdk) [Python/C/C++] - a platform for real-time image, video and audio processing, preferably using on edge devices or cloud.

### Readings

1. [In-Stream Big Data Processing](https://highlyscalable.wordpress.com/2013/08/20/in-stream-big-data-processing/)
2. [The world beyond batch: Streaming 101](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) by Tyler Akidau. 
3. [Real Time Analytics: Algorithms and Systems (VLDB 2015)](http://www.vldb.org/pvldb/vol8/p2040-Kejariwal.pdf)
4. [Grokking Streaming Systems](https://www.manning.com/books/grokking-streaming-systems) by Josh Fischer & Ning Wang
5. [Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing](https://www.oreilly.com/library/view/streaming-systems/9781491983867/) by Reuven Lax, Slava Chernyak, and Tyler Akidau
6. [Data Pipelines with Apache Airflow](https://www.manning.com/books/data-pipelines-with-apache-airflow) by Bas P. Harenslak and Julian Rutger de Ruiter

## License

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

Licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)
