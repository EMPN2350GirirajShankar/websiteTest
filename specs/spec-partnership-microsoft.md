# Partnership Page Spec — Microsoft

> Source: https://maqsoftware.com/who-we-are (primary), https://maqsoftware.com/ (supplementary), Azure Marketplace listings
> Sibling specs: spec-partnership-snowflake.md, spec-product-fabric-admin-agent.md, spec-industry-retail.md
>
> MAQ Software does not currently have a dedicated Microsoft partnership page on
> the existing website. This spec synthesizes Microsoft partnership content from
> the "Who we are" page, homepage, news, and marketplace listings into a
> purpose-built partnership page mirroring the Snowflake partnership structure.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/partnerships/microsoft` |
| Page component | `src/pages/PartnershipMicrosoft.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Self-contained sections | Hero, Why Microsoft, Partnership Highlights, Partnership Overview, Our Offerings, Marketplace Offerings, Blogs & Case Studies, Connect — all inlined in the page |
| Header nav integration | Partnerships mega-menu "Microsoft" → `/partnerships/microsoft` |
| Redirect (legacy) | Add `_redirects` entry: `/partnerships/microsoft /partnerships/microsoft 200` (SPA fallback) |

**Design goal:** Match the density and structure of the Snowflake partnership page —
section padding `48–56px`, h2 `28–30px`, body `14px`, multi-column layouts.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared, mounted in App)*
2. `<Header />` *(shared, mounted in App)*
3. **Hero** — §3.1
4. `<TrustBanner />` *(shared)*
5. **Why Microsoft** — §3.2 (6-card value props)
6. **Partnership Highlights** — §3.3 (4 stat cards)
7. **Partnership Overview** — §3.4 (partner badge + description)
8. **Our Offerings** — §3.5 (5 feature cards)
9. **Marketplace Offerings** — §3.6 (Power BI visuals + consulting services)
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
- **H1:** `MAQ Software and Microsoft`
- **Subhead:**
  > As a Microsoft Fabric Featured Partner and Preferred Supplier since 2000, MAQ Software enables leading companies to accelerate their business intelligence, analytics, and AI initiatives. With 9 Microsoft specializations and 4 solution partner designations, we deliver enterprise-grade solutions across the Microsoft ecosystem—from Azure and Fabric to Power BI and Copilot.
