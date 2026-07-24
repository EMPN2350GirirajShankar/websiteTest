# Industry Page Spec — Manufacturing

> Sibling document to [spec.md](spec.md) (home page) and
> [spec-industry-retail.md](spec-industry-retail.md). Same authoring rules
> apply: edit this file, then ask the assistant to "sync code to spec" and only
> the matching components / route data will change.
>
> Source content: `Manufacturing-Page-Content (1).docx`

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/industries/manufacturing` |
| Page component | `src/pages/IndustryManufacturing.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />` from home |
| Industry building blocks | Reuse `src/components/industry/IndustryHero.tsx`, `SolutionShowcase.tsx`, `ImpactStats.tsx`, `IndustryCaseStudies.tsx`, `MarketplaceOffers.tsx`, `Testimonials.tsx` |
| Header nav integration | Industries mega-menu "Manufacturing" → `/industries/manufacturing` |
| Redirect (legacy) | Add `/expertise/manufacturing/manufacturing /industries/manufacturing 301` to `public/_redirects` if a legacy URL exists |

**Design goal:** same dense, scannable layout used by Retail — tight section padding (`48–56px`), multi-column layouts, compact typography.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, with active state on "Industries")*
3. `<IndustryHero />`                  — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ImpactStats />`                   — §3.2 (4 outcome cards)
6. `<SolutionShowcase />`              — §3.3 (Manufacturing Agents — tabbed/list+detail layout)
7. `<IndustryCaseStudies />`           — §3.4 (3 featured manufacturing case studies)
8. `<MarketplaceOffers />`             — §3.6 (3 cards: consulting offers)
9. `<Testimonials />`                  — §3.5 (1 quote) — *always second-to-last, just before CTA*
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared)*

---

## 3. Section specs

### 3.1 IndustryHero (compact, 2-column band)

- **Layout:** same 2-column band as Retail (left copy 60%, right visual 40%).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.
- **Visual:** CSS-only manufacturing-themed dashboard tiles (inventory levels bar chart, vendor receipt processing status, production line throughput sparkline). All decorative (`aria-hidden="true"`).

**Copy (verbatim from content submission):**
- **Eyebrow:** `MANUFACTURING`
- **H1:** `Powering Smarter Manufacturing with AI-Driven Operations`
- **Subhead:**
  > Supply chain disruptions and manual vendor receipt processing are costing manufacturers time and margin they cannot afford to lose. Leading industrial organizations are deploying AI agents that monitor inventory in real time and automate goods receipt processing from delivery to ERP entry—all on a governed data foundation. At MAQ Software, we build and deploy those agents on Microsoft Fabric, Snowflake, and Databricks—connecting plant operations, supply chain, and procurement on a single platform. As a Top 25 Global Microsoft Partner and Microsoft Fabric Featured Partner, we take you from AI experimentation to enterprise-scale production—with governance, security, and measurable ROI built in.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Manufacturing%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore manufacturing solutions` → scroll to `#manufacturing-solutions`

### 3.2 ImpactStats (4 outcome cards, single row)

