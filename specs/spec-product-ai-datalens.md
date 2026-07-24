# Product Page Spec — AI-DataLens

> Source: <https://maqsoftware.com/products/AI-DataLens>
> Sibling specs: [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md), [spec-industry-retail.md](spec-industry-retail.md)

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/products/ai-datalens` (declared before `/products/:slug`) |
| Page component | `src/pages/ProductAIDataLens.tsx` |
| Shared layout | `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |

## 2. Page composition (top → bottom)

1. `<Announcement />`
2. `<Header />`
3. **Hero** — §3.1
4. `<TrustBanner />`
5. **Benefits** — §3.2
6. **Key features** — §3.3
7. **Case studies** — §3.4 *(block only; content TBD)*
8. **Testimonials** — §3.5 *(block only; content TBD)*
9. **Resources & Marketplace** — §3.6
10. `<CTA />`
11. `<Footer />`

## 3. Section specs

### 3.1 Hero (2-column band)

- **Layout:** left (60%) copy + CTAs, right (40%) hero image.
- **Background:** `--maq-off-white`. Padding `48px 32px`.
- **Eyebrow:** `INTELLIGENT DATA INTERACTION`
- **H1:** `AI-DataLens`
- **Subhead:** `Transform how users interact with data by enabling natural language queries and delivering instant and intelligent insights. Unlock a new way to interact with your data.`
- **Primary CTA:** `Request a demo` → `mailto:customersuccess@maqsoftware.com?subject=Demo%20-%20AI-DataLens&body=Hello,%20I%20would%20like%20to%20request%20a%20demo%20for%20AI-DataLens.`
- **Secondary CTA:** `See key features` → `#ai-datalens-features`
- **Hero image:** `https://maqsoftware.com/images-new/isv/ai-datalens-hero-img-2.svg` (`<img>`, `alt=""`, `aria-hidden="true"`, `loading="eager"`)

### 3.2 Benefits (3-card grid)

| Title | Description |
|---|---|
| Informed decisions | Move beyond guesswork — leverage data-backed insights to make informed decisions that reduce risk and accelerate growth. |
| Streamlined operations | Automate processes and reduce manual effort with insights that keep your operations running smoothly. |
| Plug-and-play extensibility | Quickly connect to your existing tools and systems with plug-and-play extensibility, so your data workflows stay seamless and scalable. |

### 3.3 Key features (6 items, alternating image + copy)

| # | Title | Description | Image |
|---|---|---|---|
| 1 | Chat with structured data | AI-DataLens allows users to interact with enterprise datasets using natural language. No need for SQL or DAX, just ask questions and get instant answers. | `images-new/isv/ai-datalens-kf-1.svg` |
| 2 | User guidance | Delivers intelligent question suggestions and personalized investigative recommendations to help new users effectively explore and understand their data from the very beginning. | `images-new/isv/ai-datalens-kf-2.svg` |
| 3 | Semantic relevance | Understands the true intent behind user questions by analyzing metadata and context, ensuring accurate and meaningful responses. | `images-new/isv/ai-datalens-kf-3.svg` |
| 4 | Automated visual generation | Automatically generates relevant charts and visuals from user queries. This eliminates manual effort and helps users quickly interpret the data visually. | `images-new/isv/ai-datalens-kf-4.svg` |
| 5 | Insight generation | Beyond raw data, the system generates narratives, titles, and summaries to present insights in a business-friendly format for decision-making and provides recommendations. | `images-new/isv/ai-datalens-kf-5.svg` |
| 6 | Metadata agent & column pruning | AI-DataLens transforms raw data into an intelligent, indexed schema — powering faster, more accurate queries with minimal effort. | `images-new/isv/ai-datalens-kf-6.svg` |

### 3.4 Case studies *(block only)*

Render the section shell (eyebrow + heading) with 3 placeholder cards. Content TBD by Sales.

### 3.5 Testimonials *(block only)*

Render the section shell with 2 placeholder quote cards. Content TBD by Sales.

### 3.6 Resources & Marketplace

| Label | URL | Description |
|---|---|---|
| Consulting offers (Azure Marketplace) | <https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software> | Browse MAQ Software consulting offers on Azure Marketplace. |
| Case studies | <https://maqsoftware.com/case-studies> | Real-world AI-DataLens and analytics outcomes. |
| Best practice guides | <https://maqsoftware.com/community/best-practices> | Patterns for natural-language data interaction. |
| Request a demo | `mailto:customersuccess@maqsoftware.com?subject=Demo%20-%20AI-DataLens` | Talk to our team about a tailored walkthrough. |

## 4. Theming

Editorial Red v3 tokens only. Section background alternation: white / off-white.

## 5. SEO

- **title:** `AI-DataLens — Natural-language insights | MAQ Software`
- **description:** `Transform how users interact with data with natural-language queries and instant intelligent insights from AI-DataLens by MAQ Software.`
- **canonical:** `https://maqsoftware.com/products/ai-datalens`
- **og:image:** `https://maqsoftware.com/images-new/isv/ai-datalens-hero-img-2.svg`

## 6. Brand rules

- Always "MAQ Software".
- All primary CTAs → `customersuccess@maqsoftware.com`.
