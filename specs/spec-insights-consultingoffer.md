# Insights Page Spec — Consulting Offers

> Source: https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software
> Sibling specs: [spec-insights-casesstudies.md](spec-insights-casesstudies.md), [spec-insights-powerbicustomvisualguide.md](spec-insights-powerbicustomvisualguide.md), [spec-insights-bestpracticeguide.md](spec-insights-bestpracticeguide.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This page surfaces MAQ Software consulting offers from Microsoft Marketplace while
remaining visually consistent with the Agentic AI service page style.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/insights/consulting-offers` |
| Page component | `src/pages/InsightsConsultingOffers.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<CTA />` |
| New insights building blocks | `src/components/insights/InsightsHero.tsx`, `InsightsResourceNav.tsx`, `InsightsOfferGrid.tsx`, `InsightsOfferFilters.tsx` |
| Header nav integration | Header "Insights" entry routes to `/insights/case-studies`; resource strip links here |

**Design goal:** same spacing, typography, and card behaviors as `/services/agentic-ai`, with marketplace-oriented content cards and pricing metadata.

---

## 2. Page composition (top -> bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active on "Insights")*
3. `<InsightsHero variant="consulting-offers" />`   — section 3.1
4. `<InsightsResourceNav active="consulting-offers" />` — section 3.2
5. `<InsightsOfferFilters />`                          — section 3.3
6. `<InsightsOfferGrid />`                             — section 3.4
7. `<CTA />` *(shared)*
8. `<Footer />` *(shared)*

> **Global Insights rule:** this page must retain cross-links to all 4 resource pages in `InsightsResourceNav`.

---

## 3. Section specs

### 3.1 InsightsHero (consulting offers)

- **Eyebrow:** `INSIGHTS`
- **H1:** `Consulting offers`
- **Subhead (from source intent):**
  > Browse Microsoft Marketplace consulting engagements from MAQ Software across Power BI, Microsoft Fabric, Agentic AI, Copilot, migration, and cloud modernization scenarios.
- **Primary CTA:** `Explore offers` -> scroll to offers grid.
- **Secondary CTA:** `Open marketplace source` -> source URL.

### 3.2 InsightsResourceNav (shared hub strip)

Same 4-card navigation contract as in [spec-insights-casesstudies.md](spec-insights-casesstudies.md), with `Consulting offers` card active.

### 3.3 InsightsOfferFilters

- **Default facets (v1):**
  - `All`
  - `Free`
  - `$5K-$15K`
  - `$25K-$35K`
  - `$45K+`
  - `Power BI`
  - `Microsoft Fabric`
  - `Agentic AI / Copilot`
  - `Migration`
- **Sort options:** `Featured`, `Price: Low to High`, `Price: High to Low`.

### 3.4 InsightsOfferGrid

- **Layout:** 3-up desktop, 2-up tablet, 1-up mobile.
- **Card fields:** offer title, category chips, short description, price, `Contact me` / `View in Marketplace` links.
- **Source baseline:** search results for "maq software" showing 101 consulting services.

**Pinned offers (from source results):**
1. `Power BI for Business Analytics: 1-Day Workshop` (Free)
2. `Microsoft Fabric: 2-Hour Briefing` (Free)
3. `Power BI Performance Improvement: 1-Day Assessment` (Free)
4. `Qlik to Power BI Migration: Free 3-Week Assessment` (Free)
5. `Power BI Performance Improvement: 3-Week Workshop` ($25,000)
6. `Tableau to Power BI: Full Migration Engagement` ($75,000)
7. `Agentic AI Envisioning Workshop - 1 Day Engagement` (Free)
8. `GitHub Copilot Implementation - 3 Days` ($10,000)

- **External source link pattern:** `https://marketplace.microsoft.com/en-us/product/<offer-id>`.

### 3.5 CTA + footer

Use shared components. No marketplace footer duplication needed.

---

## 4. Theming

Reuse Agentic AI page visual language:
- 48px section rhythm
- compact hero
- white/off-white alternation
- red accent states
- chips and pricing badges aligned to `--maq-red` palette

---

## 5. SEO

- **title:** `Consulting Offers | MAQ Software`
- **description:** `Explore MAQ Software consulting offers on Microsoft Marketplace, including Power BI, Fabric, Agentic AI, and migration workshops and implementations.`
- **canonical:** `https://maqsoftware.com/insights/consulting-offers`
- **og:image:** `[PLACEHOLDER - marketing asset]`

---

## 6. Brand rules (must hold)

- Keep offer titles exactly as listed in Microsoft Marketplace.
- All marketplace links open in new tab.
- Show explicit source attribution: "Data from Microsoft Marketplace search results for MAQ Software".
- Keep InsightsResourceNav with all 4 resource destinations.

---

## 7. Content reconciliation (source -> target)

| Source block | Target |
|---|---|
| Search results header (`maq software`, 101 results) | 3.1 Hero + result count badge |
| Offer listing cards + pricing | 3.4 Offer grid |
| Contact me CTA pattern | Card-level action |
| Pagination on marketplace | Future enhancement (v2); v1 curated card set |
| Resource taxonomy from MAQ footer | 3.2 Resource nav |

**Drops:** Microsoft marketplace global footer/legal content.
**Adds:** MAQ-styled filters and category chips.

---

## 8. Build & verify

```powershell
npm run dev
npm run build
```

Done when:
1. `/insights/consulting-offers` renders curated marketplace offers.
2. Each card opens the correct marketplace listing.
3. Resource nav exposes all 4 insights destinations.
4. `npm run build` exits 0.

## 9. Out of scope (v1)

- Live marketplace API sync.
- Authenticated marketplace workflows.
- Country-specific price normalization.
