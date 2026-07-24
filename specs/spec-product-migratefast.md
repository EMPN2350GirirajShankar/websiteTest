# Product Page Spec — MigrateFAST

> Source: <https://maqsoftware.com/products/migrateFAST>
> Sibling specs: [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md), [spec-industry-retail.md](spec-industry-retail.md)

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/products/migratefast` (declared before `/products/:slug`) |
| Page component | `src/pages/ProductMigrateFAST.tsx` |
| Shared layout | `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |

## 2. Page composition (top → bottom)

1. `<Announcement />`
2. `<Header />`
3. **Hero** — §3.1
4. `<TrustBanner />`
5. **Benefits** — §3.2
6. **6-step migration process** — §3.3
7. **Tableau → Power BI capabilities** — §3.4
8. **Case studies** — §3.5 *(block only; content TBD)*
9. **Testimonials** — §3.6 *(block only; content TBD)*
10. **Resources & Marketplace** — §3.7
11. `<CTA />`
12. `<Footer />`

## 3. Section specs

### 3.1 Hero (2-column band)

- **Eyebrow:** `MICROSOFT FABRIC MIGRATION`
- **H1:** `MigrateFAST`
- **Subhead:** `Accelerate your migration journey to Microsoft Fabric. Simplify data and reporting platform migration to Microsoft Fabric with AI-powered tools for faster and easier transitions.`
- **Primary CTA:** `Contact our team` → `mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20MigrateFAST`
- **Secondary CTA:** `See the process` → `#migratefast-process`
- **Hero image:** `https://maqsoftware.com/images-new/isv/migrate-fast.jpg`

### 3.2 Benefits (3-card grid)

| Title | Description |
|---|---|
| Large-scale migration | Enables large-scale migration of reports from Tableau to Power BI. |
| Cost savings | Reduces the time and resources required to migrate reports using AI, resulting in cost savings of 40%. |
| Optimization | Optimizes the migration process to ensure high-quality and accurate report conversion. |

### 3.3 6-step migration process

| Step | Title | Description |
|---|---|---|
| 1 | Inventory analysis | Extract metadata, analyze reports, and assess data compatibility for a structured migration plan. |
| 2 | Estimation and planning | Estimate costs, finalize architecture, identify risks, and define roles. |
| 3 | Semantic model and report creation | Build a Power BI model, optimize data, and replicate report interactions for seamless functionality. |
| 4 | Review | Optimize performance, ensure uniformity, verify data accuracy, and certify reports. |
| 5 | Governance | Track data lineage, maintain best practices, monitor performance, and set alerts. |
| 6 | Center of Excellence (CoE) | Ongoing support, user training, troubleshooting, and KPI tracking post-migration. |

### 3.4 Tableau → Power BI automation capabilities

- Upload Tableau reports and auto-extract metadata
- Get timeline estimates for the migration
- Analyze report similarity to remove duplicates
- Auto-convert LOD to DAX and check for errors
- Customize Power BI report UI

### 3.5 Case studies *(block only)*

Section shell + 3 placeholder cards. Content TBD by Sales.

### 3.6 Testimonials *(block only)*

Section shell + 2 placeholder quote cards. Content TBD by Sales.

### 3.7 Resources & Marketplace

| Label | URL | Description |
|---|---|---|
| Consulting offers (Azure Marketplace) | <https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software> | MAQ Software migration offers. |
| Case studies | <https://maqsoftware.com/case-studies> | Real-world Fabric migration outcomes. |
| Best practice guides | <https://maqsoftware.com/community/best-practices> | Migration patterns and standards. |
| Contact for pricing | `mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20MigrateFAST` | Tailored plan for your estate. |

## 4. Theming

Editorial Red v3 tokens only. Section alternation: white / off-white.

## 5. SEO

- **title:** `MigrateFAST — AI-powered Microsoft Fabric migration | MAQ Software`
- **description:** `MigrateFAST accelerates Tableau-to-Power-BI and platform migration to Microsoft Fabric with AI-driven automation. 40% cost savings.`
- **canonical:** `https://maqsoftware.com/products/migratefast`
- **og:image:** `https://maqsoftware.com/images-new/isv/migrate-fast.jpg`

## 6. Brand rules

- Always "MAQ Software".
- All primary CTAs → `customersuccess@maqsoftware.com`.
