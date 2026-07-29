---
title: Building scalable e-commerce product recommendations with Microsoft Fabric SQL
slug: building-scalable-e-commerce-product-recommendations
date: 2025-09-03
tag: Microsoft Fabric
service: Data & AI platforms
industry: Retail & consumer goods
excerpt: A multi-region e-commerce retailer used Microsoft Fabric SQL as the serving layer for a personalization platform, combining streaming behavior, curated history, and product embeddings to lift engagement and conversion.
image: /images/case-studies/external/product_recommendations_cover.webp
imageAlt: Building scalable e-commerce product recommendations with Microsoft Fabric SQL
draft: false
---

Customers expect relevant, timely product suggestions as they browse, search, and purchase online. A mid-to-large e-commerce retailer with multi-region catalogs, high seasonal traffic, and separate systems for catalog, orders, and web events needed to modernize its recommendation capabilities to increase average order value (AOV), reduce time to convert, and personalize promotion exposure.

The retailer used Microsoft Fabric SQL as the serving layer for a personalization platform that combines streaming behavior, curated history, and product embeddings — delivering measurable improvements in engagement and conversion while keeping costs and compliance under control.

## Business challenges

- **Siloed data:** Events, orders, CRM, and product assets lived in separate systems, making it slow and complex to compute features for recommendations.
- **Freshness of insights:** Session-level signals such as clicks or cart additions needed to influence recommendations within minutes.
- **Low-latency experience:** On-site recommendations had to feel instantaneous, with response times under 200 milliseconds at the 95th percentile (P95).
- **Scalability and cost:** The platform needed to manage millions of requests per day without driving up inference costs.
- **Governance:** Regional data restrictions, PII handling, and auditability were mandatory for compliance.

## Solution overview

The solution is built on a fully managed architecture that uses Fabric SQL as the single serving layer for features and embeddings. This is paired with Lakehouse storage for heavy data transformations and Azure OpenAI for embedding generation and advanced ranking logic.

### Key capabilities

- **Real-time event processing:** Ingests session events in near real time via event streams and micro-batches.
- **Curated data foundation:** Lakehouse layers (bronze, silver, and gold) organize historical data for feature engineering and model training.
- **Unified serving layer:** Fabric SQL serves as the "hot" layer, exposing user and session features, product metadata, and embeddings through shortcuts to Lakehouse gold tables.
- **Fast candidate generation:** Materialized views and result set caching accelerate recommendation lookups.
- **Lightweight scoring service:** A stateless API that pulls features from Fabric, scores candidates, applies business rules, and returns the top-N product recommendations.

## Architecture

![Recommendation platform architecture on Microsoft Fabric](/images/case-studies/ai-and-machine-learning/product_recs_architecture_new.png)

### 1. Event ingestion

**Component:** Fabric Event streams

Client-side events (page views, searches, add-to-cart) are ingested via Fabric Event streams.

- **Raw stream storage:** Written to OneLake in Delta Lake format for historical analysis.
- **Hot stream storage:** Landed into Fabric Lakehouse tables for near real-time consumption.

### 2. Feature engineering

**Component:** Fabric Lakehouse + Fabric Pipelines + Fabric Notebooks

- Raw events in OneLake are transformed via notebooks.
- Features such as session frequency, co-viewed products, and recency metrics are derived.
- Gold-level feature tables are stored in Lakehouse curated tables.
- Gold tables are exposed to Fabric SQL DB using shortcuts, allowing downstream consumption via standard SQL.

### 3. Embedding pipeline

**Component:** Azure OpenAI

- Pipelines call Azure OpenAI to generate embeddings.
- Product metadata embeddings and vector pointers are stored in Fabric Lakehouse tables.
- For large catalogs, embeddings are offloaded to an approximate nearest neighbor (ANN) vector store, while metadata and vector references remain in Fabric SQL DB for joins with behavioral features.

### 4. Recommendation service

**Component:** Fabric SQL DB + Application Service Layer (App Service)

- Candidate generation uses materialized views in Fabric SQL DB joining gold feature tables and product metadata.
- The service layer fetches candidates, applies model scoring, re-ranking, and business rules.
- Recommendations are returned to the client.

### 5. Monitoring

**Component:** Power BI + Fabric SQL DB

- Power BI connects directly to Fabric SQL DB and Lakehouse tables for dashboards.
- KPIs tracked include recommendation click-through rate, revenue uplift, and embedding freshness.

## Impact of Fabric SQL DB

- **Native integration with the Fabric ecosystem:** Unlike Azure SQL DB, Fabric SQL DB is deeply integrated with Lakehouse, Event streams, and pipelines, removing the need for complex ETL jobs in AI/ML workloads.
- **Unified compute and storage model:** Fabric SQL operates on OneLake data without duplication, whereas Azure SQL DB typically requires data movement and synchronization.
- **Single source for serving features:** Eliminates ad-hoc file reads and complex orchestration, providing a unified feature source.
- **Fast candidate generation:** Materialized views and result set caching enable quicker candidate queries.
- **Governance and traceability:** All features and scores are logged in Fabric, supporting explainability and audits during model reviews.
- **Cost efficiency:** Keeping only hot features and candidate lists in Fabric while storing the rest in the Lakehouse reduces compute costs for inference.
- **Lower operational overhead:** No need to manage provisioning, scaling, or sharding — Fabric SQL automatically leverages Fabric capacities.
- **Simpler BI and operations:** The same artifacts feed both the recommendation service and Power BI dashboards, removing sync errors and stale data.

## Best practices

- **Be selective with data persistence:** Storing every historical column increases costs and slows query performance.
- **Optimize vector search:** Avoid exact nearest-neighbor searches on full catalogs in SQL at scale; use hybrid filters or an ANN service instead.
- **Manage cache freshness:** Keep cache time-to-live (TTL) short to prevent stale recommendations after promotions or inventory changes.
- **Invest in observability:** Comprehensive instrumentation and reliable logging are essential for accurate attribution and performance tracking.

## Interested in learning more?

As a [Microsoft Fabric Featured Partner](https://appsource.microsoft.com/en-US/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview), MAQ Software brings deep expertise in helping organizations unlock the full potential of Microsoft Fabric. Whether you are looking for guidance on implementing data solutions or optimizing your existing platform, we are here to support you every step of the way.

Contact us at [CustomerSuccess@MAQSoftware.com](mailto:CustomerSuccess@MAQSoftware.com) or explore our [apps](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=MAQ%20Software&page=1) and consulting services on Microsoft Azure Marketplace:

- [Microsoft Fabric: 2-Hour Briefing](http://bit.ly/4ksqbvv)
- [Microsoft Fabric: 4-Week Assessment](http://links.maqsoftware.com/4kjIL8Y)
- [Microsoft Fabric: Accelerated 8-Week Pilot Implementation](http://links.maqsoftware.com/4l9eta9)
- [Real-time Intelligence using Microsoft Fabric: 1-Day Workshop](http://links.maqsoftware.com/3Idt2uT)