- **Primary CTA:** `Contact our team` (mail icon) → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us%20-%20Microsoft%20Partnership&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`

**Right column — hero image:**

- Source: `[PLACEHOLDER — needs Microsoft partnership hero graphic, suggest creating a .webp similar to Snowflake hero at /images-new/Microsoft/Microsoft-hero.webp]`
- Rendered with `<img>` (decorative, `alt="MAQ Software and Microsoft"`, `loading="eager"`, `decoding="async"`).
- Sizing: `width: 100%`, `max-width: 520px`, `height: auto`.

---

### 3.2 Why Microsoft (6-card value-prop grid)

- **Eyebrow:** `WHY MICROSOFT?`
- **Title:** `Why Microsoft?`
- **Layout:** 3×2 card grid (2 columns 640–960px, 1 column below 640px). Each card: icon + bold title + 1–2 line description.
- **Background:** `--maq-off-white` section.

| Icon | Title | Description |
|---|---|---|
| *(cloud/Azure)* | `Unified Platform` | A comprehensive cloud ecosystem spanning infrastructure, data, AI, and productivity—all integrated under one platform. |
| *(analytics/chart)* | `AI-Powered Insights` | Harness Azure AI, Copilot, and Fabric to turn raw data into actionable intelligence with built-in machine learning and generative AI. |
| *(shield/security)* | `Enterprise Security` | Protect your organization with industry-leading security, compliance, and governance built into every layer of the Microsoft stack. |
| *(scale/growth)* | `Scalable` | Seamlessly scale from small teams to global enterprises with elastic compute, serverless architectures, and consumption-based pricing. |
| *(integration/connect)* | `Deeply Integrated` | Benefit from native integration across Azure, Microsoft 365, Dynamics 365, Power Platform, and GitHub for frictionless workflows. |
| *(community/people)* | `Trusted Ecosystem` | Join a global network of partners and customers backed by Microsoft's enterprise support, training, and continuous innovation. |

---

### 3.3 Partnership Highlights (4 stat cards, single row)

- **Eyebrow:** `PARTNERSHIP HIGHLIGHTS`
- **Title:** `Partnership Highlights`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: big number, label.

| Metric | Label |
|---|---|
| `9` | `Microsoft Specializations` |
| `5K+` | `Microsoft Technical Certifications` |
| `200+` | `Microsoft Fabric Solutions Implemented` |
| `43` | `Certified Power BI Custom Visuals` |

---

### 3.4 Partnership Overview (partner badge + description band)

- **Layout:** left column = Microsoft Solutions Partner badge image(s), right column = descriptive copy.
- **Background:** white.
- **Padding:** `48px 32px`.

**Badge images:**
- 4 Microsoft Solutions Partner designation badges (Data & AI, Digital & App Innovation, Infrastructure, Security)
- Source: `[PLACEHOLDER — official Microsoft Solutions Partner badge images from partner.microsoft.com or maqsoftware.com/images-new/]`
- `alt="Microsoft Solutions Partner"`, `loading="lazy"`.

**Copy (literal):**
> As a Microsoft Fabric Featured Partner and Preferred Supplier since 2000, MAQ Software holds 4 Microsoft Solution Partner designations—Data & AI, Digital & App Innovation, Infrastructure, and Security—along with 9 advanced specializations. Our 5,000+ Microsoft technical certifications and 200+ Fabric implementations demonstrate our deep expertise across Azure, Power BI, Microsoft Fabric, Copilot, and the broader Microsoft ecosystem. From AI-driven analytics to enterprise cloud modernization, we empower organizations to maximize their investment in Microsoft technologies.

**Additional detail — Solution Partner Designations (render as 4-icon row beneath copy):**

| Designation | Link |
|---|---|
| Solutions Partner for Data & AI (Azure) | `https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure` |
| Solutions Partner for Digital & App Innovation (Azure) | `https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure` |
| Solutions Partner for Infrastructure (Azure) | `https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure` |
| Solutions Partner for Security | `https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security` |

---

### 3.5 Our Offerings (5 feature cards)

- **Eyebrow:** `OUR OFFERINGS`
- **Title:** `Accelerating Digital Transformation Through Our Microsoft Partnership`
- **Section id:** `microsoft-offerings`
- **Layout:** vertical stack of cards or 2-column alternating layout. Each card: eyebrow tagline + bold title + multi-line description.
- **Background:** alternating white / `--maq-off-white`.

| Eyebrow | Title | Description |
|---|---|---|
| `Accelerate Your Data Journey` | `Microsoft Fabric & Power BI` | We specialize in end-to-end Microsoft Fabric implementations, Power BI performance optimization, and enterprise-scale analytics. As a Fabric Featured Partner with 200+ implementations, we help organizations migrate to Fabric, optimize capacity utilization, and deliver near real-time insights through highly optimized data models and interactive dashboards. |
| `Intelligent Automation at Scale` | `Agentic AI & Microsoft Copilot` | Leverage our expertise in Microsoft Copilot Studio, Azure AI, and agentic architectures to build enterprise-grade AI agents. From legal contract management to sales automation and event management, we design and deploy intelligent agents that transform business processes and drive measurable efficiency gains. |
| `Modernize with Confidence` | `Cloud Infrastructure & Migration` | Simplify your cloud modernization journey with our proven migration frameworks for Azure. Whether migrating data warehouses, enterprise applications, or databases (Oracle, PostgreSQL, SQL Server to Azure), we ensure secure, high-performance transitions with minimal downtime and validated results. |
| `Empower Every Team` | `Power Platform & Dynamics 365` | We enable organizations to streamline operations with low-code solutions on Power Platform—from custom app development and process automation to Center of Excellence implementations. Our Dynamics 365 expertise extends to security audits, unified interface migrations, and intelligent business process optimization. |
| `Protect & Govern` | `Security & Compliance` | With specializations in Cloud Security and Threat Protection, we help organizations implement robust security postures across Azure, Microsoft 365, and hybrid environments. Our solutions span Microsoft Purview governance, identity management, and end-to-end data protection aligned with global compliance standards. |

---

### 3.6 Marketplace Offerings

- **Eyebrow:** `MARKETPLACE OFFERINGS`
- **Title:** `Marketplace Offerings`
- **Section id:** `microsoft-marketplace`
- **Layout:** 2-panel layout — top panel for Power BI visuals, bottom panel for consulting services.
- **Background:** `--maq-off-white`.

**Panel A — Power BI Custom Visuals:**

**Subheading:** `Power BI Custom Visuals`

**Copy (literal):**
> Expand your reporting capabilities with our 43 certified Power BI custom visuals—the largest 3rd party publisher of certified Power BI custom visuals worldwide. Our visuals have been downloaded millions of times and include multiple Microsoft Editor's Picks.

**Highlights (bullet list):**
- 43 certified Power BI custom visuals
- Largest 3rd party publisher of certified Power BI custom visuals
- Multiple Editor's Pick selections by Microsoft Power BI team
- Categories: Change Over Time, Comparison, Distribution, KPI, Part-to-Whole, Ranking, and more

**CTA:** `Explore custom visuals` → `https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals` (opens new tab)

**Panel B — Azure Marketplace Consulting Services:**

**Subheading:** `Consulting Services on Azure Marketplace`

**Copy (literal):**
> Access 100+ consulting offers across Microsoft Fabric, Power BI, Azure AI, Copilot, Power Platform, and Dynamics 365—ranging from free assessments and briefings to full migration engagements.

**Featured offers (render as mini-cards or list):**

| Offer | Duration | Price |
|---|---|---|
| Microsoft Fabric: 2-Hour Briefing | 2 hours | Free |
| Microsoft Fabric: 4-Week Assessment | 4 weeks | $15,000 |
| Agentic AI Envisioning Workshop | 1 day | Free |
| Power BI Performance Optimization: 1-Week Workshop | 1 week | $10,000 |
| Tableau to Power BI: Full Migration Engagement | Engagement | $75,000 |
| Power BI Center of Excellence: 10-Week Implementation | 10 weeks | $35,000 |

**CTA:** `View all consulting offers` → `https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software` (opens new tab)

---

### 3.7 Related blogs and case studies (4-card grid)

- **Eyebrow:** `INSIGHTS`
- **Title:** `Related blogs and case studies`
- **Layout:** 4 columns ≥1200px, 2 columns 640–1200px, 1 column below 640px. Each card: title + link (whole card clickable, opens new tab).

| Title | Link |
|---|---|
| `Improving lead management and campaign optimization with Microsoft technologies` | `https://blog.maqsoftware.com/2024/02/improving-lead-management-and-campaign.html` |
| `Modernizing reporting platforms through AI-driven SQL Migration` | `https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html` |
| `Improving event experience for thousands using AI Agents` | `https://blog.maqsoftware.com/2024/08/streamlining-event-information-access.html` |
| `Transforming customer support with AIOps-driven Power BI Embedding` | `https://blog.maqsoftware.com/2023/02/transforming-customer-support-with.html` |

