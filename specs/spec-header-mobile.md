# Header — Mobile Compatibility Spec

Purpose: provide a focused, implementation-ready spec to make the site header and navigation fully usable, accessible, and performant on phones and small tablets while preserving the desktop header exactly as-is.

Source: use this file alongside `spec-page-mobile.md` and `spec-page-generator.md` when implementing header and nav mobile changes.

---

## How to use
1. Read **Constraints** and **Acceptance criteria** before changing any CSS or markup.
2. Implement header changes only under mobile-scoped rules (`@media (max-width: 767px)` or equivalent mobile stylesheet).
3. Validate on representative mobile devices and emulators. Include screenshots in PRs demonstrating desktop unchanged and mobile fixed.

---

## Summary & Goal
- Goal: ensure header/logo/navigation/hamburger/CTAs behave correctly on phones (<= 767px) — touch-friendly, readable, accessible, and fast.
- Strict rule: desktop & laptop (>=1025px) header must render identically to baseline; any visual or structural regression at >=1025px is a blocker.

---

## Live-site observations (screenshots & crawl)
- The live site at https://maqsoftware.com already shows a mobile hamburger toggle and an off-canvas menu (as in the provided screenshots).
- The mobile overlay uses a dark background with white text and a red close icon in the top-right; the site logo is shown at the top of the overlay and the full nav content (Services, Our Products, etc.) is present and scrollable.
- Current behaviour to preserve: menu overlays the page, contains the same link order as desktop, and includes a visible close control. However, accessibility and performance improvements are likely needed (see tasks below).

Notes: the implementation guidance in this spec assumes the site already has a mobile menu; follow the audit → improve → test flow rather than replacing working behaviour blindly.

---

## Constraints (must follow)
- Do NOT change desktop header markup or CSS selectors that affect >=1025px viewports.
- Add mobile-only CSS in media queries or a dedicated mobile stylesheet. Avoid global overrides that leak to desktop.
- Preserve link order and hrefs used on desktop; do not remove navigation items from HTML — visibility only may change at mobile.

---

## Breakpoints (recommended)
- Mobile (phones): `@media (max-width: 767px)` — primary target for all rules in this spec.
- Small tablet / large phone: `768px–900px` — use selectively for intermediate adjustments.
- Desktop protected: `min-width: 1025px` — no changes allowed.

---

## Header mobile behaviour (requirements)

- Layout
  - On mobile, collapse the full nav into a single hamburger button in the top-right (or existing position used by the current header) while keeping the brand logo at top-left.
  - Header height: compact, target 56px max unless content requires slightly larger for touch targets.
  - Logo: scale down to fit comfortably with left padding; preserve aspect ratio and use a mobile-optimized asset (SVG or small PNG/WebP) with width approx 110–140px depending on available space.

- Hamburger / Menu button
  - Visible only at `max-width: 767px` (desktop hidden via CSS). Keep `aria-controls`, `aria-expanded`, and `aria-label="Open navigation"` (or similar) on the button.
  - Minimum touch target: 44×44px (including padding). Center icon visually but keep the full touch area available.
  - Use an accessible icon (SVG with `role="img"` and `aria-hidden="true"` plus an explicit accessible label on the button).

- Mobile menu overlay / off-canvas
  - Behaviour: open from the right or left (choose consistent direction across pages) as a full-height overlay that covers the page content with a visible close control.
  - Focus management: when opened, apply a focus trap inside the menu; pressing `Esc` or the close button closes menu and returns focus to the hamburger.
  - Scrolling: body scroll locked when menu open to avoid background scrolling (use `overflow:hidden` on `body` or `position:fixed` pattern that preserves scroll position).
  - Menu width: recommended 92–100% of viewport width for small phones, or fixed width of ~320–360px for larger phones if overlaying from the side. A full-screen overlay is acceptable if visual design requires it.
  - Menu content: same link order and structure as desktop (services, products, pages, contact). Do not remove links; hide decorative or non-essential images but keep them in DOM if SEO/semantics require.
  - Menu close: include a visible close button at top-right of overlay with `aria-label="Close navigation"` and keep 44×44px target.

- Sticky header behaviour
  - If header is sticky on desktop, maintain sticky behaviour on mobile only if it does not reduce usable viewport space; prefer a non-sticky compact header to maximize reading area.
  - If sticky is required, ensure the sticky header height does not exceed 56px and does not obscure content when in-page anchors are used; account for offset during anchor jumps.

- Search & CTAs
  - Primary CTA (if present in header) should be relocated into the mobile menu or visible as an icon-only button in the header with accessible label. If visual space is tight, hide the secondary CTA and place primary CTA inside the menu.
  - Search icon: keep as icon button that opens a search input overlay or in-menu search. Ensure search input receives focus when opened and has proper aria-label.

- Partner badges & logos in header
  - Hide partner badges or large partner logos in the header on mobile if they consume header space. Prefer moving them into the footer or a separate TrustBanner component preserved in markup but visually hidden on mobile (`.sr-only` or `display:none` at mobile widths depending on SEO needs).

---

## Markup recommendations (do not change desktop semantics)

Keep desktop markup and add mobile-specific wrappers or attributes where necessary. Example pattern:

