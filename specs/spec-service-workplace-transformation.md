# Service Page Spec — Workplace Transformation & Productivity

> Source: *(no existing maqsoftware.com page — this is a new service category per content-brief-services.md)*
> Sibling specs: [spec-service-agentic-ai.md](spec-service-agentic-ai.md), [spec-service-business-apps.md](spec-service-business-apps.md), [spec-service-security-compliance.md](spec-service-security-compliance.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the **seventh** service-overview page in the new site. It is a **net-new**
service category — the old site does not have a dedicated workplace transformation
page. Content is synthesized from the content brief (`content-brief-services.md`),
MAQ Software's Microsoft Copilot specialization, and related case studies / blogs.

> **Priority:** P2 per content brief. Sales brief has not yet been submitted for
> this service. This spec uses **inferred** content aligned with MAQ Software's
> known Microsoft 365, SharePoint, Teams, Viva, and Microsoft Copilot delivery
> capabilities. All copy marked *(inferred)* must be reviewed with sales before
> publish.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/workplace-transformation` |
| Page component | `src/pages/ServiceWorkplaceTransformation.tsx` (self-contained — all sections, styles, and content inline) |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Reused service components | **None.** Self-contained like `ServiceBusinessApps.tsx`. |
| Header nav integration | Services mega-menu "Workplace transformation & productivity" → `/services/workplace-transformation` |

**Design goal:** identical visual rhythm to `/services/agentic-ai` — scannable,
dense, single-viewport sections. Vertical padding `48px` (hero `48–56px`),
parallel multi-column layouts, h2 `28–30px`, body `14px`.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared, rendered by `App.tsx`)*
2. `<Header />` *(shared, rendered by `App.tsx`, active state on "Services")*
3. Hero section              — §3.1
4. `<TrustBanner />` *(shared)*
5. Capabilities section       — §3.2  (4 capability pillars, tabbed list+detail)
6. Outcomes section           — §3.3  (3 business-outcome cards)
7. Case studies section       — §3.4  (4 related case studies)
8. Insights section           — §3.5  (3 blog insights)
9. Testimonials section      — §3.6  (placeholder until signed quotes available)
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared, rendered by `App.tsx`)*

> **Global rule:** when a Testimonials section is rendered on this page, it must
> appear immediately before `<CTA />` (last content section). Eyebrow must be
> `TESTIMONIALS`; H2 must be `What our clients have to say`. Until signed quotes
> are available, the section is not rendered — only a placeholder comment marks
> the slot in the JSX.

---

## 3. Section specs

### 3.1 ServiceHero (compact 2-column band)

- **Layout:** left 60% = copy + CTAs, right 40% = decorative workplace productivity mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy *(inferred — review with sales):***

- **Eyebrow:** `Workplace transformation & productivity`
- **H1:** `Microsoft 365 and Copilot rollouts that drive real adoption`
- **Subhead:**
  > We deploy Microsoft 365, Teams, SharePoint, Viva, and Microsoft Copilot — paired with structured adoption programs and change management that turn rollouts into measurable usage, not shelfware.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Workplace%20Transformation%20%26%20Productivity%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore capabilities` → scroll to `#workplace-capabilities`

**Decorative visual (CSS mosaic, aria-hidden):**

- Tile A: "Copilot adoption" with a rising line chart and "78% active users"
- Tile B: "Collaboration score" radial chart at 92%
- Tile C: "Today's productivity" two rows ("Meetings summarized · 1,240", "Documents co-authored · 3,680")

### 3.2 Capabilities — "Our workplace transformation capabilities"

- **Section id:** `workplace-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our workplace transformation capabilities`
- **Subhead:** `Four capability pillars that modernize employee experiences and unlock the full value of your Microsoft 365 investment.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 4–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of 4 selectable cards. Active = 2px `--maq-red` left border; rest = `--maq-border`.
  - Default selected = #1 Microsoft Copilot adoption & governance.

**Capabilities *(all inferred — review with sales):***

| # | Name | Tagline | Icon | Description (left pane) | Tags |
|---|---|---|---|---|---|
| 1 | `Microsoft Copilot adoption & governance` | `Drive AI-assisted productivity at scale` | `Sparkle24Regular` (red) | Accelerate Microsoft 365 Copilot rollout with structured readiness assessments, persona-based enablement, and governance controls. We design Centers of Excellence, adoption dashboards, and prompt libraries so every role sees measurable time savings within weeks — not months. | `M365 Copilot`, `Copilot Studio`, `Viva Insights`, `Adoption Score` |
| 2 | `Modern intranet & collaboration platforms` | `Connect employees to knowledge and each other` | `Globe24Regular` (red) | Design and deploy SharePoint Online intranets, Teams-based workspaces, and Viva Connections experiences that unify communications, knowledge management, and day-to-day collaboration. We build information architectures that scale from 500 to 500,000 users without sprawl. | `SharePoint Online`, `Microsoft Teams`, `Viva Connections`, `Power Pages` |
| 3 | `Employee experience & Viva suite` | `Measure and improve how people work` | `PeopleTeam24Regular` (red) | Deploy Microsoft Viva modules — Insights, Learning, Engage, and Goals — to give leaders visibility into work patterns and give employees personalized learning paths, recognition, and goal alignment. We integrate Viva data with Power BI for executive-ready people analytics. | `Viva Insights`, `Viva Learning`, `Viva Engage`, `Power BI` |
| 4 | `Developer productivity & GitHub Copilot` | `Ship code faster with AI pair programming` | `Code24Regular` (red) | Roll out GitHub Copilot across engineering teams with hackathons, best-practice playbooks, usage dashboards, and CI/CD integration. Our proven enablement framework delivers ~40% reduction in coding time and ~50% faster test automation within the pilot phase. | `GitHub Copilot`, `Azure DevOps`, `CI/CD`, `Copilot Metrics` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}%20-%20Workplace%20Transformation`.
- **Footer link below panel:** `See workplace transformation case studies →` → `https://maqsoftware.com/case-studies.html` (no filter exists on source yet).

### 3.3 Outcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when workplace tools are deployed with adoption-first engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards *(inferred — review with sales):***

| Icon | Title | Description |
|---|---|---|
| `Rocket24Regular` | `Accelerated time to value` | Reduce onboarding-to-productivity time by deploying structured adoption programs that achieve 70%+ active usage within 60 days. |
| `PeopleTeam24Regular` | `Unified employee experience` | Consolidate disconnected tools into a single Microsoft 365 surface — reducing context switches and improving satisfaction scores. |
| `ArrowTrendingLines24Regular` | `Measurable productivity gains` | Track real outcomes with Copilot usage analytics and Viva Insights — translating tool adoption into hours saved per employee per week. |

### 3.4 Case studies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are transforming their digital workplace`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag, title, 1–2 line teaser, "Read full story →" link.
- **Cards *(titles + source URLs from MAQ blog):***

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Developer productivity` | Modernizing the software development lifecycle with GitHub Copilot | Embedding GitHub Copilot across the SDLC with adoption playbooks, governance, and outcome telemetry — delivering ~70% faster prototyping and ~55% faster refactoring. | https://blog.maqsoftware.com/2025/11/modernizing-software-development.html |
| `AI adoption` | Scaling AI for every customer and every developer with MAQ Software | A reference architecture and delivery model for scaling agentic AI and Copilot adoption to every developer in the enterprise. | https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html |
| `Knowledge management` | Explore Best Practices for Creating Enterprise-Wide Knowledge Bots | Patterns for building enterprise knowledge bots that ground answers in organizational content — improving information retrieval productivity. | https://maqsoftware.com/insights/knowledge-bot-best-practices.html |
| `Self-service BI` | Empowering self-service using Custom Copilot agent with Power BI Embedded | A custom Copilot agent over Power BI Embedded that lets users ask data questions in plain English — reducing report request backlog. | https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html |

- **Footer link below grid:** `See all case studies →` → `https://maqsoftware.com/case-studies`.

### 3.5 Insights — "Our workplace transformation insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our workplace transformation insights`
- **Subhead:** `See our research that goes into optimizing workplace productivity and collaboration.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards *(titles + URLs from MAQ blog):***

| Title | Teaser | Link |
|---|---|---|
| `Empowering businesses with AI: Frameworks that deliver results` | Field-tested frameworks for deploying AI capabilities — from knowledge bots to content generation — that produce measurable business outcomes. | https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html |
| `Modernizing the software development lifecycle with GitHub Copilot` | How a global organization embedded GitHub Copilot across development, testing, and deployment to transform engineering productivity. | https://blog.maqsoftware.com/2025/11/modernizing-software-development.html |
| `Building a secure Copilot: Addressing key security challenges` | Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot deployment that maintains data governance. | https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html |

### 3.6 Testimonials — *(hidden in current build)*

**Status:** not rendered. Only a placeholder JSX comment (`{/* TESTIMONIALS —
placeholder, hidden until signed quotes are available. */}`) marks the slot
immediately before `<CTA />` in `src/pages/ServiceWorkplaceTransformation.tsx`.

The source page does not exist and sales has not yet provided signed-off quotes
for this service. When ready:

- **Eyebrow:** `TESTIMONIALS` (exact text — site-wide rule)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px).
- **Position:** second-to-last section, immediately before `<CTA />`.
- Mirror the markup from the agentic-AI page's testimonials block.

**Placeholder quotes *(not for publish — illustrative only):***

| Quote | Attribution |
|---|---|
| `MAQ Software's Copilot adoption program got us to 80% weekly active usage in under 45 days — our previous rollout stalled at 20% for six months.` | `VP of Digital Workplace — Global technology company` |
| `The SharePoint intranet they delivered replaced five disconnected tools. Our employee satisfaction score jumped 18 points in one quarter.` | `Director of IT — Enterprise retail` |

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
white (insights), off-white (testimonials). Card hover: `border-color: var(--maq-red)`,
shadow `0 6px 16px rgba(0,0,0,0.06)`.

---

## 5. SEO

- **title:** `Workplace Transformation & Productivity Services | MAQ Software`
- **description:** `Transform your digital workplace with MAQ Software — Microsoft Copilot adoption, SharePoint intranets, Viva suite deployment, and GitHub Copilot enablement that drive measurable productivity gains.`
- **canonical:** `https://maqsoftware.com/services/workplace-transformation`
- **og:image:** `[PLACEHOLDER — to be supplied by marketing]`
- **Top 3 keywords:** `Microsoft Copilot adoption services`, `workplace transformation Microsoft 365`, `SharePoint intranet development`

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- 26 years of Microsoft delivery.
- All primary CTAs → `customersuccess@maqsoftware.com`.
- Microsoft Specialization to highlight: **[Copilot](https://partner.microsoft.com/en-us/partnership/specialization/microsoft-copilot)**.
- Service name in headings, nav, and SEO uses the new label **Workplace transformation & productivity**.

---

## 7. Content reconciliation (Pass A → Pass B)

Since there is no existing source page, this section documents the content provenance:

| Content block | Source | Status |
|---|---|---|
| Hero H1, subhead | Inferred from content brief service name + MAQ capabilities | ⚠️ Review with sales |
| Capability #1 — Microsoft Copilot adoption & governance | MAQ Copilot specialization + GitHub Copilot case study patterns | ⚠️ Review with sales |
| Capability #2 — Modern intranet & collaboration platforms | MAQ SharePoint / Teams known delivery; no verbatim source | ⚠️ Review with sales |
| Capability #3 — Employee experience & Viva suite | Inferred from Microsoft Viva partnership | ⚠️ Review with sales |
| Capability #4 — Developer productivity & GitHub Copilot | Verbatim outcomes from `blog.maqsoftware.com/2025/11/modernizing-software-development.html` | ✅ Metrics verified |
| Outcomes 1–3 | Inferred from capability descriptions | ⚠️ Review with sales |
| Products | Selected from existing MAQ product catalog (AI-DataLens, EmbedFAST, Fabric Admin Agent) | ⚠️ Review with sales |
| Case study 1 — GitHub Copilot SDLC | Verbatim title + URL from blog | ✅ Verified |
| Case study 2 — Scaling AI | Verbatim title + URL from blog | ✅ Verified |
| Case study 3 — Knowledge bots | Verbatim title + URL from insights | ✅ Verified |
| Case study 4 — Self-service Copilot + Power BI | Verbatim title + URL from blog | ✅ Verified |
| Insight 1 — AI frameworks | Verbatim title + URL from blog | ✅ Verified |
| Insight 2 — GitHub Copilot SDLC | Verbatim title + URL from blog | ✅ Verified |
| Insight 3 — Secure Copilot | Verbatim title + URL from blog | ✅ Verified |
| Testimonials | Placeholder — not from any source | 🚫 Not for publish |

**Action required:** Sales must provide the official content brief for this P2
service before the page goes live. All ⚠️ items need sign-off.

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/#/services/workplace-transformation
npm run build        # must exit 0
```

Done when:
1. `npm run build` exits 0.
2. Page renders the exact copy in §3.
3. Route `/services/workplace-transformation` is reachable from the URL.
4. Other pages do not regress.

---

## 9. Out of scope (v1)

- Per-capability landing pages (capabilities currently mailto).
- Live CMS for case studies and insights.
- Viva Insights dashboard integration (potential future enhancement).
- Microsoft 365 Assessment tool or readiness checker widget.
