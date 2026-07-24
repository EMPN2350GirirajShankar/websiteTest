# Product Page Spec — Fabric Admin Agent

> Sibling spec to [spec-industry-retail.md](spec-industry-retail.md) and
> [spec-products.md](spec-products.md). This is the **first** dedicated
> product landing page (richer than the generic `ProductDetail` shell).
> Future product landing pages (e.g. MigrateFAST, EmbedFAST) should reuse
> the section taxonomy defined here.
>
> Authoring rule: edit this file, then ask the assistant to
> "sync the Fabric Admin Agent page to spec" — only the matching page +
> route data will change.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/products/fabric-admin-agent` (explicit; **declared before** the catch-all `/products/:slug`) |
| Page component | `src/pages/ProductFabricAdminAgent.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Self-contained sections | Hero, Impact, Features, Case studies, Testimonials, Marketplace — all inlined in the page (NOT reusing the retail-named industry components, which are hard-coded to retail copy) |
| Header nav | The Products mega-menu entry for Fabric Admin Agent (already exists via `products[]`) routes here automatically because the explicit route wins |

**Design goal:** match the density of the Retail industry page —
section padding `48–56px`, h2 `28–30px`, body `14px`, multi-column layouts.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared, mounted in App)*
2. `<Header />` *(shared, mounted in App)*
3. **Hero** — §3.1
4. `<TrustBanner />` *(shared)*
5. **Impact / outcome** — §3.2
6. **Features overview** — §3.3
7. **Case studies** — §3.4
8. **Testimonials** — §3.5
9. **Resources & Marketplace** — §3.6
10. `<CTA />` *(shared)*
11. `<Footer />` *(shared, mounted in App)*

---

## 3. Section specs

### 3.1 Hero (2-column band)

- **Layout:** left (60%) = copy + CTAs, right (40%) = decorative tile mosaic (capacity gauge + workspace health bars + drift alerts).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (literal):**
- **Eyebrow:** `FABRIC WORKLOAD`
- **H1:** `AI-powered capacity management for Microsoft Fabric`
- **Subhead:**
  > Fabric Admin Agent transforms Microsoft Fabric capacity management from reactive monitoring to proactive optimization. Using AI-driven insights, it detects anomalies, predicts demand, and recommends actions to prevent throttling, improve performance, and reduce costs. The result is a self-service administrative experience that enables platform teams to maximize Fabric investments while minimizing operational overhead.
- **Primary CTA:** `Request a walkthrough` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Fabric%20Admin%20Agent%20-%20Walkthrough`
- **Secondary CTA:** `See capabilities` → scroll to `#fabric-admin-features`

**Right column — product hero image:**