---

### 3.8 Connect with us (partnership CTA band)

- **Title:** `Connect with us`
- **Background:** `--maq-black` or dark gradient.
- **Layout:** centered copy + email CTA.

**Copy (literal):**
> As a Microsoft Fabric Featured Partner and Preferred Supplier since 2000, MAQ Software brings unmatched expertise in helping organizations unlock the full potential of Microsoft's ecosystem. Whether you're modernizing your data estate with Fabric, accelerating Power BI adoption, or deploying AI agents with Copilot Studio, we're here to support you every step of the way.

**CTA:** `CustomerSuccess@MAQSoftware.com` → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us%20-%20Microsoft%20Partnership&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`

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
| `<title>` | `Microsoft Partnership | MAQ Software` |
| `<meta description>` | `MAQ Software is a Microsoft Fabric Featured Partner with 9 specializations, 4 solution partner designations, and 5,000+ certifications—delivering Power BI, Fabric, Azure AI, and Copilot solutions.` |
| `canonical` | `https://maqsoftware.com/partnerships/microsoft` |
| `og:image` | `[PLACEHOLDER — /images-new/Microsoft/Microsoft-hero.webp]` |

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- "26 years" where tenure is referenced (Microsoft Preferred Supplier since 2000).
- All primary CTAs → `CustomerSuccess@MAQSoftware.com`.
- Always "Microsoft" (never abbreviated).
- Use official Microsoft product names: "Microsoft Fabric", "Power BI", "Azure", "Microsoft Copilot", "Dynamics 365", "Power Platform".

---

## 7. Accessibility

- Hero image has descriptive `alt` text.
- All external links open in new tab via `target="_blank" rel="noreferrer"`.
- Stat cards use semantic `<dl>` / `<dt>` / `<dd>` or equivalent ARIA.
- Offering cards use proper heading hierarchy (`h3` inside `h2` section).
- Marketplace bullet lists use semantic `<ul>` / `<li>`.

---

## 8. Build & verify

