# Service Page Spec — Data & Analytics

> Source: https://maqsoftware.com/services/data-and-analytics
> Sibling specs: [spec-service-agentic-ai.md](spec-service-agentic-ai.md), [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This page describes the Data & Analytics service surface and maps content from the existing MAQ site into the new 9-section page spec used across the site.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/data-and-analytics` |
| Page component | `src/pages/ServiceDataAndAnalytics.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| New service building blocks | `src/components/service/ServiceHero.tsx`, `ServiceCapabilities.tsx`, `ServiceOutcomes.tsx`, `ServiceProducts.tsx`, `ServiceCaseStudies.tsx`, `ServiceInsights.tsx` |
| Header nav integration | Services mega-menu "Data & analytics" → `/services/data-and-analytics` |

**Design goal:** scannable, dense, single-viewport sections. Vertical padding `48px` (hero `48–56px`), parallel multi-column layouts, h2 `28–30px`, body `14px`. No oversized hero.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active state on "Services")*
3. `<ServiceHero />`              — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ServiceCapabilities />`      — §3.2  (capability pillars)
6. `<ServiceOutcomes />`          — §3.3  (3 business-outcome cards)
7. `<ServiceCaseStudies />`       — §3.4  (4 related case studies)
8. `<ServiceInsights />`          — §3.5  (3 blog insights)
9. `<ServiceTestimonials />`     — §3.6  (if present)
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared)*

> **Global rule:** `<Testimonials />` is mandatory on every page and must always render immediately before `<CTA />` (last content section). Eyebrow must be `TESTIMONIALS`; H2 must be `What our clients have to say`.

---

## 3. Section specs

### 3.1 ServiceHero (compact 2-column band)

- **Layout:** left 60% = copy + CTAs, right 40% = decorative data mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (verbatim from source):**
- **Eyebrow:** `Data engineering & analytics`
- **H1:** `Medallion lakehouses, built for scale and trust`
- **Subhead:** `Modern data platforms on Microsoft Fabric, Snowflake, and Databricks — governed lakehouses, semantic models, and real-time analytics that power Copilot, AI agents, and decision-making across the enterprise.`
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Data%20%26%20Analytics%20-%20MAQ%20Software`
- **Secondary CTA:** `Get started` → `https://maqsoftware.com/contact` (preserve live CTAs as secondary where appropriate)

### 3.2 ServiceCapabilities — "Our data & analytics capabilities"

- **Section id:** `data-analytics-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our data & analytics capabilities`
- **Subhead:** `Capabilities that turn data into reliable, scalable analytics and real-time decisioning.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 3–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of selectable capability cards.

**Capabilities (extracted from source):**

| # | Name | Description | Tags |
|---|---|---|---|
| 1 | `Data & analytics strategy` | Develop a comprehensive data strategy that aligns with your business goals. Our experts help you identify key data sources, establish governance frameworks, and create a roadmap for data-driven success. | `Strategy`, `Governance`, `Roadmap` |
| 2 | `Data modernization using Microsoft Fabric` | (title from source — content to be expanded in implementation) | `Microsoft Fabric`, `Modernization` |
| 3 | `Real-time Intelligence using Microsoft Fabric` | (title from source — content to be expanded in implementation) | `Real-time`, `Streaming`, `Fabric` |
| 4 | `Data migration` | (title from source — content to be expanded in implementation) | `Migration`, `ETL`, `Lift-and-shift` |
| 5 | `Platform optimization` | (title from source — content to be expanded in implementation) | `Optimization`, `Cost`, `Performance` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}`.
- **Footer link below panel:** `Data & analytics case studies →` → `https://maqsoftware.com/case-studies.html?filter=data-and-analytics` (preserves source link).

### 3.3 ServiceOutcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when data & analytics are delivered with engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards (inferred / verbatim headings from source):**

| Title | Description |
|---|---|
| `Optimized data usage` | Unlock the full potential of your data with tailored analytics strategies that drive informed decision-making and business growth. |
| `Boundless scalability` | Scale your data operations effortlessly, ensuring your analytics capabilities grow alongside your business demands. |
| `Increase in efficiency` | Streamline processes and reduce manual efforts, resulting in increased productivity and faster time-to-insight. |