- Source: `https://maqsoftware.com/images-new/isv/fabric-admin-agent-hero.svg` (the same SVG used on <https://maqsoftware.com/products/fabricadminagent>).
- Rendered with `<img>` (decorative, `alt=""`, wrapped in `aria-hidden="true"` container, `loading="eager"`, `decoding="async"`).
- Sizing: `width: 100%`, `max-width: 520px`, `height: auto`. Wrapper is a flex centered container with `8px` padding — no card background, border, or shadow (the SVG already has its own visual styling).
- The previous inline SVG mosaic (capacity gauge + workspace bars + drift alerts) is **replaced** by this image. Numbers like `98%`, `78/54/91`, etc., are no longer rendered.

### 3.2 Impact / outcome (4 stat cards, single row)

- **Section eyebrow:** `PROVEN OUTCOMES`
- **Title:** `Real impact for Microsoft Fabric platform owners`
- **Subhead:** `Numbers from MAQ Software Fabric Admin Agent deployments across enterprise tenants.`
- **Layout:** 4 cards in one row (2×2 below 960px). Each card: big number, label, 1-line source label.

| Metric | Label | Source label |
|---|---|---|
| `60%` | `Fewer capacity incidents after enabling autonomous monitoring` | `Enterprise Fabric tenant` |
| `24/7` | `Autonomous coverage across capacities, workspaces, and items` | `Always-on agent` |
| `5 min` | `Mean time to detect drift in permissions and SLAs` | `MTTD benchmark` |
| `30+` | `Fabric tenants monitored in production` | `Deployment footprint` |

### 3.3 Features overview (4-card grid)

- **Eyebrow:** `CAPABILITIES`
- **Title:** `What the Fabric Admin Agent does for you`
- **Section id:** `fabric-admin-features`
- **Layout:** 2×2 card grid (1 column below 640px). Each card: red icon + bold title + 2-line description.

| Icon (Fluent) | Title | Description |
|---|---|---|
| `Pulse24Regular` | `24/7 health monitoring` | Capacity utilization, refresh SLAs, and item failures tracked across every workspace and domain in your tenant. |
| `Warning24Regular` | `Proactive risk alerts` | Surface issues before business users hit broken reports or throttled queries — alerts correlated, not noisy. |
| `Wrench24Regular` | `One-click remediation` | Suggested fixes (resize capacity, reassign workspace, archive orphaned items) execute with full audit trail. |
| `Eye24Regular` | `Tenant-wide visibility` | A single pane across capacities, domains, workspaces, lakehouses, warehouses, and semantic models. |

### 3.4 Case studies (3-card grid)

- **Eyebrow:** `FABRIC CASE STUDIES`
- **Title:** `How platform teams ship Fabric faster with MAQ Software`
- **Layout:** 3 columns ≥960px, 1 column below. Each card: sub-tag, title, 1–2 line teaser, "Read full story →" link.

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Enterprise IT` | Modernizing retail BI with Microsoft Fabric and Power BI | A top-3 US retailer migrated to Fabric for 8× faster Power BI refresh and a governed lakehouse. | https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html |
| `Platform engineering` | Enabling real-time visibility on Microsoft Fabric | Direct Store Delivery moved to Fabric with autonomous monitoring of capacities and pipelines. | https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html |
| `Data governance` | Transforming analytics with Microsoft Fabric | A grocery retailer's analytics estate moved to Fabric with end-to-end lineage and capacity governance. | https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html |

- **Footer link below grid:** `See all Fabric case studies →` → `https://maqsoftware.com/case-studies` (target external until route-filter exists).

### 3.5 Testimonials (2-card grid)

- **Eyebrow:** `WHAT CLIENTS SAY`
- **Title:** `Trusted by Microsoft Fabric platform leaders`
- **Layout:** 2-column quote cards (1 column below 960px). Each card: opening quote glyph, body, attribution.
- Mark as **placeholder copy** until marketing supplies signed-off testimonials.

| Quote | Attribution |
|---|---|
| `Fabric Admin Agent caught a throttling pattern on our F64 capacity before our morning standup. We resized in one click and avoided a board-level escalation.` | `Director, Data Platform — Fortune 500 retailer` |
| `We replaced three manual Fabric health checklists with the agent. Our platform team now spends weeks on roadmap work instead of firefighting.` | `Head of Analytics Engineering — Global manufacturer` |

### 3.6 Resources & Marketplace

This section replaces the prior "Marketplace offers" block. It mirrors the
Resources column on the official MAQ Software site
(<https://maqsoftware.com/products/fabricadminagent>) and the live
Microsoft commercial-marketplace listing for Fabric Admin Agent.

- **Section title:** `Resources & Marketplace`
- **Subhead:** `Get the agent from Microsoft AppSource, browse Azure Marketplace consulting offers, and explore deeper guidance from MAQ Software.`

#### 3.6.1 Featured marketplace banner (full-width, 1 card)

A wide, red-trim banner-style card placed above the resource grid.

| Field | Value |
|---|---|
| Eyebrow pill | `Microsoft AppSource · Preview` |
| Title | `Get Fabric Admin Agent on Microsoft Marketplace` |
| Description | `Deploy the Fabric Admin Agent directly from Microsoft AppSource. Preview is available now — start optimizing your Fabric capacities in minutes.` |
| Primary CTA | `Get it now` → `https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08` (opens new tab) |
| Secondary CTA | `Browse all consulting offers` → `https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software` (opens new tab) |

#### 3.6.2 Resource grid (3-column, 6 cards)

3 columns ≥ 960px, 2 columns 640–960px, 1 column < 640px. Each card:
- Light-gray 16:9 illustration block at top.
- Red category pill (`11px/700/uppercase/letter-spacing 0.06em`).
- Title + outward `↗` arrow row.
- 2–3 line description.
- Whole card is the `<a target="_blank" rel="noreferrer">`.

| Pill | Title | Description | Link |
|---|---|---|---|
| `AppSource` | `Fabric Admin Agent on Microsoft AppSource` | Install the agent directly from Microsoft AppSource and start protecting your Fabric capacities today. | `https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08` |
| `Consulting offers` | `MAQ Software offers on Azure Marketplace` | Browse all Azure Marketplace consulting offers from MAQ Software — Fabric, Power BI, AI, and modernization engagements. | `https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software` |
| `Case studies` | `Fabric & analytics case studies` | Real customer stories on Microsoft Fabric, Power BI modernization, governance, and FinOps. | `https://maqsoftware.com/case-studies` |
| `Best practices` | `Fabric & Power BI best-practice guides` | Authoritative guides on Fabric capacity sizing, Power BI optimization, and governance — from the MAQ Software community. | `https://maqsoftware.com/community/best-practices` |
| `Engineering blog` | `Inside Fabric Admin Agent` | Engineering posts on agent architecture, anomaly detection, capacity forecasting, and remediation playbooks. | `https://blog.maqsoftware.com/search/label/Microsoft%20Fabric` |
| `Talk to us` | `Schedule a 30-minute walkthrough` | Have a tenant in mind? Email customersuccess@maqsoftware.com and we'll set up a personalized walkthrough. | `mailto:customersuccess@maqsoftware.com?subject=Fabric%20Admin%20Agent%20-%20Walkthrough` |

#### 3.6.3 Out of scope

- We are NOT publishing the legacy 3-card placeholder set (`Fabric Capacity
  Optimization 2-Week Assessment`, `Fabric Tenant Health & Governance 4-Week
  PoC`, `Fabric FinOps Baseline`). They are superseded by the consulting-offers
  link, which is the canonical browse surface.

### 3.7 CTA — reuses shared `<CTA />`

No product-specific override required for v1. Mounted via the route entry in `App.tsx`.

### 3.8 Footer

Shared `<Footer />` (mounted in App). No changes.

---

## 4. Theming & visuals

- All red elements use `--maq-red`. All deep panels use `--maq-black`.
- Card hover: `border-color: var(--maq-red)`, lift shadow `0 6px 16px rgba(0,0,0,0.06)`.
- Category pills: bg `--maq-red-pale`, text `--maq-red`, font 11px / 700 / uppercase / letter-spacing `0.06em`, padding `4px 8px`, radius `4px`.
- Section padding: vertical `48px` (hero `48–56px`).
- Decorative hero illustration carries `aria-hidden="true"`.

---

## 5. Accessibility

- Hero illustration `aria-hidden="true"`.
- All quotes use `<blockquote><p>…</p><cite>…</cite></blockquote>`.
- All category pills are decorative; the actual `<a>` is the card title (whole-card link).
- All resource & marketplace links open in a new tab via `target="_blank" rel="noreferrer"`.
- The featured marketplace banner uses real https URLs — no placeholder anchors.

---

## 6. Build & verify

```powershell
npm run build        # must exit 0
```

A change to this spec is **done** when:
1. `npm run build` exits 0.
2. `/products/fabric-admin-agent` renders the exact copy in §3.
3. The generic `/products/:slug` route still routes other products to `ProductDetail`.
4. No other pages regress.

---

## 7. Out of scope (v1)

- Real Azure Marketplace deep links (placeholders `#` for now)
- Signed-off testimonials (placeholder copy until marketing supplies)
- Per-feature drill-down pages
- Localization
