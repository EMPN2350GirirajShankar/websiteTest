# Industry Page Spec — Retail & Consumer Goods

> Sibling document to [spec.md](spec.md) (home page). Same authoring rules apply:
> edit this file, then ask the assistant to "sync code to spec" and only the
> matching components / route data will change.
>
> This spec is the **first** in a series of industry pages. Future industry
> pages (Financial services, Healthcare, Manufacturing, Technology, Public
> sector) should reuse the same section taxonomy defined here.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/industries/retail` (client-side; introduce `react-router-dom` if not present) |
| Page component | `src/pages/IndustryRetail.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />` from home |
| New shared building blocks | `src/components/industry/IndustryHero.tsx`, `SolutionShowcase.tsx`, `ImpactStats.tsx`, `MarketplaceOffers.tsx`, `Testimonials.tsx`, `IndustryCaseStudies.tsx` — generic, content-driven, reusable across industries |
| Header nav integration | Industries mega-menu items become real links; "Retail & consumer goods" → `/industries/retail` |

**Design goal:** the entire page should feel **dense and scannable** — minimize vertical scrolling. Use:
- Tighter section padding than home (`48–56px` vertical instead of `80px`)
- Multi-column layouts wherever the content is parallel
- Compact typography (h2 ~ `28–30px`, body ~ `14px`)
- No oversized hero — hero collapses into a 2-column band that already shows the next sections' eyebrow above the fold

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, with active state on "Industries")*
3. `<IndustryHero />`                  — §3.1
4. `<TrustBanner />` *(shared)*        — same chips as home
5. `<ImpactStats />`                   — §3.2 (4 outcome cards)
6. `<SolutionShowcase />`              — §3.3 (Retail Agents tabbed/list+detail layout)
7. `<IndustryCaseStudies />`           — §3.4 (3 featured retail case studies)
8. `<MarketplaceOffers />`             — §3.6 (4 cards: PoCs/assessments)
9. `<Testimonials />`                  — §3.5 (1–2 quotes) — *always second-to-last, just before CTA*
10. `<CTA />` *(shared)*                — same CTA as home (mailto)
11. `<Footer />` *(shared)*

---

## 3. Section specs

### 3.1 IndustryHero (compact, 2-column band)

- **Layout:** left column (60%) = copy + CTA, right column (40%) = decorative image.
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (literal):**
- **Eyebrow:** `RETAIL & CONSUMER GOODS`
- **H1:** `Powering the Next Era of Retail with AI-Driven Intelligence`
- **Subhead:**
  > AI is redefining how retailers operate, compete, and grow. At MAQ Software, we help retail and CPG organizations embed intelligence across the enterprise, from real-time decision-making to autonomous operations. Backed by deep Microsoft expertise and advanced data platforms, we enable seamless customer experiences, resilient supply chains, and intelligent store ecosystems.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Retail%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore retail solutions` → scroll to `#retail-solutions`

**Image:** illustrative SVG / CSS composition (no external asset required). Default: a stylized retail dashboard mosaic — gradient card (red→black) with three stacked mini-tiles:
1. Top tile: "Live SKU velocity" + sparkline
2. Middle tile: stylized shelf grid (3×4)
3. Bottom tile: "Today's pricing recommendations" with two thumbs-up bars

Assistant may swap with a single PNG later; for v1 keep it CSS so the build has no asset dependency.

### 3.2 ImpactStats (4 outcome cards, single row)

