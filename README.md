## awesome-streaming

everything about streaming.

### Streaming Engine

* [flink-streaming](http://ci.apache.org/projects/flink/flink-docs-release-0.9/apis/streaming_guide.html) [Java] system for high-throughput, low-latency data stream processing that supports stateful computation, data-driven windowing semantics and iterative stream processing.
* [gearpump](https://github.com/intel-hadoop/gearpump) [Scala] lightweight real-time distributed streaming engine built on Akka.
* [heron](https://blog.twitter.com/2015/flying-faster-with-twitter-heron) Twitter's real-time analytics platform that is fully API-compatible with Storm. Storm has been replaced by Heron at Twitter.
* [mantis](http://www.slideshare.net/g9yuayon/qcon-talk-on-netflix-mantis-a-stream-processing-system) Netflix's event stream processing system.
* [millwheel](http://research.google.com/pubs/pub41378.html) framework for building low-latency data-processing applications that is widely used at Google.
* [mupd8(muppet)](https://github.com/walmartlabs/mupd8) [Scala/Java] mapReduce-style framework for processing fast/streaming data.
* [s4](http://incubator.apache.org/s4/) [Java] general-purpose, distributed, scalable, fault-tolerant, pluggable platform that allows programmers to easily develop applications for processing continuous unbounded streams of data.
* [Apache Samza](http://samza.apache.org/) [Scala/Java] distributed stream processing framework that build on Kafka(messaging, storage) and YARN(fault tolerance, processor isolation, security and resource management).
* [spark-streaming](https://spark.apache.org/streaming/) [Scala] makes it easy to build scalable fault-tolerant streaming applications.
* [Apache Storm](https://storm.apache.org/) [Clojure/Java] distributed real-time computation system. Storm is to stream processing what Hadoop is to batch processing. 
* [tigon](https://github.com/caskdata/tigon) [C++/Java] high throughput real-time streaming processing framework built on Hadoop and HBase.
* [SPQR](https://github.com/ottogroup/SPQR) [Java] dynamic framework for processing high volumn data streams through pipelines.

### DSL
* [summingbird](https://github.com/twitter/summingbird) [Scala] library that lets you write MapReduce programs that look like native Scala or Java collection transformations and execute them on a number of well-known distributed MapReduce platforms, including Storm and Scalding.

### Message queue

* [Apache Kafka](https://github.com/apache/kafka) [Scala/Java] distributed, partitioned, replicated commit log service, which provides the functionality of a messaging system, but with a unique design.
* [metaq](https://github.com/killme2008/Metamorphosis) [Java] Taobao's high available, high performance distributed messaging system
* [nsq](https://github.com/bitly/nsq) [Go] realtime distributed messaging platform designed to operate at scale, handling billions of messages per day.

### Data pipeline

* [camus](https://github.com/linkedin/camus) [Java] Linkedin's Kafka -> HDFS pipeline.
* [databus](https://github.com/linkedin/databus) [Java] Linkedin's source-agnostic distributed change data capture system.
* [flume](https://github.com/apache/flume) [Java] distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.
* [suro](https://github.com/Netflix/suro) [Java] data pipeline service for collecting, aggregating, and dispatching large volume of application events including log data.

### Online Machine Learning 

* [jubatus](http://jubat.us/en/) [C++] distributed processing framework and streaming machine learning library.
* [Apache Samoa](https://github.com/yahoo/samoa) [Java] distributed streaming machine learning (ML) framework that contains a programing abstraction for distributed streaming ML algorithms
* [trident-ml](https://github.com/pmerienne/trident-ml) [Java] realtime online machine learning library based on Trident.

### Stream SQL

* [pipelinedb](https://github.com/pipelinedb/pipelinedb) [C] An open-source relational database that runs SQL queries continuously on streams, incrementally storing results in tables.
* [squall](https://github.com/epfldata/squall) [Java] Squall executes SQL queries on top of Storm for doing online processing.

### Data analysis

* [StormCV](https://github.com/sensorstorm/StormCV) [Java] enables the use of Apache Storm for video processing by adding computer vision (CV) specific operations and data model.

### Toolkit

* [akka](http://akka.io/) [Scala] toolkit and runtime for building highly concurrent, distributed, and resilient message-driven application on the JVM.
* [aeron](https://github.com/real-logic/Aeron) [Java/C++] efficient reliable unicast and multicast message transport.
* [StreamFlow](https://github.com/lmco/streamflow) [Java] stream processing tool designed to help build and monitor processing workflows.
* [samza-luwak](https://github.com/romseygeek/samza-luwak) [Java] uses Luwak, a stored-query engine built on Lucene, to implement full-text search on streams.
* [Turbine](https://github.com/Netflix/Turbine) [Java] tool for aggregating streams of Server-Sent Event (SSE) JSON data into a single stream

### Experimental
* [coast](https://github.com/bkirwi/coast) [Scala] a DSL that builds DAGs on top of Samza and provides exactly-once semantics.
* [hailstorm](https://github.com/hailstorm-hs/hailstorm) [Haskell] distributed stream processing with exactly-once semantics based on Storm.

### Blogs

* [Confluent blog](http://blog.confluent.io/)
* [Ingest Tips](http://ingest.tips/)

### Readings

https://github.com/manuzhang/ds-readings#stream-processing