### 3.4 ServiceCaseStudies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are putting data & analytics to work`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag (placeholder), title, 1–2 line teaser, "Read full story →" link.
- **Cards (verbatim links from source):**

| Sub-tag | Title | Link |
|---|---|---|
| `Event information` | `Enhancing event information access with Copilot technology` | https://blog.maqsoftware.com/2024/08/streamlining-event-information-access.html |
| `Real-time streaming` | `Increasing efficiency by switching from batch processing to real-time streaming` | https://blog.maqsoftware.com/2024/07/increasing-efficiency-by-switching-from.html |
| `Information retrieval` | `Streamlining information retrieval with AI Copilots` | https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html |
| `Task management` | `Optimizing task management with smart recommendations` | https://blog.maqsoftware.com/2024/06/optimizing-task-management-with-smart.html |

- **Footer link below grid:** `See all data & analytics case studies →` → `https://maqsoftware.com/case-studies.html?filter=data-and-analytics`.

### 3.5 ServiceInsights — "Our data & analytics insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our data & analytics insights`
- **Subhead:** `See our research that goes into optimizing our data & analytics service.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards (verbatim from source where available):**

| Title | Link |
|---|---|
| `Microsoft Fabric Feature for Real-time Analytics` | https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html |
| `Embracing the Future of Data Management with Microsoft Fabric: A Setup Guide` | https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html |
| `Optimize your Power BI Reports and Usage with LoadFAST` | https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html |

### 3.6 ServiceTestimonials — "What our clients have to say"

- **Eyebrow:** `TESTIMONIALS` (exact text)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px). Each card: opening quote glyph in `--maq-red` (18% opacity, Georgia serif, 56px), body in `--maq-black` 15px / 1.55, attribution in `--maq-gray-600` uppercase 12px / weight 600.
- **Position:** always second-to-last section, immediately before `<CTA />`.
- **Notes:** The source page does not include explicit testimonial quote blocks in the visible content returned. Add placeholder quotes only if marketing provides them; otherwise render the testimonials section using the global rule but keep it empty/hidden until copy is supplied.

### 3.7 CTA (shared)

Reuses shared `<CTA />` component. Primary CTA should use `mailto:customersuccess@maqsoftware.com` per brand rules.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming

Editorial Red v3 tokens only — `--maq-red`, `--maq-red-pale`, `--maq-off-white`,
`--maq-surface-cream`, `--maq-black`, `--maq-ink`, `--maq-gray-500/600/700`,
`--maq-border`. Section background alternation: off-white (hero), white (capabilities), off-white (outcomes), white (products), off-white (case studies), white (insights). Card hover: `border-color: var(--maq-red)`, shadow `0 6px 16px rgba(0,0,0,0.06)`.

---

## 5. SEO

- **title:** `Data & Analytics Services | MAQ Software`
- **description:** `Drive success with data-driven insights — use MAQ Software's data & analytics solutions to transform your data into strategic insights that fuel growth and innovation.`
- **canonical:** `https://maqsoftware.com/services/data-and-analytics`
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
| H1 "Drive success with data-driven insights" + subhead + Get started | §3.1 ServiceHero |
| "Our data & analytics capabilities" block and capability headings | §3.2 ServiceCapabilities |
| "Your business outcomes" cards | §3.3 ServiceOutcomes |
| "Data & analytics products" product links | §3.4 ServiceProducts |
| "Related case studies" 4 blog links | §3.5 ServiceCaseStudies |
| "Our data & analytics insights" 3 blog links | §3.6 ServiceInsights |
| Footer / specializations / ISO certs / support links | Shared `<Footer />` |

**Drops:** none intentionally. Where the live page provided only headings (no long copy), the heading has been preserved and a note added to expand details during implementation.

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/#/services/data-and-analytics
npm run build        # must exit 0
```

Done when:
1. `npm run build` exits 0.
2. Page renders the exact copy in §3.
3. Route `/services/data-and-analytics` is reachable from the URL.
4. Other pages do not regress.

## 9. Out of scope (v1)

- Per-capability landing pages (capabilities currently mailto).
- Live CMS for case studies and insights.
- Header mega-menu wiring for all services (only this route needs to be active now).
- Localization.
