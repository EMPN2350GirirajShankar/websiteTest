# Partnership Page Spec — Snowflake

> Source: https://maqsoftware-beta.netlify.app/partnerships/snowflake
> Sibling specs: spec-product-fabric-admin-agent.md, spec-industry-retail.md
>
> This is the **first** partnership page. Future partnership pages
> (e.g. Databricks) should reuse the same section taxonomy defined here.
>
> Authoring rule: edit this file, then ask the assistant to
> "sync the Snowflake partnership page to spec" — only the matching page +
> route data will change.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/partnerships/snowflake` |
| Page component | `src/pages/PartnershipSnowflake.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Self-contained sections | Hero, Why Snowflake, Partnership Highlights, Offerings, Marketplace, Blogs & Case Studies — all inlined in the page |
| Header nav integration | Partnerships mega-menu "Snowflake" → `/partnerships/snowflake` (already wired in `Header.tsx`) |
| Redirect (legacy) | Add `_redirects` entry: `/partnerships/snowflake /partnerships/snowflake 200` (SPA fallback) |

**Design goal:** match the density of the product / industry pages —
section padding `48–56px`, h2 `28–30px`, body `14px`, multi-column layouts.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared, mounted in App)*
2. `<Header />` *(shared, mounted in App)*
3. **Hero** — §3.1
4. `<TrustBanner />` *(shared)*
5. **Why Snowflake** — §3.2 (6-card value props)
6. **Partnership Highlights** — §3.3 (4 stat cards)
7. **Partnership overview** — §3.4 (partner badge + description)
8. **Our Offerings** — §3.5 (5 feature cards)
9. **Marketplace Offerings — Data Validator** — §3.6
10. **Related blogs and case studies** — §3.7 (4-card grid)
11. **Connect with us** — §3.8 (partnership CTA)
12. `<CTA />` *(shared)*
13. `<Footer />` *(shared, mounted in App)*

---

## 3. Section specs

### 3.1 Hero (2-column band)

- **Layout:** left (60%) = copy + CTA, right (40%) = hero image.
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (literal):**
- **H1:** `MAQ Software and Snowflake`
- **Subhead:**
  > Are you thinking about how to unify siloed data, scale analytics, and drive smarter decisions across your organization? At MAQ Software, we harness the power of Snowflake to help businesses mobilize data, enable secure collaboration, and unlock real-time, AI-powered insights across clouds and regions.
- **Primary CTA:** `Contact our team` (mail icon) → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`

**Right column — hero image:**

- Source: `https://maqsoftware-beta.netlify.app/images-new/Snowflake/Snowflake-hero.webp`
- Rendered with `<img>` (decorative, `alt="MAQ Software and Snowflake"`, `loading="eager"`, `decoding="async"`).
- Sizing: `width: 100%`, `max-width: 520px`, `height: auto`.

---

### 3.2 Why Snowflake (6-card value-prop grid)

- **Eyebrow:** `WHY SNOWFLAKE?`
- **Title:** `Why Snowflake?`
- **Layout:** 3×2 card grid (2 columns 640–960px, 1 column below 640px). Each card: icon + bold title + 1–2 line description.
- **Background:** `--maq-off-white` section.

| Icon | Title | Description |
|---|---|---|
| *(simplicity)* | `Easy` | Managed platform that adapts to your business and teams |
| *(link/connect)* | `Connected` | Join, share and leverage data in friction free ecosystem |
| *(shield/trust)* | `Trusted` | Interoperability of data across clouds, with universal governance at scale |
| *(dollar/cost)* | `Cost-Effective` | Pay-as-you-use pricing—eliminating overprovisioning and reducing total cost of ownership. |
| *(lock/secure)* | `Secure` | Ensure enterprise-grade data protection with end-to-end encryption, robust access controls, and compliance with global security standards. |
| *(scale/flex)* | `Flexible` | Seamlessly scale storage and compute independently to match your workload needs, whether for batch processing or real-time analytics. |

---

### 3.3 Partnership Highlights (4 stat cards, single row)

- **Eyebrow:** `PARTNERSHIP HIGHLIGHTS`
- **Title:** `Partnership Highlights`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: big number, label.

| Metric | Label |
|---|---|
| `150+` | `SnowPro Core Certified Associates` |
| `25+` | `SnowPro Advanced Certified Associates` |
| `10+` | `Implementations for Enterprise Clients` |
| `1` | `Marketplace Offerings` |

---

### 3.4 Partnership overview (partner badge + description band)

- **Layout:** left column = Snowflake Service Partner badge image, right column = descriptive copy.
- **Background:** white.
- **Padding:** `48px 32px`.

**Badge image:**
- Source: `https://maqsoftware-beta.netlify.app/images-new/Snowflake/Snowflake-Services-Select.png`
- `alt="Snowflake Service Partner"`, `loading="lazy"`.

