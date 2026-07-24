# Service Page Spec — Cloud Optimization

> Source: https://maqsoftware.com/services/cloud
> Sibling specs: [spec-service-agentic-ai.md](spec-service-agentic-ai.md), [spec-industry-retail.md](spec-industry-retail.md), [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the **second** service-overview page in the new site, reusing the section taxonomy
defined in `spec-service-agentic-ai.md` as the authoritative service-page shape.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/cloud` |
| Page component | `src/pages/ServiceCloud.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Service building blocks | `src/components/service/ServiceHero.tsx`, `ServiceCapabilities.tsx`, `ServiceOutcomes.tsx`, `ServiceProducts.tsx`, `ServiceCaseStudies.tsx`, `ServiceInsights.tsx` |
| Header nav integration | Services mega-menu "Cloud optimization" → `/services/cloud` |

**Design goal:** scannable, dense, single-viewport sections. Vertical padding `48px`
(hero `48–56px`), parallel multi-column layouts, h2 `28–30px`, body `14px`. No
oversized hero. Match aesthetic and component reuse from Agentic AI service page.

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

- **Layout:** left 60% = copy + CTAs, right 40% = decorative cloud infrastructure mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (verbatim from source):**
- **Eyebrow:** `Cloud infrastructure & modernization`
- **H1:** `Modernize from on-premises to cloud-native on Azure`
- **Subhead:**
  > MAQ Software replatforms on-premises workloads to Azure — from lift-and-shift through full cloud-native re-architecture — with FinOps discipline that delivers 30–40% lower run cost on average across enterprise workloads.
- **Primary CTA:** `Get started` → `/contact`
- **Secondary CTA:** `Explore capabilities` → scroll to `#cloud-capabilities`

**Decorative visual (CSS mosaic, aria-hidden):**
- Tile A: "Cloud infrastructure" with server stack / cloud icon
- Tile B: "Deployment status" with uptime percentage / green checkmarks
- Tile C: "Resource optimization" showing cost graph with downward trend

### 3.2 ServiceCapabilities — "Our cloud optimization capabilities"

Reproduces the 4-capability pillar section from source.

- **Section id:** `cloud-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our cloud optimization capabilities`
- **Subhead:** `Four capability pillars that deliver scalable, secure, and cost-effective cloud solutions.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 4–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of 4 selectable cards. Active = 2px `--maq-red` left border; rest = `--maq-border`.
  - Default selected = #1 Migration & modernization.

**Capabilities (verbatim from source, expanded with MAQ taglines):**

| # | Name | Tagline | Icon | Description (left pane) | Tags |
|---|---|---|---|---|---|
| 1 | `Migration & modernization` | `Transform with cloud migration` | `CloudArrow24Regular` (red) | Migrate your workloads to the cloud with ease. We handle every step, from planning to execution, ensuring your systems are modernized and optimized for the cloud environment. End-to-end cloud migration with minimal downtime and risk. | `Azure Migration`, `Workload optimization`, `Data modernization`, `Zero-downtime` |
| 2 | `Cloud security` | `Protect at every layer` | `Lock24Regular` (red) | Ensure robust cloud security with defense-in-depth strategies covering identity, network, data, and compliance. We help you implement security controls, manage access policies, and meet regulatory requirements across your cloud environment. | `IAM`, `Network security`, `Data encryption`, `Compliance` |
| 3 | `Cloud native applications` | `Build apps for the cloud` | `Cube24Regular` (red) | Design and deploy cloud-native applications using containerization, microservices, and serverless architectures. We help you build scalable, resilient applications that leverage the full potential of cloud infrastructure. | `Kubernetes`, `Docker`, `Microservices`, `Serverless` |
| 4 | `Infrastructure services` | `Manage cloud operations` | `Server24Regular` (red) | Optimize your cloud infrastructure with cost management, performance tuning, and operational best practices. We design and manage cloud platforms that scale with your business while controlling costs and ensuring high availability. | `IaC`, `Cost optimization`, `Performance`, `HA/DR` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}`.
- **Footer link below panel:** `See cloud case studies →` → `/case-studies.html?filter=cloud-optimization` (preserves source link).

### 3.3 ServiceOutcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when cloud infrastructure is delivered with engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards (verbatim from source):**

| Icon | Title | Description |
|---|---|---|
| `DollarCircle24Regular` | `Cost efficiency` | Reduce IT costs with scalable cloud solutions that provide the flexibility and efficiency your business needs. |
| `Shield24Regular` | `Enhanced security` | Protect your business with robust cloud security measures that safeguard data and ensure compliance. |
| `Beaker24Regular` | `Operational resilience` | Build a resilient infrastructure that can adapt to disruptions, ensuring continuous business operations. |

### 3.4 ServiceCaseStudies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are accelerating cloud transformation`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag (placeholder), title, 1–2 line teaser, "Read full story →" link.
- **Cards (verbatim titles + source URLs):**

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Energy & utilities` | ADX Implementation in the Energy and Utilities Industry | Modernizing data infrastructure with real-time analytics on cloud platforms. | https://blog.maqsoftware.com/2023/06/adx-implementation-for-energy-and.html |
| `Data modernization` | Modernize Data Systems by Migrating to the Cloud | End-to-end cloud migration strategy delivering cost savings and operational improvements. | https://blog.maqsoftware.com/2020/09/modernize-data-cloud-migration.html |
| `Real estate` | ADX Implementation in the Real Estate Industry | Cloud-native analytics enabling fast-paced business intelligence for real estate operations. | https://blog.maqsoftware.com/2022/11/adx-implementation-real-estate.html |
| `Analytics & BI` | Enabling Fast-Paced BI and Analytics | Accelerating BI delivery with cloud data warehouse and analytics best practices. | https://blog.maqsoftware.com/2020/11/azure-fast-paced-bi-analytics.html |

- **Footer link below grid:** `See all cloud case studies →` → `/case-studies.html?filter=cloud-optimization`.

### 3.5 ServiceInsights — "Our cloud optimization insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our cloud optimization insights`
- **Subhead:** `See our research that goes into refining our cloud optimization service.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards (verbatim from source):**

| Title | Teaser | Link |
|---|---|---|
| `Optimize your DevOps strategies with our 9 essential best practices` | Essential DevOps practices for efficient cloud deployment and operations. | `/insights/azure-dev-ops-best-practices-guide.html` |
| `Strengthen your cloud security and protect your assets with 19 security best practices` | Comprehensive security best practices for protecting your cloud infrastructure and data. | `/insights/azure-security-best-practices.html` |
| `This guide covers the 7 best practices you need to secure Dataverse` | Essential security controls for protecting data in Microsoft Dataverse cloud environment. | `/insights/dataverse-security-best-practices.html` |

- **Footer link below grid:** `See all cloud insights →` → search or tag-based link TBD.

### 3.6 ServiceTestimonials — "What our clients have to say"

- **Eyebrow:** `TESTIMONIALS` (exact text)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px). Each card: opening quote glyph in `--maq-red` (18% opacity, Georgia serif, 56px), body in `--maq-black` 15px / 1.55, attribution in `--maq-gray-600` uppercase 12px / weight 600.
- **Position:** always second-to-last section, immediately before `<CTA />`.
- **Quotes (placeholder until signed off):**

| Quote | Attribution |
|---|---|
| `MAQ Software managed our complete Azure migration project, reducing infrastructure costs by 35% while improving performance. The team's expertise in cloud optimization and change management was invaluable.` | `CTO — Global financial services firm` |
| `Their cloud security review identified critical compliance gaps and delivered a zero-trust architecture implementation. We now meet regulatory requirements with confidence and visibility across all cloud resources.` | `Chief Information Security Officer — Enterprise healthcare provider` |

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

- **title:** `Cloud Optimization Services | MAQ Software`
- **description:** `Scale with confidence using MAQ Software's cloud optimization services — migration, security, cloud-native applications, and infrastructure management on Azure.`
- **canonical:** `https://maqsoftware.com/services/cloud`
- **og:image:** `[PLACEHOLDER — to be supplied by marketing]`

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- 26 years of Microsoft delivery.
- All primary CTAs → `customersuccess@maqsoftware.com`.
- Single-product names exactly as on maqsoftware.com (MigrateFAST, LoadFAST, EmbedFAST).

---

## 7. Content reconciliation (Pass A → Pass B)

Source page blocks → target sections:

| Source block | Target |
|---|---|
| H1 "Scale with confidence in the cloud" + subhead + Get started | §3.1 ServiceHero |
| "Our cloud optimization capabilities" tabs (Migration & modernization / Cloud security / Cloud native applications / Infrastructure services) | §3.2 ServiceCapabilities |
| "Cloud case studies" filter link | §3.2 footer link |
| "Your business outcomes" 3 cards (Cost efficiency / Enhanced security / Operational resilience) | §3.3 ServiceOutcomes |
| "Cloud optimization products" (MigrateFAST, LoadFAST, EmbedFAST) | §3.4 ServiceProducts |
| "Related case studies" 4 cards | §3.5 ServiceCaseStudies |
| "Our cloud optimization insights" 3 cards | §3.6 ServiceInsights |
| Footer (services / products / resources / specializations / ISO / address) | Shared `<Footer />` |
| Top banner (if active) | Shared `<Announcement />` |

**Drops:** none. Every visible source block is mapped.

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/#/services/cloud
npm run build        # must exit 0
```

Done when:
1. `npm run build` exits 0.
2. Page renders the exact copy in §3.
3. Route `/services/cloud` is reachable from the URL.
4. Other pages do not regress.

## 9. Out of scope (v1)

- Per-capability landing pages (capabilities currently mailto).
- Live CMS for case studies and insights.
- Header mega-menu wiring for all 6 services.
- Localization.
