# Industry Page Spec — Technology, Software & ISVs

> Sibling document to [spec.md](spec.md) (home page) and
> [spec-industry-retail.md](spec-industry-retail.md). Same authoring rules
> apply: edit this file, then ask the assistant to "sync code to spec" and only
> the matching components / route data will change.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/industries/technology` |
| Page component | `src/pages/IndustryTechnology.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />` from home |
| Industry building blocks | Reuse `src/components/industry/IndustryHero.tsx`, `SolutionShowcase.tsx`, `ImpactStats.tsx`, `IndustryCaseStudies.tsx` |
| Header nav integration | Industries mega-menu "Technology" → `/industries/technology` |

**Design goal:** same dense, scannable layout used by Retail — tight section padding (`48–56px`), multi-column layouts, compact typography.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, with active state on "Industries")*
3. `<IndustryHero />`                  — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ImpactStats />`                   — §3.2
6. `<SolutionShowcase />`              — §3.3
7. `<IndustryCaseStudies />`           — §3.4
8. `<CTA />` *(shared)*
9. `<Footer />` *(shared)*

> **Note:** MarketplaceOffers and Testimonials are omitted from v1 — no verified
> marketplace listings or signed-off testimonial quotes exist for Technology yet.

---

## 3. Section specs

### 3.1 IndustryHero

- **Layout:** same 2-column band as Retail (left copy 60%, right visual 40%).
- **Visual:** CSS-only technology-themed dashboard tiles (CI/CD pipeline bars, developer velocity sparkline, test coverage score). All decorative (`aria-hidden="true"`).

**Copy:**
- **Eyebrow:** `TECHNOLOGY & SOFTWARE`
- **H1:** `Accelerate Software Delivery with AI-Powered Engineering`
- **Subhead:**
  > AI is reshaping how technology organizations build, test, and ship software. At MAQ Software, we help ISVs, cloud-native teams, and enterprise software organizations embed intelligence across the SDLC — from agentic code review to embedded analytics — so engineering teams spend less time on rework and more time on innovation.
- **Primary CTA:** `Contact Us` → `mailto:customersuccess@maqsoftware.com?subject=Technology%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore tech solutions` → scroll to `#technology-solutions`

> ⚠️ Hero H1 and subhead are **placeholder copy** pending a content brief from the sales team. See `content-brief-industries.md` submission template.

### 3.2 ImpactStats

