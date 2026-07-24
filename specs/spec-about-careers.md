# About Page Spec — Careers

> Source: https://maqsoftware.com/careers
> Sibling specs: spec-about-news.md, spec-about-who-we-are.md, spec-contact.md, spec.md
> Generator: spec-page-generator.md

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/careers` |
| Page component | `src/pages/AboutCareers.tsx` |
| Data source | `src/data/careers.ts` — live Blogger feed via JSONP (mirrors `src/data/news.ts`) |
| Shared layout | Reuse `<Header />`, `<Footer />`. **No `<CTA />`** — page has its own JobScore CTA. |
| Self-contained sections | Hero · Why MAQ · Open Positions (US / India tabs) |
| Header nav integration | About mega-menu "Careers" → `/careers` |
| Redirect (SPA fallback) | `/careers /careers 200` |

**Design goal:** Recruitment landing page. Hero + value props, followed by an accordion-style list of live job openings split by region, plus a prominent CTA to apply on JobScore.

---

## 2. Live data feed — matches the original site

The original `maqsoftware.com/careers` page (`/js/careers.js`) loads openings from two **Blogger label feeds** via **JSONP**:

| Region | Feed |
|---|---|
| US | `https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - US` |
| India | `https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - India` |

We mirror this **exactly** (same blog ID, same labels, same JSONP technique used by `src/data/news.ts`).

**Why JSONP and not `fetch()`:** Blogger does not send CORS headers, so a direct `fetch` from the browser is blocked. JSONP (inject a `<script src="…&callback=fn">`) is the same workaround the original site uses.

**Flexibility:** When the talent team publishes a new opening (or removes/edits one) on the Blogger CMS, it appears on `/careers` on the next page load — no code change or deploy required.

**Apply links:** Each Blogger post body contains a JobScore short link (`https://jsco.re/XXXXX`). We extract it with a regex and surface it as a primary "Apply on JobScore" button.

---

## 3. Data model

`src/data/careers.ts`:

```ts
export type CareersRegion = "us" | "india";

export interface JobOpening {
  id: string;
  title: string;
  contentHtml: string;   // raw HTML body from Blogger content
  excerpt: string;       // plain-text preview
  applyUrl: string | null; // extracted https://jsco.re/XXXXX
  href: string;          // public Blogger post URL
  date: string;          // ISO publish date
}

export interface CareerReason {
  title: string;
  body: string;
}

export const CAREERS_BLOG_ID = "4733689656779828601";
export const JOBSCORE_URL = "https://careers.jobscore.com/careers/maqsoftware";

export async function fetchOpenings(region: CareersRegion): Promise<JobOpening[]>;
export const careerReasons: CareerReason[];
```

**Fetcher behaviour** (`fetchOpenings`):
1. URL-encode the region label (e.g. `Openings%20-%20US`).
2. Append `?alt=json&max-results=999&callback=<generatedName>`.
3. Inject `<script>`; the Blogger response calls the named callback with the JSON feed.
4. Map each `feed.entry[*]` to a `JobOpening` via `mapEntry`.
5. 15s timeout; cleanup removes the script tag + global callback in both resolve and error paths.

---

## 4. Page composition (top → bottom)

1. `<Header />` (active mega-menu: **About**)
2. **Hero** — §5.1
3. **Why MAQ** — §5.2 (3-up card grid, static)
4. **Open Positions** — §5.3 (JobScore banner + US/India tabs + accordion list)
5. `<Footer />`

---

## 5. Section specs

### 5.1 Hero
| Element | Value |
|---|---|
| Background | `--maq-off-white` + `wave_dots.svg` bottom-left |
| Eyebrow | `ABOUT` (red, `12px`, uppercase) |
| H1 | **Careers** (`40px`, weight `700`) |
| Sub | "Build a career working on AI, data, and cloud solutions for Fortune 500 customers. Explore open roles across our offices in the United States and India." |
| Padding | `56px 32px 40px` |

