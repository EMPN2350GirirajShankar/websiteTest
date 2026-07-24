# Service Page Spec — Reporting & Business Intelligence

> Source: https://maqsoftware.com/services/reporting-and-visualization
> Sibling specs: [spec-service-agentic-ai.md](spec-service-agentic-ai.md), [spec-industry-retail.md](spec-industry-retail.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the **second** service-overview page in the new site. It reuses the
section taxonomy defined in [spec-service-agentic-ai.md](spec-service-agentic-ai.md);
deviations are limited to copy and the 4 capability pillars.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/reporting-bi` |
| Page component | `src/pages/ServiceReportingBI.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Reused service building blocks | `src/components/service/ServiceHero.tsx`, `ServiceCapabilities.tsx`, `ServiceOutcomes.tsx`, `ServiceProducts.tsx`, `ServiceCaseStudies.tsx`, `ServiceInsights.tsx`, `ServiceTestimonials.tsx` |
| Header nav integration | Services mega-menu "Reporting & business intelligence" → `/services/reporting-bi` |

**Design goal:** identical to Agentic AI page — scannable, dense, single-viewport
sections. Vertical padding `48px` (hero `48–56px`), parallel multi-column
layouts, h2 `28–30px`, body `14px`. No oversized hero.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active state on "Services")*
3. `<ServiceHero />`              — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ServiceCapabilities />`      — §3.2  (4 capability pillars, tabbed list+detail)
6. `<ServiceOutcomes />`          — §3.3  (3 business-outcome cards)
7. `<ServiceCaseStudies />`       — §3.4  (4 related case studies)
8. `<ServiceInsights />`          — §3.5  (3 blog insights)
9. `<ServiceTestimonials />`     — §3.6  (2 client quotes)
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared)*

> **Global rule:** `<Testimonials />` is mandatory on every page and must always render immediately before `<CTA />` (last content section). Eyebrow must be `TESTIMONIALS`; H2 must be `What our clients have to say`.

---

## 3. Section specs

### 3.1 ServiceHero (compact 2-column band)

- **Layout:** left 60% = copy + CTAs, right 40% = decorative Power BI dashboard mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (verbatim from source):**
- **Eyebrow:** `Reporting & business intelligence`
- **H1:** `From legacy BI to real-time Power BI on Microsoft Fabric`
- **Subhead:**
  > We build, modernize, and migrate enterprise BI — moving Tableau, SAP BO, SAP Crystal, Qlik, Cognos, and MicroStrategy estates to Power BI on Microsoft Fabric, with semantic models, custom visuals, and a storytelling layer your business actually uses.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Reporting%20%26%20BI%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore capabilities` → scroll to `#bi-capabilities`

**Decorative visual (CSS mosaic, aria-hidden):**
- Tile A: "Sales by region" stacked-bar chart
- Tile B: "Report performance" KPI tiles (load time, refresh, DAX cost)
- Tile C: "Embedded view" Power BI report frame with red progress fills

### 3.2 ServiceCapabilities — "Our reporting & business intelligence capabilities"

Reproduces the 4-capability pillar section from source.