**Copy (literal):**
> As a Snowflake Technology Partner, we specialize in end-to-end Snowflake implementations, performance and cost optimization, and AI-driven analytics for modern business needs. Our deep expertise enables organizations to unlock seamless data integration, transformation, reporting, and AI-powered insights, ensuring they stay ahead in an evolving digital landscape. From migration to advanced analytics integrated with Power BI, we empower businesses to maximize their data potential and achieve unparalleled success with Snowflake's industry-leading platform.

---

### 3.5 Our Offerings (5 feature cards)

- **Eyebrow:** `OUR OFFERINGS`
- **Title:** `Driving Data Strategy Excellence Through Our Global Snowflake Partnership`
- **Section id:** `snowflake-offerings`
- **Layout:** vertical stack of cards or 2-column alternating layout. Each card: eyebrow tagline + bold title + multi-line description.
- **Background:** alternating white / `--maq-off-white`.

| Eyebrow | Title | Description |
|---|---|---|
| `Fast, Secure, and Hassle-Free` | `Data Warehouse Migration to Snowflake` | Simplify your data migration journey with MAQ Software's end-to-end Snowflake migration solutions—ensuring a seamless, secure, and high-performance transition through automated frameworks, optimized ETL, and zero-downtime execution from on-prem, legacy, or cloud sources. |
| `Faster Insights, Smarter Decisions` | `Business Intelligence with Snowflake & Power BI` | We help organizations unlock the full potential of Power BI on Snowflake by delivering lightning-fast query execution and highly optimized data models. By leveraging Snowflake's intelligent caching and elastic compute scaling, we ensure seamless, real-time analytics and interactive dashboards—empowering swift data-driven decisions. |
| `Transforming Data into Instant Insights` | `Real-Time Analytics` | With real-time analytics in Snowflake, we help businesses ingest, process, and analyze streaming data for faster decision-making. Our expertise in Snowflake Stream, Tasks, and external integrations like Kafka and Azure Event Hubs ensures organizations can act on insights in real time. |
| `Powering Intelligent Business Decisions` | `Advanced Analytics and AI/ML` | We leverage Snowflake's AI/ML capabilities—integrating Snowpark, Python, and ML models—to drive predictive analytics, anomaly detection, and intelligent automation. From customer segmentation and fraud detection to demand forecasting, we turn raw data into actionable insights that enhance decision-making and operational efficiency. |
| `Turning Data into Revenue` | `Embedded Analytics and Data Monetization` | We enable organizations to monetize their data assets by embedding Snowflake-powered analytics into applications and customer portals. Our expertise in API-based data sharing, multi-tenant architectures, and white-labeled analytics solutions helps businesses create scalable, revenue-generating insights. |

---

### 3.6 Marketplace Offerings — Data Validator

- **Eyebrow:** `MARKETPLACE OFFERINGS`
- **Title:** `Data Validator`
- **Section id:** `snowflake-marketplace`
- **Layout:** 2-column panel — left = feature description with bullet groups, right = optional illustration.
- **Background:** `--maq-off-white`.

**Copy (literal):**

> Begin your RTI journey today

**Core capabilities (bullet list):**
- **Row Count Check:** Validates if row counts between source and target tables are within a ±5% tolerance.
- **Grain Check:** Ensures the uniqueness of primary keys across both source and destination tables.
- **KPI Check:** Compares the results of custom KPI SQL logic or aggregated column values between the source and destination. Passes if the difference is within ±5%.

**Scheduling Support (bullet list):**
- Test cases are scheduled using Snowflake tasks for automatic execution.
- Offers full CRON-style configuration with time zone support.
- Automatically log results, including comparison values, pass/fail status, and metadata for analysis in dashboards or the "Show Test Cases" view.

**User Interface Capabilities (bullet list):**
- **Add Test Case:** Intuitive interface to define test parameters (e.g., databases, tables, columns, SQL queries).
- **Show Test Cases:** Displays existing test cases based on selected filters like table type and test type.
- **Execute Test Case:** On-demand Execution of test cases.
- **View Test Results:** Offers detailed visibility into execution status, timestamps, result IDs, and pass/fail outcomes, enabling historical trend analysis.
- **Schedule Test Cases:** Allows to setup a customized schedule to run the checks automatically.

**CTA:** `Learn more` → `https://app.snowflake.com/marketplace/listing/GZ1MBZD8CA9/maq-software-data-validator?originPage=app` (opens new tab)

---

### 3.7 Related blogs and case studies (4-card grid)

- **Eyebrow:** `INSIGHTS`
- **Title:** `Related blogs and case studies`
- **Layout:** 4 columns ≥1200px, 2 columns 640–1200px, 1 column below 640px. Each card: title + link (whole card clickable, opens new tab).

