# About Page Spec — News

> Source: https://maqsoftware.com/news
> Sibling specs: spec-about-who-we-are.md, spec-contact.md, spec.md
> Generator: spec-page-generator.md

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/news` |
| Page component | `src/pages/AboutNews.tsx` |
| Data source | `src/data/news.ts` — **live Blogger feed via JSONP** (articles) + static `pressCoverage` array |
| Shared layout | Reuse `<Header />`, `<Footer />`. **No `<CTA />`** — page is purely informational. |
| Self-contained sections | Hero · Articles list (paginated) · Press Coverage |
| Header nav integration | About mega-menu "News" → `/news` |
| Footer nav update | `spec-footer-links.md` "News" → `/news` |
| Redirect (SPA fallback) | `/news /news 200` |

**Design goal:** Scannable, news-feed style. Each article = horizontal card (image 320×180 on the left, meta + title + excerpt + CTA on the right). Stacks vertically on narrow screens.

---

## 2. Live data feed — matches the original site

The original `maqsoftware.com/news` page pulls posts from `news.maqsoftware.com` (a Blogger blog) at runtime. We mirror this **exactly**, so newly published posts appear automatically with no code change or deploy.

| Concern | Implementation |
|---|---|
| Feed URL | `https://news.maqsoftware.com/feeds/posts/default?alt=json` (constant `NEWS_FEED_URL`) |
| Transport | **JSONP** (inject `<script src="…&callback=fn">`). Blogger does not send CORS headers, so a direct `fetch` is blocked — JSONP is the same workaround the original site uses. |
| Pagination | Blogger's `start-index` + `max-results` query params. `PAGE_SIZE = 10`. Total page count comes from `feed.openSearch$totalResults`. |
| Image handling | First entry image is auto-downscaled by rewriting the Blogger size path/query to `/w640/` for performance. |
| Excerpt | `content` HTML is parsed via `DOMParser`, plain text extracted, trimmed to 280 chars at a word boundary. |
| Tag | First Blogger `category` term (fallback: `"News"`). |
| Timeout / cleanup | 15s timeout; global callback + injected `<script>` are removed in both resolve and error paths. |

Press Coverage at the bottom of the page remains **static** in `pressCoverage` (it doesn't change frequently and mirrors the static block on the source page).

---

## 3. Data model

`src/data/news.ts`:

```ts
export interface NewsArticle {
  id: string;
  title: string;
  href: string;       // public Blogger post URL
  date: string;       // ISO date (from entry.published)
  image: string | null;
  excerpt: string;
  tag: string;        // first category, or "News"
}

export interface PressItem {
  outlet: string;
  logo: string;
  headline: string;
  href: string;
}

export const NEWS_FEED_URL: string;
export const pressCoverage: PressItem[];

export function fetchNews(
  startIndex?: number,
  maxResults?: number,
): Promise<{ articles: NewsArticle[]; total: number }>;

export function formatPublishedDate(iso: string): string;
```

---

## 4. Page composition (top → bottom)

1. `<Header />` (active mega-menu: **About**)
2. **Hero** — §5.1
3. **Articles list** — §5.2 (vertical stack of cards, paginated)
4. **Press Coverage** — §5.3 (3-up grid, static)
5. `<Footer />`

---

## 5. Section specs

### 5.1 Hero
| Element | Value |
|---|---|
| Background | `--maq-off-white` + `wave_dots.svg` bottom-left |
| Eyebrow | `ABOUT` (red, `12px`, uppercase) |
| H1 | **News** (`40px`, weight `700`) |
| Sub | "Updates on events, partnerships, product launches, and what's happening across MAQ Software." |
| Padding | `56px 32px 40px` |

### 5.2 Articles list
- Vertical stack with `gap: 32px`, max-width `1240px`.
- Each card: `grid-template-columns: 320px 1fr` → `1fr` below 760px.
- Image: `width 100%`, `height 180px`, `object-fit: cover`, `border-radius: 8px`. Missing image → "No image" placeholder tile.
- Meta row: pill `tag` (red on red-pale) + formatted date (`formatPublishedDate`).
- Title: `20px / 700`.
- Excerpt: `14px / 1.6`.
- CTA: `<Button appearance="subtle">` "Read full article" → opens `href` in new tab (`noopener noreferrer`).
- Card border: `1px solid var(--maq-border)`, radius `12px`, padding `24px`.

**State messages**
| State | Render |
|---|---|
| Loading | `<Spinner label="Loading news…" />` |
| Error | Inline message + "Retry" button that re-invokes `fetchNews` for the current page |
| Empty | (Shouldn't happen unless the upstream blog is empty.) |

**Pagination** — `PAGE_SIZE = 10`. Numbered page buttons with ellipses (`1 … 4 5 6 … 13`), plus Prev / Next. Active page styled red. Clicking a page calls `fetchNews((p-1)*PAGE_SIZE + 1, PAGE_SIZE)` and scrolls back to the top of the articles section.

### 5.3 Press Coverage
- Heading: **Press Coverage** (`28px`, centered).
- Grid: `repeat(3, 1fr)` → `repeat(2, 1fr)` ≤960px → `1fr` ≤560px.
- Each card: logo (`32px` tall, contain) + headline + "Read more →" external link.
- Card style identical to article card (white bg, border, radius 12).

---

## 6. Routing & integration

1. **`src/App.tsx`** — register `/news`:
   ```tsx
   import { AboutNews } from "./pages/AboutNews";
   ...
   <Route path="/news" element={<AboutNews />} />
   ```
   (No `<CTA />` wrapper.)
2. **`src/components/Header.tsx`** — extend `about` array:
   ```ts
   { label: "News", href: "/news" },
   ```
   Suggested order: Who we are · News · Sustainability · Contact Us.
3. **`public/_redirects`** — append `/news /news 200` if other routes are listed there.

---

## 7. Validation checklist

- [ ] `/news` renders without console errors
- [ ] Hero copy matches §5.1
- [ ] First page fetches 10 articles from the Blogger feed; spinner shown while loading
- [ ] Article images render and are downscaled to `w640` for Blogger-hosted URLs
- [ ] Tag pill renders for each article (defaults to "News" when no category)
- [ ] "Read full article" opens the external Blogger URL in a new tab
- [ ] Pagination shows correct page count from `feed.openSearch$totalResults`; ellipses appear when >7 pages
- [ ] Clicking a page number fetches that slice and scrolls to the top of the articles section
- [ ] Network failure shows the error message + a working Retry button
- [ ] Press Coverage grid renders all `pressCoverage` items
- [ ] All press logos load; broken images fall back to alt text
- [ ] All external links carry `target="_blank"` + `rel="noopener noreferrer"`
- [ ] Card layout reflows correctly at 960px and 760px / 560px breakpoints
- [ ] Header **About → News** navigates to `/news`
- [ ] No TypeScript errors (`npx tsc --noEmit` clean)

---

## 8. Out of scope (intentional)

- Tag-based filtering or search
- Individual `/news/:slug` detail pages (articles link out to the source Blogger post)
- RSS feed generation
- Server-side rendering of news entries (the Blogger feed handles SEO upstream)
- Caching or background refresh — each page navigation re-fetches the requested slice
