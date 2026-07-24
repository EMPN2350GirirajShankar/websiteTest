# Mobile View Page Spec

Purpose: provide a concise, prescriptive spec to make the MAQ Software site fully mobile-compatible while guaranteeing zero changes to existing laptop/desktop layouts.

Source: use this spec as the single-reference for implementing mobile-only behaviours across pages and components.

---

## How to use
1. Read the **Constraints** and **Acceptance Criteria** before making CSS or markup changes.
2. Implement mobile changes only as described in **Scoping & CSS strategy**.
3. Validate visually on representative mobile devices and emulators. Do not change desktop styles.

---

## Summary & Goal
- Goal: convert the full site to be usable and visually polished on phones and small tablets while preserving pixel-identical desktop and laptop renderings.
- Strict rule: desktop/laptop views (>= 1025px) must remain untouched. Any visual differences at those widths are blockers.

---

## Constraints (must follow)
- Do NOT modify global desktop layout selectors or base desktop CSS rules.
- All mobile styling must be additive or scoped so it only applies at mobile breakpoints.
- Desktop component structure and markup must remain compatible with current desktop CSS (i.e., do not remove classes or restructure DOM used by desktop styles unless you preserve desktop-only CSS selectors).

---

## Breakpoints (recommended)
- Mobile (phones): max-width: 767px
- Small tablet / large phone: 768px–900px (use when needed for intermediate layouts)
- Tablet (portrait/landscape): 768px–1024px
- Desktop / Laptop (protected): 1025px and up — must remain unchanged

Notes: these are guidance ranges. Implementation MUST ensure any override that affects desktop is scoped to <= 767px (or a mobile-only stylesheet). When in doubt, prefer `@media (max-width: 767px)` for mobile overrides.

---

## Scoping & CSS strategy (must follow)
- Put all mobile-only rules inside one of these patterns (choose one consistent approach across the repo):
  - Scoped media queries: `@media (max-width: 767px) { /* mobile-only overrides */ }`
  - A dedicated mobile stylesheet loaded for all pages but containing only `max-width: 767px` rules (e.g., `mobile.css`).
- Never edit or remove desktop selectors that start with layout-level classes (example: `.page-grid`, `.container--wide`) — instead add mobile overrides using more-specific selectors inside the media query.
- Prefer component-scoped overrides: target a component class (e.g., `.Hero`, `.Header`) and add mobile rules there rather than changing global tag selectors.
- Use the smallest-possible specificity increase to avoid accidentally overriding desktop styles outside the media query.

### Head meta & performance hints
- Ensure every page includes the viewport meta tag in the HTML head:
  - `<meta name="viewport" content="width=device-width, initial-scale=1">`
  - This is required for responsive scaling and mobile layout correctness.
- Fonts: prefer `font-display: swap` and consider loading a reduced subset or system font stack for mobile to avoid blocking LCP. Only load non-critical webfont weights on larger viewports or lazily after first paint.

---

## CSS approach & patterns
- Units: prefer `rem`, `%`, and `em` for sizing; use `px` only where absolute control is required for icons/touch targets.
- Layout: use Flexbox for linear reflows and CSS Grid for complex card layouts; wrap Grid → single-column at mobile.
- Spacing: reduce horizontal paddings and margins at mobile but keep vertical rhythm consistent (use scale tokens if available).
- Typography: set base font-size to 16px on mobile (or `html { font-size: 100%; }`) and scale headings down with `clamp()` or rem-based sizes.
- Images: use responsive images with `srcset`/`<picture>` and set width:100% + height:auto; reserve height with `aspect-ratio` or explicit `height`/`width` attributes to avoid layout shift.

---

## Component-specific rules

Header / Navigation
- Keep desktop header and nav markup unchanged.
- Mobile: collapse navigation into the existing hamburger / off-canvas menu. If an off-canvas menu doesn't exist, implement a new mobile-only menu component that slides over the page.
- Mobile menu behaviour:
  - Full-screen or near-full-screen height overlay.
  - Focus trap while open; escape closes it.
  - Maintain the same link order and targets as desktop.
  - Preserve partner badges or CTAs that the business requires; hide only decorative logos.

Hero
- Retain hero copy verbatim.
- Reduce H1 line-length by switching to stacked lines and smaller font-size on mobile.
- Replace large hero illustrations with mobile-optimized variants (smaller SVG or raster from `srcset`) and load them with `loading="lazy"` if below-the-fold; above-the-fold hero image can use `loading="eager"` but use smaller dimensions.

Grids & Cards
- Convert multi-column grids to a single column stack on mobile (cards full-width, centered). Maintain ordering unless reordering is explicitly needed for UX.
- Maintain paddings inside cards; reduce inter-card gaps to save vertical space.

Images & Media
- Serve appropriately sized images with `srcset` and `sizes`.
- Use `aspect-ratio` where possible to reserve layout space and reduce CLS.
- Lazy-load non-critical images; critical hero images may be eager but use smaller mobile variants.

CTAs & Buttons
- Use full-width primary CTAs on mobile where appropriate; keep label text identical.
- Ensure contrast and tappable area (minimum 44×44px). Buttons should not be smaller than 44px in either dimension.

Forms & Inputs
- Stack labels above fields; use full-width fields and larger tap targets.
- Use inputmode and mobile-friendly keyboards for contact forms (e.g., `inputmode="tel"` for phone).

Footer
- Stack footer columns; hide less-important legal links behind an expandable accordion only if required for space, but keep SEO-critical links visible in HTML.

