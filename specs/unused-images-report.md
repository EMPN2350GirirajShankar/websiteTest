# Unused Image / Asset Report

Audit of static assets under `public/` to identify files that are **not referenced** anywhere in the codebase (no `<img>`, CSS `url()`, `import`, preload link, or string reference in `src/`, `index.html`, or config files).

> Method: enumerated every asset in `public/`, then searched the full repo (including ignored files) for each filename. Markdown spec files (`spec-*.md`, etc.) were treated as documentation, not as live usage.

---

## ❌ Unused assets (safe to review for removal)

| # | File | Notes |
|---|------|-------|
| 1 | [public/images/home.png](public/images/home.png) | No reference. Likely superseded by `home-hero.webp`. |
| 2 | [public/images/Home2.png](public/images/Home2.png) | No reference. Likely an old hero variant. |
| 3 | [public/images/marketplace-consulting.jpg](public/images/marketplace-consulting.jpg) | No reference anywhere. |
| 4 | [public/images/marketplace-realtime.jpg](public/images/marketplace-realtime.jpg) | No reference anywhere. |
| 5 | [public/logos/databricks-logo.png](public/logos/databricks-logo.png) | Not used. The page uses `databricks.png` + `databricks-partner.png` instead. |
| 6 | [public/logos/microsoft-logo.png](public/logos/microsoft-logo.png) | No reference. (Only `partner.microsoft.com` URLs exist, not this image.) |
| 7 | [public/logos/solutions-partner-data-and-AI.png](public/logos/solutions-partner-data-and-AI.png) | No `<img>`/`url()` reference. Only the partner.microsoft.com link text matches. |
| 8 | [public/logos/solutions-partner-digital-and-apps-innovation.png](public/logos/solutions-partner-digital-and-apps-innovation.png) | Same as above — not rendered. |
| 9 | [public/logos/solutions-partner-infrastructure.png](public/logos/solutions-partner-infrastructure.png) | Same as above — not rendered. |
| 10 | [public/logos/solutions-partner-security.png](public/logos/solutions-partner-security.png) | Same as above — not rendered. |
| 11 | [public/HomePage.png](public/HomePage.png) | No reference. Appears to be a screenshot/mockup. |
| 12 | [public/icons.svg](public/icons.svg) | No reference (icons come from Fluent UI, not this sprite). |
| 13 | [public/favicon.svg](public/favicon.svg) | Not referenced — `index.html` links only `/favicon.png`. |

### ⚠️ Needs a human decision (not linked, but special-cased)

| File | Notes |
|------|-------|
| [public/favicon.ico](public/favicon.ico) | Not referenced in `index.html`, **but browsers auto-request `/favicon.ico`** at the site root by default. Keep unless you intentionally serve only `favicon.png`. |

---

## ✅ Assets confirmed in use (for reference)

| File | Used in |
|------|---------|
| [public/favicon.png](public/favicon.png) | [index.html](index.html#L5) |
| [public/images/home-hero.webp](public/images/home-hero.webp) | [index.html](index.html#L8), [src/components/HeroV2.tsx](src/components/HeroV2.tsx#L139) |
| [public/images/ContactUs/bg.png](public/images/ContactUs/bg.png) | [src/pages/Contact.tsx](src/pages/Contact.tsx#L21) |
| [public/images/ContactUs/redmond.jpg](public/images/ContactUs/redmond.jpg) | [src/pages/Contact.tsx](src/pages/Contact.tsx#L327) |
| [public/images/ContactUs/plano.jpg](public/images/ContactUs/plano.jpg) | [src/pages/Contact.tsx](src/pages/Contact.tsx#L335) |
| [public/images/ContactUs/noida.webp](public/images/ContactUs/noida.webp) | [src/pages/Contact.tsx](src/pages/Contact.tsx#L343) |
| [public/images/ContactUs/Hyderabad.jpg](public/images/ContactUs/Hyderabad.jpg) | [src/pages/Contact.tsx](src/pages/Contact.tsx#L351) |
| [public/images/ContactUs/mumbai.jpg](public/images/ContactUs/mumbai.jpg) | [src/pages/Contact.tsx](src/pages/Contact.tsx#L359) |
| [public/logos/MAQ-Software-Logo.svg](public/logos/MAQ-Software-Logo.svg) | [src/components/Header.tsx](src/components/Header.tsx#L522), [src/components/Footer.tsx](src/components/Footer.tsx#L190) |
| [public/logos/wave_dots.svg](public/logos/wave_dots.svg) | About/Contact/Terms/Privacy page backgrounds |
| [public/logos/Inc5000-2.png](public/logos/Inc5000-2.png) | [src/pages/AboutWhoWeAre.tsx](src/pages/AboutWhoWeAre.tsx#L267) |
| [public/logos/Power_BI_Partner_Apr2023.png](public/logos/Power_BI_Partner_Apr2023.png) | [src/pages/AboutWhoWeAre.tsx](src/pages/AboutWhoWeAre.tsx#L273), [src/pages/PartnershipMicrosoft.tsx](src/pages/PartnershipMicrosoft.tsx#L237) |
| [public/logos/Fastest_Growing_Companies.png](public/logos/Fastest_Growing_Companies.png) | [src/pages/AboutWhoWeAre.tsx](src/pages/AboutWhoWeAre.tsx#L279) |
| [public/logos/ISO_27701_27001_Logo.png](public/logos/ISO_27701_27001_Logo.png) | [src/pages/AboutWhoWeAre.tsx](src/pages/AboutWhoWeAre.tsx#L288) |
| [public/logos/ISO-icon-27001.png](public/logos/ISO-icon-27001.png) | [src/pages/AboutWhoWeAre.tsx](src/pages/AboutWhoWeAre.tsx#L294) |
| [public/logos/ISO-icon-27018.png](public/logos/ISO-icon-27018.png) | [src/pages/AboutWhoWeAre.tsx](src/pages/AboutWhoWeAre.tsx#L300) |
| [public/logos/databricks.png](public/logos/databricks.png) | [src/pages/PartnershipDatabricks.tsx](src/pages/PartnershipDatabricks.tsx#L209) |
| [public/logos/databricks-partner.png](public/logos/databricks-partner.png) | [src/pages/PartnershipDatabricks.tsx](src/pages/PartnershipDatabricks.tsx#L220) |
| [public/logos/Snowflake-hero.png](public/logos/Snowflake-hero.png) | [src/pages/PartnershipSnowflake.tsx](src/pages/PartnershipSnowflake.tsx#L211) |
| [public/logos/Snowflake-Services-Select.png](public/logos/Snowflake-Services-Select.png) | [src/pages/PartnershipSnowflake.tsx](src/pages/PartnershipSnowflake.tsx#L224) |
| [public/resources/MAQ Software Brochure.pdf](public/resources/MAQ%20Software%20Brochure.pdf) | [src/pages/TechCon365.tsx](src/pages/TechCon365.tsx#L13) |

---

_Note: `src/data/news.ts` and `src/data/insights.ts` reference images via absolute `https://maqsoftware.com/...` URLs (hosted externally), so they do not map to any local `public/` asset._
