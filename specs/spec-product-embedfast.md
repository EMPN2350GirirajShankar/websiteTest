# Product Page Spec — EmbedFAST

> Source: <https://maqsoftware.com/products/embedFAST>
> Sibling specs: [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md), [spec-industry-retail.md](spec-industry-retail.md)

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/products/embedfast` (declared before `/products/:slug`) |
| Page component | `src/pages/ProductEmbedFAST.tsx` |
| Shared layout | `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |

## 2. Page composition (top → bottom)

1. `<Announcement />`
2. `<Header />`
3. **Hero** — §3.1
4. `<TrustBanner />`
5. **Benefits** — §3.2
6. **Case studies** — §3.3 *(block only; content TBD)*
7. **Testimonials** — §3.4 *(block only; content TBD)*
8. **Pricing** — §3.5
9. **Support plans** — §3.6
10. **Resources & Marketplace** — §3.7
11. `<CTA />`
12. `<Footer />`

## 3. Section specs

### 3.1 Hero (2-column band)

- **Eyebrow:** `POWER BI EMBEDDING`
- **H1:** `EmbedFAST`
- **Subhead:** `Effortlessly embed Power BI into your apps without the complexity of writing your own code. Achieve faster time to market. Improve your and your customer's operations. Elevate your workflow — all with EmbedFAST.`
- **Primary CTA:** `Get it now` → <https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=PlansAndPrice>
- **Secondary CTA:** `Talk to our team` → `mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST`
- **Hero image:** `https://maqsoftware.com/images-new/isv/isv-top-image.jpg`

### 3.2 Benefits (6-card grid)

| Title | Description |
|---|---|
| Seamless integration | Easily integrate our API into your applications. Embed Power BI without the time or resource complexities. |
| Fully customizable | Adapt EmbedFAST to your unique requirements, ensuring features that align perfectly with your workflows. |
| Cut licensing cost | No need for individual Power BI user licenses — only capacity licenses (F SKUs). Save costs without assigning user licenses. |
| Simplified access control | Effortlessly control user permissions and secure data with built-in role-based access. |
| Scalable and secure | Onboard unlimited tenants/workspaces with privacy and scalable growth built-in. |
| Automatic updates | Enjoy automatic updates, ensuring you're always on the latest version without manual effort. |

### 3.3 Case studies *(block only)*

Section shell + 3 placeholder cards. Content TBD by Sales.

### 3.4 Testimonials *(block only)*

Section shell + 2 placeholder quote cards. Content TBD by Sales.

### 3.5 Pricing (3-tier comparison)

| Plan | Price | Term | Inclusions |
|---|---|---|---|
| Subscription — API Only | $2,500 | per month | One-time setup cost: $10,000 · Single instance with API · Complete installation setup · No limit on the number of users · Free upgrades |
| Subscription — API + UI | $3,500 | per month | One-time setup cost: $10,000 · Single instance with API and UI · Complete installation setup · No limit on the number of users · Free upgrades |
| Code Share — API + UI | $250,000 | fixed one-time | Shared solution IP with API and UI · 4-week consulting service to integrate with your existing application · Code walkthrough and handover · Personalized technical documentation and installation guide · Additional features, improvements, and customizations available on demand |

CTA per tier → Azure Marketplace `tab=PlansAndPrice` (subscriptions) or `mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST%20Code%20Share` (Code Share).

### 3.6 Support plans (3-tier comparison table)

| Feature | Silver ($500/mo) | Gold ($1,500/mo) | Platinum (varies by SLA) |
|---|---|---|---|
| Guaranteed response time | Within 48 hours | Within 24 hours | Varies based on defined SLA |
| Knowledge base + online docs | ✓ | ✓ | ✓ |
| Software updates & bug fixes | ✓ | ✓ | ✓ |
| Remote troubleshooting | ✓ | ✓ | ✓ |
| Dedicated support representative | — | — | ✓ |
| Priority for new feature requests | — | — | ✓ |
| Customized team training | — | — | ✓ |

### 3.7 Resources & Marketplace

| Label | URL | Description |
|---|---|---|
| Azure Marketplace listing | <https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi> | Purchase plans and licensing. |
| Partner Showcase video | [TBD] | Watch the EmbedFAST showcase. |
| Technical documentation | [TBD] | Integration and configuration reference. |
| Case studies | <https://maqsoftware.com/case-studies> | Real-world embedding wins. |

## 4. Theming

Editorial Red v3 tokens only. Section alternation: white / off-white.

## 5. SEO

- **title:** `EmbedFAST — Embed Power BI without custom code | MAQ Software`
- **description:** `EmbedFAST lets you embed Power BI in any app — faster time to market, lower licensing cost, full customization, and enterprise-grade access control.`
- **canonical:** `https://maqsoftware.com/products/embedfast`
- **og:image:** `https://maqsoftware.com/images-new/isv/isv-top-image.jpg`

## 6. Brand rules

- Always "MAQ Software".
- Primary CTAs route to Azure Marketplace or `customersuccess@maqsoftware.com`.
