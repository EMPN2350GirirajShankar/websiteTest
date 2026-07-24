# Industry Page Spec — Healthcare & Life Sciences

> Sibling document to [spec-industry-retail.md](spec-industry-retail.md) and
> [spec-industry-financial-services.md](spec-industry-financial-services.md).
> Same authoring rules apply: edit this file, then ask the assistant to
> "sync code to spec" and only the matching page data in
> `src/pages/IndustryHealthcareLifeSciences.tsx` will change.
>
> All six shared industry components are content-driven via props. No component
> file needs to change when updating Healthcare & Life Sciences copy.
>
> **Content sourcing note.** The MAQ Software case-study catalog has no
> dedicated healthcare studies (see
> [case-studies-shortlist.md](case-studies-shortlist.md) — "Healthcare & life
> sciences: 0 dedicated studies"). Per the shortlist recommendation, this page
> uses **cross-industry agentic AI / secure-Copilot / AI-CoE / information-
> retrieval case studies** as honest proxies. Each proxy is clearly tagged so
> readers understand the lineage. No metrics are invented.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/industries/healthcare-life-sciences` (client-side, react-router-dom) |
| Page component | `src/pages/IndustryHealthcareLifeSciences.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />` from home |
| Shared building blocks | All six components in `src/components/industry/` — no new components needed |
| Header nav integration | Industries mega-menu "Healthcare & life sciences" → `/industries/healthcare-life-sciences` |

**Design goal:** identical density and visual rhythm to the Retail and Financial Services pages. Same `48px` section padding, same compact typography, same component order. No new design tokens, no new components — only props.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, with active state on "Industries")*
3. `<IndustryHero />`         — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ImpactStats />`          — §3.2 (4 outcome cards)
6. `<SolutionShowcase />`     — §3.3 (Health & Life Sciences Agents tabbed layout)
7. `<IndustryCaseStudies />`  — §3.4 (3 cross-industry case studies)
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
- **Eyebrow:** `HEALTHCARE & LIFE SCIENCES`
- **H1:** `AI-Powered Care, Compliance, and Discovery for the Connected Health Enterprise`
- **Subhead:**
  > Healthcare and life sciences organizations face mounting pressure to improve outcomes, accelerate research, and modernize fragmented data estates — all while honoring HIPAA, 21 CFR Part 11, and other regulatory commitments. At MAQ Software, we help providers, payers, and life-sciences firms embed AI across the care continuum and the research lifecycle — from grounded clinical Copilots and care-coordination agents to population-health analytics and trial-data unification. Built on Microsoft Fabric, Databricks, and Snowflake, our solutions turn sensitive health data into safer decisions and faster discovery.
- **Primary CTA:** `Contact Us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Healthcare%20%26%20Life%20Sciences%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore healthcare solutions` → scroll to `#hls-solutions`

**Hero visual (CSS-only, no external asset):** Three stacked tiles:
1. **"Patient triage queue"** — list of 5 patient rows (`Bed 12 · Sepsis risk`, `Bed 07 · Post-op`, `ED · Chest pain`, `Bed 03 · Stable`, `Bed 19 · Discharge-ready`) each with a colored priority badge (Critical / Watch / Stable / Routine / Discharge).
2. **"Ward occupancy today"** — 4-bar chart (ICU 92%, Med-Surg 78%, ED 65%, Step-down 48%) with the ICU bar in `--maq-red`.
3. **"Clinical research milestones"** — 3-row horizontal bar chart (Phase I enrollment 70% green, Phase II 45% amber, Phase III 18% red).

---

### 3.2 ImpactStats (4 outcome cards)

- **Eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for healthcare and life sciences leaders`
- **Subhead:** `Patterns from MAQ Software cross-industry AI engagements applied to regulated, PHI-handling environments.`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: short qualitative metric, label, linked source.

| Metric | Label | Source case study |
|---|---|---|
| `Agentic` | `AI agents reshaping clinical, operational, and research workflows across healthcare and life sciences` | [Reshaping industries with agentic AI solutions](https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html) |
| `HIPAA-ready` | `Secure-by-design Copilot patterns for environments handling PHI and other regulated data` | [Building a secure Copilot: Addressing key security challenges](https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html) |
| `CoE-led` | `Structured adoption playbook for moving healthcare AI pilots into production safely` | [Transforming AI interest into adoption with an AI Center of Excellence](https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html) |
| `Grounded` | `Clinicians and researchers retrieve citation-backed answers from clinical content and policy libraries` | [Streamlining information retrieval with AI Copilots](https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html) |

> Once dedicated healthcare or life-sciences case studies ship on
> [blog.maqsoftware.com](https://blog.maqsoftware.com), replace these
> proxies — no numbers are invented; every metric here is intentionally
> qualitative until verified outcomes are available.

---

### 3.3 SolutionShowcase — "Bring AI to the care continuum and the research lifecycle"

- **Section id:** `hls-solutions`
- **Eyebrow:** `AGENTIC AI`
- **Title:** `Bring AI to the care continuum and the research lifecycle`
- **Layout:** same white rounded panel as retail/FS — left detail pane + right selectable rail. Default selection = item #1 (Clinical Knowledge Copilot).

**Agents (4):**

| # | Name | Tagline | Icon | Description (left pane) |
|---|---|---|---|---|
| 1 | `Clinical Knowledge Copilot` | `Cited answers without leaving the EHR` | `Chat24Regular` (red) | Natural-language Copilot grounded in your clinical guidelines, formulary data, and policy library. Care teams ask plain-English questions and get citation-backed answers in seconds — without leaving the EHR workflow. Built on Azure OpenAI with role-based access controls aligned to your HIPAA and HITECH program. |
| 2 | `Care Coordination Agent` | `Close cross-team gaps for high-risk patients` | `PersonHeart24Regular` (red) | Autonomous agent that watches admission, discharge, and transfer events across systems, then orchestrates the right next action — referrals, follow-ups, social-work outreach — so high-risk patients do not fall through cross-team gaps. Integrates with Epic, Cerner, and Microsoft Fabric to produce a single longitudinal view of every patient. |
| 3 | `Population Health Insights Agent` | `Risk stratification on live data, not last year's report` | `HeartPulse24Regular` (red) | Risk-stratification and outcome-forecasting agent that runs on Microsoft Fabric or Databricks. Combines claims, clinical, and social determinants of health (SDoH) data to surface rising-risk cohorts and quantify intervention impact — so population health and value-based care teams act on live signals, not stale quality reports. |
| 4 | `Life Sciences Research Agent` | `Cohort discovery from question to insight` | `Beaker24Regular` (red) | Unifies lab, clinical-trial, and real-world-evidence data into a governed research workspace on Microsoft Fabric and Databricks. The agent accelerates cohort discovery, study-feasibility analysis, and 21 CFR Part 11–ready audit trails so research teams move from question to insight without manual data wrangling. |

- **Button:** `Know More` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Agent name} - Healthcare%20%26%20Life%20Sciences`

---

### 3.4 IndustryCaseStudies (3 cross-industry proxy studies)

- **Eyebrow:** `HEALTHCARE & LIFE SCIENCES CASE STUDIES`
- **Title:** `How regulated organizations move faster with MAQ Software`
- **Layout:** 3-column card grid. Each card: sub-tag badge, title, 1–2 line teaser, "Read full story →" link.

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Cross-industry agentic AI` | Reshaping industries with agentic AI solutions | How agentic AI is reshaping retail, financial services, healthcare and manufacturing workflows in production — a reference pattern for any regulated, multi-system enterprise. | https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html |
| `Secure Copilot` | Building a secure Copilot: Addressing key security challenges | Reference design for shipping enterprise Copilots safely — directly applicable to PHI-handling clinical and life-sciences environments. | https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html |
| `AI adoption` | Transforming AI interest into adoption by establishing an AI Center of Excellence | A proven CoE blueprint for moving pilot interest into enterprise-wide adoption — particularly relevant for health systems and life-sciences orgs scaling AI safely. | https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html |