- **Section eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for manufacturing leaders`
- **Subhead:** `Numbers from MAQ Software engagements with global manufacturers.`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: big number, label, 1-line source.

**Cards:**

| Metric | Label | Source |
|---|---|---|
| `40%` | Faster data onboarding across ten disconnected manufacturing systems — Microsoft Fabric and OneLake unification for a global medical devices manufacturer | [Unifying disconnected data systems](https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html) |
| `[PLACEHOLDER]` | `[To be supplied by case study owner]` | — |
| `[PLACEHOLDER]` | `[To be supplied by case study owner]` | — |
| `[PLACEHOLDER]` | `[To be supplied by case study owner]` | — |

> **Note:** Impact stats #2–#4 are pending from the case study owner. Update this table when figures are available — the cards regenerate from it.

### 3.3 SolutionShowcase — "Manufacturing Agents"

- **Section id:** `manufacturing-solutions`
- **Eyebrow:** `AGENTIC AI`
- **Title:** `Make your manufacturing operations smarter with our Manufacturing Agents`
- **Layout:** same white rounded panel as Retail (left detail + right rail). Clicking a right-side item updates the left detail. Default selection = item #1.

**Agents (2):**

| # | Name | Tagline | Icon | Description |
|---|---|---|---|---|
| 1 | `Inventory Overview Agent` | `Real-time inventory visibility across warehouses, lines, and suppliers` | `BoxMultiple24Regular` (red) | Inventory blind spots across warehouses and production lines lead to costly stockouts, line stoppages, and excess safety stock. MAQ Software builds an agent that consolidates inventory data across locations, monitors stock levels against demand signals, and alerts operations teams to shortfalls before they disrupt production—on Microsoft Fabric with real-time data feeds and Power BI dashboards. Your supply chain and plant operations teams gain a single view of inventory across the enterprise, so replenishment decisions are made on current data rather than yesterday's report. |
| 2 | `Vendor Receipt Scanner` | `Automated goods receipt processing from vendor delivery to ERP entry` | `DocumentSearch24Regular` (red) | Manual goods receipt processing slows procurement cycles, introduces keying errors, and delays the three-way match between purchase orders, delivery notes, and invoices. MAQ Software builds an agent that scans vendor receipts, extracts delivery and quantity data using Azure AI Document Intelligence, validates against open purchase orders, and posts matched receipts into your ERP—on Microsoft Fabric with a full audit trail. Your procurement and warehouse teams close the goods receipt cycle in minutes rather than hours, reducing processing backlogs and duplicate-payment risk. |

- **Category label on both agents:** `Supply Chain & Inventory`
- **Button:** `Know More` — outlined red, opens `mailto:customersuccess@maqsoftware.com?subject={Agent name} — Manufacturing — MAQ Software`

### 3.4 IndustryCaseStudies (3 featured manufacturing studies)

- **Eyebrow:** `MANUFACTURING CASE STUDIES`
- **Title:** `How manufacturers move faster with MAQ Software`
- **Layout:** 3-column card grid. Each card: tag, title, 1–2 line teaser, "Read full story →" link.

**Cards:**

| Tag | Title | Teaser | Link |
|---|---|---|---|
| `Manufacturing · Agentic AI · Azure AI` | Transforming AI interest into adoption by establishing an AI Center of Excellence | US-based global manufacturing org; covers supply chain, quality inspection, procurement automation, SOP processing on Azure AI. | https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html |
| `Manufacturing · Microsoft Fabric · Data Unification` | Unifying disconnected data systems using Microsoft Fabric and OneLake | Medical devices manufacturer; 40% faster data onboarding, ten systems unified on Fabric. | https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html |
| `Manufacturing · [PLACEHOLDER]` | `[To be supplied by the web/content team]` | `[To be supplied when a manufacturing-specific case study is published]` | `#` |

> **Note:** Case study #3 is pending. Update this table when a new manufacturing case study is published.

- **Footer link:** `See all manufacturing case studies →` → `https://maqsoftware.com/case-studies`

### 3.5 Testimonials

- **Eyebrow:** `TESTIMONIALS`
- **Title:** `What our clients have to say`
- **Layout:** 2-column quote cards (single card centered when only 1 quote). Opening quote mark glyph (`"`), quote body, attribution line.

**Quotes:**

| Quote | Attribution |
|---|---|
| `We engaged MAQ Software to build our AI CoE and prioritize use cases across plant operations, supply chain, and quality. Within two weeks we had a working prototype and a clear roadmap to enterprise rollout.` | `VP, Manufacturing Operations — Global industrial manufacturer` |

> Mark this section as "placeholder copy — to be replaced with approved quotes" until the marketing team supplies signed-off testimonials. The DOCX content included only one testimonial with partial attribution — update when full attribution is available.

### 3.6 MarketplaceOffers (3 cards)

- **Title:** `Our Marketplace Offers`
- **Subhead:** `Accelerate manufacturing outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning AI strategy, real-time intelligence, and data platform modernization.`
- **Layout:** 3-column grid (2×2 below 960px, 1 column below 640px).

**Cards:**

| Category pill | Title | Description | Link target |
|---|---|---|---|
| `AI STRATEGY` | AI CoE and Solution Envisioning | Structured engagement to establish an AI Center of Excellence for manufacturing, prioritize use cases across plant operations, supply chain, and quality, and deliver a working prototype in two weeks on Azure AI. | [Azure Marketplace](https://marketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.ai_coe_and_solution_envisioning) |
| `REAL-TIME INTELLIGENCE` | Real-Time Intelligence in Microsoft Fabric: 1-Day Workshop | Hands-on workshop to design and prototype real-time data flows for shop-floor monitoring, inventory alerts, and supply chain visibility on Microsoft Fabric. | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.real_time_intelligence_using_microsoft_fabric) |
| `DATA PLATFORM` | Microsoft Fabric: 2-Hour Briefing | Free briefing covering how Microsoft Fabric unifies manufacturing data estates—from ERP and MES to plant-floor feeds—with AI capabilities and governance built in. | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.microsoftfabricbriefing) |

### 3.7 CTA (reuses shared `<CTA />`)

