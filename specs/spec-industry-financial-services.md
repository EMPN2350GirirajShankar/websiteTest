# Industry Page Spec — Financial Services

> Sibling document to [spec-industry-retail.md](spec-industry-retail.md). Same authoring rules apply:
> edit this file, then ask the assistant to "sync code to spec" and only the
> matching page data in `src/pages/IndustryFinancialServices.tsx` will change.
>
> All six shared industry components are content-driven via props. No component
> file needs to change when updating Financial Services copy.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/industries/financial-services` (client-side, react-router-dom) |
| Page component | `src/pages/IndustryFinancialServices.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />` from home |
| Shared building blocks | All six components in `src/components/industry/` — no new components needed |
| Header nav integration | Industries mega-menu "Financial services" → `/industries/financial-services` |

**Design goal:** identical density and visual rhythm to the Retail page. Same `48px` section padding, same compact typography, same component order.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, with active state on "Industries")*
3. `<IndustryHero />`         — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ImpactStats />`          — §3.2 (4 outcome cards)
6. `<SolutionShowcase />`     — §3.3 (Finance Agents tabbed layout)
7. `<IndustryCaseStudies />`  — §3.4 (3 featured case studies)
8. `<MarketplaceOffers />`    — §3.5 (4 cards: PoCs/assessments)
9. `<Testimonials />`         — §3.6 (2 quotes) — *always second-to-last, just before CTA*
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared)*

---

## 3. Section specs

### 3.1 IndustryHero (compact, 2-column band)

- **Layout:** left column (60%) = copy + CTA, right column (40%) = CSS dashboard visual.
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (literal):**
- **Eyebrow:** `FINANCIAL SERVICES`
- **H1:** `AI-Driven Intelligence for a Faster, More Compliant Financial Enterprise`
- **Subhead:**
  > Financial services organizations face mounting pressure to accelerate decisions, reduce compliance risk, and modernize aging data estates. At MAQ Software, we help banks, insurers, and fintech firms embed AI across the front and back office — from automated claims processing and real-time credit decisioning to autonomous FP&A and regulatory reporting. Built on Microsoft Fabric, Snowflake, and Databricks, our solutions turn complex financial data into a competitive edge.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Financial%20Services%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore financial solutions` → scroll to `#fs-solutions`

**Hero visual (CSS-only, no external asset):** Three stacked tiles:
1. **"Month-end close status"** — list of 5 close steps (GL Reconciliation, AR/AP Close, Variance Analysis, Regulatory Report, CFO Sign-off) each with a colored status badge (Done / In review / Pending).
2. **"Claims processed today"** — 4-bar chart (Intake 65%, Validate 80%, Review 45%, Closed 90%) with the last bar in `--maq-red`.
3. **"Portfolio risk distribution"** — 3-row horizontal bar chart (Low risk 55% green, Medium 30% amber, High risk 15% red).

---

### 3.2 ImpactStats (4 outcome cards)

- **Eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for financial services leaders`
- **Subhead:** `Numbers from MAQ Software engagements with banks, insurers, and fintech firms.`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: big metric, label, linked source.

| Metric | Label | Source case study |
|---|---|---|
| `Millions` | `Borrowers matched to better loan options with real-time lending analytics` | [Enhancing fintech analytics to provide millions of borrowers with better loan options](https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html) |
| `< 1 week` | `Month-end close compressed from 18+ days with agentic AI finance automation` | [Transforming finance with agentic AI solutions](https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html) |
| `Real-time` | `Credit decisioning replacing overnight batch scoring for faster loan approvals` | [Enhancing fintech analytics to provide millions of borrowers with better loan options](https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html) |
| `100%` | `Audit traceability on reconciled transactions with Fabric-native lineage` | [Transforming finance with agentic AI solutions](https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html) |

> If updated numbers become available from MAQ marketing, edit this table — the cards regenerate from it.

---

### 3.3 SolutionShowcase — "Accelerate your financial operations with our Finance Agents"

- **Section id:** `fs-solutions`
- **Eyebrow:** `AGENTIC AI`
- **Title:** `Accelerate your financial operations with our Finance Agents`
- **Layout:** same white rounded panel as retail — left detail pane + right selectable rail. Default selection = item #1 (Finance Close Agent).

**Agents (4):**

| # | Name | Tagline | Icon | Description (left pane) |
|---|---|---|---|---|
| 1 | `Finance Close Agent` | `Compress month-end close from weeks to days` | `Money24Regular` (red) | Autonomous agent that reconciles GL entries, flags variances, and routes exceptions for human review — so your finance team closes the books in days, not weeks. Integrates with ERP systems over Microsoft Fabric and delivers audit-ready close packages with full transaction lineage. |
| 2 | `Claims Processing Agent` | `Accelerate insurance claims from intake to resolution` | `DocumentBulletList24Regular` (red) | Extracts structured data from unstructured claim documents, validates against policy rules, and routes cases to the right handlers. Built on Azure AI Document Intelligence and Microsoft Fabric, it eliminates manual handoffs, enforces compliance controls, and cuts claims cycle time. |
| 3 | `Lending Intelligence Agent` | `Real-time credit decisioning at scale` | `Chat24Regular` (red) | Replaces static overnight batch scoring with live signals on Databricks or Microsoft Fabric. Evaluates creditworthiness across multiple data sources at the point of application and surfaces personalized loan options for millions of borrowers — improving approval accuracy while reducing decisioning latency. |
| 4 | `Regulatory Reporting Agent` | `Audit-ready submissions without manual assembly` | `ShieldCheckmark24Regular` (red) | Aggregates data across ledgers, risk systems, and custodian feeds into structured regulatory submissions (DFAST, CECL, and similar frameworks). Generates citation-backed outputs for examiner review and flags data quality issues before filing — reducing compliance risk and examiner back-and-forth. |

- **Button:** `Know More` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Agent name} - Financial Services`

