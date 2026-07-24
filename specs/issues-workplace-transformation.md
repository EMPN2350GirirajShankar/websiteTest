# Issues — `/services/workplace-transformation` Page

**Date:** 2026-06-02  
**Page URL:** http://localhost:5173/services/workplace-transformation

---

## Critical Issues

### 1. "Contact Us" button (Hero section) links to mailto instead of /contact page

- **Location:** Hero section, primary CTA button
- **Current behavior:** Links to `mailto:customersuccess@maqsoftware.com?subject=Workplace%20Transformation%20%26%20Productivity%20-%20MAQ%20Software`
- **Expected behavior:** Should navigate to `/contact` page
- **Impact:** High — users expecting to land on the contact page are instead prompted to open an email client

### 2. "Contact Us" button (Bottom CTA section) links to mailto instead of /contact page

- **Location:** "Ready to move faster?" CTA section near bottom of page
- **Current behavior:** Links to `mailto:customersuccess@maqsoftware.com?subject=Contact%20MAQ%20Software`
- **Expected behavior:** Should navigate to `/contact` page
- **Impact:** High — same issue as hero, affects conversion flow

---

## Footer Issues (Broken/Missing Links)

### 3. Footer "Contact Us" links to mailto instead of /contact

- **Location:** Footer → Company section → "Contact Us"
- **Current behavior:** Links to `mailto:customersuccess@maqsoftware.com`
- **Expected behavior:** Should navigate to `/contact` page (route exists in app)

### 4. Footer "News" has no link

- **Location:** Footer → Company section → "News"
- **Current behavior:** Rendered as plain text (no `<a>` tag)
- **Expected behavior:** Should link to `/news` (route exists in app)

### 5. Footer "Sustainability" has no link

- **Location:** Footer → Company section → "Sustainability"
- **Current behavior:** Rendered as plain text (no `<a>` tag)
- **Expected behavior:** Should link to `/sustainability` (route exists in app)

### 6. Footer "Terms of Service" has no link

- **Location:** Footer → Support section
- **Current behavior:** Rendered as plain text (no `<a>` tag)
- **Expected behavior:** Should link to a Terms of Service page or external URL

### 7. Footer "Privacy Statement" has no link

- **Location:** Footer → Support section
- **Current behavior:** Rendered as plain text (no `<a>` tag)
- **Expected behavior:** Should link to a Privacy Statement page or external URL

---

## External Link Issues

### 8. Blog link returns 403 (Cloudflare block)

- **Location:** Case Studies section → "Scaling AI for every customer and every developer with MAQ Software"
- **URL:** `https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html`
- **Current behavior:** Returns 403 "Sorry, you have been blocked" from Cloudflare
- **Note:** May be a false positive from automated/bot access; verify manually in a standard browser

---

## Minor / UX Issues

### 9. "Know more" link under capability section goes to mailto

- **Location:** Capabilities section → "Microsoft Copilot adoption & governance" → "Know more"
- **Current behavior:** Links to `mailto:customersuccess@maqsoftware.com?subject=Microsoft%20Copilot%20adoption%20%26%20governance%20-%20Workplace%20Transformation`
- **Expected behavior:** Could link to a dedicated service detail page or `/contact` for consistency

---

## Summary

| # | Issue | Severity | Section |
|---|-------|----------|---------|
| 1 | Hero "Contact Us" → mailto instead of /contact | **Critical** | Hero |
| 2 | CTA "Contact Us" → mailto instead of /contact | **Critical** | Bottom CTA |
| 3 | Footer "Contact Us" → mailto instead of /contact | Medium | Footer |
| 4 | Footer "News" — no link | Medium | Footer |
| 5 | Footer "Sustainability" — no link | Medium | Footer |
| 6 | Footer "Terms of Service" — no link | Medium | Footer |
| 7 | Footer "Privacy Statement" — no link | Medium | Footer |
| 8 | Blog link 403 (Cloudflare) | Low* | Case Studies |
| 9 | "Know more" → mailto | Low | Capabilities |

*\*Issue #8 may only affect automated crawlers; verify in a regular browser session.*

---

## Verified Working Links

The following internal links on this page are correctly routed:

- `/` (MAQ Software logo) ✅
- `/insights/case-studies` ("See workplace transformation case studies", "See all case studies") ✅
- `/services/agentic-ai` ✅
- `/services/data-and-analytics` ✅
- `/services/reporting-bi` ✅
- `/services/cloud` ✅
- `/services/security-compliance` ✅
- `/products/ai-datalens` ✅
- `/products/fabric-admin-agent` ✅
- `/products/migratefast` ✅
- `/products/embedfast` ✅
- `/products/certyfast` ✅
- `/products/loadfast` ✅
- `/insights/power-bi-custom-visual-guide` ✅
- `/insights/best-practice-guides` ✅
- `/who-we-are` ✅

External links verified working:
- `https://blog.maqsoftware.com/2025/11/modernizing-software-development.html` ✅
- `https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html` ✅
- `https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html` ✅
- `https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html` ✅
- `https://x.com/MAQSoftware` ✅
- `https://github.com/maqsoftware` ✅
- `https://www.linkedin.com/company/maq-software/` ✅
- `https://maqsoftware.com/careers` ✅
- `https://marketplace.microsoft.com/...` (Consulting offers) ✅