- **Section id:** `bi-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our reporting & business intelligence capabilities`
- **Subhead:** `Four capability pillars that turn raw data into governed, high-performance Power BI and Microsoft Fabric reporting.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 4–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of 4 selectable cards. Active = 2px `--maq-red` left border; rest = `--maq-border`.
  - Default selected = #1 Data visualization.

**Capabilities (verbatim from source, expanded with MAQ taglines from related blogs):**

| # | Name | Tagline | Icon | Description (left pane) | Tags |
|---|---|---|---|---|---|
| 1 | `Data visualization` | `Bring data to life` | `ChartMultiple24Regular` (red) | Transform raw data into compelling visuals. Our data visualization services help you communicate complex insights clearly, making data accessible and actionable for all stakeholders — across Power BI, custom visuals, and Fabric semantic models. | `Power BI`, `Custom visuals`, `Fabric semantic models`, `Storytelling` |
| 2 | `Migration to Power BI` | `Modernize legacy reporting estates` | `ArrowSwap24Regular` (red) | AI-assisted migration of legacy BI platforms — Tableau, Qlik, MicroStrategy, SSRS — to Power BI and Microsoft Fabric. We rebuild semantic models, RLS, and pixel-perfect layouts with our `MigrateFAST` accelerator. | `MigrateFAST`, `Tableau`, `Qlik`, `MicroStrategy`, `Fabric` |
| 3 | `Power BI embedding` | `Reporting inside the apps your users live in` | `Window24Regular` (red) | Embed governed Power BI reports inside your SaaS product, customer portal, or internal app with row-level security, tenant isolation, and a one-click deployment path via `EmbedFAST`. | `EmbedFAST`, `Power BI Embedded`, `Multi-tenant`, `RLS` |
| 4 | `Performance optimization` | `Faster refreshes, lower capacity cost` | `Gauge24Regular` (red) | Diagnose and fix slow reports, refresh failures, and capacity overruns. Our `LoadFAST` and `CertyFAST` tools surface DAX, model, and capacity bottlenecks with prioritized remediations. | `LoadFAST`, `CertyFAST`, `DAX tuning`, `Capacity optimization` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}`.
- **Footer link below panel:** `See reporting & visualization case studies →` → `https://maqsoftware.com/case-studies.html?filter=reporting-and-visualization` (preserves source link).

### 3.3 ServiceOutcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when reporting is delivered with engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards (verbatim from source):**

| Icon | Title | Description |
|---|---|---|
| `Eye24Regular` | `Data clarity` | Achieve clear, actionable insights with powerful visualizations that simplify complex data for better understanding. |
| `Timer24Regular` | `Faster decision-making` | Enable quicker decision-making by providing stakeholders with real-time, easy-to-understand data visualizations. |
| `People24Regular` | `Improved data accessibility` | Ensure that critical insights are easily accessible to everyone in your organization, fostering a data-driven culture. |

### 3.4 ServiceCaseStudies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are modernizing reporting & BI`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag, title, 1–2 line teaser, "Read full story →" link.
- **Cards (verbatim titles + source URLs, top 3 from `case-studies-shortlist.md` + 1 source-page card):**

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Fabric data agent` | Delivering accurate business intelligence insights with a Fabric data agent | A Microsoft Fabric data agent that answers business questions with citation-backed accuracy, replacing brittle hand-built dashboards. | https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html |
| `Retail` | Modernizing retail business intelligence with Microsoft Fabric and Power BI | Re-platforming a global retailer's reporting estate onto Microsoft Fabric and Power BI with a unified semantic model. | https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html |
| `Migration` | Transitioning legacy reports from Qlik to Power BI | AI-assisted Qlik → Power BI migration rebuilding semantic models, RLS, and pixel-perfect layouts on Fabric. | https://blog.maqsoftware.com/2025/06/transitioning-legacy-reports-from-qlik.html |
| `Real-time` | Real-time reporting for an organic supermarket chain | Real-time Power BI reporting on store, inventory, and freshness KPIs for an organic supermarket chain. | https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html |

- **Footer link below grid:** `See all reporting & BI case studies →` → `https://maqsoftware.com/case-studies.html?filter=reporting-and-visualization`.

