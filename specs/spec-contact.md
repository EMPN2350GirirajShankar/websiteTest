# Contact Page Spec — Contact MAQ Software

> Source: https://maqsoftware.com/contact
> Sibling specs: spec-about-who-we-are.md, spec-partnership-microsoft.md, spec.md
> Generator: spec-page-generator.md

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/contact` |
| Page component | `src/pages/Contact.tsx` |
| Shared layout | Reuse `<Header />`, `<Footer />`, `<CTA />` (CTA optional — see §2) |
| Self-contained sections | Hero, Inquiry Form, Our Locations |
| Header nav integration | About mega-menu "Contact Us" → `/contact` |
| Footer nav update | `spec-footer-links.md` "Contact Us" → `/contact` |
| Redirect (SPA fallback) | `/contact /contact 200` |

**Design goal:** Action-first. The hero immediately invites contact via a prominent mailto link. The page is short, scannable, and ends with a location grid. Section padding `56–64px`, h2 `28–32px`, body `14–15px`.

---

## 2. Page composition (top → bottom)

1. `<Header />` *(shared, active on "About" mega-menu)*
2. **Hero** — §3.1 (title, intro copy, primary mailto CTA)
3. **Inquiry options** — §3.2 *(optional: quick-link cards for sales / support / partner)*
4. **Our Locations** — §3.3 (5 office cards in a responsive grid)
5. `<Footer />` *(shared)*

> **Note:** Do **not** include the shared `<CTA />` block — the page is already a contact CTA. Adding another would be redundant.

---

## 3. Section specs

### 3.1 Hero

| Element | Value |
|---|---|
| Background | `--maq-off-white` with `wave_dots.svg` bottom-left, same as other About pages |
| Eyebrow | `Contact` (red, `12px`, uppercase, `0.08em` tracking) |
| H1 | **Contact MAQ Software** (`40px`, weight `700`, `-0.02em` letter-spacing) |
| Sub copy | *Contact Us today—learn how MAQ Software can deliver the solutions that propel your business forward.* |
| Primary CTA | Fluent `Button` `appearance="primary"` → `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.` Label: **Email Customer Success** |
| Secondary text | Email displayed as plain link below the button: `CustomerSuccess@MAQSoftware.com` |
| Layout | Centered, single-column, max-width `760px`, padding `64px 32px 72px` |

### 3.2 Inquiry options *(optional — include if it doesn't bloat the page)*

3-card grid. Each card: icon (Fluent), title, 1-line description, link or mailto.

| Title | Description | Action |
|---|---|---|
| Talk to sales | Discuss a new engagement or project | `mailto:CustomerSuccess@MAQSoftware.com?subject=Sales%20Inquiry` |
| Customer success | Get help with an existing engagement | `mailto:CustomerSuccess@MAQSoftware.com?subject=Customer%20Success` |
| Partner with us | Explore strategic partnerships | `mailto:CustomerSuccess@MAQSoftware.com?subject=Partnership%20Inquiry` |

Grid: `repeat(3, 1fr)` desktop → `repeat(2, 1fr)` ≤960px → `1fr` ≤560px.

### 3.3 Our Locations

Heading: **Our locations** (`32px`, centered).

5-card responsive grid: `repeat(3, 1fr)` desktop → `repeat(2, 1fr)` ≤960px → `1fr` ≤560px.

Each location card includes: city/region title (h3), full address (multi-line), optional phone, and a "Get directions" link that opens Google Maps in a new tab.

| # | Title | Address | Phone | Maps link |
|---|---|---|---|---|
| 1 | **Redmond, Washington, USA** | 2027 152nd Avenue NE<br>Redmond, WA 98052 | — | https://maps.app.goo.gl/Bu9iNvKvn7m9Wvkb6 |
| 2 | **Plano, Texas, USA** | Lincoln Legacy Two<br>5810 Tennyson Parkway, Suite 100<br>Plano, TX 75024 | — | https://maps.app.goo.gl/bipnas8wN2V8Uqst5 |
| 3 | **Noida, Uttar Pradesh, India** | A3, Sector 145<br>Near Metro Station<br>Noida<br>G. B. Nagar, UP 201 301 | +91 908 256 1327 | https://maps.app.goo.gl/GZT67ZkYkp1ajCux6 |
| 4 | **Hyderabad, Telangana, India** | Level 7, Astro, aVance Business Hub<br>Behind Dell Campus<br>HITEC City 2, Madhapur<br>Hyderabad 500 081 | +91 40 4010 0570 | https://maps.app.goo.gl/oUZoswcXNcEiiBmk8 |
| 5 | **Mumbai, Maharashtra, India** | 201, Meadows Building<br>Sahar Plaza on Andheri Kurla Road<br>Andheri East<br>Mumbai 400 059 | +91 908 256 1327 | https://maps.app.goo.gl/dnkW8CJhJF9fbZWT9 |

Card style: `padding 24px`, `radius 12px`, `bg #fff`, `border 1px solid var(--maq-border)`. Pin icon (`Location24Regular`) in red at top.

"Get directions" rendered as a Fluent `<Link>` with arrow indicator and `target="_blank"` + `rel="noopener noreferrer"`.

---

## 4. Tokens & styling

Reuse the same makeStyles patterns as `AboutWhoWeAre.tsx` and `AboutSustainability.tsx`:
- Colors: `--maq-red`, `--maq-red-pale`, `--maq-off-white`, `--maq-border`, `--maq-ink`, `--maq-gray-700`, `--maq-black`.
- Typography ramp matches existing About pages.
- All grids responsive at breakpoints `960px` and `560px`.

---

## 5. Routing & integration

1. **`src/App.tsx`** — add:
   ```tsx
   import { Contact } from "./pages/Contact";
   ...
   <Route path="/contact" element={<Contact />} />
   ```
   (Do not wrap with `<CTA />`.)
2. **`src/components/Header.tsx`** — the About mega-menu already contains `{ label: "Contact Us", href: "/contact" }`. No change required.
3. **`public/_redirects`** — append `/contact /contact 200` if other routes are listed there.

---

## 6. Validation checklist

- [ ] Hero CTA opens default mail client with prefilled subject + body
- [ ] Email plain-text link is `CustomerSuccess@MAQSoftware.com` (correct casing)
- [ ] All 5 office cards render with full address text matching the table above
- [ ] Phone numbers shown only for Noida, Hyderabad, Mumbai
- [ ] All "Get directions" links open Google Maps in a new tab (`noopener noreferrer`)
- [ ] Grid collapses correctly at 960px and 560px
- [ ] No TypeScript / ESLint errors (`npm run build` clean)
- [ ] Page accessible from About → Contact Us in the header
- [ ] No 404 when navigating to `/contact` from the header link
- [ ] Footer "Contact Us" link (if present) routes to `/contact`
- [ ] No shared `<CTA />` block at the bottom (would duplicate intent)

---

## 7. Out of scope

- Embedded HTML contact form (original site has none — keep parity)
- Map embeds (only "Get directions" links, matching source)
- Live chat widget
- reCAPTCHA / form-backend integration