- **Section eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for retail leaders`
- **Subhead (one line):** `Numbers from MAQ Software engagements with global retailers and CPG brands.`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: big number, label, 1-line source.
- **Cards (derived from real published case studies):**

| Metric | Label | Source case study |
|---|---|---|
| `8×` | `Faster Power BI refresh for a top-3 US retailer` | [Modernizing retail BI with Microsoft Fabric & Power BI](https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html) |
| `Real-time` | `Direct Store Delivery visibility on Microsoft Fabric` | [Enabling real-time DSD visibility](https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html) |
| `< 1 min` | `Live KPIs replacing nightly batches at an organic supermarket chain` | [Real-time reporting for an organic supermarket chain](https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html) |
| `Personalized` | `Loyalty program lift across millions of members` | [Empowering retail growth with an optimized loyalty program](https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html) |

> If updated numbers become available from MAQ marketing, edit this table — the cards regenerate from it.

### 3.3 SolutionShowcase — "Make your retail operations smarter with our Retail Agents"

Reproduces screenshot #1 (Agentic AI retail solutions).

- **Section id:** `retail-solutions`
- **Eyebrow:** `AGENTIC AI`
- **Title:** `Make your retail operations smarter with our Retail Agents`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow). Inside:
  - **Left column (50%):** large icon, agent name, 4–5 line description, `Know More` outlined red button.
  - **Right column (50%):** vertical list of selectable cards (5 items). Selected item gets a 2px `--maq-red` border on the left; others stay plain with `--maq-border`.
  - Clicking a right-side item updates the left detail. Default selection = item #1 (What-If Pricing Agent).
- **Compact padding** so the whole panel fits in one viewport on a 1440×900 screen.

**Agents (4 — per user's instruction; screenshot's #2 Monday Morning Intel is kept, the user's "FindFAST" and "Smart Store Agent" replace others):**

| # | Name | Tagline | Icon | Description (left pane) |
|---|---|---|---|---|
| 1 | `What-If Pricing Agent` | `Pricing simulation` | `ArrowTrendingLines24Regular` (red) | Simulate pricing decisions before execution using multi-agent AI. Explore the power of pricing without the risk. Our agent simulates real-world pricing shifts, demand patterns, competitive moves, and procurement scenarios before you make a single change. See how each decision impacts revenue, margins, and supplier costs in seconds. |
| 2 | `Monday Morning Intel` | `Weekly briefings` | `Clock24Regular` (red) | Start every week with a curated executive briefing. The agent consolidates weekend sales, inventory movement, supply alerts, and competitive news into a one-page digest delivered before 9 a.m. Monday. |
| 3 | `FindFAST` | `Chat with your data` | `Chat24Regular` (red) | Natural-language interface over your Microsoft Fabric estate. Ask retail questions the way you'd ask a colleague — basket mix, regional shrink, vendor performance — and get governed, citation-backed answers in seconds. |
| 4 | `Smart Store Agent` | `Connected store operations` | `BuildingRetail24Regular` (red) | Copilot-powered assistant for store managers. Surfaces live sales, inventory, and workforce signals, then suggests guided next actions — from re-merchandising slow movers to re-routing labor. |

- **Per-card right rail copy:** card title (bold black) + tagline (gray). Icon in a soft gray square box.
- **Button:** `Know More` — outlined red, opens `mailto:customersuccess@maqsoftware.com?subject={Agent name}` (placeholder until real per-agent landing pages exist).

### 3.4 IndustryCaseStudies (3 featured retail studies)

- **Eyebrow:** `RETAIL CASE STUDIES`
- **Title:** `How retailers move faster with MAQ`
- **Layout:** 3-column card grid. Each card: industry sub-tag, title, 1–2 line teaser, "Read full story →" link.
- **Cards (pulled from [case-studies.md](case-studies.md) Retail bucket):**

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Grocery` | Transforming grocery retail analytics with Microsoft Fabric | Modernize grocery analytics on Fabric for sharper category, basket and supply-chain insights. | https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html |
| `Specialty retail` | Transforming supply chain analytics with Power BI on Snowflake | Replatform a specialty retailer's supply chain analytics on Snowflake + Power BI. | https://blog.maqsoftware.com/2025/03/transforming-supply-chain-analytics.html |
| `Mass retail` | Enabling real-time visibility: Direct Store Delivery with Microsoft Fabric | Deliver real-time DSD visibility on Fabric so field operations can act on live route and stock data. | https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html |

- **Footer link below grid:** `See all retail case studies →` → `/case-studies?industry=retail` (route may not exist yet; for v1 link to `https://maqsoftware.com/case-studies`).

### 3.5 Testimonials

- **Eyebrow:** `TESTIMONIALS`
- **Title:** `What our clients have to say`
- **Layout:** 2-column quote cards. Each card: opening quote mark glyph (`"`), quote body, attribution line (name • role • company logo placeholder).
- **Quotes (placeholder until real testimonials are signed off — keep them attribution-light):**

