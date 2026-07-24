# Partnership Page Spec — Databricks

> Source: https://maqsoftware.com/partnerships/databricks
> Sibling specs: spec-product-fabric-admin-agent.md, spec-industry-retail.md
>
> This follows the same section taxonomy as the Snowflake partnership spec.
>
> Authoring rule: edit this file, then ask the assistant to "sync the Databricks partnership page to spec" — only the matching page + route data will change.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/partnerships/databricks` |
| Page component | `src/pages/PartnershipDatabricks.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Self-contained sections | Hero, Why Databricks, Partnership Highlights, Capabilities/Offerings, Guides & Marketplace, Blogs & Case Studies, Connect CTA |
| Header nav integration | Partnerships mega-menu "Databricks" → `/partnerships/databricks` (ensure `Header.tsx` contains this href) |
| Redirect (legacy) | Add `_redirects` entry example: `/partnerships/databricks /partnerships/databricks 200` (SPA fallback) |

**Design goal:** match density and spacing used on product/industry pages — section padding `48–56px`, h2 `28–30px`, body `14px`.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared, mounted in App)*
2. `<Header />` *(shared, mounted in App)*
3. **Hero** — §3.1
4. `<TrustBanner />` *(shared)*
5. **Why Databricks** — §3.2
6. **Partnership Highlights** — §3.3 (stat cards)
7. **Accelerating AI-powered innovation** — §3.4 (overview + partner badge/image)
8. **Our capabilities / Offerings** — §3.5 (capability list: Data Engineering, Data Science & ML, BI, Big Data Analytics, Unity Catalog, Data Lakes & Warehousing, Real-Time Processing)
9. **Guides & Marketplace / Resources** — §3.6 (Databricks guides list + marketplace links)
10. **Related blogs and case studies** — §3.7 (card grid)
11. **Connect with us (partnership CTA)** — §3.8
12. `<CTA />` *(shared)*
13. `<Footer />` *(shared, mounted in App)*

---

## 3. Section specs

### 3.1 Hero (2-column band)

- **Layout:** left (60%) = copy + CTA, right (40%) = hero image.
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (literal):**
- **H1:** `MAQ Software and Databricks`
- **Subhead:**
> Unlock the power of your data with MAQ Software and Databricks—where innovation meets intelligence. Together, we transform data into actionable insights through next-generation analytics, seamless integration, and AI-driven accelerators. Experience agility, scalability, and security like never before as we propel your business to new heights in the data-driven era.

**Primary CTA:** `Contact our team` → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`

**Right column — hero image:**
- Source (decorative): `https://maqsoftware.com/images-new/isv/databricks.jpg`
- Render with `<img alt="MAQ Software and Databricks" loading="eager" decoding="async" />`

---

### 3.2 Why Databricks (6 value cards)

- **Eyebrow:** `WHY DATABRICKS?`
- **Title:** `Why Databricks?`
- **Layout:** 3×2 card grid (2 columns 640–960px, 1 column below 640px). Each card: icon + bold title + 1–2 line description.

| Icon | Title | Description |
|---|---|---|
| *(unified)* | `Unified` | One platform for all your data, analytics, and AI needs. |
| *(scalable)* | `Scalable` | Effortlessly grow with your business and data demands. |
| *(collaborative)* | `Collaborative` | Empower teams to innovate together in real time. |
| *(secure)* | `Secure` | Enterprise-grade security to safeguard your information. |
| *(fast)* | `Fast` | Accelerate insights with lightning-speed processing. |
| *(innovative)* | `Innovative` | Stay ahead with the latest AI and analytics advancements. |

---

### 3.3 Partnership Highlights (stat cards)

- **Eyebrow:** `PARTNERSHIP HIGHLIGHTS`
- **Title:** `Our proven expertise`
- **Layout:** 4 cards in a single row (wrap to 2×2 under 960px). Each card: big number, label.

| Metric | Label |
|---|---|
| `34+` | `Databricks Data Engineering Associates` |
| `7+` | `Databricks Data Engineering Professionals` |
| `66+` | `Databricks Sales Badges` |
| — | *(additional badges or counts can be added when provided)* |

---

### 3.4 Partnership overview — Accelerating AI-powered innovation

- **Layout:** left column = partner image/badge, right column = descriptive copy.
- **Background:** white.
- **Padding:** `48px 32px`.

**Partner image:**
- `https://maqsoftware.com/images-new/Databricks/databricks-partner.png` (render `alt="Databricks partner"`, `loading="lazy"`).

**Copy (literal):**
> As a Databricks Technology Partner, MAQ Software brings deep expertise in helping organizations unlock the full potential of Databricks. Whether you're looking for guidance on implementing data solutions or optimizing your existing platform, we’re here to support you every step of the way.

---

### 3.5 Our capabilities (feature list)

- **Eyebrow:** `OUR CAPABILITIES`
- **Layout:** vertical stack or 2-column alternating layout. Each capability: title + short description.

**Capabilities (literal / mapped from source):**
- **Data Engineering** — We build and optimize data pipelines for seamless integration and processing, ensuring reliable data transformations and efficient workflows.
- **Data Science and Machine Learning** — We develop, train, and deploy machine learning models with Databricks, uncovering predictive insights and integrating them into business systems.
- **Business Intelligence** — We create interactive dashboards and analytics, helping organizations visualize data and make informed, data-driven decisions with confidence.
- **Big Data Analytics** — We analyze large datasets quickly with Databricks, enabling real-time analytics and empowering businesses with actionable insights.
- **Unity Catalog for Data Security and Governance** — We ensure data integrity, security, and compliance with robust governance frameworks and continuous monitoring.
- **Data Lakes and Warehousing** — We implement scalable data lakes and warehouses, allowing cost-effective storage and quick access to large datasets.
- **Real-Time Data Processing** — We enable real-time streaming data solutions, letting businesses respond instantly to data changes and market trends.

