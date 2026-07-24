# Insights Page Spec — Power BI Custom Visual Guide

> Source: https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals
> Sibling specs: [spec-insights-casesstudies.md](spec-insights-casesstudies.md), [spec-insights-consultingoffer.md](spec-insights-consultingoffer.md), [spec-insights-bestpracticeguide.md](spec-insights-bestpracticeguide.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This page reproduces MAQ Software's Power BI custom visual guide experience while
using the same spacing and interaction style as the Agentic AI service tab.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/insights/power-bi-custom-visual-guide` |
| Page component | `src/pages/InsightsPowerBICustomVisualGuide.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<CTA />` |
| New insights building blocks | `src/components/insights/InsightsHero.tsx`, `InsightsResourceNav.tsx`, `InsightsVisualCategoryBar.tsx`, `InsightsVisualGrid.tsx`, `InsightsSupportBanner.tsx` |
| Header nav integration | Discoverable via Insights resource strip and header Insights route |

**Design goal:** preserve content from source page (43 certified visuals,
category filters, popular visual cards), with the compact section rhythm and card
patterns used on `/services/agentic-ai`.

---

## 2. Page composition (top -> bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active on "Insights")*
3. `<InsightsHero variant="powerbi-visual-guide" />`  — section 3.1
4. `<InsightsResourceNav active="power-bi-custom-visual-guide" />` — section 3.2
5. `<InsightsVisualCategoryBar />`                      — section 3.3
6. `<InsightsVisualGrid />`                             — section 3.4
7. `<InsightsSupportBanner />`                          — section 3.5
8. `<CTA />` *(shared)*
9. `<Footer />` *(shared)*

> **Global Insights rule:** Resource nav must include all 4 pages from MAQ Resources.

---

## 3. Section specs

### 3.1 InsightsHero (custom visuals)

- **Eyebrow:** `INSIGHTS`
- **H1:** `Power BI custom visual guide`
- **Subhead (verbatim source intent):**
  > Expand your reporting capabilities with our 43 certified Power BI custom visuals. If you need help choosing the right visual for your report, try our visual guide.
- **Primary CTA:** `Explore custom visuals` -> scroll to visuals grid.
- **Secondary CTA:** `View visual guide` -> https://maqsoftware.com/services/Power-BI/VisualChooserPDF.pdf

### 3.2 InsightsResourceNav (shared hub strip)

Same shared 4-card nav contract with `Power BI custom visual guide` active.

### 3.3 InsightsVisualCategoryBar

- **Category chips (from source):**
  - `All`
  - `Certified`
  - `Change Over Time`
  - `Clustering`
  - `Comparison`
  - `Correlation`
  - `Distribution`
  - `Flow`
  - `Forecast`
  - `KPI`
  - `Part-to-Whole`
  - `Ranking`
  - `Single Metric`
  - `Utility`

- **Behavior:** chip click filters visible visual cards; default `All`.

### 3.4 InsightsVisualGrid

- **Title:** `Popular Visuals`
- **Layout:** 4-up desktop, 2-up tablet, 1-up mobile.
- **Card fields:** visual name, short description, badge pills (`Power BI Certified`, `Editor's Pick`/`Featured` if applicable), and detail link.

**Seed visuals (from source):**
1. `Gantt Chart` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/GanttChart
2. `Box and Whisker Chart` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/BoxAndWhiskers
3. `Calendar` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/Calendar
4. `Histogram with Points` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/HistogramChart
5. `Bowtie Chart` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/BowtieChart
6. `KPI Ticker` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/KPITickerChart
7. `Sunburst` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/Sunburst
8. `Violin Plot` - https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals/ViolinPlot

### 3.5 InsightsSupportBanner

- **Copy:**
  > If you have questions about our custom visuals, please visit our Power BI page on Zendesk.
- **CTA:** `Go to Zendesk` -> https://maqsoftware.zendesk.com/hc/en-us/community/topics

### 3.6 CTA + footer

Shared components; no custom footer changes.

---

## 4. Theming

Use the Agentic-AI token set and spacing:
- `--maq-red` for active category chips and focus states
- white cards with subtle border/shadow
- off-white section alternation
- typography scale aligned to service pages

---

## 5. SEO

- **title:** `Power BI Custom Visual Guide | MAQ Software`
- **description:** `Explore MAQ Software's certified Power BI custom visuals by category, including Gantt, KPI, distribution, and comparison visuals.`
- **canonical:** `https://maqsoftware.com/insights/power-bi-custom-visual-guide`
- **og:image:** `[PLACEHOLDER - marketing asset]`

---

## 6. Brand rules (must hold)

- Preserve original visual names exactly.
- Keep `Power BI Certified` badge where source indicates certification.
- Maintain direct links to each visual detail page.
- Keep 4-item InsightsResourceNav on-page.

---

## 7. Content reconciliation (source -> target)

| Source block | Target |
|---|---|
| Hero text + visual guide CTA | 3.1 Hero |
| Resource links in footer | 3.2 Resource nav |
| Category tabs | 3.3 Category bar |
| Popular visuals card list | 3.4 Visual grid |
| Zendesk help CTA | 3.5 Support banner |
| Site footer sections | Shared `<Footer />` |

**Drops:** none.
**Adds:** responsive card behavior consistent with service pages.

---

## 8. Build & verify

```powershell
npm run dev
npm run build
```

Done when:
1. `/insights/power-bi-custom-visual-guide` renders with category filtering.
2. Visual cards navigate to correct MAQ visual detail URLs.
3. Visual guide PDF and Zendesk links work.
4. InsightsResourceNav exposes all 4 resources pages.
5. `npm run build` exits 0.

## 9. Out of scope (v1)

- Auto-sync of full 43-card catalog from source HTML.
- In-page comparison tool between visuals.
- Search by measure/data-shape semantics.
