# Content Brief — Service Pages

> For the sales team. Fill in **Header text (one liner)** and **Secondary text** for each section. The web team turns this into a live page using the same structure as `/services/agentic-ai`.

**Scope:** one brief per service. Seven services in total (same list as the home page Services section):

1. AI solutions & agentic automation *(reference / already live at `/services/agentic-ai`)*
2. Data engineering & analytics
3. Reporting & business intelligence
4. Business apps & process automation
5. Cloud infrastructure & modernization
6. Security & compliance
7. Workplace transformation & productivity

**Priority order (fill briefs in this sequence):**

- **P0** — AI solutions & agentic automation, Data engineering & analytics, Cloud infrastructure & modernization
- **P1** — Reporting & business intelligence, Business apps & process automation
- **P2** — Security & compliance, Workplace transformation & productivity

---

## Ground rules

- **AI-searchable**
- **Human-friendly**
- **Be specific to the use case** — avoid generic words like *faster*, *better*, *reduce*, *improve*, *streamline*. Name the actual workflow and a numerical outcome.
- **Numbers** — try aligning them to a case study (cumulative across case studies is fine).
- **Partnership stack** — try to cover all three partnerships: **Microsoft**, **Snowflake**, and **Databricks**.

---

## Page structure

Format per section type:

- **Hero** — **Header text** (1 liner) + **Secondary text** (4–5 liner).
- **Outcomes / impact** — **Number** + **one liner** + **case study link**.
- **Capabilities / solutions** — **Name** + **one liner** + **4–5 liner description**.
- **Case studies** — **Tag** + **title** + **URL** (relevant tagging examples).
- **Marketplace offers / products** — **Marketplace URL** + **title** + **2 liner**.
- **Testimonials** — quote + attribution.

| § | Section | Fields | Repeats |
|---|---|---|---|
| 1 | **Hero** | Header text (1 liner, H1 max 10 words) + Secondary text (4–5 lines — what the service does + who it's for) | — |
| 2 | **Capabilities** | Name (one liner) + one-liner tagline + 4–5 line description (what we do + the tech used — Microsoft / Snowflake / Databricks) | 4 items |
| 3 | **Business outcomes** | Number + one liner + case study link | 3 items |
| 4 | **Products** | Marketplace URL + title + 2 liner | 3 items |
| 5 | **Case studies** | Tag + title (verbatim from the blog) + URL | 3 items |
| 6 | **Insights / blogs** | Title (verbatim) + 1 line teaser + URL | 3 items |
| 7 | **Testimonials** *(always last content section)* | Eyebrow `Testimonials`, H2 `What our clients have to say` *(fixed site-wide)*. 1–2 quotes — ≤ 40 words each + attribution (role — industry/company; anonymized OK) | 1–2 items |

---

## Example (from the live `/services/agentic-ai` page)

Use this as a reference for the shape and tone of **Header text** + **Secondary text**.

**Hero**
- Header text: `Automate and innovate with agentic AI & machine learning`
- Secondary text: `Uncover hidden patterns and automate processes with our agentic AI and machine learning solutions, tailored for your business needs.`

**Capability #1**
- Header text: `Agentic AI`
- Secondary text: `Explore new possibilities with agentic AI. We help you harness advanced LLM models to create innovative solutions, from content generation to automated design and beyond. Multi-agent orchestration on Azure OpenAI with full observability, governance, and human-in-the-loop controls.`

**Business outcome #1**
- Header text: `Enhanced decision-making`
- Secondary text: `Use AI-driven insights to make smarter, data-backed decisions that propel your business forward.`

**Product #2**
- Header text: `MigrateFAST`
- Secondary text: `AI-assisted migration` — Marketplace URL: `/products/migratefast`

**Case study #1**
- Header text: `Modernizing the software development lifecycle with GitHub Copilot`
- Secondary text: `How a global engineering org rolled out GitHub Copilot with measurable lift in pull-request throughput and test coverage.` — URL: `https://blog.maqsoftware.com/...`

**Insight #1**
- Header text: `Empowering businesses with AI: Frameworks that deliver results`
- Secondary text: `A field-tested framework for shipping AI initiatives that produce measurable business outcomes.` — URL: `https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html`

---

## SEO meta

| Field | What sales provides |
|---|---|
| Page title | `{Service name} Services \| MAQ Software` — under 60 chars |
| Meta description | 1 line, 150–160 chars, includes the search phrase + one outcome number |
| Top 3 search keywords | comma-separated |
| Canonical URL | (web team will fill) |

---

## Submission template (copy once per service)

```
SERVICE NAME: ____________
URL slug: /services/____________

1. HERO
   Header text (1 liner):
   Secondary text (4–5 lines):

2. CAPABILITIES (4)  — name + one liner + 4–5 line description
   #1  Name: ____  One liner: ____  Description: ____
   #2  Name: ____  One liner: ____  Description: ____
   #3  Name: ____  One liner: ____  Description: ____
   #4  Name: ____  One liner: ____  Description: ____

3. BUSINESS OUTCOMES (3)  — number + one liner + case study link
   #1  Number: ____  One liner: ____  Case study URL: ____
   #2  Number: ____  One liner: ____  Case study URL: ____
   #3  Number: ____  One liner: ____  Case study URL: ____

4. PRODUCTS (3)  — Marketplace URL + title + 2 liner
   #1  Marketplace URL: ____  Title: ____  2 liner: ____
   #2  Marketplace URL: ____  Title: ____  2 liner: ____
   #3  Marketplace URL: ____  Title: ____  2 liner: ____

5. CASE STUDIES (3)  — tag + title + URL
   #1  Tag: ____  Title: ____  URL: ____
   #2  Tag: ____  Title: ____  URL: ____
   #3  Tag: ____  Title: ____  URL: ____

6. INSIGHTS (3)
   #1  Title: ____  Teaser: ____  URL: ____
   #2  Title: ____  Teaser: ____  URL: ____
   #3  Title: ____  Teaser: ____  URL: ____

7. TESTIMONIALS (1–2)
   #1  Quote: ____  Attribution: ____  Signed off (Y/N): ____

SEO
   Page title:
   Meta description:
   Top 3 keywords:
```

---

## Out of scope for sales

- Iconography, colors, layout.
- SEO canonical URL and Open Graph image.
- Routing and code.
