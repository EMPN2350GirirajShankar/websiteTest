// Careers data — mirrors the original maqsoftware.com/careers behavior.
//
// The live job openings come from the same Blogger CMS the original site uses:
//   Blog ID: 4733689656779828601
//   Labels:  "Openings - US"  /  "Openings - India"
//
// Blogger doesn't send CORS headers, so we load the feeds via JSONP
// (same technique as the original /careers page's careers.js).
// When the talent team publishes a new opening on Blogger, it appears
// automatically on /careers — no code change or deploy needed.

import { sanitizeExternalHtml } from "../lib/sanitizeHtml";
import { getJobs } from "../lib/content";

export interface JobOpening {
  id: string;
  title: string;
  /** Raw HTML body of the posting (from Blogger content). */
  contentHtml: string;
  /** Plain-text excerpt for previews / SEO. */
  excerpt: string;
  /** Direct JobScore apply URL (https://jsco.re/XXXX) if present in the post. */
  applyUrl: string | null;
  /** Public Blogger post URL. Absent for CMS-authored openings. */
  href?: string;
  /** ISO publish date. */
  date: string;
}

export type CareersRegion = "us" | "india";

export const CAREERS_BLOG_ID = "4733689656779828601";
export const JOBSCORE_URL = "https://careers.jobscore.com/careers/maqsoftware";

const REGION_LABEL: Record<CareersRegion, string> = {
  us: "Openings - US",
  india: "Openings - India",
};

// ── Blogger feed types (minimal) ───────────────────────────────────────────
interface BloggerText {
  $t: string;
}
interface BloggerLink {
  rel: string;
  type?: string;
  href: string;
}
interface BloggerEntry {
  id: BloggerText;
  published: BloggerText;
  title: BloggerText;
  content: BloggerText;
  link: BloggerLink[];
}
interface BloggerFeedResponse {
  feed: {
    entry?: BloggerEntry[];
  };
}

// ── JSONP loader ───────────────────────────────────────────────────────────
let jsonpCounter = 0;
function fetchJsonp<T>(url: string, timeoutMs = 15000): Promise<T> {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const isTrustedBloggerFeed =
      parsed.protocol === "https:" &&
      parsed.hostname === "www.blogger.com" &&
      parsed.pathname.startsWith(`/feeds/${CAREERS_BLOG_ID}/posts/default/`);
    if (!isTrustedBloggerFeed) {
      reject(new Error("Blocked untrusted careers feed URL"));
      return;
    }

    const cbName = `__maqCareersCb_${Date.now()}_${jsonpCounter++}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete (window as unknown as Record<string, unknown>)[cbName];
      script.remove();
      clearTimeout(timer);
    };
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error("Careers feed request timed out"));
    }, timeoutMs);

    (window as unknown as Record<string, (data: T) => void>)[cbName] = (
      data: T,
    ) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("Failed to load careers feed"));
    };
    const sep = url.includes("?") ? "&" : "?";
    script.src = `${url}${sep}callback=${cbName}`;
    script.referrerPolicy = "no-referrer";
    document.head.appendChild(script);
  });
}

// ── Helpers ────────────────────────────────────────────────────────────────
function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

function excerpt(html: string, max = 220): string {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

function publicUrl(entry: BloggerEntry): string {
  const alt = entry.link.find(
    (l) => l.rel === "alternate" && l.type === "text/html",
  );
  return alt?.href ?? "https://www.blogger.com/";
}

function extractJobScoreUrl(html: string): string | null {
  // JobScore short links look like https://jsco.re/XXXXX (5–8 chars).
  const m = html.match(/https?:\/\/jsco\.re\/[A-Za-z0-9]+/);
  return m ? m[0] : null;
}

function mapEntry(entry: BloggerEntry): JobOpening {
  const html = sanitizeExternalHtml(entry.content.$t ?? "");
  return {
    id: entry.id.$t,
    title: entry.title.$t,
    contentHtml: html,
    excerpt: excerpt(html),
    applyUrl: extractJobScoreUrl(html),
    href: publicUrl(entry),
    date: entry.published.$t,
  };
}

// ── Public API ─────────────────────────────────────────────────────────────

/** Turns a CMS opening into the same shape the accordion already renders. */
function fromCms(job: ReturnType<typeof getJobs>[number]): JobOpening {
  return {
    id: `cms-${job.slug}`,
    title: job.location ? `${job.title} — ${job.location}` : job.title,
    contentHtml: job.html,
    excerpt: job.excerpt,
    applyUrl: job.applyUrl ?? null,
    date: job.date,
  };
}

/**
 * Openings for a region. The CMS is the source of truth for new roles and its
 * postings are listed first; the legacy Blogger feed is still read so the
 * existing openings keep showing until they have been migrated. Drop the
 * `fetchOpenings` half of this function once that migration is done.
 */
export async function fetchOpenings(region: CareersRegion): Promise<JobOpening[]> {
  const cmsJobs = getJobs(region).map(fromCms);

  let bloggerJobs: JobOpening[] = [];
  try {
    bloggerJobs = await fetchBloggerOpenings(region);
  } catch (error) {
    // A dead legacy feed must not hide roles published in the CMS.
    if (cmsJobs.length === 0) throw error;
    console.warn("Careers: Blogger feed unavailable, showing CMS openings only.", error);
  }

  return [...cmsJobs, ...bloggerJobs];
}

async function fetchBloggerOpenings(region: CareersRegion): Promise<JobOpening[]> {
  const label = encodeURIComponent(REGION_LABEL[region]);
  const url =
    `https://www.blogger.com/feeds/${CAREERS_BLOG_ID}/posts/default/-/${label}` +
    `?alt=json&max-results=999`;
  const data = await fetchJsonp<BloggerFeedResponse>(url);
  return (data.feed.entry ?? []).map(mapEntry);
}

// ── Static "Why MAQ" reasons (mirrors the original /careers hero) ──────────
export interface CareerReason {
  title: string;
  body: string;
}

export const careerReasons: CareerReason[] = [
  {
    title: "Substantial responsibility, early",
    body:
      "Take ownership from day one, across the full delivery lifecycle and project management.",
  },
  {
    title: "Continuous learning",
    body:
      "Work alongside Microsoft, Snowflake, and Databricks experts on the newest AI, data, and cloud technologies.",
  },
  {
    title: "Global projects, real impact",
    body:
      "Deliver for Fortune 500 customers across Redmond, Plano, Hyderabad, Mumbai, and Noida.",
  },
];
