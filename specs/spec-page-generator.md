# Generic Page-Spec Generator

A reusable prompt for turning any **maqsoftware.com** page into a structured page spec in the same shape as `spec-product-fabric-admin-agent.md` and `spec-industry-retail.md`.

Hand this file plus a target URL to any agent (or person) and they can produce a build-ready spec.

---

## How to use

1. Open the target page on maqsoftware.com (or pass the URL).
2. Send the agent: **"Use `spec-page-generator.md`. Target URL: `<url>`. Output file: `spec-<kind>-<slug>.md`."**
3. Review the output. Hand the spec to dev — they implement without further questions.

---

## Prompt (copy-paste to agent)

> You are generating a page-build spec for the new MAQ Software website.
>
> ### Inputs
> - `TARGET_URL` — a live maqsoftware.com page (e.g. `https://maqsoftware.com/products/fabricadminagent`).
> - `OUTPUT_FILE` — `spec-<kind>-<slug>.md` where `<kind>` is one of `home | product | service | industry | insight | about | contact | case-study` and `<slug>` is kebab-case.
>
> ### Step 1 — Classify the page
> Fetch `TARGET_URL`. From the URL path and visible content, classify it as one of:
> `home`, `product`, `service`, `industry`, `insight`, `about`, `contact`, `case-study`.
> Pick the matching reference spec:
> - product → mirror `spec-product-fabric-admin-agent.md`
> - industry → mirror `spec-industry-retail.md`
> - others → adapt the same 9-section taxonomy
>
> ### Step 2 — Migrate ALL content (verbatim, nothing dropped)
> Read the **entire** live page top-to-bottom. The goal is **full content migration**, not summarization — every visible block on the source page must land somewhere in the new spec.
>
> Do this in two passes:
>
> **Pass A — inventory.** List every content block on the source page in order: section heading, copy, bullets, images, links, embedded media, FAQs, tables, badges, footnotes. Note word count per block. Nothing skipped.
>
> **Pass B — map to the new 9-section structure.** For each inventoried block, assign it to the closest target section (Hero / Impact / Features / Case studies / Testimonials / Resources / etc.). If a block does not fit any standard section, add it under a new `### 3.7 Additional content` subsection rather than dropping it.
>
> Extract verbatim:
> - Eyebrow, H1, subhead, hero illustration URL (the `.svg` under `images-new/`)
> - Primary + secondary CTA labels and targets
> - Impact / outcome metrics (number + label + source) — keep **all** of them
> - **Full** feature list with the **full** description text (do not trim to one line; preserve original copy)
> - Case-study references (customer + outcome paragraph + link)
> - Testimonial quotes (full text + attribution + role + company)
> - Resource / marketplace links (label + URL + description)
> - Compliance / trust badges, certifications, partner logos
> - FAQs (question + full answer)
> - Any tables, comparison grids, pricing, or process diagrams (recreate as markdown tables / ordered lists)
> - Embedded videos / demos (URL + caption)
> - Footnotes, disclaimers, legal copy
> - Page meta: `<title>`, `<meta description>`, canonical, OG image
>
> **Reconciliation check:** after Pass B, diff the Pass A inventory against the spec. Every inventoried block must appear in the spec. Report any intentionally dropped block with a one-line reason.
>
> ### Step 3 — Emit the spec file
> Write `OUTPUT_FILE` with this exact structure:
>
> ```markdown
> # <Kind> Page Spec — <Page Name>
>
> > Source: <TARGET_URL>
> > Sibling specs: spec-product-fabric-admin-agent.md, spec-industry-retail.md
>
> ## 1. Route & file layout
> | Concern | Choice |
> |---|---|
> | Route | /<kind>s/<slug> |
> | Page component | src/pages/<PascalCase>.tsx |
> | Shared layout | Announcement, Header, Footer, TrustBanner, CTA |
| Header nav integration | Services mega-menu "<Title>" → /<kind>s/<slug> |
| Redirect (legacy) | Add server redirect from legacy URL → /<kind>s/<slug> (e.g. Netlify `_redirects` or Vercel rewrite) |
>
> ## 2. Page composition (top → bottom)
> 1. Announcement
> 2. Header
> 3. Hero — §3.1
> 4. TrustBanner
> 5. Impact / outcome — §3.2
> 6. Features overview — §3.3
> 7. Case studies — §3.4
> 8. Resources & Marketplace — §3.6
> 9. Testimonials — §3.5  *(must always be the last content section, immediately before CTA)*
> 10. CTA
> 11. Footer
>
> ## 3. Section specs
>
> ### 3.1 Hero
> - Layout, background, padding (use Editorial Red v3 tokens)
> - Eyebrow / H1 / subhead (verbatim from source)
> - Primary CTA → mailto:customersuccess@maqsoftware.com?subject=...
> - Secondary CTA
> - Hero image: official SVG URL from maqsoftware.com (img with alt="", aria-hidden, loading="eager")
>
> ### 3.2 Impact (4-card grid)
> | Metric | Label | Source |
>
> ### 3.3 Features (cards)
> | Icon | Title | Description |
>
> ### 3.4 Case studies (cards)
> | Customer | Outcome | Link |
>
> ### 3.5 Testimonials (carousel/grid)
> - **Eyebrow:** `TESTIMONIALS` (required, exact text)
> - **H2 title:** `What our clients have to say` (required, exact text — applies to every page that ships testimonials)
> - **Layout:** 2-column quote cards on `--maq-off-white`, opening quote glyph in `--maq-red` at 18% opacity, body in `--maq-black`, attribution in `--maq-gray-600` (uppercase, 12px, weight 600).
>
> | Quote | Attribution |
>
> ### 3.6 Resources & Marketplace
> | Label | URL | Description |
>
> ## 4. Theming
> Editorial Red v3 tokens only (--maq-red, --maq-red-pale, --maq-off-white,
> --maq-surface-cream, --maq-black, --maq-ink, --maq-gray-500/600/700, --maq-border).
> Section background alternation: white / off-white.
>
> ## 5. SEO
> - title: <verbatim>
> - description: <verbatim>
> - canonical: https://maqsoftware.com<route>
> - og:image: <url>
>
> ## 6. Brand rules (must hold)
> - Always "MAQ Software" (never bare "MAQ")
> - "26 years"
> - All primary CTAs → customersuccess@maqsoftware.com
> ```
>
> ### Step 4 — Self-check before returning
> - Pass A inventory ↔ spec reconciliation done; zero unintentional drops.
> - Every literal string came from `TARGET_URL` (or is explicitly marked `[PLACEHOLDER]`).
> - Hero image URL is the live `.svg` under `maqsoftware.com/images-new/`.
> - Full feature/case-study/testimonial copy preserved (not trimmed).
> - Section count and order match the reference spec.
> - No invented metrics, customers, or quotes.
> - Brand rules hold.
 - Header nav integration: the spec includes the Services mega-menu label and the route to add to `Header.tsx` or server navigation configuration.
 - Redirect guidance: the spec documents any legacy source URL and includes a recommended server redirect/rewrite example (Netlify `_redirects` or Vercel rewrite) to the new route.
>
> Return: path to `OUTPUT_FILE`, a 3-line summary of what was extracted, and the reconciliation report (blocks-in vs blocks-out, with reasons for any drops).

---

## Reference specs (do not modify; use as gold standard)

- [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md)
- [spec-industry-retail.md](spec-industry-retail.md)
- [spec-products.md](spec-products.md)

---

## Example invocation

> "Use `spec-page-generator.md`. Target URL: `https://maqsoftware.com/products/migratefast`. Output file: `spec-product-migratefast.md`."

Agent should fetch the page, classify it as `product`, mirror the Fabric Admin Agent spec structure, populate every section from the live page, and write the new spec file.
