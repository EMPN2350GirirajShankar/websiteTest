---
title: Structuring semantic models for reliable Power BI Copilot answers
slug: semantic-models-for-copilot
date: 2026-07-22
topic: Power BI
excerpt: Copilot is only as good as the model behind it. Seven modelling habits that decide whether answers are trustworthy.
image: ""
imageAlt: ""
draft: false
---

## Why the model matters more than the prompt

Copilot resolves questions against your semantic model. If a measure is
ambiguous to a person, it is ambiguous to Copilot.

## The habits

1. **Name measures the way the business speaks.** `Net Revenue`, not `msr_rev_net`.
2. **Write a description on every measure.** Copilot reads them.
3. **Hide technical columns.** Keys and surrogate IDs only add noise.
4. **Mark your date table.** Time intelligence silently misbehaves without it.
5. **Collapse redundant measures.** Three variants of "revenue" produce three answers.
6. **Set display folders.** They give Copilot a sense of grouping.
7. **Add synonyms** for the terms each region actually uses.

## Verifying the result

Keep a list of about twenty questions the business asks most often and re-run
them after every model change. Treat a wrong answer as a modelling bug.
