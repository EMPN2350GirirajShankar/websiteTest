# Page Spec — Privacy Statement

> Source: https://maqsoftware.com/privacystatement
> Sibling specs: spec-product-fabric-admin-agent.md, spec-industry-retail.md

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/privacystatement` (legacy route preserved exactly; no hyphens) |
| Page component | `src/pages/AboutPrivacyStatement.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Header nav integration | Footer legal/support links and `About` section; not a top-level product/service menu item |
| Page classification | `support` |
| Self-contained sections | Hero, Policy highlights, Data handling details, Definitions, Changes, Contact, Additional content |

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared, mounted in App)*
2. `<Header />` *(shared, mounted in App)*
3. **Hero** — §3.1
4. `<TrustBanner />` *(shared)*
5. **Policy highlights** — §3.2
6. **Data handling details** — §3.3
7. **Definitions** — §3.4
8. **Change notice** — §3.5
9. **Contact & support** — §3.6
10. **Additional content** — §3.7
11. `<CTA />` *(shared)*
12. `<Footer />` *(shared, mounted in App)*

---

## 3. Section specs

### 3.1 Hero

- **Layout:** centered single-column legal hero.
- **Background:** white.
- **Padding:** standard page top padding consistent with About pages.

**Copy (literal):**
- **H1:** `Privacy Statement`
- **Subhead / intro paragraph:**
  > MAQ Software (“we”, “us”, or “our”) offers applications, visualizations & services in the AI, data analytics, cloud transformation, and Power BI spaces. We are committed to protecting your personal information. This Privacy Statement explains the personal data we process, how we process it, and for what purpose. Privacy Statement applies to the applications published by MAQ Software via Microsoft Azure Marketplace, Microsoft App Source, other Microsoft Office stores, or any other means. Visualizations refer to custom Power BI visuals & template apps developed and published by MAQ Software either to the Office 365 store or Power BI gallery.

- **Hero note:** `Last Updated: March 12, 2026` (render as page metadata directly below the heading or inline with intro copy).
- **Primary CTA:** `Contact support` → `mailto:Support@MAQSoftware.com`
- **Secondary CTA:** none in source.
- **Hero illustration URL:** none.

**Policy highlights list:**
- `MAQ Software does not collect any personal information, Customer Data*, or anything related to your device when you use any of our applications, including visualizations, except for limited service configuration metadata collected by certain applications, as described below.`
- `We do not collect or have access to any information that can identify you when you purchase an App or download a trial.`
- `We will never sell or share information collected as part of a trial or purchase of any of our Apps without your written consent. Information collected by Microsoft as part of trial or purchase falls under the Microsoft Privacy Policy.`
- `We may collect usage and download statistics, trends, or any other Administrator Data** that Office 365 application administrators are provided with, but not the specific usage of any user.`

### 3.2 Policy highlights

- **Section eyebrow:** `PRIVACY COMMITMENTS`
- **Title:** `What this privacy statement means for your data`
- **Body:** copy the four bullets from §3.1 exactly as the main visible highlight list.
- **Layout:** vertical summary block under hero, no cards required.

### 3.3 Data handling details

- **Section title:** `Application Service Configuration Data`
- **Section copy:**
  > Certain MAQ Software applications may collect and store limited-service configuration metadata, including Microsoft Tenant ID and limited application connection information, solely to enable application functionality, authentication, troubleshooting, and service reliability. This data is stored within MAQ Software’s Microsoft Azure tenant and is not used beyond required for operating the applicable service.

- **No additional sub-headings or assets.**

### 3.4 Definitions

- **Section title:** `Privacy definitions`
- **Layout:** single-column definition list.

**Definition blocks:**
- **`Customer Data`**
  > Customer Data is all data, including all text files, sound files, image files, and software that you provide to MAQ Software through your use of our Services. We may use Customer Data to provide Services. This includes troubleshooting aimed at preventing, detecting, and repairing problems affecting the operation of the services provided.

- **`Administrator Data`**
  > Administrator Data is information about administrators (including account contact and subscription administrators) provided during sign-up, purchase, or administration of the Services. This may include name, address, phone number, and email address, whether collected at initial purchase or later during management of the Services.

- **Disclosure statement:**
  > We will not disclose Customer Data or Administrator Data ("your information") outside of MAQ Software except as you direct, as described in your agreement(s) or as described in this privacy statement.

### 3.5 Changes to this Privacy Statement

- **Section title:** `Changes to this Privacy Statement`
- **Section copy:**
  > We will occasionally update this privacy statement to reflect customer feedback and changes in our Services. When we post changes to this statement, we will revise the "last updated" date at the top of the statement. We encourage you to periodically review this privacy statement to learn how MAQ Software is protecting your information.

### 3.6 Contact & support

- **Section title:** `How to Contact Us`
- **Section copy:**
  > If you have any questions regarding our privacy policy, please Contact Us at [Support@MAQSoftware.com](mailto:Support@MAQSoftware.com)

- **Primary support link:** `mailto:Support@MAQSoftware.com`

### 3.7 Additional content

- **Legacy path note:** maintain compatibility with the existing `https://maqsoftware.com/privacystatement` URL if the new route is `/privacy-statement`.
- **Legal render notes:** preserve the asterisk annotations exactly as in source copy: `*Customer Data` and `**Administrator Data`.
- **No FAQs, tables, embedded media, or badges** are present on the source page.

---

## 4. Page metadata

- **Page title:** `Privacy Statement | MAQ Software`
- **Meta description:** `Need more information about MAQ Software services or locations? Get in touch with our team and we’ll be happy to help.`
- **Canonical:** `https://maqsoftware.com/privacystatement` (source page has no explicit canonical tag; set this or the new route canonical when building the page)
- **Open Graph image:** `/images/expertise/ai-main`

---

## 5. Build & verify

```powershell
npm run build        # must exit 0
```

A change to this spec is done when:
1. `npm run build` exits 0.
2. `/privacy-statement` renders the exact page copy in §3.
3. The page is accessible from footer/legal or About support links.
4. No other routes regress.

---

## 6. Out of scope (v1)

- Rich hero imagery or illustration (source page has none).
- A dedicated top-level header nav item.
- FAQ accordion or comparative product content.
- Content beyond the live privacy statement text.
