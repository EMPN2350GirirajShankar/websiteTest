# Footer Links Specification

> Source of truth for wiring all footer navigation links to their respective internal routes.
> When this file changes, reconcile `src/components/Footer.tsx` to match.

---

## 1. Overview

Currently, every `<a>` in `Footer.tsx` uses `href="#"` (dead placeholder).  
This spec replaces every placeholder with the correct React Router `<Link>` pointing to the matching internal route, and marks external-only items as out-of-scope until their pages exist.

**Implementation notes:**
- Replace raw `<a href="#">` elements with React Router `<Link to="…">` from `react-router-dom`.
- The `cols` data array must carry a `path` field per item (or `null` for not-yet-routed external links).
- Items with `null` path render as plain `<span>` (non-interactive) until a route is available.
- Items that link to external URLs use `<a href="…" target="_blank" rel="noopener noreferrer">`.

---

## 2. Link mapping

### 2.1 Services column

| Label | Route |
|---|---|
| AI solutions & agentic automation | `/services/agentic-ai` |
| Data engineering & analytics | `/services/data-and-analytics` |
| Reporting & business intelligence | `/services/reporting-bi` |
| Cloud infrastructure & modernization | `/services/cloud` |
| Security & compliance | `/services/security-compliance` |

> **Not currently in the footer but available as routes:** `/services/business-apps`, `/services/workplace-transformation` — omit from footer for now; no change needed.

---

### 2.2 Products column

| Label | Route |
|---|---|
| AI-DataLens | `/products/ai-datalens` |
| Fabric Admin Agent | `/products/fabric-admin-agent` |
| MigrateFAST | `/products/migratefast` |
| EmbedFAST | `/products/embedfast` |
| CertyFAST | `/products/certyfast` |
| LoadFAST | `/products/loadfast` |

---

### 2.3 Resources column

| Label | Route / URL | Notes |
|---|---|---|
| Case studies | `null` (no internal route yet) | Render as non-interactive `<span>` |
| Power BI custom visuals | `null` | Render as non-interactive `<span>` |
| Best practice guides | `null` | Render as non-interactive `<span>` |
| Webinars | `null` | Render as non-interactive `<span>` |

> These items have no internal routes in the current router. They must **not** point to `#` (which creates confusing scroll-to-top behaviour). Render as plain text until routes are added.

---

### 2.4 Company column

| Label | Route / URL | Notes |
|---|---|---|
| Who we are | `null` | No internal route yet — render as non-interactive `<span>` |
| Careers | `https://maqsoftware.com/careers` | External link |
| News | `null` | No internal route yet — render as non-interactive `<span>` |
| Sustainability | `null` | No internal route yet — render as non-interactive `<span>` |
| Contact Us | `mailto:customersuccess@maqsoftware.com` | `mailto:` link |

---

### 2.5 Support column

| Label | Route / URL | Notes |
|---|---|---|
| Terms of Service | `null` | No internal route yet — render as non-interactive `<span>` |
| Privacy Statement | `null` | No internal route yet — render as non-interactive `<span>` |

> These items have no internal routes in the current router. Render as plain text until routes are added.

---

## 3. Implementation details

### 3.1 Data structure change

Update the `cols` array so each item is an object instead of a plain string:

```ts
type FooterItem = {
  label: string;
  to?: string;      // internal React Router path
  href?: string;    // external URL or mailto:
};

type FooterCol = {
  title: string;
  items: FooterItem[];
};
```

### 3.2 Render logic per item

All internal `<Link>` elements must scroll the page to the top on click via `onClick={() => window.scrollTo(0, 0)}`.

```tsx
// Internal route
if (item.to) return (
  <Link to={item.to} className={s.link} onClick={() => window.scrollTo(0, 0)}>
    {item.label}
  </Link>
);

// External / mailto
if (item.href) return <a href={item.href} className={s.link}
  {...(item.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
  {item.label}
</a>;

// No route yet — non-interactive
return <span className={s.linkDisabled}>{item.label}</span>;
```

### 3.3 New style: `linkDisabled`

Add to `makeStyles`:

```ts
linkDisabled: {
  fontSize: "13.5px",
  color: "rgba(255,255,255,0.35)",
  cursor: "default",
},
```

---

### 3.4 Bottom bar

The bottom bar (`s.bottom`) has **three zones** laid out with `justify-content: space-between`:

**Left — social icons:** X, GitHub, LinkedIn (see §3.4 social icons table).

**Centre — copyright:**
```tsx
<span className={s.bottomText}>
  © {new Date().getFullYear()} MAQ Software. All rights reserved.
</span>
```
The year is derived from `new Date().getFullYear()` — no hardcoded year.

**Right — trademark notice:**
```tsx
<span className={s.bottomText}>
  Microsoft, Azure, Fabric, and Power BI are trademarks of Microsoft Corporation.
</span>
```

Use `@fluentui/react-icons` where available; fall back to inline SVG if a matching icon is absent.