| Quote | Attribution |
|---|---|
| `MAQ's team helped us move from overnight batches to live store KPIs in under a quarter. Our managers now act on minute-by-minute signals instead of yesterday's report.` | `VP, Retail Analytics — Global grocery chain` |
| `The pricing simulation agent gave our merchants the confidence to test scenarios safely. We shipped three campaigns in the time it used to take to debate one.` | `Director, Pricing & Promotions — Specialty retailer` |

> Mark this section as "placeholder copy — to be replaced with approved quotes" until the marketing team supplies signed-off testimonials.

### 3.6 MarketplaceOffers

Reproduces screenshot #2.

- **Title:** `Our Marketplace Offers`
- **Subhead:** `Accelerate retail outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning demand planning, customer experience, and real-time intelligence.`
- **Layout:** 3-column grid (2×2 below 960px, 1 column below 640px). Each card:
  - Top: light-gray image placeholder block (`16:9`)
  - Red category pill (uppercase, small)
  - Title (bold)
  - 3-line description
  - `>` arrow link on the right of the title (Azure Marketplace listing)

**Cards (4 — per screenshot):**

| Category pill | Title | Description | Link target |
|---|---|---|---|
| `SUPPLY CHAIN` | `Supply Chain & Vendor Performance Analytics for Retail: 4-Week PoC` | A 4-week proof of concept that unifies supplier, logistics, and inventory data to expose vendor performance gaps and improve supply chain reliability. | Azure Marketplace (placeholder `#`) |
| `STORE OPERATIONS` | `Store Operations & Workforce Intelligence for Retail: 2-Week Assessment` | A 2-week assessment that benchmarks store operations and workforce productivity on Microsoft Fabric, surfacing opportunities to lift throughput and service levels. | Azure Marketplace (placeholder `#`) |
| `MERCHANDISING` | `Merchandising & Shelf Analytics for Retail: 2-Week Assessment` | A 2-week assessment that connects assortment, planogram, and shelf-execution data on Microsoft Fabric to sharpen merchandising and lift in-store conversion. | Azure Marketplace (placeholder `#`) |
| `STORE OPERATIONS` | `Store Manager Assistant for Retail` | A Copilot-powered assistant that gives store managers real-time visibility into sales, inventory, and workforce signals, with guided actions to run a smarter store. | Azure Marketplace (placeholder `#`) |

### 3.7 CTA (reuses shared `<CTA />`)

Same component as home page §4.8. No retail-specific override required for v1.
If a retail-specific message is desired later, introduce `<CTA variant="retail" />` and add a copy variant here.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming & visuals

- All red elements use `--maq-red` (#BA141A). All deep panels use `--maq-black`.
- Card hover: `border-color: var(--maq-red)`, lift shadow `0 6px 16px rgba(0,0,0,0.06)`.
- Category pills: bg `--maq-red-pale`, text `--maq-red`, font 11px / 700 / uppercase / letter-spacing `0.06em`, padding `4px 8px`, radius `4px`.
- Section padding: vertical `48px`, except hero `48px` and CTA reuses home's `80px` (kept as anchor visual rhythm at page end).

---

## 5. Accessibility

- All interactive cards (solution rail, marketplace cards) are `<button>` or `<a>`, focusable, with visible focus ring (Fluent default).
- Selected solution rail item exposes `aria-current="true"`.
- Category pills are decorative — actual `<a>` is the title.
- Decorative hero illustration carries `aria-hidden="true"`.
- All quotes use `<blockquote><p>…</p><cite>…</cite></blockquote>`.

---

## 6. Build & verify

```powershell
npm run dev          # http://localhost:5173/industries/retail
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. The Retail page renders with the exact copy in §3.
3. Header "Industries → Retail & consumer goods" navigates to the page.
4. No other pages regress (home stays unchanged).

---

## 7. How this spec is used

- Edit this file (sections, copy, card lists). Keep heading IDs intact.
- Ask the assistant to "sync the retail page to spec" — it will:
  1. Diff against `src/pages/IndustryRetail.tsx` and the industry components.
  2. Update only the affected pieces.
  3. Run `npm run build`.
- When this taxonomy stabilizes, copy this file to `spec-industry-<name>.md` for each new industry and only swap the copy + case study tables.

## 8. Out of scope (v1)

- Per-agent landing pages (agents currently mailto)
- Live CMS for testimonials
- Filtered case-studies route (`?industry=retail`)
- Localization