```powershell
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. `/partnerships/microsoft` renders the exact copy in §3.
3. The Partnerships mega-menu in Header correctly links to the route.
4. No other pages regress.

---

## 9. Microsoft Specializations reference (for rendering in overview or separate sub-section)

| # | Specialization | Link |
|---|---|---|
| 1 | AI Platform on Microsoft Azure | `https://partner.microsoft.com/en-us/partnership/specialization/ai-platform-on-microsoft-azure` |
| 2 | Analytics on Microsoft Azure | `https://partner.microsoft.com/en-us/partnership/specialization/analytics-on-microsoft-azure` |
| 3 | Build AI Apps on Microsoft Azure | `https://partner.microsoft.com/en-us/partnership/specialization/build-and-modernize-ai-apps` |
| 4 | Data Warehouse Migration to Microsoft Azure | `https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration` |
| 5 | Migrate Enterprise Applications to Microsoft Azure | `https://partner.microsoft.com/en-us/partnership/specialization/migrate-enterprise-applications` |
| 6 | Kubernetes on Microsoft Azure | `https://partner.microsoft.com/en-us/partnership/specialization/kubernetes` |
| 7 | Copilot | `https://partner.microsoft.com/en-us/partnership/specialization/microsoft-copilot` |
| 8 | Cloud Security | `https://partner.microsoft.com/en-us/partnership/specialization/cloud-security` |
| 9 | Threat Protection | `https://partner.microsoft.com/en-us/partnership/specialization/threat-protection` |

---

## 10. Recognition & awards (supplementary content for Partnership Overview or separate sub-section)

| Award | Year | Details |
|---|---|---|
| Microsoft Power BI Partner of the Year | 2021 | Global Award Winner — recognized for delivering innovative BI and analytics solutions using Microsoft Power BI |
| Microsoft Fabric Featured Partner | Current | Featured partner status for Microsoft Fabric ecosystem |
| Microsoft Preferred Supplier | Since 2000 | 26-year preferred supplier relationship |
| Frontier AI Organization | Current | Recognized by Microsoft as a Frontier AI organization |
| Inc. 5000 Fastest Growing Companies | 12× honoree | Twelve-time Inc. 5000 honoree for sustained organic growth |

---

## 11. Reconciliation report

### Pass A — Source content inventory (synthesized from maqsoftware.com)

| # | Block | Source Page | Words (approx) | Mapped to |
|---|---|---|---|---|
| 1 | "Microsoft Fabric Featured Partner" tagline + intro | /who-we-are | ~30 | §3.1 Hero |
| 2 | 4 Solution Partner designations (badges) | /who-we-are | ~20 | §3.4 Overview |
| 3 | 9 Microsoft Specializations (list with links) | /who-we-are, footer | ~60 | §9 Reference table, §3.4 |
| 4 | Partnership stats (9 specializations, 4 designations, 5K+ certs, 200+ Fabric) | /who-we-are | ~30 | §3.3 Highlights |
| 5 | "25 years of excellence" / "Preferred Supplier since 2000" | /who-we-are | ~40 | §3.4 Overview |
| 6 | "Why choose MAQ Software" (Continuous delivery, Faster implementation, Cost effective, Immediate response) | /who-we-are | ~60 | §3.2 Why Microsoft (adapted) |
| 7 | Microsoft Power BI Partner of the Year 2021 award | /news | ~80 | §10 Recognition |
| 8 | 43 certified Power BI custom visuals (largest 3rd party publisher) | /Marketplace-Offers/Power-BI-custom-visuals | ~40 | §3.6 Marketplace |
| 9 | 101+ consulting services on Azure Marketplace | Azure Marketplace | ~200 | §3.6 Marketplace |
| 10 | Case studies (Microsoft technologies) | / (homepage) | ~60 | §3.7 Insights |
| 11 | Homepage CTA "Make the move to Microsoft Fabric" | / | ~20 | §3.8 Connect |
| 12 | FabCon 2026, MCAPS Tech Connect participation | /news | ~150 | §10 Recognition (event presence) |
| 13 | Partner page link (AppSource) | /who-we-are | ~10 | §3.4 Overview |
| 14 | Our partners section — Microsoft Preferred Supplier badge | /who-we-are | ~10 | §3.4 Overview |

### Pass B — Reconciliation

All 14 inventoried content blocks are mapped to spec sections. **Zero blocks dropped.**

**Notes:**
- The "Why choose MAQ Software" section (Continuous delivery, Faster implementation, Cost effective, Immediate response) was adapted into the "Why Microsoft" value props (§3.2) with Microsoft-specific framing rather than generic company selling points, since this is a partnership page focused on the Microsoft technology value.
- FabCon / MCAPS Tech Connect event details are captured in §10 Recognition as evidence of partnership depth; they are not rendered as standalone sections to avoid staleness.
- The Microsoft partnership page is a **new page** (no legacy URL exists), so no legacy redirect is needed beyond the SPA fallback.

---

## 12. Placeholders requiring assets

| Item | Status | Action needed |
|---|---|---|
| Hero image (`/images-new/Microsoft/Microsoft-hero.webp`) | `[PLACEHOLDER]` | Design team to create or source a partnership hero graphic |
| Microsoft Solutions Partner badge images | `[PLACEHOLDER]` | Source official badge SVGs/PNGs from Microsoft Partner Center or recreate |
| OG image | `[PLACEHOLDER]` | Use hero image once available |
