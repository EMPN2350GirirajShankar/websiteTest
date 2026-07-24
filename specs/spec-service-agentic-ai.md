# Service Page Spec — Agentic AI & Machine Learning

> Source: https://maqsoftware.com/services/artificial-intelligence-and-machine-learning
> Sibling specs: [spec-industry-retail.md](spec-industry-retail.md), [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the **first** service-overview page in the new site. Future service pages
(Data & analytics, Reporting & visualization, Application modernization, Cloud,
Security) should reuse the section taxonomy defined here.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/agentic-ai` |
| Page component | `src/pages/ServiceAgenticAI.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| New service building blocks | `src/components/service/ServiceHero.tsx`, `ServiceCapabilities.tsx`, `ServiceOutcomes.tsx`, `ServiceProducts.tsx`, `ServiceCaseStudies.tsx`, `ServiceInsights.tsx` |
| Header nav integration | Services mega-menu "Agentic AI & ML" → `/services/agentic-ai` |

**Design goal:** scannable, dense, single-viewport sections. Vertical padding `48px`
(hero `48–56px`), parallel multi-column layouts, h2 `28–30px`, body `14px`. No
oversized hero.

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

- **Layout:** left 60% = copy + CTAs, right 40% = decorative AI dashboard mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (verbatim from source):**
- **Eyebrow:** `AI solutions & agentic automation`
- **H1:** `Build production-ready AI agents on Microsoft Foundry`
- **Subhead:**
  > MAQ Software designs, builds, and operates GenAI agents and copilots on Microsoft Foundry and the Microsoft Agent Framework — automating high-value workflows from contract review to demand forecasting, with full governance, evaluation, and human-in-the-loop controls.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Agentic%20AI%20%26%20ML%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore capabilities` → scroll to `#ai-capabilities`

**Decorative visual (CSS mosaic, aria-hidden):**
- Tile A: "Agent activity" with three pulsing dots / mini-bar chart
- Tile B: "Model performance" stacked bar (accuracy / precision / recall)
- Tile C: "Today's automations" two rows with red progress fills

### 3.2 ServiceCapabilities — "Our agentic AI and machine learning capabilities"

Reproduces the 4-capability pillar section from source.

- **Section id:** `ai-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our agentic AI and machine learning capabilities`
- **Subhead:** `Four capability pillars that turn raw data and LLM power into governed, production-grade business automation.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 4–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of 4 selectable cards. Active = 2px `--maq-red` left border; rest = `--maq-border`.
  - Default selected = #1 Agentic AI.

**Capabilities (verbatim from source, expanded with MAQ taglines from related blogs):**

| # | Name | Tagline | Icon | Description (left pane) | Tags |
|---|---|---|---|---|---|
| 1 | `Agentic AI` | `Innovate with agentic AI` | `Bot24Regular` (red) | Explore new possibilities with agentic AI. We help you harness advanced LLM models to create innovative solutions, from content generation to automated design and beyond. Multi-agent orchestration on Azure OpenAI with full observability, governance, and human-in-the-loop controls. | `Azure OpenAI`, `Multi-agent`, `RAG`, `Governance` |
| 2 | `Advanced analytics` | `Decisions backed by predictive models` | `ChartMultiple24Regular` (red) | Move from descriptive dashboards to predictive and prescriptive insight. We design feature stores, forecasting models, and recommendation engines tuned to your data and operating reality. | `Forecasting`, `Recommendation`, `Feature stores`, `Azure ML` |
| 3 | `Intelligent automation` | `Automate the busywork, not the judgment` | `Sparkle24Regular` (red) | Embed AI inside the workflows your teams already live in — Power Platform, Microsoft 365 Copilot, custom apps — so repetitive work disappears and people focus on decisions. | `Copilot Studio`, `Power Automate`, `M365 Copilot`, `Custom agents` |
| 4 | `MLOps` | `Production-grade model lifecycle` | `BranchFork24Regular` (red) | End-to-end MLOps so models stay accurate, compliant, and cost-controlled in production — CI/CD, drift detection, evaluation harnesses, and responsible AI guardrails. | `Azure ML`, `MLflow`, `Eval harness`, `Responsible AI` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}`.
- **Footer link below panel:** `See agentic AI case studies →` → `https://maqsoftware.com/case-studies.html?filter=gen-ai-and-machine-learning` (preserves source link).

### 3.3 ServiceOutcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when agentic AI is delivered with engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards (verbatim):**

| Icon | Title | Description |
|---|---|---|
| `Lightbulb24Regular` | `Enhanced decision-making` | Use AI-driven insights to make smarter, data-backed decisions that propel your business forward. |
| `Settings24Regular` | `Automated efficiency` | Automate repetitive tasks with intelligent systems, freeing up resources for more strategic initiatives. |
| `Rocket24Regular` | `Innovation acceleration` | Accelerate your innovation cycles by integrating cutting-edge AI and ML technologies into your business processes. |

### 3.4 ServiceCaseStudies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are putting agentic AI to work`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag (placeholder), title, 1–2 line teaser, "Read full story →" link.
- **Cards (verbatim titles + source URLs):**

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Developer productivity` | Modernizing the software development lifecycle with GitHub Copilot | Embedding GitHub Copilot across the SDLC with adoption playbooks, governance, and outcome telemetry. | https://blog.maqsoftware.com/2025/11/modernizing-software-development.html |
| `Customer service` | Scaling AI for every customer and every developer with MAQ Software | A reference architecture and delivery model for scaling agentic AI to every customer and every developer in the enterprise. | https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html |
| `Cross-industry` | Reshaping industries with agentic AI solutions | How agentic AI is reshaping retail, financial services, healthcare and manufacturing workflows in production. | https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html |
| `Self-service BI` | Empowering self-service using Custom Copilot agent with Power BI Embedded | A custom Copilot agent over Power BI Embedded that lets users ask data questions in plain English. | https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html |

- **Footer link below grid:** `See all AI case studies →` → `https://maqsoftware.com/case-studies.html?filter=gen-ai-and-machine-learning`.

### 3.5 ServiceInsights — "Our agentic AI and machine learning insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our agentic AI and machine learning insights`
- **Subhead:** `See our research that goes into optimizing our agentic AI and machine learning service.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards (verbatim from source):**

| Title | Teaser | Link |
|---|---|---|
| `Empowering businesses with AI: Frameworks that deliver results` | A field-tested framework for shipping AI initiatives that produce measurable business outcomes. | https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html |
| `Building a secure Copilot: Addressing key security challenges` | Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot. | https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html |
| `Designing UI for Copilot: Key principles and practices` | UI principles that make Copilot interactions feel trustworthy, fast, and on-brand. | https://blog.maqsoftware.com/2024/08/designing-ui-for-copilot-key-principles.html |

### 3.6 ServiceTestimonials — "What our clients have to say"

- **Eyebrow:** `TESTIMONIALS` (exact text)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px). Each card: opening quote glyph in `--maq-red` (18% opacity, Georgia serif, 56px), body in `--maq-black` 15px / 1.55, attribution in `--maq-gray-600` uppercase 12px / weight 600.
- **Position:** always second-to-last section, immediately before `<CTA />`.
- **Quotes (placeholder until signed off):**

| Quote | Attribution |
|---|---|
| `MAQ Software helped us productionize an Azure OpenAI agent that now resolves the top 40% of support tickets without human handoff — with full audit trail and policy guardrails.` | `Director, Customer Operations — Enterprise SaaS` |
| `From discovery to a deployed MLOps pipeline on Azure in eight weeks. Our forecast accuracy improved by double digits and the team is finally shipping models on a predictable cadence.` | `Head of Data Science — Global manufacturer` |

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

- **title:** `Agentic AI & Machine Learning Services | MAQ Software`
- **description:** `Automate and innovate with MAQ Software's agentic AI and machine learning services — multi-agent solutions on Azure OpenAI, advanced analytics, intelligent automation, and MLOps.`
- **canonical:** `https://maqsoftware.com/services/agentic-ai`
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
| H1 "Automate and innovate…" + subhead + Get started | §3.1 ServiceHero |
| "Our agentic AI and machine learning capabilities" tabs (Agentic AI / Advanced analytics / Intelligent automation / MLOps) | §3.2 ServiceCapabilities |
| "Agentic AI" highlight + case-studies filter link | §3.2 footer link |
| "Your business outcomes" 3 cards | §3.3 ServiceOutcomes |
| "Agentic AI & machine learning products" 3 cards | §3.4 ServiceProducts |
| "Related case studies" 4 cards | §3.5 ServiceCaseStudies |
| "Our agentic AI and machine learning insights" 3 cards | §3.6 ServiceInsights |
| Footer (services / products / resources / specializations / ISO / address) | Shared `<Footer />` |
| Top banner (TechCon 365 sponsor) | Shared `<Announcement />` |

**Drops:** none. Every visible source block is mapped.

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/#/services/agentic-ai
npm run build        # must exit 0
```

Done when:
1. `npm run build` exits 0.
2. Page renders the exact copy in §3.
3. Route `/services/agentic-ai` is reachable from the URL.
4. Other pages do not regress.

## 9. Out of scope (v1)

- Per-capability landing pages (capabilities currently mailto).
- Live CMS for case studies and insights.
- Header mega-menu wiring for all 6 services (only Agentic AI link needs to be active).
- Localization.
