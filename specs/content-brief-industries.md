# Content Brief — Industry Pages

> For the sales team. Fill in **Header text (one liner)** and **Secondary text** for each section. The web team turns this into a live page using the same structure as `/industries/retail`.

**Scope:** one brief per industry. Six industries in total:

1. Retail & consumer goods *(reference / already built)*
2. Financial services
3. Healthcare & life sciences
4. Manufacturing
5. Technology
6. Public sector

**Priority order (fill briefs in this sequence):**

- **P0** — Retail & consumer goods, Financial services
- **P1** — Healthcare & life sciences, Manufacturing
- **P2** — Technology, Public sector

---

## Ground rules

- **AI-searchable** — use the vocabulary buyers actually use ("claims processing", "DSD visibility", "shop-floor analytics").
- **Human-friendly** 
- **Be specific to the use case** — avoid generic words like *faster*, *better*, *reduce*, *improve*, *streamline*. Name the actual workflow and a numerical outcome for the industry.
- **Numbers** — try aligning them to a case study (cumulative across case studies is fine).
- **Partnership stack** — try to cover all three partnerships: **Microsoft**, **Snowflake**, and **Databricks**.

---

## Page structure

Format per section type:

- **Hero** — **Header text** (1 liner) + **Secondary text** (4–5 liner).
- **Impact stats** — **Number** + **one liner** + **case study link**.
- **Industry solutions / agents** — **Name** + **one liner** + **4–5 liner description**.
- **Case studies** — **Tag** + **title** + **URL** (relevant tagging examples).
- **Marketplace offers** — **Marketplace URL** + **title** + **2 liner**.
- **Testimonials** — quote + attribution.

| § | Section | Fields | Repeats |
|---|---|---|---|
| 1 | **Hero** | Header text (1 liner, H1 max 12 words, includes the industry) + Secondary text (4–5 lines — how AI is changing this industry + what MAQ Software does for it) | — |
| 2 | **Impact stats** | Number (e.g. `8×`, `< 1 min`, `40%`) + one liner (what & who) + case study link | 4 items |
| 3 | **Industry solutions / agents** | Name (one liner) + one-liner tagline + 4–5 line description (what it does + the tech used + buyer benefit) | 4–5 items |
| 4 | **Case studies** | Tag + title (verbatim) + URL (blog.maqsoftware.com preferred) | 3 items |
| 5 | **Marketplace offers** | Marketplace URL + title (verbatim from Marketplace) + 2 liner | 3–4 items |
| 6 | **Testimonials** *(always last content section)* | Eyebrow `Testimonials`, H2 `What our clients have to say` *(fixed site-wide)*. 1–2 quotes — ≤ 40 words each + attribution (role — industry/company; anonymized OK) | 1–2 items |

---

## Example (from the live `/industries/retail` page)

Use this as a reference for the shape and tone of **Header text** + **Secondary text**.

**Hero**
- Header text: `Powering the Next Era of Retail with AI-Driven Intelligence`
- Secondary text: `AI is redefining how retailers operate, compete, and grow. At MAQ Software, we help retail and CPG organizations embed intelligence across the enterprise, from real-time decision-making to autonomous operations.`

**Impact stat #1**
- Header text: `8×`
- Secondary text: `Faster Power BI refresh for a top-3 US retailer` — source: `Microsoft Fabric BI modernization` (URL: `https://blog.maqsoftware.com/...`)

**Case study #1**
- Header text: `Transforming grocery retail analytics with Microsoft Fabric`
- Secondary text: `A grocery retailer's analytics estate moved to Fabric with end-to-end lineage and capacity governance.` — URL: `https://blog.maqsoftware.com/...`

---

## SEO meta

| Field | What sales provides |
|---|---|
| Page title | `{Industry} Solutions — AI & Data \| MAQ Software` — under 60 chars |
| Meta description | 1 line, 150–160 chars, names the industry + 1 outcome number + Microsoft stack |
| Top 3 search keywords | comma-separated |
| Canonical URL | (web team will fill) |

---

## Submission template (copy once per industry)

```
INDUSTRY NAME: ____________
URL slug: /industries/____________

1. HERO
   Header text (1 liner):
   Secondary text (4–5 lines):

2. IMPACT STATS (4)  — number + one liner + case study link
   #1  Number: ____  One liner (what & who): ____  Case study URL: ____
   …

3. INDUSTRY SOLUTIONS / AGENTS (4–5)  — name + one liner + 4–5 line description
   #1  Name: ____  One liner: ____  Description: ____
   …

4. CASE STUDIES (3)  — tag + title + URL
   #1  Tag: ____  Title: ____  URL: ____
   #2  Tag: ____  Title: ____  URL: ____
   #3  Tag: ____  Title: ____  URL: ____

5. MARKETPLACE OFFERS (3–4)  — Marketplace URL + title + 2 liner
   #1  Marketplace URL: ____  Title: ____  2 liner: ____
   …

6. TESTIMONIALS (1–2)
   #1  Quote: ____  Attribution: ____  Signed off (Y/N): ____

SEO
   Page title:
   Meta description:
   Top 3 keywords:
```

---

## Out of scope for sales

- Hero visuals / industry illustrations.
- Filtered case-studies routes.
- Per-solution landing pages — solutions are mailto until a product exists.
- Localization.
