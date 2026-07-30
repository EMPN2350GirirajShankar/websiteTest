---
title: Block catalogue — what every section looks like
slug: section-builder-demo
date: 2026-07-30
tag: Microsoft Fabric
service: Data & AI platforms
industry: Retail & consumer goods
excerpt: A reference page showing all nine section types in order, each labelled with what it is and when to use it, so the content team can pick blocks before writing a real case study.
image: /images/case-studies/external/B026_MSFabric_Banner.webp
imageAlt: Microsoft Fabric banner artwork
draft: false
template: standard
sections:
  - type: rich_text
    heading: 1 · Text
    body: >-
      **Heading plus paragraphs.** The workhorse block — use it for the
      narrative. It accepts [links](/contact), bold, inline `code` and lists:


      - Bulleted lists work as expected

      - So do numbered lists and nested formatting


      Everything below is one of the other eight blocks, each labelled with what
      it is and when to reach for it.
  - type: rich_text
    heading: 2 · Stat band
    body: >-
      **Two to four big numbers in a row.** Use it for outcomes worth leading
      with. Keep the values short — they are set in large type.
  - type: stat_band
    items:
      - value: 40%
        label: Faster reporting cycle
      - value: 2,000
        label: Users onboarded
      - value: 12
        label: Source systems unified
  - type: rich_text
    heading: 3 · Pull quote
    body: >-
      **A large quote with an optional name and role.** Use it once per page,
      for the strongest thing the client said.
  - type: pull_quote
    quote: >-
      The section builder means we can publish a case study in an afternoon
      instead of filing a ticket and waiting for a release.
    attribution: Content team
    role: MAQ Software
  - type: rich_text
    heading: 4 · Image
    body: >-
      **A full-width image with alt text and an optional caption.** Use it to
      break up long stretches of text. Alt text is required — it is what screen
      readers announce.
  - type: image
    image: /images/case-studies/external/analysis-strategy-planning.webp
    alt: Team reviewing an analytics dashboard during a planning session
    caption: The caption sits under the image and is optional.
  - type: rich_text
    heading: 5 · Callout box
    body: >-
      **A boxed aside.** Use it for a caveat, a definition or a constraint that
      supports the argument without interrupting it.
  - type: highlight
    heading: When to use a callout
    body: >-
      Callout boxes are for asides that support the main argument without
      interrupting it — a constraint worth knowing, a caveat, or a definition.
  - type: rich_text
    heading: 6 · Image + text side by side
    body: >-
      **Image on one side, heading and copy on the other, plus an optional quote
      and citation.** Every part is optional and the image can sit on either
      side. The card slides up the first time it scrolls into view.
  - type: feature_split
    eyebrow: Overview
    heading: Everything filled in, image on the left
    body: >-
      This is the block with all of its parts in use — eyebrow, heading, body,
      image, quote and citation.
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
    heading: The same block, image on the right, no quote
    body: >-
      Only a heading, body and image are set here. Compare it with the block
      above to see how much is optional — nothing renders an empty box.
    image: /images/case-studies/external/analyzing-market-situation.webp
    imageAlt: Analyst reviewing market data on a monitor
    imagePosition: right
    animate: true
  - type: rich_text
    heading: 7 · Technology list
    body: >-
      **A product-and-purpose table.** Use it to record what the work was built
      with, one row per product. The link on each product is optional.
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
  - type: rich_text
    heading: 8 · Key takeaways
    body: >-
      **A numbered summary list.** Use it near the end, for the three or four
      points a skim-reader should leave with.
  - type: key_takeaways
    heading: What to take from it
    items:
      - Structured blocks keep formatting consistent across authors.
      - Editors can reorder a page without a developer or a deployment.
      - Every block is styled centrally, so the site stays on brand.
  - type: rich_text
    heading: 9 · Call to action
    body: >-
      **A closing prompt with a button.** Use it once, at the very end of the
      page.
  - type: cta
    heading: Want a walkthrough of your reporting stack?
    body: Tell us what you are running today and we will map the gaps.
    buttonLabel: Talk to us
    buttonUrl: /contact
---

This body is ignored because the entry has sections. It only renders for older
case studies that were written before the section builder existed.