- **Section eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for technology leaders`
- **Subhead:** `Numbers from MAQ Software engagements with global ISVs and enterprise software organizations.`
- **Layout:** 4 cards in one row (2×2 below 960px).

**Cards (sourced from published blog posts):**

| Metric | Label | Source |
|---|---|---|
| `~70%` | Faster feature delivery via AI-assisted rapid prototyping at a global software company | [Modernizing the software development lifecycle with GitHub Copilot](https://blog.maqsoftware.com/2025/11/modernizing-software-development.html) |
| `4×` | Faster embedded analytics rollout — 12-month roadmap delivered in 3 months | [Delivering embedded Power BI reporting with EmbedFAST](https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html) |
| `~90%` | Bug resolution planning time cut from 5 hours to 30 minutes with DevelopFAST | [Get ideas to code from months to hours with DevelopFAST](https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html) |
| `~50%` | Test case creation time savings with AI-generated test suites | [Modernizing the software development lifecycle with GitHub Copilot](https://blog.maqsoftware.com/2025/11/modernizing-software-development.html) |

### 3.3 SolutionShowcase — "Technology Agents"

- **Section id:** `technology-solutions`
- **Eyebrow:** `AGENTIC AI`
- **Title:** `Make your engineering teams smarter with our Technology Agents`
- **Layout:** same white rounded panel as Retail (left detail + right rail).

**Agents (4):**

| # | Name | Tagline | Icon | Description |
|---|---|---|---|---|
| 1 | `DevelopFAST` | From feature idea to production-ready code | `Lightbulb24Regular` | Transforms raw feature inputs into structured user stories, technical plans, test cases, and code using generative AI. A reflection phase interprets requirements, proposes three solution approaches, and auto-generates pseudocode and production-grade code. Bug resolution planning reduced from 5 hours to 30 minutes (~90% improvement). Test case creation achieves ~50% time savings. |
| 2 | `EmbedFAST` | Enterprise-grade Power BI embedding in weeks | `ChartMultiple24Regular` | Production-ready accelerator for Power BI embedded analytics. Ships export, bookmark, subscription, paginated reporting, and admin-level controls for managing subscriptions and report authoring. Reduced implementation timeline from 12 months to 3 months for a global software company. Minimizes custom development through prebuilt, scalable components. |
| 3 | `PR Review & Coding Standards Agent` | Consistent quality across every commit | `Search24Regular` | Evaluates PRs, flags style violations, detects anti-patterns, and drafts review comments. Improves code quality and reduces review effort across teams. Part of MAQ Software's agentic AI suite for accelerating software development workflows. |
| 4 | `Test Case Generation Agent` | Automated test design from requirements | `Bot24Regular` | Generates test cases from requirements and code changes, and links them to user stories. Improves coverage and reduces test planning time. Integrated into CI/CD workflows to speed up releases by ~30%. |

- **Button:** `Know More` — outlined red, opens `mailto:customersuccess@maqsoftware.com?subject={Agent name} — Technology — MAQ Software`

**Data sources:**
- DevelopFAST: [Get ideas to code from months to hours with DevelopFAST](https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html)
- EmbedFAST: [Delivering embedded Power BI reporting with EmbedFAST](https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html)
- PR Review & Test Case Generation agents: [Accelerating software development with agentic AI solutions](https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html)

### 3.4 IndustryCaseStudies

- **Eyebrow:** `TECHNOLOGY CASE STUDIES`
- **Title:** `How technology organizations move faster with MAQ Software`
- **Layout:** 3-column card grid.
- **Cards (from [case-studies.md](case-studies.md) — Technology, Software & ISVs section):**

| Tag | Title | Teaser | Link |
|---|---|---|---|
| `Agentic AI` | Accelerating software development with agentic AI solutions | Agentic AI woven through SDLC to accelerate coding, review and release. | https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html |
| `GitHub Copilot` | Modernizing the software development lifecycle with GitHub Copilot | Adopt GitHub Copilot at scale to lift dev productivity and quality. | https://blog.maqsoftware.com/2025/11/modernizing-software-development.html |
| `Power BI Embedded` | Delivering embedded Power BI reporting with EmbedFAST | ISV embeds Power BI into SaaS product using EmbedFAST accelerator. | https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html |

- **Footer link:** `See all technology case studies →` → `https://maqsoftware.com/case-studies`

### 3.5 CTA (reuses shared `<CTA />`)

Same component as home page. No technology-specific override for v1.

---

## 4. Theming & visuals

Inherits all theme tokens from the shared design system:
- Red elements: `--maq-red` (#BA141A)
- Card hover: `border-color: var(--maq-red)`, lift shadow
- Category pills: `--maq-red-pale` bg, `--maq-red` text
- Section padding: `48px` vertical

---

## 5. Accessibility

- Same rules as Retail spec §5.
- Hero visual carries `aria-hidden="true"`.
- Solution rail items expose `aria-current="true"` for selected state.

---

## 6. Build & verify

```powershell
npm run dev          # http://localhost:5173/industries/technology
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. The Technology page renders with the exact copy in §3.
3. Header "Industries → Technology" navigates to the page.
4. No other pages regress.

---

## 7. Data provenance

All data on this page is sourced from:
- **Case study titles, intents, URLs:** [case-studies.md](case-studies.md) § "💻 Technology, Software & ISVs"
- **Impact metrics:** Published blog posts (linked in §3.2 table)
- **Agent descriptions:** Published blog posts (linked in §3.3 sources)
- **Hero copy, section titles, agent taglines:** Placeholder — pending content brief from sales team

---

## 8. Out of scope (v1)

- MarketplaceOffers section (no verified Azure Marketplace listings for Technology)
- Testimonials section (no signed-off quotes yet)
- Per-agent landing pages (currently mailto)
- Filtered case-studies route (`?industry=technology`)