- **Footer link:** `See all case studies →` → `https://maqsoftware.com/case-studies`

---

### 3.5 MarketplaceOffers (4 cards)

- **Title:** `Our Marketplace Offers`
- **Subhead:** `Accelerate healthcare and life sciences outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning clinical analytics, patient experience, research data unification, and regulated-data governance.`
- **Layout:** 3-column grid (2×2 below 960px, 1 column below 640px). Each card links to its Azure Marketplace listing.

| Category pill | Title | Description | Link target |
|---|---|---|---|
| `CLINICAL ANALYTICS` | `Clinical Operations & Care Quality Analytics for Healthcare: 4-Week PoC` | A 4-week proof of concept that unifies EHR, claims, and operational data on Microsoft Fabric to expose care-quality gaps and accelerate value-based care reporting. | Azure Marketplace (placeholder `#`) |
| `PATIENT EXPERIENCE` | `Patient Engagement & Care Navigation for Healthcare: 2-Week Assessment` | A 2-week assessment that maps the patient journey across digital and clinical touchpoints, identifying AI-driven engagement and navigation opportunities. | Azure Marketplace (placeholder `#`) |
| `LIFE SCIENCES` | `Research Data Unification for Life Sciences: 4-Week PoC` | A 4-week proof of concept that unifies lab, clinical-trial, and real-world-evidence data on Microsoft Fabric and Databricks to accelerate cohort discovery and study feasibility. | Azure Marketplace (placeholder `#`) |
| `COMPLIANCE` | `HIPAA & 21 CFR Part 11 Data Governance Assessment` | A 2-week assessment of your data governance posture against HIPAA, HITECH, and 21 CFR Part 11 requirements with Microsoft Purview-aligned remediations. | Azure Marketplace (placeholder `#`) |