| Title | Link |
|---|---|
| `Optimizing data management by integrating Snowflake and Microsoft Fabric` | `https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html` |
| `Transforming supply chain analytics with Power BI on Snowflake for a specialty retailer` | `https://blog.maqsoftware.com/2025/03/transforming-supply-chain-analytics.html` |
| `Enabling sales insights for global operations with Power BI and Snowflake` | `https://blog.maqsoftware.com/2025/06/enabling-sales-insights-for-global.html` |
| `Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric` | `https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html` |

---

### 3.8 Connect with us (partnership CTA band)

- **Title:** `Connect with us`
- **Background:** `--maq-black` or dark gradient.
- **Layout:** centered copy + email CTA.

**Copy (literal):**
> As a Snowflake Technology Partner, MAQ Software brings deep expertise in helping organizations unlock the full potential of Snowflake. Whether you're looking for guidance on implementing data solutions or optimizing your existing platform, we're here to support you every step of the way.

**CTA:** `CustomerSuccess@MAQSoftware.com` → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us%20-%20Snowflake&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`

---

## 4. Theming & visuals

- All red elements use `--maq-red`. All deep panels use `--maq-black`.
- Card hover: `border-color: var(--maq-red)`, lift shadow `0 6px 16px rgba(0,0,0,0.06)`.
- Section background alternation: white / `--maq-off-white`.
- Section padding: vertical `48px` (hero `48–56px`).
- Typography: h2 `28–30px`, body `14px`.
- Stat card numbers: `36–40px`, weight `800`, color `--maq-red`.
- Category pills: bg `--maq-red-pale`, text `--maq-red`, font 11px / 700 / uppercase / letter-spacing `0.06em`, padding `4px 8px`, radius `4px`.

---

## 5. SEO

| Field | Value |
|---|---|
| `<title>` | `Snowflake Partnership | MAQ Software` |
| `<meta description>` | `MAQ Software is a Snowflake Technology Partner specializing in data warehouse migration, real-time analytics, AI/ML, and embedded analytics on Snowflake.` |
| `canonical` | `https://maqsoftware.com/partnerships/snowflake` |
| `og:image` | `https://maqsoftware.com/images-new/Snowflake/Snowflake-hero.webp` |

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- "26 years" where tenure is referenced.
- All primary CTAs → `CustomerSuccess@MAQSoftware.com`.
- Snowflake™ name used as-is (no abbreviation).

---

## 7. Accessibility

- Hero image has descriptive `alt` text.
- All external links open in new tab via `target="_blank" rel="noreferrer"`.
- Stat cards use semantic `<dl>` / `<dt>` / `<dd>` or equivalent ARIA.
- Offering cards use proper heading hierarchy (`h3` inside `h2` section).
- Data Validator bullet lists use semantic `<ul>` / `<li>`.

---

## 8. Build & verify

```powershell
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. `/partnerships/snowflake` renders the exact copy in §3.
3. The Partnerships mega-menu in Header correctly links to the route.
4. No other pages regress.

---

## 9. Reconciliation report

### Pass A — Source page inventory (top → bottom)

| # | Block | Words (approx) | Mapped to |
|---|---|---|---|
| 1 | Hero H1 + subhead + CTA | ~50 | §3.1 Hero |
| 2 | Hero image (Snowflake-hero.webp) | — | §3.1 Hero |
| 3 | "Why Snowflake?" 6 value cards (Easy, Connected, Trusted, Cost-Effective, Secure, Flexible) | ~120 | §3.2 Why Snowflake |
| 4 | Partnership Highlights 4 stats (150+, 25+, 10+, 1) | ~30 | §3.3 Partnership Highlights |
| 5 | Snowflake Service Partner badge + partnership description paragraph | ~80 | §3.4 Partnership overview |
| 6 | "Our Offerings" 5 feature cards (Migration, BI, Real-Time, AI/ML, Embedded) | ~250 | §3.5 Our Offerings |
| 7 | "Marketplace Offerings" — Data Validator (capabilities, scheduling, UI) | ~200 | §3.6 Data Validator |
| 8 | Data Validator "Learn more" CTA link | — | §3.6 CTA |
| 9 | Related blogs and case studies (4 links) | ~60 | §3.7 Blogs & Case Studies |
| 10 | "Connect with us" paragraph + email CTA | ~60 | §3.8 Connect CTA |
| 11 | Footer (shared) | — | Shared `<Footer />` |

### Pass B — Reconciliation

All 11 inventoried blocks are mapped to spec sections. **Zero blocks dropped.**

- Footer navigation, ISO certifications, Microsoft specializations, and support links are part of the shared `<Footer />` component and are not duplicated in this spec.
