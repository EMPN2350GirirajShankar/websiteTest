# About Page Spec — Who We Are

> Source: https://maqsoftware.com/who-we-are
> Sibling specs: spec-partnership-microsoft.md, spec-partnership-snowflake.md, spec.md
> Generator: spec-page-generator.md

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/who-we-are` |
| Page component | `src/pages/AboutWhoWeAre.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Self-contained sections | Hero, Excellence, Designations, Specializations, Why MAQ, Partners, Recognitions, Certifications |
| Header nav integration | Company mega-menu "Who we are" → `/who-we-are` |
| Footer nav update | `spec-footer-links.md` §2.4 "Who we are" → `/who-we-are` |
| Redirect (SPA fallback) | `/who-we-are /who-we-are 200` |

**Design goal:** Dense and scannable. Section padding `48–56px`, h2 `28–30px`, body `14px`. No oversized hero.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active on "Company")*
3. **Hero** — §3.1
4. `<TrustBanner />` *(shared)*
5. **25 Years of Excellence** — §3.2
6. **Microsoft Solutions Partner Designations** — §3.3 (4 cards)
7. **Microsoft Specializations** — §3.4 (9-item grid)
8. **Why Choose MAQ Software** — §3.5 (4 value-prop cards)
9. **Our Partners** — §3.6 (4 partner logos)
10. **Recognitions** — §3.7 (3 award cards)
11. **Certifications** — §3.8 (3 ISO cards)
12. `<CTA />` *(shared)*
13. `<Footer />` *(shared)*

---

## 3. Section specs

### 3.1 Hero

- **Layout:** left (60%) = eyebrow + H1 + subhead + CTA + stat row, right (40%) = CSS decorative mosaic.
- **Background:** `--maq-off-white`. **Padding:** `48px 32px`.
- **Eyebrow:** `WHO WE ARE`
- **H1:** `Who we are`
- **Subhead:** We are a Microsoft Fabric Featured Partner who enables leading companies to accelerate their business intelligence and analytics initiatives. Our solutions enable our clients to improve their operations, reduce costs, increase sales, and build stronger customer relationships.
- **CTA:** `View our specializations` → scroll to `#specializations`

**Stat row (4 inline items):**

| Metric | Label |
|---|---|
| `9` | `Microsoft specializations` |
| `4` | `Microsoft solution partner designations` |
| `5K+` | `Microsoft technical certifications` |
| `200+` | `Microsoft Fabric solutions implemented` |

---

### 3.2 25 Years of Excellence

- **Layout:** centered single-column. **Background:** white. **Padding:** `48px 32px`.
- **H2:** `25 years of excellence`
- **Body:** Our clients choose to work with us because they are confident in our software delivery. Their confidence results from our commitment to consistent outcomes, reduced time to market, and a transparent workflow.

---

### 3.3 Microsoft Solutions Partner Designations

- **Eyebrow:** `OUR MICROSOFT SOLUTIONS PARTNER DESIGNATIONS`
- **H2:** `Our Microsoft Solutions Partner Designations`
- **Layout:** 4-column card row (2×2 ≤960px). Each card: badge img + label. External link per card.
- **Background:** `--maq-off-white`. **Padding:** `48px 32px`.

| Designation | Link |
|---|---|
| Solutions Partner for Data & AI (Azure) | https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure#/ |
| Solutions Partner for Digital & App Innovation (Azure) | https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure#/ |
| Solutions Partner for Infrastructure (Azure) | https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure#/ |
| Solutions Partner for Security | https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security#/ |

---

### 3.4 Microsoft Specializations

- **Section id:** `specializations`
- **Eyebrow:** `OUR MICROSOFT SPECIALIZATIONS`
- **H2:** `Our Microsoft Specializations`
- **Layout:** 3-column chip grid (2 col ≤960px, 1 col ≤640px).
- **Background:** white. **Padding:** `48px 32px`.
- **Footer CTA:** `Partner Page` → https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8

