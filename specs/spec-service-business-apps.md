# Service Page Spec — Business Apps & Process Automation

> Source: https://maqsoftware.com/services/application-modernization
> Sibling specs: [spec-service-agentic-ai.md](spec-service-agentic-ai.md), [spec-industry-retail.md](spec-industry-retail.md), [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the **second** service-overview page in the new site. It is implemented
as a **self-contained page file** (all sections rendered inline) rather than
reusing the existing `src/components/service/*` components. The agentic-AI
components have agentic-AI content hardcoded inside them, so reusing them
would require either duplicating-then-editing the content there or refactoring
all seven components to take a `data` prop. To keep the blast radius small
while multiple teammates are working in the services folder, this page does
neither — it copies the JSX patterns into one new file and changes nothing
shared. The data-driven refactor remains a viable future PR once 2–3 service
pages exist and the right abstraction is obvious.

> **Naming note:** The old site labels this service **Application modernization**.
> The new content brief (`content-brief-services.md`) renames it
> **Business apps & process automation**. We use the new label site-wide and a
> shorter slug, `/services/business-apps`.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/business-apps` |
| Page component | `src/pages/ServiceBusinessApps.tsx` (self-contained — all sections, styles, and content inline) |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Reused service components | **None.** The page does not import from `src/components/service/`. |
| Header nav integration | Services mega-menu "Business apps & process automation" → `/services/business-apps` |

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
9. Testimonials section *[hidden — placeholder comment only; see §3.6]*
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared, rendered by `App.tsx`)*

> **Global rule (carried over from `spec-service-agentic-ai.md`):** when a
> Testimonials section is rendered on this page in the future, it must appear
> immediately before `<CTA />` (last content section). Eyebrow must be
> `TESTIMONIALS`; H2 must be `What our clients have to say`. Until signed
> quotes are available, the section is not rendered — only a placeholder
> comment marks the slot in the JSX.

---

## 3. Section specs

### 3.1 ServiceHero (compact 2-column band)

- **Layout:** left 60% = copy + CTAs, right 40% = decorative business-apps mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (verbatim from source unless noted):**

- **Eyebrow:** `Business apps & process automation`
- **H1:** `AI-native business apps on Microsoft Power Platform`
- **Subhead:**
  > Low-code and pro-code apps built on Power Apps, Dynamics 365, and Microsoft 365 — paired with Copilot Studio agents and Power Automate flows that retire manual handoffs and embed AI into everyday operations.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Business%20Apps%20%26%20Process%20Automation%20-%20MAQ%20Software`
  *Source CTA was `Get started → /contact`; standardized to mailto pattern to match `/services/agentic-ai`.*
- **Secondary CTA:** `Explore capabilities` → scroll to `#business-apps-capabilities`

**Decorative visual (CSS mosaic, aria-hidden):**

- Tile A: "Workflow status" with three horizontal progress bars (Approvals 78%, Onboarding 64%, Field service 91%)
- Tile B: "Active automations" with three pulsing dots and "42 flows running · 0 failed in 24h"
- Tile C: "Today's impact" two rows ("Cases auto-routed · 2,118", "Hours saved this week · 946")

### 3.2 Capabilities — "Our business apps and process automation capabilities"

Reproduces the 4-capability pillar section from source.

- **Section id:** `business-apps-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our business apps and process automation capabilities`
- **Subhead:** `Four capability pillars that modernize legacy applications and automate operations across the Microsoft business apps stack.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 4–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of 4 selectable cards. Active = 2px `--maq-red` left border; rest = `--maq-border`.
  - Default selected = #1 Workflow automation using Power Platform.

**Capabilities (title for #1 + its description are verbatim from source. Titles for #2/#3/#4 are verbatim from source; their full descriptions are not crawlable on the source page and the copy below is the inferred description shipped in code — review with sales before publish):**

| # | Name | Tagline | Icon | Description (left pane) | Tags |
|---|---|---|---|---|---|
| 1 | `Workflow automation using Power Platform` | `Automate business workflows` | `Flow24Regular` (red) | **Verbatim from source:** Transform your operations with Power Platform. We create custom workflows that automate repetitive tasks, integrate seamlessly with your systems, and improve overall productivity. | `Power Automate`, `Power Apps`, `Dataverse`, `Connectors` |
| 2 | `Customer insights using Dynamics 365` | `Unified 360° customer view` | `PeopleSearch24Regular` (red) | Unify customer signals from sales, service, marketing, and operational systems into a single profile with Dynamics 365 Customer Insights. We build identity resolution, segmentation, and predictive scoring on top of Microsoft Fabric so every team works from the same view of the customer. *(Inferred; review with sales.)* | `Dynamics 365 Customer Insights`, `Microsoft Fabric`, `Customer Voice`, `Power BI` |
| 3 | `Digital sales and customer service using Dynamics 365` | `Modernize sales and service` | `Headset24Regular` (red) | Replace fragmented CRM and ticketing tools with Dynamics 365 Sales and Customer Service. We design omnichannel case routing, AI-assisted next-best-action, and Copilot for Sales experiences so reps and agents resolve work faster with less swivel-chair effort. *(Inferred; review with sales.)* | `Dynamics 365 Sales`, `Dynamics 365 Customer Service`, `Omnichannel`, `Copilot for Sales` |
| 4 | `Custom copilot development` | `Domain-specific copilots for your apps` | `AppFolder24Regular` (red) | Build secure, domain-specific copilots that plug directly into your business applications. We design conversational flows, RAG over enterprise content, plugin actions, and Microsoft 365 / Dynamics surfacing so users can ask, decide, and act in natural language. *(Inferred; review with sales.)* | `Copilot Studio`, `Azure OpenAI`, `M365 Copilot`, `Plugins` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}%20-%20Business%20Apps%20%26%20Process%20Automation`.
- **Footer link below panel:** `See application modernization case studies →` → `https://maqsoftware.com/case-studies.html?filter=application-modernization` (preserves source link).

### 3.3 Outcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when legacy apps and manual processes are modernized with engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards (titles and descriptions verbatim from source):**

| Icon | Title | Description |
|---|---|---|
| `ShieldTask24Regular` | `Future-proof technology` | Use AI-driven insights to make smarter, data-backed decisions that propel your business forward. |
| `ArrowTrendingLines24Regular` | `Increased agility` | Improve your ability to adapt to market changes quickly with flexible, scalable application architectures. |
| `PersonHeart24Regular` | `Improved user experience` | Deliver superior user experiences through modernized, intuitive applications that drive customer satisfaction. |

### 3.4 Case studies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are modernizing their business apps`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag, title, 1–2 line teaser, "Read full story →" link.
- **Cards (titles + source URLs verbatim from source):**

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Retail · Fabric` | Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric | Modernizing a Direct Store Delivery operation with Microsoft Fabric so the field team gets real-time visibility into orders, stock, and exceptions. | https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html |
| `Dynamics 365 · UX` | Maximizing the power of Dynamics 365: User interface & user experience redesigned | Redesigning the Dynamics 365 UI/UX so frontline users complete core tasks in fewer clicks with measurably higher adoption. | https://blog.maqsoftware.com/2024/03/maximizing-power-of-dynamics-365-user.html |
| `Dynamics 365 · Productivity` | Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365 | A custom dynamic checklist control inside Dynamics 365 that guides users through complex multi-step processes without leaving the record. | https://blog.maqsoftware.com/2020/10/dynamic-checklist-dynamics-365.html |
| `Data quality` | Data Validation Framework Reduces Support Tickets | A reusable data validation framework that prevents bad records at the source — measurably cutting downstream support tickets. | https://blog.maqsoftware.com/2019/06/case-study-data-validation-framework.html |

- **Footer link below grid:** `See all application modernization case studies →` → `https://maqsoftware.com/case-studies.html?filter=application-modernization`.

### 3.5 Insights — "Our business apps and process automation insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our business apps and process automation insights`
- **Subhead:** `See our research that goes into optimizing our business apps and process automation service.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards (titles + URLs verbatim from source):**

| Title | Teaser | Link |
|---|---|---|
| `Microsoft Fabric: Powering Real-time Analytics for Retailers` | How Microsoft Fabric reshapes the retail analytics stack to enable real-time operational reporting. | https://blog.maqsoftware.com/2023/11/microsoft-fabric-powering-real-time.html |
| `Explore Best Practices for Creating Enterprise-Wide Knowledge Bots` | Patterns for building enterprise knowledge bots that ground answers in your own content and stay maintainable at scale. | https://maqsoftware.com/insights/knowledge-bot-best-practices.html |
| `Microsoft Fabric: Empowering all personas` | How a single Fabric platform serves data engineers, analysts, scientists, and business users with the right tools for each. | https://blog.maqsoftware.com/2023/09/microsoft-fabric-empowering.html |

### 3.6 Testimonials — *(hidden in current build)*

**Status:** not rendered. Only a placeholder JSX comment (`{/* TESTIMONIALS —
placeholder, hidden until signed quotes are available. */}`) marks the slot
immediately before `<CTA />` in `src/pages/ServiceBusinessApps.tsx`.

The source page has no Testimonials section and sales has not yet provided
signed-off quotes for this service. When ready:

- **Eyebrow:** `TESTIMONIALS` (exact text — site-wide rule)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px).
- **Position:** second-to-last section, immediately before `<CTA />`.
- Mirror the markup from the agentic-AI page's testimonials block.

### 3.7 CTA (shared)

Reuses shared `<CTA />` component. No service-specific override required for v1.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming

Editorial Red v3 tokens only — `--maq-red`, `--maq-red-pale`, `--maq-off-white`,
`--maq-surface-cream`, `--maq-black`, `--maq-ink`, `--maq-gray-500/600/700`,
`--maq-border`. Current section background alternation (Products and
Testimonials are not rendered): off-white (hero), white (capabilities),
off-white (outcomes), off-white (case studies), white (insights). Card hover:
`border-color: var(--maq-red)`, shadow `0 6px 16px rgba(0,0,0,0.06)`.

---

## 5. SEO

- **title:** `Business Apps & Process Automation Services | MAQ Software`
- **description:** `Modernize legacy apps with MAQ Software's business apps & process automation services — Power Platform workflow automation, Dynamics 365, and custom copilot development.`
- **canonical:** `https://maqsoftware.com/services/business-apps`
- **og:image:** `[PLACEHOLDER — to be supplied by marketing]`

---

## 6. Pass A → Pass B reconciliation

Per `spec-page-generator.md` Step 2: inventory of every source block and where it landed.

| Source block | Mapped section | Status |
|---|---|---|
| Hero H1 "Modernize your applications for future success" | §3.1 H1 | Verbatim |
| Hero subhead "Improve performance and user experience…" | §3.1 subhead | Extended (stack qualifier added) |
| Hero CTA "Get started → /contact" | §3.1 primary CTA | Replaced with site-wide mailto pattern |
| Section heading "Our application modernization capabilities" | §3.2 title | Renamed to "Our business apps and process automation capabilities" (per content brief) |
| Capability #1 "Workflow automation using Power Platform" + full description | §3.2 item 1 | Verbatim |
| Capability #2 "Customer insights using Dynamics 365" (title only — body behind tab) | §3.2 item 2 | Title verbatim; description inferred and shipped in code |
| Capability #3 "Digital sales and customer service using Dynamics 365" (title only) | §3.2 item 3 | Title verbatim; description inferred and shipped in code |
| Capability #4 "Custom copilot development" (title only) | §3.2 item 4 | Title verbatim; description inferred and shipped in code |
| Capabilities footer link "Application modernization case studies →" | §3.2 footer link | Verbatim |
| Section heading "Your business outcomes" | §3.3 title | Verbatim |
| Outcome 1 "Future-proof technology" + full description | §3.3 item 1 | Verbatim |
| Outcome 2 "Increased agility" + full description | §3.3 item 2 | Verbatim |
| Outcome 3 "Improved user experience" + full description | §3.3 item 3 | Verbatim |
| Section heading "Related case studies" | §3.5 eyebrow | Verbatim |
| Case study 1 "Enabling real-time visibility…" + link | §3.5 item 1 | Verbatim title + link; teaser added |
| Case study 2 "Maximizing the power of Dynamics 365…" + link | §3.5 item 2 | Verbatim title + link; teaser added |
| Case study 3 "Complete Tasks Faster with a Custom Dynamic Checklist…" + link | §3.5 item 3 | Verbatim title + link; teaser added |
| Case study 4 "Data Validation Framework Reduces Support Tickets" + link | §3.5 item 4 | Verbatim title + link; teaser added |
| Section heading "Our application modernization insights" | §3.6 title | Renamed for new service name |
| Insights subhead "See our research that goes into optimizing our application modernization service" | §3.6 subhead | Renamed for new service name |
| Insight 1 "Microsoft Fabric: Powering Real-time Analytics for Retailers" + link | §3.6 item 1 | Verbatim title + link; teaser added |
| Insight 2 "Explore Best Practices for Creating Enterprise-Wide Knowledge Bots" + link | §3.6 item 2 | Verbatim title + link; teaser added |
| Insight 3 "Microsoft Fabric: Empowering all personas" + link | §3.6 item 3 | Verbatim title + link; teaser added |
| `[Source had no Products section]` | §3.4 | HIDDEN — placeholder JSX comment only; awaiting sales-confirmed lineup |
| `[Source had no Testimonials section]` | §3.7 | HIDDEN — placeholder JSX comment only; awaiting signed quotes |

**Zero unintentional drops.** Capability descriptions for #2/#3/#4 are
inferred (source hides them) and need review with sales. Products and
Testimonials sections are intentionally hidden until sales delivers content.

---

## 7. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ")
- "26 years"
- All primary CTAs → `customersuccess@maqsoftware.com`
- Service name in headings, nav, and SEO uses the new label **Business apps & process automation**; the old "Application modernization" label is preserved only where it appears verbatim inside source URLs (case-study filter, related case-studies link).