### 3.5 ServiceInsights — "Our reporting & business intelligence insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our reporting & business intelligence insights`
- **Subhead:** `See our research that goes into optimizing our reporting & business intelligence service.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards (verbatim from source):**

| Title | Teaser | Link |
|---|---|---|
| `Microsoft Fabric features for real-time analytics` | A practical walk-through of the Microsoft Fabric features that make real-time analytics shippable in production. | https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html |
| `Embracing the future of data management with Microsoft Fabric: A setup guide` | A setup guide for adopting Microsoft Fabric end-to-end, from workspace topology to semantic model governance. | https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html |
| `Optimize your Power BI reports and usage with LoadFAST` | How `LoadFAST` finds and ranks the highest-impact DAX, model, and capacity fixes in a Power BI estate. | https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html |

### 3.6 ServiceTestimonials — "What our clients have to say"

- **Eyebrow:** `TESTIMONIALS` (exact text)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px). Each card: opening quote glyph in `--maq-red` (18% opacity, Georgia serif, 56px), body in `--maq-black` 15px / 1.55, attribution in `--maq-gray-600` uppercase 12px / weight 600.
- **Position:** always second-to-last section, immediately before `<CTA />`.
- **Quotes (placeholder until signed off):**

| Quote | Attribution |
|---|---|
| `MAQ Software replatformed our reporting estate onto Microsoft Fabric and Power BI in a quarter. Refresh times dropped, executives finally trust the numbers, and we retired a six-figure legacy BI license.` | `Director, Enterprise BI — Global retailer` |
| `Their Qlik-to-Power BI migration kept every report pixel-accurate and shaved 60% off the original effort estimate. The MigrateFAST tooling and the team behind it are the real deal.` | `Head of Analytics — Financial services` |

### 3.7 CTA (shared)

Reuses shared `<CTA />` component. No service-specific override required for v1.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming

Editorial Red v3 tokens only — `--maq-red`, `--maq-red-pale`, `--maq-off-white`,
`--maq-surface-cream`, `--maq-black`, `--maq-ink`, `--maq-gray-500/600/700`,
`--maq-border`. Section background alternation: off-white (hero), white
(capabilities), off-white (outcomes), white (products), off-white (case studies),
white (insights). Card hover: `border-color: var(--maq-red)`, shadow
`0 6px 16px rgba(0,0,0,0.06)`.

---

## 5. SEO

- **title:** `Reporting & Business Intelligence Services | MAQ Software`
- **description:** `Modernize your reporting estate with MAQ Software — Power BI, Microsoft Fabric, embedded analytics, legacy BI migration, and performance optimization for enterprise reporting.`
- **canonical:** `https://maqsoftware.com/services/reporting-bi`
- **keywords:** `reporting and visualization, Power BI migration, Power BI embedding, data visualization services, enterprise reporting solutions, real-time reporting, Power BI consulting, Microsoft Fabric, custom visuals, data storytelling`
- **og:image:** `[PLACEHOLDER — to be supplied by marketing]`

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- 26 years of Microsoft delivery.
- All primary CTAs → `customersuccess@maqsoftware.com`.
- Single-product names exactly as on maqsoftware.com (AI-DataLens, MigrateFAST, Fabric Admin Agent, EmbedFAST, CertyFAST, LoadFAST).

---

## 7. Content reconciliation (Pass A → Pass B)

Source page blocks → target sections:

| Source block | Target |
|---|---|
| H1 "See the full picture…" + subhead + Get started | §3.1 ServiceHero |
| "Our data & analytics capabilities" tabs (Data visualization / Migration to Power BI / Power BI embedding / Performance optimization) | §3.2 ServiceCapabilities |
| "Reporting and visualization case studies" filter link | §3.2 footer link |
| "Your business outcomes" 3 cards (Data clarity / Faster decision-making / Improved data accessibility) | §3.3 ServiceOutcomes |
| "Reporting & visualization products" 4 buttons (EmbedFAST, LoadFAST, CertyFAST, MigrateFAST) | §3.4 ServiceProducts (3 cards: EmbedFAST, LoadFAST, CertyFAST — MigrateFAST anchors §3.2 #2) |
| "Related case studies" 4 cards | §3.5 ServiceCaseStudies (refreshed with top 3 from `case-studies-shortlist.md` + 1 from source page) |
| "Our reporting & visualization insights" 3 cards | §3.6 ServiceInsights |
| Footer (services / products / resources / specializations / ISO / address) | Shared `<Footer />` |
| Top banner | Shared `<Announcement />` |

**Drops:** MigrateFAST product card (moved to §3.2 capability #2 — still discoverable via `/products`).
**Adds:** §3.5 refreshed with 2026 / 2025 case studies per `case-studies-shortlist.md` (Reporting & BI section average 9.7 / 10).

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/#/services/reporting-bi
npm run build        # must exit 0
```

Done when:
1. `npm run build` exits 0.
2. Page renders the exact copy in §3.
3. Route `/services/reporting-bi` is reachable from the URL.
4. Other pages do not regress.

## 9. Out of scope (v1)

- Per-capability landing pages (capabilities currently mailto).
- Live CMS for case studies and insights.
- Header mega-menu wiring for all 6 services (only Reporting & BI link needs to be active alongside Agentic AI).
- Localization.
