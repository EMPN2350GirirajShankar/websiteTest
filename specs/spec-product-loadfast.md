# Product Page Spec — LoadFAST

> Source: <https://maqsoftware.com/products/loadFAST>
> Sibling specs: [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md), [spec-industry-retail.md](spec-industry-retail.md)

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/products/loadfast` (declared before `/products/:slug`) |
| Page component | `src/pages/ProductLoadFAST.tsx` |
| Shared layout | `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |

## 2. Page composition (top → bottom)

1. `<Announcement />`
2. `<Header />`
3. **Hero** — §3.1
4. `<TrustBanner />`
5. **Benefits** — §3.2
6. **3-step workflow** — §3.3
7. **Case studies** — §3.4 *(block only; content TBD)*
8. **Testimonials** — §3.5 *(block only; content TBD)*
9. **Pricing** — §3.6
10. **Resources & Marketplace** — §3.7
11. `<CTA />`
12. `<Footer />`

## 3. Section specs

### 3.1 Hero (2-column band)

- **Eyebrow:** `POWER BI PERFORMANCE`
- **H1:** `LoadFAST`
- **Subhead:** `Optimize your Power BI environments for greater efficiency and lower costs with our web application. Ready to empower your business with the dynamic capabilities of Power BI?`
- **Primary CTA:** `Download now` → <https://azuremarketplace.microsoft.com/en/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview>
- **Secondary CTA:** `Talk to our team` → `mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20LoadFAST`
- **Hero image:** `https://maqsoftware.com/img/Microsoft-Fabric/Slider1.png`

### 3.2 Benefits (6-card grid)

| Title | Description |
|---|---|
| Optimize capacity | Identify the ideal capacity setup across multiple reports, ensuring no under- or over-provisioning. |
| Manage collections | Group pages across reports and collaboratively build and save custom load time test scenarios. |
| Track user interactions | See how real-time user actions like slicing and filtering impact report load time. |
| Automate accuracy | Benefit from precise capacity insights with automated processes, eliminating human error. |
| Analyze system performance | Uncover actionable insights from data on application performance, resource allocation, CPU usage, and capacity to optimize reporting decisions. |
| Simulate real-time user traffic | Modify user distribution across reports, RLS access, and more in order to replicate your real-world use case. |

### 3.3 3-step workflow

| Step | Title | Description | Image |
|---|---|---|---|
| 1 | Create a collection | Choose your desired Power BI reports and pages from your workspaces. | `images-new/isv/step-1-loadfast.svg` |
| 2 | Define user actions | Set the number of users and the actions they will be performing on your report. | `images-new/isv/step-2-loadfast.svg` |
| 3 | Get results | Run the tests and review insights on page and visual load time, user action impact, and Microsoft Fabric capacity usage. | `images-new/isv/step-3-loadfast.svg` |

### 3.4 Case studies *(block only)*

Section shell + 3 placeholder cards. Content TBD by Sales.

### 3.5 Testimonials *(block only)*

Section shell + 2 placeholder quote cards. Content TBD by Sales.

### 3.6 Pricing (2-tier)

| Plan | Price | Term | Inclusions |
|---|---|---|---|
| Free Plan | $0 + Azure infrastructure costs | per month | Perform load tests with up to 50 users · Free upgrades · Complete installation setup |
| Pro Plan | $1,500 + Azure infrastructure costs | per month | No limit on the number of users · Free upgrades · Complete installation setup · First response within 2 business days |

CTA per tier → <https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=PlansAndPrice>.

### 3.7 Resources & Marketplace

| Label | URL | Description |
|---|---|---|
| Azure Marketplace listing | <https://azuremarketplace.microsoft.com/en/marketplace/apps/maqsoftware.powerbiloadanalyzer> | Get LoadFAST. |
| Technical documentation | <https://maqsoftware.gitbook.io/loadfast-technical-documentation> | Integration and usage reference. |
| Best practice guides | <https://maqsoftware.com/community/best-practices> | Power BI performance patterns. |
| Case studies | <https://maqsoftware.com/case-studies> | Real-world load-testing wins. |

## 4. Theming

Editorial Red v3 tokens only. Section alternation: white / off-white.

## 5. SEO

- **title:** `LoadFAST — Power BI load testing & capacity optimization | MAQ Software`
- **description:** `LoadFAST simulates real Power BI usage, finds the right capacity, and cuts costs — built by MAQ Software.`
- **canonical:** `https://maqsoftware.com/products/loadfast`
- **og:image:** `https://maqsoftware.com/img/Microsoft-Fabric/Slider1.png`

## 6. Brand rules

- Always "MAQ Software".
- Primary CTAs route to Azure Marketplace or `customersuccess@maqsoftware.com`.