Same component as home page. No manufacturing-specific override for v1.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming & visuals

Inherits all theme tokens from the shared design system:
- All red elements use `--maq-red` (#BA141A). All deep panels use `--maq-black`.
- Card hover: `border-color: var(--maq-red)`, lift shadow `0 6px 16px rgba(0,0,0,0.06)`.
- Category pills: bg `--maq-red-pale`, text `--maq-red`, font 11px / 700 / uppercase / letter-spacing `0.06em`, padding `4px 8px`, radius `4px`.
- Section padding: vertical `48px`, except hero `48px` and CTA reuses home's `80px`.
- Section background alternation: white / off-white.

---

## 5. Accessibility

- Same rules as Retail spec §5.
- All interactive cards (solution rail, marketplace cards) are `<button>` or `<a>`, focusable, with visible focus ring.
- Selected solution rail item exposes `aria-current="true"`.
- Category pills are decorative — actual `<a>` is the title.
- Decorative hero illustration carries `aria-hidden="true"`.
- All quotes use `<blockquote><p>…</p><cite>…</cite></blockquote>`.

---

## 6. SEO

- **title:** `Manufacturing Solutions | MAQ Software`
- **description:** `MAQ Software helps manufacturers deploy AI agents for inventory visibility, vendor receipt automation, and supply chain optimization on Microsoft Fabric, Snowflake, and Databricks.`
- **canonical:** `https://maqsoftware.com/industries/manufacturing`
- **og:image:** `[PLACEHOLDER — to be supplied]`

---

## 7. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- "26 years" (current as of 2026).
- All primary CTAs → `customersuccess@maqsoftware.com`.

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/industries/manufacturing
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. The Manufacturing page renders with the exact copy in §3.
3. Header "Industries → Manufacturing" navigates to the page.
4. No other pages regress (home, retail, etc. stay unchanged).

---

## 9. Data provenance

All data on this page is sourced from:
- **Hero copy, section titles, agent descriptions:** `Manufacturing-Page-Content (1).docx` — verbatim
- **Impact stats:** #1 from published blog post (linked in §3.2); #2–#4 pending
- **Case study titles & URLs:** From content submission DOCX; blog posts verified
- **Marketplace offers:** Verified live Azure Marketplace listings with confirmed Manufacturing / Industrials tags
- **Testimonial:** From DOCX content submission — partial attribution, pending sign-off

---

## 10. Reconciliation report

### Pass A — Inventory of source content blocks

| # | Block | Word count (approx) | Status |
|---|---|---|---|
| 1 | Hero H1 | 8 | ✅ Mapped → §3.1 |
| 2 | Hero subhead (4–5 lines) | 95 | ✅ Mapped → §3.1 |
| 3 | Impact stat #1 (40% + label + URL) | 20 | ✅ Mapped → §3.2 |
| 4 | Impact stats #2–#4 (blank/TBD) | — | ✅ Mapped → §3.2 as `[PLACEHOLDER]` |
| 5 | Agent #1: Inventory Overview Agent (name + tagline + description) | 95 | ✅ Mapped → §3.3 |
| 6 | Agent #2: Vendor Receipt Scanner (name + tagline + description) | 90 | ✅ Mapped → §3.3 |
| 7 | Case study #1 (AI CoE + URL) | 25 | ✅ Mapped → §3.4 |
| 8 | Case study #2 (Data unification + URL) | 20 | ✅ Mapped → §3.4 |
| 9 | Case study #3 (blank/TBD) | — | ✅ Mapped → §3.4 as `[PLACEHOLDER]` |
| 10 | Marketplace offer #1 (AI CoE + URL + description) | 40 | ✅ Mapped → §3.6 |
| 11 | Marketplace offer #2 (Real-Time Intelligence + URL + description) | 35 | ✅ Mapped → §3.6 |
| 12 | Marketplace offer #3 (Fabric Briefing + URL + description) | 35 | ✅ Mapped → §3.6 |
| 13 | Testimonial #1 (quote + partial attribution) | 40 | ✅ Mapped → §3.5 |
| 14 | URL slug `/industries/manufacturing` | — | ✅ Mapped → §1 route |
| 15 | Source verification notes per item | — | Intentionally dropped — editorial metadata not for display |

**Blocks in: 15 | Blocks mapped: 14 | Intentionally dropped: 1 (source verification notes — editorial metadata)**

---

## 11. Out of scope (v1)

- Per-agent landing pages (agents currently mailto)
- Live CMS for testimonials
- Filtered case-studies route (`?industry=manufacturing`)
- Localization
- Impact stats #2–#4 and case study #3 (pending from content/case study owners)