> Web team: replace each `#` with the live Azure Marketplace URL when listings are published.

---

### 3.6 Testimonials

- **Eyebrow:** `TESTIMONIALS`
- **Title:** `What our clients have to say`
- **Layout:** 2-column quote cards.

| Quote | Attribution | Signed off |
|---|---|---|
| `MAQ Software's HIPAA-aligned Copilot rollout let our care teams retrieve cited policy and guideline answers without leaving the EHR. Information retrieval that used to take minutes now takes seconds.` | `VP, Clinical Informatics — Integrated health system (placeholder)` | N (placeholder) |
| `Our research data was scattered across labs, trial systems, and partner repositories. MAQ Software unified it on Microsoft Fabric with 21 CFR Part 11–aligned audit trails — cohort discovery cycles dropped from weeks to days.` | `Director, Research Informatics — Global life sciences company (placeholder)` | N (placeholder) |

> Placeholder copy — to be replaced with approved quotes once marketing supplies signed-off testimonials.

---

### 3.7 CTA

Shared `<CTA />`. No healthcare-specific override for v1.

### 3.8 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming & visuals

Identical to retail and financial services pages — no new tokens or overrides:
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
- Status badges in the hero visual use text labels (Critical / Watch / Stable / Routine / Discharge) — color is **not** the sole signal.

---

## 6. Build & verify

```powershell
npm run dev          # http://localhost:5173/industries/healthcare-life-sciences
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. The Healthcare & Life Sciences page renders with the exact copy in §3.
3. Header "Industries → Healthcare & life sciences" navigates to the page.
4. No other pages regress.

---

## 7. How to update this page

Edit the copy tables in §3 above, then ask the assistant to "sync the healthcare and life sciences page to spec". It will diff against `src/pages/IndustryHealthcareLifeSciences.tsx` and update only the changed values.

---

## 8. Out of scope (v1)

- Per-agent landing pages (agents currently mailto).
- Live CMS for testimonials.
- Live Azure Marketplace URLs (replaced when listings are published).
- A dedicated MAQ blog post for healthcare — when one ships, swap the cross-industry proxies in §3.2 and §3.4.
