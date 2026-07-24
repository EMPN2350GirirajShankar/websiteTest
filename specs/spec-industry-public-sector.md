# Industry Page Spec — Public Sector

> Sibling document to [spec-industry-retail.md](spec-industry-retail.md),
> [spec-industry-financial-services.md](spec-industry-financial-services.md),
> [spec-industry-healthcare-life-sciences.md](spec-industry-healthcare-life-sciences.md),
> and [spec-industry-technology.md](spec-industry-technology.md).
> Same authoring rules apply: edit this file, then ask the assistant to
> "sync code to spec" and only the matching page data in
> `src/pages/IndustryPublicSector.tsx` will change.
>
> All shared industry components are content-driven via props. No component
> file needs to change when updating Public Sector copy.
>
> **Content sourcing note.** The MAQ Software case-study catalog has **one
> dedicated public-sector study** (Arizona AI-powered citizen chatbot — see
> [case-studies-shortlist.md](case-studies-shortlist.md) — "Public Sector"
> bucket). The remaining two case studies and three of the four impact stats
> use the **gov-adjacent secure-Copilot, information-retrieval, and AI-CoE
> proxies** that the shortlist explicitly tags as public-sector-applicable.
> No metrics are invented.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/industries/public-sector` (client-side, react-router-dom) |
| Page component | `src/pages/IndustryPublicSector.tsx` |
| Shared layout | Reuse `<Header />`, `<Footer />`, `<CTA />` from `src/App.tsx` |
| Shared building blocks | Five components in `src/components/industry/` plus `<TrustBanner />` and `<CTA />` — no new components needed |
| Header nav integration | Industries mega-menu "Public sector" → `/industries/public-sector` |

**Design goal:** identical density and visual rhythm to the Technology page (the most recent industry sibling) — IndustryHero + TrustBanner + ImpactStats + SolutionShowcase + IndustryCaseStudies + CTA. Skip MarketplaceOffers (public-sector procurement runs through contract vehicles, not Azure Marketplace SKUs) and skip Testimonials (no signed-off public-sector quotes yet). No new design tokens, no new components — only props.

---

## 2. Page composition (top → bottom)

1. `<Header />` *(shared, with active state on "Industries")*
2. `<IndustryHero />`         — §3.1
3. `<TrustBanner />` *(shared)*
4. `<ImpactStats />`          — §3.2 (4 outcome cards)
5. `<SolutionShowcase />`     — §3.3 (Public Sector Agents tabbed layout)
6. `<IndustryCaseStudies />`  — §3.4 (3 case studies — 1 dedicated + 2 proxies)
7. `<CTA />` *(shared)*
8. `<Footer />` *(shared)*

---

## 3. Section specs

### 3.1 IndustryHero (compact, 2-column band)

- **Layout:** left column (60%) = copy + CTA, right column (40%) = CSS dashboard visual.
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (literal):**
- **Eyebrow:** `PUBLIC SECTOR`
- **H1:** `Trusted AI for Citizen Services, Mission Outcomes, and Modern Government`
- **Subhead:**
  > Federal, state, and local agencies face mounting pressure to deliver faster citizen services, modernize aging systems, and protect sensitive data — all under audit-grade accountability. At MAQ Software, we help public-sector organizations embed AI across the mission stack — from citizen-facing chatbots and policy-knowledge Copilots to program analytics on Microsoft Fabric — with secure-by-design patterns aligned to FedRAMP, CJIS, and agency compliance frameworks. Our solutions turn fragmented government data into faster decisions and better outcomes for the citizens you serve.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Public%20Sector%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore public sector solutions` → scroll to `#public-sector-solutions`

**Hero visual (CSS-only, no external asset):** Three stacked tiles:
1. **"Citizen requests today"** — 4-bar chart by channel (Web 78%, Mobile 65%, Voice 52%, In-person 28%) with the Web bar in `--maq-red`.
2. **"Program performance"** — status list of 4 program stages (Benefits intake, Eligibility review, Disbursement, Audit & oversight) each with a colored badge (On track / At risk / Behind / Complete).
3. **"Citizens served via AI agents"** — large counter `Millions+` with caption `via state-deployed AI chatbot` (sourced from the Arizona case study).

---

### 3.2 ImpactStats (4 outcome cards)

- **Eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for public sector leaders`
- **Subhead:** `Outcomes from MAQ Software's dedicated public-sector engagement and gov-adjacent secure-Copilot and AI-CoE patterns applied to regulated agency environments.`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: short metric, label, linked source.

| Metric | Label | Source case study |
|---|---|---|
| `Millions+` | `Citizens reaching state benefits with the help of an AI-powered chatbot for the Arizona government` | [Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot](https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html) |
| `Secure-by-design` | `Reference Copilot patterns for environments with audit, RBAC, and sensitive-data requirements` | [Building a secure Copilot: Addressing key security challenges](https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html) |
| `Grounded` | `Citation-backed answers over policy, regulation, and benefits content for caseworkers and analysts` | [Streamlining information retrieval with AI Copilots](https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html) |
| `CoE-led` | `Structured AI adoption playbook for moving public-sector pilots into production safely` | [Transforming AI interest into adoption with an AI Center of Excellence](https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html) |

