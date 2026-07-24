# Content Brief — Product Pages

> For the sales team. Fill in **Header text (one liner)** and **Secondary text** for each section. The web team turns this into a live page using the same structure as the existing product pages (Fabric Admin Agent, AI-DataLens, EmbedFAST, CertyFAST, LoadFAST, MigrateFAST).

**Scope:** one brief per product. Six products in total:

1. Fabric Admin Agent
2. AI-DataLens
3. MigrateFAST
4. LoadFAST
5. EmbedFAST
6. CertyFAST

**Priority order (fill briefs in this sequence):**

- **P0** — MigrateFAST, Fabric Admin Agent
- **P1** — LoadFAST, EmbedFAST
- **P2** — AI-DataLens
- **P3** — CertyFAST

---

## Ground rules

- **AI-searchable content**
- **Human-friendly**
- **Be specific to the use case** — avoid generic words like *faster*, *better*, *reduce*, *improve*, *streamline*. Name the actual job the product does and a numerical outcome.
- **Numbers** — try aligning them to a case study (cumulative across case studies is fine).
- **Partnership stack** — try to cover all three partnerships: **Microsoft**, **Snowflake**, and **Databricks**.

---

## Page structure

Format per section type:

- **Hero** — **Header text** (1 liner) + **Secondary text** (4–5 liner) + Marketplace URL (if listed).
- **Outcomes / metrics** — **Number** + **one liner** + **case study link**.
- **Key features** — **Name** + **one liner** + **4–5 liner description**.
- **Case studies** — **Tag** + **title** + **URL** (relevant tagging examples).
- **Marketplace offer** — **Marketplace URL** + **title** + **2 liner**.
- **Testimonials** — quote + attribution.

| § | Section | Fields | Repeats |
|---|---|---|---|
| 1 | **Hero** | Header text (1 liner tagline, max 8 words) + Secondary text (4–5 lines — problem solved + who it's for) + Marketplace URL (if listed) | — |
| 2 | **At-a-glance bar** | Field name (`Built on`, `Deploys in`, `Pricing`, `Availability`) + 2–4 word value | 4 items |
| 3 | **Key features** | Name (one liner) + one-liner tagline + 4–5 line description | 5–6 items |
| 4 | **How it works** | Step name + 1 line | 3–4 items |
| 5 | **Outcomes / metrics** | Number (e.g. `70%`, `8×`, `< 5 min`) + one liner + case study link | 4 items |
| 6 | **Use cases** | Persona / scenario + 1–2 lines | 3 items |
| 7 | **Pricing & availability** | Marketplace URL | — |
| 8 | **FAQ** | Question + 2–3 line answer | 4–6 items |
| 9 | **Testimonials** *(always last content section)* | Eyebrow `Testimonials`, H2 `What our clients have to say` *(fixed site-wide)*. 1 featured case study (tag + title + URL + 1-line teaser) + 1–2 optional quotes (≤ 30 words + attribution) | 1–3 items |

---

## Example (from the live Fabric Admin Agent page)

Use this as a reference for the shape and tone of **Header text** + **Secondary text**.

**Hero**
- Header text: `Govern Microsoft Fabric Autonomously with the Fabric Admin Agent`
- Secondary text: `Fabric Admin Agent watches your tenant 24/7, correlates risks, and suggests one-click remediations across capacities, workspaces, and domains.` — Marketplace URL: `https://appsource.microsoft.com/...`

**Feature #1**
- Header text: `24/7 health monitoring`
- Secondary text: `Capacity utilization, refresh SLAs, and item failures tracked across every workspace and domain in your tenant.`

**Feature #3**
- Header text: `One-click remediation`
- Secondary text: `Suggested fixes (resize capacity, reassign workspace, archive orphaned items) execute with full audit trail.`

**Case study (featured)**
- Header text: `Modernizing retail BI with Microsoft Fabric and Power BI`
- Secondary text: `A top-3 US retailer migrated to Fabric for 8× faster Power BI refresh and a governed lakehouse.` — URL: `https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html`

**Quote**
- Header text (quote): `Fabric Admin Agent caught a throttling pattern on our F64 capacity before our morning standup. We resized in one click and avoided a board-level escalation.`
- Secondary text (attribution): `Platform owner — enterprise retailer`

---

## SEO meta

| Field | What sales provides |
|---|---|
| Page title | `{Product} — {one-line capability} \| MAQ Software` — under 60 chars |
| Meta description | 1 line, 150–160 chars, includes capability + 1 metric |
| Top 3 search keywords | comma-separated |
| Canonical URL | (web team will fill) |

---

## Submission template (copy once per product)

```
PRODUCT NAME: ____________
URL slug: /products/____________

1. HERO
   Header text (1 liner tagline ≤ 8 words):
   Secondary text (4–5 lines):
   Marketplace URL (if listed):

2. AT-A-GLANCE (4 fields)
   Built on:      ____
   Deploys in:    ____
   Pricing model: ____
   Availability:  ____

3. KEY FEATURES (5–6)  — name + one liner + 4–5 line description
   #1  Name: ____  One liner: ____  Description: ____
   …

4. HOW IT WORKS (3–4)
   #1  Step: ____  Line: ____
   …

5. METRICS (4)  — number + one liner + case study link
   #1  Number: ____  One liner: ____  Case study URL: ____
   …

6. USE CASES (3)
   #1  Persona: ____  What they use it for: ____
   …

7. PRICING & AVAILABILITY
   Marketplace URL: ____

8. FAQ (4–6)
   Q1: ____
   A1: ____
   …

9. TESTIMONIALS
   Featured case study — Tag: ____  Title: ____  URL: ____  Teaser: ____
   Quote (optional)   — Body: ____  Attribution: ____

SEO
   Page title:
   Meta description:
   Top 3 keywords:
```

---

## Out of scope for sales

- Product UI screenshots & icons.
- Code samples or API specs.
- Comparison tables vs competitors (legal + marketing sign-off needed separately).