Animations & Interactions
- Reduce or remove non-essential animations on mobile. If retained, ensure `prefers-reduced-motion` is respected.

---

## Accessibility & touch guidelines
- Minimum touch target: 44×44px for interactive items.
- Maintain accessible semantics (do not convert links to buttons without preserving role/aria where required).
- Ensure readable font size: base body text >= 16px; headings scaled appropriately.
- Preserve keyboard navigation and focus states within mobile menus and modals.
- Keep aria-labels and roles present for mobile-only UI (menu buttons, dialog overlays).

---

## Images, asset strategy & performance
- Use `srcset`/`sizes` or `<picture>` to serve smaller images for mobile DPRs.
- WebP or AVIF preferred where browser support exists; provide fallbacks.
- Defer non-essential JS and lazy-load heavy modules only on mobile when necessary.
- Keep CSS for mobile minimal — group mobile overrides into a single small file to keep critical CSS size low.

Example responsive `picture` usage (serve smaller mobile image):

```html
<picture>
  <source media="(max-width: 767px)" srcset="/images/hero-mobile.webp" type="image/webp">
  <source media="(max-width: 767px)" srcset="/images/hero-mobile.jpg">
  <source srcset="/images/hero-desktop.webp" type="image/webp">
  <img src="/images/hero-desktop.jpg" alt="Hero illustration" loading="eager" width="1200" height="600" style="width:100%;height:auto;" />
</picture>
```

Image budget suggestion (team guidance):
- Mobile hero image: aim <= 200 KB (WebP/AVIF). Content images: <= 100 KB where possible.

Third-party widgets
- Review and test third-party widgets (chat, analytics, embedded videos, iframes) for mobile behaviour. Lazy-load or defer heavy widgets on mobile; hide or replace non-essential widgets with lightweight alternatives where performance is impacted.

---

## Acceptance criteria (must be met before merge)
- Desktop & laptop (>=1025px) pages render visually identical to current baseline (no layout regressions).
- Mobile pages (<=767px) display the same content in an optimized format, with readable typography, usable navigation, and accessible controls.
- No desktop CSS selectors or files were altered in a way that affects >=1025px widths.
- Touch targets meet the 44×44px guideline and color contrast passes WCAG AA for text.

---

## QA checklist (manual)
- [ ] Review desktop pages at 1280×800 and 1920×1080 — confirm no visual changes.
 - [ ] Review mobile pages at common sizes: 320×568, 375×568, 425×568, 768×568, 360×800, 375×812, 414×896 — confirm layout, nav, forms, and CTAs are usable.
- [ ] Confirm images load appropriate sizes and CLS is low for hero/content images.
- [ ] Test menu open/close focus trap and keyboard accessibility.
- [ ] Check tap targets, input types, and keyboard types for forms.
- [ ] Verify fonts and headings remain legible and do not overflow containers.
- [ ] Confirm decorative items hidden on mobile are still present in HTML if needed for SEO.

---

## Implementation notes (advice for engineers)
- When adding mobile overrides, keep commits small and page-scoped so regressions are easy to find and revert.
- Prefix mobile-only utility classes if you need to add them (e.g., `.mobile-hide`, `.mobile-stack`) to make intent obvious.
- When changing a component, add a short comment in the component file referencing `spec-page-mobile.md` and the reason for the mobile-only change.

---

## Opportunistic rollout (React-specific)

Context: the site is a React codebase. You do not need to convert the entire repo in one pass — adopt an opportunistic, component-by-component approach.

Guidelines:
- Work at the component/file level: only modify the React components and styles for files you touch in the PR. This keeps scope small and makes it safe to iterate.
- Keep markup stable: avoid restructuring markup that desktop CSS depends on. Instead, add mobile-scoped styles or small wrapper elements that do not affect desktop selectors.
- Component-scoped styling patterns (pick one consistent approach across the repo):
  - CSS Modules: add or extend `Component.module.css` with `@media (max-width:767px)` rules.
  - Styled Components / Emotion: add mobile styles inside the existing styled wrapper using `@media` queries.
  - Utility-first (Tailwind): add mobile variants (e.g., `sm:`, `md:`) or create mobile-only utility classes.
- Mobile-only files: when adding significant mobile logic, consider adding `Component.mobile.tsx` or `Component.mobile.css` and import conditionally, but prefer media-query scoping to avoid SSR mismatch issues.
- Behaviour & state: keep React state and props unchanged where possible. For mobile-only interactions (e.g., off-canvas menu), add isolated components and lazy-load them with `React.lazy()`/`Suspense`.
- Accessibility: ensure mobile components preserve semantics and aria attributes.

PR & review rules:
- Every PR that introduces mobile changes must include a short `mobile:` section in its description listing the components/files changed and the mobile approach used.
- Include screenshots of desktop (>=1025px) and one or two mobile widths in the PR description to show desktop is unchanged and mobile looks correct.
- Keep commits single-purpose (e.g., `Header: add mobile menu overlay`, `Hero: mobile typography adjustments`).

Rollout strategy:
- Start with low-risk, high-value components (Header/Hero/Nav/Primary CTAs).
- Tackle components used across many pages early (Header, Footer) to maximize coverage.
- Use feature-flag branches only if mobile changes need to be toggled; prefer direct, scoped CSS when possible.


---

## Deliverable
- Add a `mobile` section to each page/component PR describing what mobile changes were made and where (file paths). Link to this `spec-page-mobile.md` from PR description.

---

End of spec.