| # | Specialization | Link |
|---|---|---|
| 1 | AI platform on Microsoft Azure | https://partner.microsoft.com/en-us/partnership/specialization/ai-platform-on-microsoft-azure |
| 2 | Analytics on Microsoft Azure | https://partner.microsoft.com/en-us/partnership/specialization/analytics-on-microsoft-azure |
| 3 | Build AI Apps on Microsoft Azure | https://partner.microsoft.com/en-us/partnership/specialization/build-and-modernize-ai-apps |
| 4 | Data Warehouse Migration to Microsoft Azure | https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration |
| 5 | Migrate Enterprise Applications to Microsoft Azure | https://partner.microsoft.com/en-us/partnership/specialization/migrate-enterprise-applications |
| 6 | Kubernetes on Microsoft Azure | https://partner.microsoft.com/en-us/partnership/specialization/kubernetes |
| 7 | Copilot | https://partner.microsoft.com/en-us/partnership/specialization/microsoft-copilot |
| 8 | Cloud Security | https://partner.microsoft.com/en-us/partnership/specialization/cloud-security |
| 9 | Threat Protection | https://partner.microsoft.com/en-us/partnership/specialization/threat-protection |

---

### 3.5 Why Choose MAQ Software

- **Eyebrow:** `WHY CHOOSE MAQ SOFTWARE`
- **H2:** `Why choose MAQ Software`
- **Layout:** 4-column card row (2×2 ≤960px, 1 col ≤640px). Each card: icon + title + description.
- **Background:** `--maq-off-white`. **Padding:** `48px 32px`.

| Title | Description |
|---|---|
| Continuous delivery | Receive high-quality solutions through daily build and testing with frequent status updates. |
| Faster implementation | Implement solutions faster with 24/7 support from our globally integrated teams. |
| Cost effective process | Optimized solutions at every stage of development to ensure minimal cost at maximum efficiency. |
| Immediate response | Flexibility to adapt solutions to changing business needs through our daily delivery and feedback model. |

---

### 3.6 Our Partners

- **Eyebrow:** `OUR PARTNERS`
- **H2:** `Our partners`
- **Layout:** 4-column logo row (2×2 ≤960px). Each: logo + label + external link.
- **Background:** white. **Padding:** `48px 32px`.

| Partner | Link |
|---|---|
| Microsoft Preferred Supplier, Since 2000 | https://marketplace.microsoft.com/en-us/partners/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview |
| Snowflake Technology Partner | https://www.snowflake.com/en/why-snowflake/partners/all-partners/maq-llc-dba-maq-software/ |
| Databricks Technology Partner | https://partners.databricks.com/s/directory/listing?recordId=0016100001F00jXAAR |
| Amazon Consulting Partner | http://www.aws-partner-directory.com/PartnerDirectory/PartnerDetail?Name=MAQ+LLC+dba+MAQ+Software |

---

### 3.7 Recognitions

- **Eyebrow:** `RECOGNITIONS`
- **H2:** `Recognitions`
- **Layout:** vertical stack of 3 cards (icon/number + award name + description paragraph).
- **Background:** `--maq-off-white`. **Padding:** `48px 32px`.

**Card 1 — Inc. 5000**
- Award: `Twelve-Time Honoree, Inc. 5000, Fastest Growing Companies in America`
- Link: http://www.inc.com/profile/maq-software

**Card 2 — Microsoft Power BI Partner of the Year**
- Award: `2021 Microsoft Power BI Partner of the Year — Global Award Winner`
- Link: https://news.maqsoftware.com/2021/07/maq-software-honored-as-winner-of-2021.html

**Card 3 — Puget Sound Business Journal**
- Award: `Puget Sound Business Journal's 100 Fastest-Growing Private Companies in Washington State`
- Link: http://www.bizjournals.com/seattle/stories/2009/10/19/focus2.html

---

### 3.8 Certifications

- **Eyebrow:** `CERTIFICATIONS`
- **H2:** `Certifications`
- **Layout:** vertical stack of 3 cards (cert name + description + BSI link).
- **Background:** white. **Padding:** `48px 32px`.

| Cert | BSI Link |
|---|---|
| ISO/IEC 27701:2019 – Privacy Information Management | https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/PM%20747130 |
| ISO 27001:2022 – Information Security | https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/IS%20592346 |
| ISO/IEC 27018:2019 – Cloud Security | https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/PII%20732855 |

---

## 4. Cross-cutting rules

- Same tokens, fonts, spacing as all other pages.
- All external links: `target="_blank" rel="noopener noreferrer"`.
- Hero CTA scrolls to `id="specializations"` (§3.4 wrapper).
- Footer: "Who we are" → `<Link to="/who-we-are">`.
- App.tsx: `<Route path="/who-we-are" element={<><AboutWhoWeAre /><CTA /></>} />`.
- `_redirects`: `/who-we-are /who-we-are 200`.