---

### 3.6 Guides & Marketplace (resources)

- **Eyebrow:** `DATABRICKS GUIDES`
- **Title:** `Databricks guides`
- **Layout:** horizontal scroller or 4-card grid.

**Sample guide links (from source):**
- `Explore Mosaic AI on Databricks for enterprise-ready generative AI` — https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html
- `Databricks best practice guide` — https://maqsoftware.com/insights/databricks-best-practices.html
- `Databricks best practice guide` — https://maqsoftware.com/insights/azure-databricks-best-practices.html
- `Unlocking advanced analytics with Databricks` — https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html
- `Integrating Databricks with Power BI` — https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html
- `Real-time structured streaming in Databricks: Powering modern data applications` — https://blog.maqsoftware.com/2025/09/real-time-structured-streaming-in.html
- `Databricks Genie and AI/BI Dashboards: Revolutionizing data analytics` — https://blog.maqsoftware.com/2025/09/databricks-genie-and-aibi-dashboards.html

**CTA:** `Learn more` → link(s) to the relevant guide or contact mailto.

---

### 3.7 Related blogs and case studies (card grid)

- **Eyebrow:** `INSIGHTS`
- **Title:** `Related blogs and case studies`
- **Layout:** 4 columns ≥1200px, 2 columns 640–1200px, 1 column below 640px. Each card: title + link (open new tab).

**Sample entries discovered on source:**
- `Delivering personalization intelligence with MLOps and Databricks CI/CD framework` — https://blog.maqsoftware.com/2025/08/delivering-personalization-intelligence.html
- `Explore Mosaic AI on Databricks for enterprise-ready generative AI` — https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html
- `Unlocking advanced analytics with Databricks` — https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html
- `Integrating Databricks with Power BI` — https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html

---

### 3.8 Connect with us (partnership CTA band)

- **Title:** `Connect with us`
- **Background:** `--maq-black` or dark gradient.
- **Layout:** centered copy + email CTA.

**Copy (literal):**
> As a Databricks Technology Partner, MAQ Software brings deep expertise in helping organizations unlock the full potential of Databricks. Whether you're looking for guidance on implementing data solutions or optimizing your existing platform, we’re here to support you every step of the way.

**CTA:** `CustomerSuccess@MAQSoftware.com` → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us%20-%20Databricks&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`

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
| `<title>` | `Databricks Partnership | MAQ Software` |
| `<meta description>` | `MAQ Software is a Databricks Technology Partner delivering data engineering, ML, real-time analytics, and governance solutions on Databricks.` |
| `canonical` | `https://maqsoftware.com/partnerships/databricks` |
| `og:image` | `https://maqsoftware.com/images-new/Databricks/databricks-partner.png` |

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- "26 years" where tenure is referenced.
- All primary CTAs → `CustomerSuccess@MAQSoftware.com`.
- Databricks name used as-is (no abbreviation).

---

## 7. Accessibility

- Hero image has descriptive `alt` text.
- All external links open in new tab via `target="_blank" rel="noreferrer"` where appropriate.
- Stat cards use semantic `<dl>` / `<dt>` / `<dd>` or equivalent ARIA.
- Offering cards use proper heading hierarchy (`h3` inside `h2` section).

---

## 8. Build & verify

```powershell
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. `/partnerships/databricks` renders the exact copy in §3.
3. The Partnerships mega-menu in Header correctly links to the route.
4. No other pages regress.

---

## 9. Reconciliation report

### Pass A — Source page inventory (top → bottom)

| # | Block | Words (approx) | Mapped to |
|---|---|---|---|
| 1 | Hero H1 + subhead + CTA + hero image (`databricks.jpg`) | ~60 | §3.1 Hero |
| 2 | "Why Databricks?" 6 value cards (Unified, Scalable, Collaborative, Secure, Fast, Innovative) | ~120 | §3.2 Why Databricks |
| 3 | Partnership highlights counts (34+, 7+, 66+) | ~20 | §3.3 Partnership Highlights |
| 4 | Partnership overview band + partner image (`databricks-partner.png`) | ~80 | §3.4 Partnership overview |
| 5 | Capabilities / offerings list (Data Engineering, ML, BI, Big Data Analytics, Unity Catalog, Data Lakes, Real-Time) | ~250 | §3.5 Our capabilities |
| 6 | Databricks guides list + marketplace links | ~200 | §3.6 Guides & Marketplace |
| 7 | Related blogs and case studies list (multiple blog links) | ~80 | §3.7 Blogs & Case Studies |
| 8 | Connect with us paragraph + email CTA | ~40 | §3.8 Connect CTA |
| 9 | Footer (shared) | — | Shared `<Footer />` |

### Pass B — Reconciliation

All inventoried blocks are mapped to spec sections. **Zero blocks dropped.**

- Any additional promotional badges, specializations, or footer links are part of the shared `<Footer />` and are not duplicated in this spec.

---

## 10. Example redirect (Netlify)

Add to `_redirects` for SPA fallback and legacy mapping:

```
/partnerships/databricks /partnerships/databricks 200
```

---

Return: `spec-partnership-databricks.md` (this file), a 3-line summary of what was extracted, and the reconciliation report above.