```html
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/"> <!-- keep as-is for desktop -->
      <img src="/images/logo-mobile.svg" alt="MAQ Software" width="120" height="32" />
    </a>
    <button class="nav-toggle" aria-controls="site-nav" aria-expanded="false" aria-label="Open navigation">
      <!-- hamburger SVG -->
    </button>
    <nav id="site-nav" class="site-nav"> <!-- keep full nav markup for desktop -->
      <!-- nav links -->
    </nav>
  </div>
</header>
```

Notes:
- Keep `nav` markup present in DOM for SEO and screen readers; hide visually at mobile widths using CSS (`display:none` or transform) until the overlay is opened.
- Do not remove desktop classes used by current CSS; add `.nav-toggle` and minimal mobile helper classes instead.

---

## CSS strategy (must follow)
- Scope all mobile rules with `@media (max-width: 767px)` or a dedicated mobile CSS file.
- Avoid modifying desktop selectors; add mobile overrides using component class selectors (e.g., `.site-header .site-nav {}` inside media query).
- Example mobile overrides:

```css
@media (max-width: 767px) {
  .site-header { height:56px; padding:0 12px; }
  .site-header .brand img { width:120px; height:auto; }
  .nav-toggle { display:inline-flex; width:44px; height:44px; align-items:center; justify-content:center; }
  .site-nav { display:none; }
  .site-nav.open { display:block; position:fixed; inset:0; background:#fff; z-index:1000; }
}
```

---

## Accessibility & touch guidelines (must follow)
- Touch targets: all interactive elements (hamburger, close, links, CTAs) must be at least 44×44px.
- Focus: visible focus ring for keyboard users; ensure focus order is logical when menu opens.
- ARIA: `aria-expanded` on toggle; `role="dialog"` and `aria-modal="true"` (or appropriate landmarks) on overlay; close button labelled.
- Screen reader: keep nav links in DOM; when menu closed, `aria-hidden="true"` on overlay and `aria-expanded="false"` on toggle. When open, set `aria-hidden="false"` and `aria-expanded="true"`.
- Reduced motion: respect `prefers-reduced-motion` for overlay animations.

---

## Performance & assets
- Use an SVG logo where possible for sharpness and tiny payload; provide a mobile-optimized SVG/PNG under `public/images/` with small file size (< 10 KB ideally).
- Defer heavy JS for mobile; for mobile-only menu behaviour, consider a small, focused module and lazy-load it when the toggle is first tapped (`import()` + event handler) to reduce initial bundle cost.
- Avoid loading large partner badge images in the header on mobile — use CSS to hide them and keep them out of the critical render path.

---

## Testing & Acceptance criteria (must be met before merge)
- Desktop (>=1025px): header looks and functions exactly as before (visual diff with baseline required).
- Mobile (<=767px): hamburger visible, menu opens/closes, focus trapping works, `Esc` closes menu, links navigate correctly.
- Touch targets: minimum 44×44px for interactive items.
- Keyboard navigation works for menu open/close and internal links.
- Color contrast for text and icons meets WCAG AA.
- No long-running JS on header load; LCP not regressed by header changes.

---

## QA checklist (manual)
- [ ] Verify header unchanged on desktop widths (1280×800, 1920×1080).
- [ ] Check mobile header at 360×800, 375×812, 412×915: logo, toggle, and CTAs visible and usable.
- [ ] Open menu: confirm overlay dimensions, focus trap, `Esc` and close-button behavior.
- [ ] Confirm body scroll locked while menu open and restored after close.
- [ ] Confirm anchor links offset accounts for header height if header is sticky.
- [ ] Validate aria attributes and keyboard-only navigation.
- [ ] Confirm partner badges moved out of header on mobile or visually hidden but present in DOM if required.

---

## Implementation notes (React)
- File targets:
  - Component: `src/components/Header.tsx` (or `Header/index.tsx` depending on repo layout).
  - Mobile styles: add `Header.mobile.css` or add `@media (max-width:767px)` rules to `Header.module.css`/`styles.css` consistent with the repo pattern.
  - Mobile menu logic: implement an isolated `MobileNav` component and lazy-load it with `React.lazy()` / `Suspense` when the toggle is first engaged.

- Behavioural guidelines:
  - Keep desktop JSX unchanged; add a hamburger button that toggles a mobile overlay without changing desktop markup flow.
  - Use `useEffect` to lock body scroll when menu is open and restore it on close—avoid layout shift when locking.
  - Add unit/integration tests for menu open/close, aria attribute changes, and focus management where test infra exists.

- PR checklist (required in PR description):
  - `mobile: Header — list of files changed` and short explanation.
  - Desktop screenshots (>=1025px) showing no regressions.
  - Mobile screenshots (<=767px) showing new menu and interactions.

---

## Example small implementation steps (suggested)
1. Add `.nav-toggle` button in `Header.tsx` with `aria-*` attributes; hide via CSS for desktop.
2. Create `MobileNav` component containing menu overlay and close button; ensure it preserves the full nav markup or re-uses the existing `<nav>` contents.
3. Add mobile CSS inside `@media (max-width:767px)` for sizing, spacing, and overlay visuals.
4. Lazy-load mobile menu JS to reduce initial bundle cost.
5. Add QA screenshots to PR and include `mobile:` note in PR description.

---

## Deliverable
- Add `spec-header-mobile.md` to the repo and reference it in any header-related PRs. Follow the QA checklist and acceptance criteria above.

---

End of spec.
