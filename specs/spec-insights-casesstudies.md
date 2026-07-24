# Insights Page Spec — Case Studies

> Source: https://maqsoftware.com/case-studies
> Sibling specs: [spec-insights-consultingoffer.md](spec-insights-consultingoffer.md), [spec-insights-powerbicustomvisualguide.md](spec-insights-powerbicustomvisualguide.md), [spec-insights-bestpracticeguide.md](spec-insights-bestpracticeguide.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the **primary** Insights resource page. It defines the shared Insights hub
navigation contract: the Insights experience must expose all four Resource pages
from maqsoftware.com: Case Studies, Consulting offers, Power BI custom visual guide,
and Best practice guides.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/insights/case-studies` |
| Page component | `src/pages/InsightsCaseStudies.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<CTA />` |
| New insights building blocks | `src/components/insights/InsightsHero.tsx`, `InsightsResourceNav.tsx`, `InsightsFilterBar.tsx`, `InsightsCaseStudyGrid.tsx`, `InsightsPagination.tsx` |
| Header nav integration | Header "Insights" should route to `/insights/case-studies` (not in-page scroll) |

**Design goal:** use the same visual language as `/services/agentic-ai` (compact
hero, dense cards, 48px section rhythm, red-accent interactions), while preserving
case-studies content and filtering behavior from maqsoftware.com.

---

## 2. Page composition (top -> bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active state on "Insights")*
3. `<InsightsHero variant="case-studies" />`       — section 3.1
4. `<InsightsResourceNav active="case-studies" />` — section 3.2
5. `<InsightsFilterBar />`                          — section 3.3
6. `<InsightsCaseStudyGrid />`                      — section 3.4
7. `<InsightsPagination />`                         — section 3.5
8. `<CTA />` *(shared)*
9. `<Footer />` *(shared)*

> **Global Insights rule:** `InsightsResourceNav` must always contain exactly these 4 destinations and be visible on every Insights page:
> 1) Case Studies (`/insights/case-studies`), 2) Consulting offers (`/insights/consulting-offers`), 3) Power BI custom visual guide (`/insights/power-bi-custom-visual-guide`), 4) Best practice guides (`/insights/best-practice-guides`).

---

## 3. Section specs

### 3.1 InsightsHero (case studies)

- **Layout:** left 62% copy + CTA, right 38% decorative card stack (CSS only).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (from source):**
- **Eyebrow:** `INSIGHTS`
- **H1:** `Case Studies`
- **Subhead:**
  > Explore real-world outcomes across AI, data, reporting, cloud, and security implementations delivered by MAQ Software.
- **Primary CTA:** `Explore latest studies` -> scroll to filters/grid.
- **Secondary CTA:** `Contact Us` -> `mailto:customersuccess@maqsoftware.com?subject=Case%20Studies%20-%20MAQ%20Software`

### 3.2 InsightsResourceNav (shared hub strip)

- **Eyebrow:** `RESOURCES`
- **Title:** `Explore all insights resources`
- **Layout:** 4 linked cards; active card highlighted with `--maq-red` border and pale fill.

**Cards (verbatim labels from source footer resources list):**
1. `Case Studies` -> `/insights/case-studies`
2. `Consulting offers` -> `/insights/consulting-offers`
3. `Power BI custom visual guide` -> `/insights/power-bi-custom-visual-guide`
4. `Best practice guides` -> `/insights/best-practice-guides`

### 3.3 InsightsFilterBar (service filters)

- **Filter chips (from source taxonomy):**
  - `All`
  - `Agentic AI & Machine Learning`
  - `Data & analytics`
  - `Reporting & visualization`
  - `Application modernization`
  - `Cloud optimization`
  - `Security`
- **Behavior:** client-side filter by tags attached to each case study item.
- **Default:** `All`.

### 3.4 InsightsCaseStudyGrid

- **Layout:** 3-card grid desktop, 2-card tablet, 1-card mobile.
- **Card fields:** publish date badge, service tag, title, teaser, `Read full article ->` external link.
- **Data source:** local content file generated from [case-studies.md](case-studies.md) catalog.

**Seed cards to pin above fold (newest first):**
1. `Transforming AI interest into adoption by establishing an AI Center of Excellence`
   - https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html
2. `Accelerating software development with agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html
3. `Reinventing legal operations with agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/reinventing-legal-operations-with.html
4. `Transforming finance with agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html
5. `Reshaping retail with Agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html
6. `Unifying disconnected data systems using Microsoft Fabric and OneLake`
   - https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html

### 3.5 InsightsPagination

- **Behavior target:** preserve source behavior for large catalog (101 items).
- **Page size:** 12 cards per page.
- **Controls:** Previous / numeric / Next.
- **URL sync:** `?page=N&service=<slug>`.

### 3.6 CTA + footer

- Reuse existing shared `<CTA />` and `<Footer />`.
- No page-specific footer overrides.

---

## 4. Theming

Use the same tokens and interaction language as `spec-service-agentic-ai.md`:
`--maq-red`, `--maq-red-pale`, `--maq-off-white`, `--maq-surface-cream`,
`--maq-black`, `--maq-ink`, `--maq-gray-500/600/700`, `--maq-border`.

- Hover behavior: red border + soft shadow.
- Section rhythm: `48px` vertical spacing.
- Typography scale: H1 38-42px, H2 28-30px, body 14px.

---

## 5. SEO

- **title:** `Case Studies | MAQ Software`
- **description:** `Browse MAQ Software case studies across Agentic AI, Fabric, Power BI, cloud modernization, and security use cases.`
- **canonical:** `https://maqsoftware.com/case-studies`
- **og:image:** `[PLACEHOLDER - marketing asset]`

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- Preserve original case-study titles exactly as published.
- External links open in new tab with `rel="noreferrer"`.
- Insights hub must always expose all 4 resources pages.

---

## 7. Content reconciliation (source -> target)

| Source block | Target |
|---|---|
| Case Studies hero/title | 3.1 InsightsHero |
| Resource links in footer | 3.2 InsightsResourceNav |
| Service filters (All + 6 services) | 3.3 InsightsFilterBar |
| Long list of case study cards | 3.4 InsightsCaseStudyGrid |
| Multi-page catalog behavior | 3.5 InsightsPagination |
| Footer content groups | Shared `<Footer />` |

**Drops:** none.
**Adds:** standardized Insights hub strip for cross-resource navigation.

---

## 8. Build & verify

```powershell
npm run dev
npm run build
```

Done when:
1. `/insights/case-studies` renders and filters work.
2. Insights hub shows all 4 resources links on page.
3. Case study links open correct blog URLs.
4. `npm run build` exits 0.

## 9. Out of scope (v1)

- Full-text search and faceted filtering beyond service tags.
- CMS authoring flow.
- Automated ingest from blog RSS.