| Platform | Icon | URL |
|---|---|---|
| X (Twitter) | `XLogoIcon` (Fluent) or inline SVG | `https://x.com/MAQSoftware` |
| GitHub | `GithubIcon` (Fluent) or inline SVG | `https://github.com/maqsoftware` |
| LinkedIn | `LinkedinIcon` (Fluent) or inline SVG | `https://www.linkedin.com/company/maq-software/` |

All three open in a new tab: `target="_blank" rel="noopener noreferrer"`.

Icon button styles (add to `makeStyles`):

```ts
socialRow: {
  display: "flex",
  gap: "12px",
  alignItems: "center",
},
socialLink: {
  color: "rgba(255,255,255,0.5)",
  display: "flex",
  alignItems: "center",
  transition: "color 0.15s",
  ":hover": { color: "#fff" },
},
```

Icon size: `20px` (`width` + `height` on the icon element).

**Updated bottom bar JSX (two-row layout):**

```tsx
<div className={s.bottom}>
  {/* Row 1: social icons centred */}
  <div className={s.bottomRow1}>
    <div className={s.socialRow}>
      <a href="https://x.com/MAQSoftware" target="_blank" rel="noopener noreferrer" className={s.socialLink} aria-label="X (Twitter)">
        {/* inline SVG */}
      </a>
      <a href="https://github.com/maqsoftware" target="_blank" rel="noopener noreferrer" className={s.socialLink} aria-label="GitHub">
        {/* inline SVG */}
      </a>
      <a href="https://www.linkedin.com/company/maq-software/" target="_blank" rel="noopener noreferrer" className={s.socialLink} aria-label="LinkedIn">
        {/* inline SVG */}
      </a>
    </div>
  </div>
  {/* Row 2: copyright left, trademark right */}
  <div className={s.bottomRow2}>
    <span className={s.bottomText}>
      © {new Date().getFullYear()} MAQ Software. All rights reserved.
    </span>
    <span className={s.bottomText}>
      Microsoft, Azure, Fabric, and Power BI are trademarks of Microsoft Corporation.
    </span>
  </div>
</div>
```

Additional styles required:

```ts
bottomRow1: { display: "flex", justifyContent: "flex-start" },
bottomRow2: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" },
```

---

## 4. Full updated `cols` data

```ts
const cols: FooterCol[] = [
  {
    title: "Services",
    items: [
      { label: "AI solutions & agentic automation", to: "/services/agentic-ai" },
      { label: "Data engineering & analytics",      to: "/services/data-and-analytics" },
      { label: "Reporting & business intelligence",  to: "/services/reporting-bi" },
      { label: "Cloud infrastructure & modernization", to: "/services/cloud" },
      { label: "Security & compliance",             to: "/services/security-compliance" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "AI-DataLens",        to: "/products/ai-datalens" },
      { label: "Fabric Admin Agent", to: "/products/fabric-admin-agent" },
      { label: "MigrateFAST",        to: "/products/migratefast" },
      { label: "EmbedFAST",          to: "/products/embedfast" },
      { label: "CertyFAST",          to: "/products/certyfast" },
      { label: "LoadFAST",           to: "/products/loadfast" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Case studies" },
      { label: "Power BI custom visuals" },
      { label: "Best practice guides" },
      { label: "Webinars" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Who we are" },
      { label: "Careers",    href: "https://maqsoftware.com/careers" },
      { label: "News" },
      { label: "Sustainability" },
      { label: "Contact Us", href: "mailto:customersuccess@maqsoftware.com" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Terms of Service" },
      { label: "Privacy Statement" },
    ],
  },
];
```

---

## 5. Acceptance criteria

- [ ] All **Services** footer links navigate to the correct `/services/*` route without a full page reload.
- [ ] All **Products** footer links navigate to the correct `/products/*` route without a full page reload.
- [ ] Clicking any internal footer link scrolls the page to the top.
- [ ] **Resources** items with no route render as dimmed non-clickable text (not `href="#"`).
- [ ] **Company → Careers** opens `https://maqsoftware.com/careers` in a new tab.
- [ ] **Company → Contact Us** opens the default mail client via `mailto:`.
- [ ] Remaining **Company** items with no route render as dimmed non-clickable text.
- [ ] **Support → Terms of Service** and **Support → Privacy Statement** render as dimmed non-clickable text (no routes yet).
- [ ] No `href="#"` attributes remain in `Footer.tsx`.
- [ ] Active-link styling (if any) does not break on footer links.
- [ ] Bottom bar left zone shows `© <current year> MAQ Software. All rights reserved.` — year is dynamic via `new Date().getFullYear()`, no hardcoded year in source.
- [ ] Bottom bar right zone shows X, GitHub, and LinkedIn icons, each opening the correct URL in a new tab.
- [ ] All three social links carry `aria-label` for accessibility.
- [ ] Footer appearance is otherwise unchanged (layout, colours, typography).