---

### 3.4 IndustryCaseStudies (3 featured studies)

- **Eyebrow:** `FINANCIAL SERVICES CASE STUDIES`
- **Title:** `How financial firms move faster with MAQ Software`
- **Layout:** 3-column card grid. Each card: sub-tag badge, title, 1–2 line teaser, "Read full story →" link.

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Fintech` | Enhancing fintech analytics to provide millions of borrowers with better loan options | Real-time lending analytics platform on Microsoft Fabric helping millions of borrowers match to the right loan product. | https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html |
| `Finance operations` | Transforming finance with agentic AI solutions | Agentic AI deployed across finance close, reconciliation, and FP&A for faster cycles and full audit traceability. | https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html |
| `Data platform` | Unifying disconnected data systems using Microsoft Fabric and OneLake | Siloed financial data sources unified on OneLake for a single governed surface powering reporting and risk analytics. | https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html |

- **Footer link:** `See all financial services case studies →` → `https://maqsoftware.com/case-studies`

---

### 3.5 MarketplaceOffers (4 cards)

- **Title:** `Our Marketplace Offers`
- **Subhead:** `Accelerate financial outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning risk & compliance, FP&A automation, lending intelligence, and claims processing.`
- **Layout:** 3-column grid (2×2 below 960px, 1 column below 640px). Each card links to its Azure Marketplace listing.

| Category pill | Title | Description | Link target |
|---|---|---|---|
| `RISK & COMPLIANCE` | `Risk & Compliance Analytics for Financial Services: 4-Week PoC` | A 4-week proof of concept that unifies risk, compliance, and audit data on Microsoft Fabric to expose regulatory gaps and accelerate reporting cycles. | Azure Marketplace (placeholder `#`) |
| `FP&A` | `Finance Close Automation for Financial Services: 2-Week Assessment` | A 2-week assessment that evaluates your month-end close estate on Microsoft Fabric, identifying automation opportunities for faster, audit-ready financial close. | Azure Marketplace (placeholder `#`) |
| `LENDING` | `Lending Analytics & Credit Intelligence: 4-Week PoC` | A 4-week proof of concept that benchmarks your credit scoring and lending analytics pipeline on Databricks or Fabric, surfacing opportunities to reduce decisioning latency and improve approval accuracy. | Azure Marketplace (placeholder `#`) |
| `INSURANCE` | `Claims Processing Intelligence for Insurance: 2-Week Assessment` | A 2-week assessment that maps your claims intake workflow and identifies AI automation opportunities to cut cycle time and enforce policy-rule compliance. | Azure Marketplace (placeholder `#`) |

> Web team: replace each `#` with the live Azure Marketplace URL when listings are published.

---

### 3.6 Testimonials

- **Eyebrow:** `TESTIMONIALS`
- **Title:** `What our clients have to say`
- **Layout:** 2-column quote cards.

| Quote | Attribution | Signed off |
|---|---|---|
| `MAQ Software compressed our month-end close from 18 days to under a week. The reconciliation agent flags exceptions automatically — our team focuses on judgement calls, not spreadsheet hunting.` | `VP, Finance Operations — Global asset manager` | N (placeholder) |
| `We moved from overnight credit batch scoring to real-time lending signals in one quarter. Our borrowers get better-matched loan options at the point of decision.` | `Head of Data & Analytics — Regional bank` | N (placeholder) |

> Placeholder copy — to be replaced with approved quotes once marketing supplies signed-off testimonials.

---

### 3.7 CTA

Shared `<CTA />`. No financial-services-specific override for v1.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming & visuals

Identical to retail page — no new tokens or overrides:
- Red elements: `--maq-red` (`#BA141A`)
- Card hover: `border-color: var(--maq-red)`, lift shadow `0 6px 16px rgba(0,0,0,0.06)`
- Category pills: bg `--maq-red-pale`, text `--maq-red`, `11px / 700 / uppercase`
- Section padding: `48px` vertical throughout

---

## 5. Accessibility

- All interactive cards are `<button>` or `<a>`, focusable, visible focus ring.
- Selected solution rail item exposes `aria-current="true"`.
- Decorative hero illustration carries `aria-hidden="true"`.
- All quotes use `<blockquote><p>…</p><cite>…</cite></blockquote>`.

---

## 6. Build & verify

```powershell
npm run dev          # http://localhost:5173/industries/financial-services
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. The Financial Services page renders with the exact copy in §3.
3. Header "Industries → Financial services" navigates to the page.
4. No other pages regress.

---

## 7. How to update this page

Edit the copy tables in §3 above, then ask the assistant to "sync the financial services page to spec". It will diff against `src/pages/IndustryFinancialServices.tsx` and update only the changed values.

---

## 8. Out of scope (v1)

- Azure Marketplace listing URLs (marked `// TODO` in source — fill in when listings are published)
- Signed-off testimonial quotes from marketing
- Hero images for Marketplace offer cards
- Per-agent landing pages (agents currently use mailto)
- Localization