> Once additional dedicated public-sector case studies ship on
> [blog.maqsoftware.com](https://blog.maqsoftware.com), replace the
> gov-adjacent proxies — no numbers are invented; every metric is sourced.

---

### 3.3 SolutionShowcase — "Bring trusted AI to the mission"

- **Section id:** `public-sector-solutions`
- **Eyebrow:** `AGENTIC AI`
- **Title:** `Bring trusted AI to the mission`
- **`industryLabel` prop:** `Public sector` (drives the agent "Know More" mailto subject)
- **Layout:** same white rounded panel as other industries — left detail pane + right selectable rail. Default selection = item #1 (Citizen Services Copilot).

**Agents (4):**

| # | Name | Tagline | Icon | Description (left pane) |
|---|---|---|---|---|
| 1 | `Citizen Services Copilot` | `Self-service for benefits, permits, and programs` | `PeopleCommunity24Regular` (red) | Natural-language Copilot that helps citizens navigate state and federal programs — eligibility, benefits, permits, licensing — without waiting for a caseworker. Grounded in agency policy and program rules so answers are citation-backed and audit-ready. The pattern behind the Arizona deployment that reached millions of citizens. |
| 2 | `Policy & Regulation Knowledge Agent` | `Cited answers over policy, regulation, and guidance` | `BookInformation24Regular` (red) | Citation-backed retrieval Copilot grounded in your policy library, statutes, federal/state regulations, and internal guidance. Caseworkers, analysts, and program staff ask plain-English questions and get linked, traceable answers in seconds — built on Azure OpenAI with role-based access controls. |
| 3 | `Mission Analytics Agent` | `Program performance on live data, not stale reports` | `DataPie24Regular` (red) | Operational analytics agent that runs on Microsoft Fabric or Databricks. Combines caseload, outcomes, eligibility, and equity-impact data to surface program performance and forecast demand — so program leadership and oversight teams act on live signals, not last quarter's report. |
| 4 | `Secure Modernization Agent` | `FedRAMP-aligned modernization for legacy estates` | `ShieldCheckmark24Regular` (red) | Reference architecture and rollout agent for modernizing legacy public-sector systems with secure-by-design Copilot and Microsoft Fabric patterns. Aligned to FedRAMP, CJIS, IRS Pub 1075, and agency-specific control frameworks — with Managed Identity, RBAC, and audit logging baked in from day one. |

- **Button:** `Know More` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Agent name} — Public sector — MAQ Software`

---

### 3.4 IndustryCaseStudies (3 studies — 1 dedicated + 2 proxies)

- **Eyebrow:** `PUBLIC SECTOR CASE STUDIES`
- **Title:** `How public sector organizations move faster with MAQ Software`
- **Layout:** 3-column card grid. Each card: sub-tag badge, title, 1–2 line teaser, "Read full story →" link.

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Government chatbot` | Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot | State government chatbot helping millions of citizens reach the benefits and services they qualify for — the reference deployment for public-sector citizen-facing AI. | https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html |
| `Secure Copilot` | Building a secure Copilot: Addressing key security challenges | Reference design for shipping enterprise Copilots safely — directly applicable to federal, state, and local agency environments with audit and sensitive-data requirements. | https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html |
| `Information retrieval` | Streamlining information retrieval with AI Copilots | Citation-backed enterprise search Copilots that ground answers in your proprietary content — a proven pattern for policy, regulation, and benefits retrieval in public-sector contexts. | https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html |

- **Footer link:** `See all case studies →` → `https://maqsoftware.com/case-studies`

---

### 3.5 CTA

Shared `<CTA />`. No public-sector-specific override for v1.

### 3.6 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming & visuals

Identical to other industry pages — no new tokens or overrides:
- Red elements: `--maq-red` (`#BA141A`)
- Card hover: `border-color: var(--maq-red)`, lift shadow `0 6px 16px rgba(0,0,0,0.06)`
- Section padding: `48px` vertical throughout

---

## 5. Accessibility

- All interactive cards are `<button>` or `<a>`, focusable, visible focus ring.
- Selected solution rail item exposes `aria-current="true"`.
- Decorative hero illustration carries `aria-hidden="true"`.
- Status badges in the hero visual use text labels (On track / At risk / Behind / Complete) — color is **not** the sole signal.

---

## 6. Build & verify

```powershell
npm run dev          # http://localhost:5173/industries/public-sector
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. The Public Sector page renders with the exact copy in §3.
3. Header "Industries → Public sector" navigates to the page.
4. No other pages regress.

---

## 7. How to update this page

Edit the copy tables in §3 above, then ask the assistant to "sync the public sector page to spec". It will diff against `src/pages/IndustryPublicSector.tsx` and update only the changed values.

---

## 8. Out of scope (v1)

- Per-agent landing pages (agents currently mailto).
- MarketplaceOffers (public-sector procurement runs through GSA, IDIQ, and agency contract vehicles — not Azure Marketplace SKUs).
- Testimonials (re-introduce when marketing supplies signed-off public-sector quotes).
- A dedicated MAQ blog post for public sector beyond Arizona — when one ships, swap the gov-adjacent proxies in §3.2 and §3.4.