### 5.2 Why MAQ
- White section, `padding: 48px 32px`.
- Centered heading: **Why build your career at MAQ Software** (`28px`).
- Grid `repeat(3, 1fr)` → `1fr` ≤960px.
- Each card: title (`16px / 700`) + body (`14px / 1.6`), border `1px solid var(--maq-border)`, radius `12px`, padding `24px`.
- Source: `careerReasons` static array (3 items). Easy to edit without touching the page.

### 5.3 Open Positions
Off-white section, `padding: 40px 32px 64px`, max-width `1240px`.

**5.3.1 JobScore banner**
- White card with border, radius `12px`, padding `20px 24px`.
- Left: "Apply to all open positions on JobScore."
- Right: primary `<Button>` "Go to JobScore" → opens `JOBSCORE_URL` in a new tab.

**5.3.2 Region tabs**
- Two tabs: **United States** | **India**.
- Active tab: red text + 2px red bottom-border.
- On first activation of a region, call `fetchOpenings(region)` and cache the result in component state (`jobsByRegion`).
- Switching back to a previously loaded region does **not** re-fetch.

**5.3.3 Job accordion list**
- One row per `JobOpening`, separated by `10px` gap.
- Header (button): chevron icon + job title (`15px / 600`). Toggles open state. Red-pale hover.
- Expanded body:
  - Render `contentHtml` via `dangerouslySetInnerHTML` (Blogger content is the same trusted source the original site renders). Styled with `.jobBody` overrides for `<a>` (red), `<ul>/<ol>` (padding), `<p>` (margin).
  - Action row: **Apply on JobScore** (primary, when `applyUrl` present) + **View full posting** (subtle, opens `href`).

**5.3.4 State messages**
| State | Render |
|---|---|
| Loading | `<Spinner label="Loading openings…" />` |
| Error | Inline message + "Retry" button that re-invokes `fetchOpenings(region)` |
| Empty | "No job openings available at this location. Please come back and check again soon." (mirrors the original site's copy) |

---

## 6. Routing & integration

1. **`src/App.tsx`** — register `/careers`:
   ```tsx
   import { AboutCareers } from "./pages/AboutCareers";
   ...
   <Route path="/careers" element={<AboutCareers />} />
   ```
   (No `<CTA />` wrapper — JobScore banner is the page's CTA.)
2. **`src/components/Header.tsx`** — extend `about` array:
   ```ts
   { label: "Careers", href: "/careers" },
   ```
   Order: Who we are · News · **Careers** · Sustainability · Contact Us (matches original).
3. **`public/_redirects`** — append `/careers /careers 200` if other routes are listed there.

---

## 7. Validation checklist

- [ ] `/careers` renders without console errors
- [ ] Hero copy matches §5.1
- [ ] All three `careerReasons` cards render
- [ ] US tab loads openings on first view; spinner shown during fetch
- [ ] Switching to India tab fetches the India feed; switching back to US does **not** re-fetch
- [ ] Each accordion expands/collapses on click; chevron icon flips
- [ ] Each opening renders Blogger HTML body
- [ ] "Apply on JobScore" button appears only when `applyUrl` is detected; opens `https://jsco.re/…` in a new tab
- [ ] "View full posting" opens the Blogger URL in a new tab
- [ ] JobScore banner CTA opens `https://careers.jobscore.com/careers/maqsoftware`
- [ ] Empty-state copy matches §5.3.4 when a feed returns zero entries
- [ ] Network failure shows the error message + a working Retry button
- [ ] All external links carry `target="_blank"` + `rel="noopener noreferrer"`
- [ ] Tab bar and grid reflow correctly at 960px
- [ ] Header **About → Careers** navigates to `/careers`
- [ ] No TypeScript errors (`npx tsc --noEmit` clean)

---

## 8. Out of scope (intentional)

- Server-side rendering / SEO meta for individual openings (JobScore + Blogger handle SEO upstream)
- Search or filter UI for openings
- Application form embedded on-site (JobScore owns the apply flow)
- Per-opening detail routes (`/careers/:id`) — openings link out to Blogger/JobScore
- Image gallery / office photos (original site has a couple of book images; not carried over)
- Google Maps embed (commented out in the original `careers.html`)
