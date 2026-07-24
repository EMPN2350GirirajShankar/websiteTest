# Product Page Spec — CertyFAST

> Source: <https://maqsoftware.com/products/certyFAST>
> Sibling specs: [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md), [spec-industry-retail.md](spec-industry-retail.md)

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/products/certyfast` (declared before `/products/:slug`) |
| Page component | `src/pages/ProductCertyFAST.tsx` |
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
9. **Resources & Marketplace** — §3.6
10. `<CTA />`
11. `<Footer />`

## 3. Section specs

### 3.1 Hero (2-column band)

- **Eyebrow:** `POWER BI QUALITY CONTROL`
- **H1:** `CertyFAST`
- **Subhead:** `CertyFAST helps organizations build and maintain high-quality Power BI semantic models. By automating error detection, DAX standardization, and documentation, it improves consistency, reduces development effort, and ensures adherence to modeling best practices. Ready to revolutionize your data strategy and empower your business with the capabilities of Power BI?`
- **Primary CTA:** `Download now` → <https://github.com/maqsoftware/CertyFAST>
- **Secondary CTA:** `Talk to our team` → `mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20CertyFAST`
- **Hero image:** `https://maqsoftware.com/images-new/isv/who.jpg`

### 3.2 Benefits (3-card grid)

| Title | Description |
|---|---|
| Automate the review process | Save time and effort by easily identifying errors, formatting DAX measures, and creating knowledge base documents. |
| Error free reporting | Ensure your report aligns with organizational standards. Identify discrepancies that impact the report's size, performance, or user experience. |
| Accurate and uniform reports | Access detailed documentation of semantic models and report visuals, aiding developers in creating consistent knowledge documents. |

### 3.3 3-step workflow

| Step | Title | Description | Image |
|---|---|---|---|
| 1 | Analyze your report | Automatically detect errors, discrepancies, and performance issues impacting report quality. | `images-new/isv/reports4.svg` |
| 2 | Review insights | Explore field lineage and generate detailed documentation of your Power BI models. | `images-new/isv/review.svg` |
| 3 | Optimize and deploy | Fix alignment issues and ensure adherence to best practices for seamless report delivery. | `images-new/isv/optimize.svg` |

### 3.4 Case studies *(block only)*

Section shell + 3 placeholder cards. Content TBD by Sales.

### 3.5 Testimonials *(block only)*

Section shell + 2 placeholder quote cards. Content TBD by Sales.

### 3.6 Resources & Marketplace

| Label | URL | Description |
|---|---|---|
| CertyFAST on GitHub | <https://github.com/maqsoftware/CertyFAST> | Download the tool. |
| Installation & user guide | <https://maqsoftware.com/services/Power-BI/InstallationandUsageGuide> | Step-by-step integration, best practices, troubleshooting. |
| Best practice guides | <https://maqsoftware.com/community/best-practices> | Power BI development standards. |
| Case studies | <https://maqsoftware.com/case-studies> | Real-world quality-control wins. |

## 4. Theming

Editorial Red v3 tokens only. Section alternation: white / off-white.

## 5. SEO

- **title:** `CertyFAST — Power BI report quality control | MAQ Software`
- **description:** `Automate Power BI error detection, DAX formatting, and documentation with CertyFAST by MAQ Software.`
- **canonical:** `https://maqsoftware.com/products/certyfast`
- **og:image:** `https://maqsoftware.com/images-new/isv/who.jpg`

## 6. Brand rules

- Always "MAQ Software".
- Primary CTAs route to GitHub or `customersuccess@maqsoftware.com`.
