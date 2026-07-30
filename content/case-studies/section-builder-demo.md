---
title: Section builder demo — every block type in one page
slug: section-builder-demo
date: 2026-07-30
tag: Microsoft Fabric
service: Data & AI platforms
industry: Retail & consumer goods
excerpt: A reference page that uses all eight section types, so the content team can see what each block looks like before writing a real case study.
image: /images/case-studies/external/B026_MSFabric_Banner.webp
imageAlt: Microsoft Fabric banner artwork
draft: false
template: standard
sections:
  - type: rich_text
    heading: The challenge
    body: >-
      This page exists to demonstrate the **section builder**. Every block below
      was added from the CMS, and any of them can be reordered, duplicated or
      deleted without touching code.


      Text blocks accept the full rich text editor: [links](/contact), bold,
      lists, and headings.


      - Bulleted lists work as expected

      - So do numbered lists and nested formatting

      - Inline `code` renders in the monospace style
  - type: stat_band
    items:
      - value: 40%
        label: Faster reporting cycle
      - value: 2,000
        label: Users onboarded
      - value: 12
        label: Source systems unified
  - type: pull_quote
    quote: >-
      The section builder means we can publish a case study in an afternoon
      instead of filing a ticket and waiting for a release.
    attribution: Content team
    role: MAQ Software
  - type: image
    image: /images/case-studies/external/analysis-strategy-planning.webp
    alt: Team reviewing an analytics dashboard during a planning session
    caption: Image blocks carry their own alt text and an optional caption.
  - type: highlight
    heading: When to use a callout
    body: >-
      Callout boxes are for asides that support the main argument without
      interrupting it — a constraint worth knowing, a caveat, or a definition.
  - type: feature_split
    eyebrow: Overview
    heading: A feature block with an image, a quote and a citation
    body: >-
      Every part of this block is optional. Drop the image for a text-only
      panel, drop the quote for a plain feature, or keep only the image and
      caption. The card slides up the first time it scrolls into view.
    image: /images/case-studies/external/ai-chatbox.webp
    imageAlt: Conversational AI interface on a laptop screen
    imagePosition: left
    quote: >-
      The block builder changed how we work — we can shape a page the way the
      story needs, instead of forcing every case study into one template.
    attribution: Joey McMillan
    role: Lead Race Strategist, Mercedes-AMG PETRONAS F1 Team
    animate: true
  - type: feature_split
    heading: The same block with the image on the right and no quote
    body: >-
      Leave the eyebrow, quote and citation empty and the block collapses to a
      simple two-column feature. Nothing renders an empty box.
    image: /images/case-studies/external/analyzing-market-situation.webp
    imageAlt: Analyst reviewing market data on a monitor
    imagePosition: right
    animate: true
  - type: rich_text
    heading: The approach
    body: >-
      Mix text blocks with structured blocks freely. The order in the CMS is the
      order on the page, so a case study can open with stats, lead with a quote,
      or run text-only.
  - type: tech_table
    heading: Inside the tech
    rows:
      - product: Microsoft Fabric
        url: https://www.microsoft.com/en-us/microsoft-fabric
        purpose: Unified the lakehouse and semantic model in one workspace.
      - product: Power BI
        url: https://www.microsoft.com/en-us/power-platform/products/power-bi
        purpose: Delivered the executive reporting layer.
      - product: Azure Data Factory
        purpose: Orchestrated ingestion from twelve source systems.
  - type: key_takeaways
    heading: What to take from it
    items:
      - Structured blocks keep formatting consistent across authors.
      - Editors can reorder a page without a developer or a deployment.
      - Every block is styled centrally, so the site stays on brand.
  - type: cta
    heading: Want a walkthrough of your reporting stack?
    body: Tell us what you are running today and we will map the gaps.
    buttonLabel: Talk to us
    buttonUrl: /contact
---

This body is ignored because the entry has sections. It only renders for older
case studies that were written before the section builder existed.
