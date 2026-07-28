# MAQ Software Website

The MAQ Software website is a single-page application built with React, TypeScript, Vite, React Router, and Fluent UI.

## Run locally

### Prerequisites

- Node.js 20.19 or newer
- npm (included with Node.js)

### Setup

```bash
git clone https://github.com/maqsoftware/MAQSoftwareWebsite-New.git
cd MAQSoftwareWebsite-New
npm ci
npm run dev
```

Vite opens the site at [http://localhost:5173](http://localhost:5173). Stop the server with `Ctrl+C`.

No environment variables are required for normal local development.

## Code structure

```text
.
├── content/             Markdown content managed by Sveltia CMS
├── public/              Static images, logos, documents, redirects, and favicons
│   └── admin/           Sveltia CMS admin page and configuration
├── plugins/             Vite plugins (Markdown content pipeline)
├── src/
│   ├── components/      Shared UI, layout, cards, buttons, and section components
│   ├── data/            Content and structured data used by pages
│   ├── lib/             Small shared utilities
│   ├── pages/           Route-level page components
│   ├── App.tsx          Application routes and shared page layout
│   ├── main.tsx         React entry point and global providers
│   ├── styles.css       Global styles
│   └── theme.ts         Fluent UI theme configuration
├── tests/site/          Playwright site and link tests
├── index.html           Vite HTML entry point
├── netlify.toml         Netlify build and security-header configuration
├── playwright.config.ts Playwright test configuration
└── vite.config.ts       Local development and production build configuration
```

Add new routes in `src/App.tsx`. Put route-level content in `src/pages`, reusable UI in `src/components`, and static files that should be served as-is in `public`.

## Content management (Sveltia CMS)

Case studies, best practice guides, events, and job openings are Markdown files in
`content/`, edited through a Git-based CMS. There is no CMS server: the admin page
runs in the editor's browser, commits straight to GitHub, and the existing deploy
workflow rebuilds the site on push.

A published entry is merged into the listing it belongs to, so its card shows up in
the existing section next to the hand-maintained entries — no code change needed.

| Collection | Card appears on | Detail page |
| --- | --- | --- |
| Case studies | `/insights/case-studies` | `/insights/case-studies/:slug` |
| Best practice guides | `/insights/best-practice-guides` | `/insights/guides/:slug` |
| Events | `/events` (Upcoming / Past) | `/events/:slug` |
| Job openings | `/careers` (region accordion) | none — rendered inline |

### For editors

1. Go to `/admin/` on the deployed site.
2. Choose **Sign In Using Access Token** and paste a GitHub personal access token
   with `repo` scope (the dialog links to the token page with the right scopes selected).
3. Create, edit, or delete an entry, then press **Save**. Each save is a commit; the
   site redeploys automatically.

Use the **Draft** toggle to keep an entry in the repository without publishing it.

The **Service**, **Industry**, and **Topic** dropdowns decide which filter chip an
entry appears under. Their options are kept in step with `caseStudyFilters`,
`caseStudyIndustryFilters`, and `bestPracticeFilters` in
[src/data/insights.ts](src/data/insights.ts) — change one and you must change the other.

### For developers

| Piece | Location |
| --- | --- |
| CMS admin page | [public/admin/index.html](public/admin/index.html) |
| Collections, fields, backend | [public/admin/config.yml](public/admin/config.yml) |
| Markdown source files | `content/case-studies/`, `content/guides/`, `content/events/`, `content/careers/` |
| Build-time Markdown pipeline | [plugins/vite-plugin-content.ts](plugins/vite-plugin-content.ts) |
| Typed read model | [src/lib/content.ts](src/lib/content.ts) |
| Merged into listings by | [src/data/insights.ts](src/data/insights.ts), [src/data/events.ts](src/data/events.ts), [src/data/careers.ts](src/data/careers.ts) |
| Detail pages | [src/pages/CaseStudyDetail.tsx](src/pages/CaseStudyDetail.tsx), [src/pages/GuideDetail.tsx](src/pages/GuideDetail.tsx), [src/pages/EventDetail.tsx](src/pages/EventDetail.tsx) |

Frontmatter is parsed and Markdown is rendered to HTML at build time, so no Markdown
parser ships to the browser. The rendered HTML is sanitized before it reaches the DOM.
Editing a file under `content/` triggers a dev-server reload.

Adding a collection means adding a folder to `COLLECTIONS` in the content plugin, a
collection to `config.yml`, and a getter in `src/lib/content.ts`.

Date fields use **Day.js** tokens, so the format is `YYYY-MM-DD` — lowercase
`yyyy-MM-dd` silently writes a broken value such as `yyyy-08-Th`.

To point the CMS at a different repository or branch, update `backend.repo`,
`backend.branch`, and `site_url` in `public/admin/config.yml`. To replace token
sign-in with a GitHub OAuth flow, deploy
[sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) and add `base_url`
under `backend`.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run test:site` | Run the local desktop and mobile Playwright checks |
| `npm run test:external` | Check external links |
| `npm run test:site:report` | Open the most recent Playwright HTML report |

For a first Playwright run, install Chromium once:

```bash
npx playwright install chromium
```

## Create a pull request

1. Start from an up-to-date `main` branch:

   ```bash
   git switch main
   git pull origin main
   git switch -c feature/short-description
   ```

2. Make a focused change, then verify it:

   ```bash
   npm run build
   npm run test:site
   ```

3. Commit and push your branch:

   ```bash
   git add <changed-files>
   git commit -m "Describe the change"
   git push -u origin feature/short-description
   ```

4. Open the repository on GitHub and create a pull request into `main`. Include a short summary, testing notes, and screenshots for visual changes. Keep the PR focused and address the automated build check and review feedback before merging.

## Development notes

- Use React Router links or navigation for internal pages so navigation stays within the SPA.
- Reuse existing components and Fluent UI theme tokens before adding new patterns.
- Check changes at desktop and mobile widths.
- Do not commit generated folders such as `node_modules/` or `dist/`.
- Production builds are generated with `npm run build`; pushes to `main` are deployed through GitHub Actions.

If local dependencies become inconsistent, remove `node_modules`, run `npm ci` again, and restart the development server.
