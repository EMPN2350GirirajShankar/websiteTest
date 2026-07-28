import { posts as rawPosts, events as rawEvents, type RawContentEntry } from "virtual:site-content";

/**
 * Read model for the Git-based CMS (Sveltia). Markdown files under /content are
 * parsed at build time by plugins/vite-plugin-content.ts; this module turns the
 * raw frontmatter into typed, sorted, draft-free collections for the UI.
 */

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  readingTimeMinutes: number;
  html: string;
}

export interface SiteEvent {
  slug: string;
  title: string;
  startDate: string;
  endDate?: string;
  eventType: string;
  location: string;
  registrationUrl?: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
  html: string;
}

function str(entry: RawContentEntry, key: string, fallback = ""): string {
  const value = entry[key];
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function optionalStr(entry: RawContentEntry, key: string): string | undefined {
  const value = str(entry, key);
  return value || undefined;
}

const blogPosts: BlogPost[] = rawPosts
  .filter((entry) => !entry.draft)
  .map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    date: entry.date,
    author: str(entry, "author", "MAQ Software"),
    category: str(entry, "category", "Insights"),
    tags: entry.tags,
    excerpt: str(entry, "excerpt"),
    image: optionalStr(entry, "image"),
    imageAlt: optionalStr(entry, "imageAlt"),
    featured: entry.featured,
    readingTimeMinutes: entry.readingTimeMinutes,
    html: entry.html,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

const siteEvents: SiteEvent[] = rawEvents
  .filter((entry) => !entry.draft)
  .map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    startDate: entry.startDate,
    endDate: optionalStr(entry, "endDate"),
    eventType: str(entry, "eventType", "Event"),
    location: str(entry, "location"),
    registrationUrl: optionalStr(entry, "registrationUrl"),
    summary: str(entry, "summary"),
    image: optionalStr(entry, "image"),
    imageAlt: optionalStr(entry, "imageAlt"),
    tags: entry.tags,
    html: entry.html,
  }))
  .sort((a, b) => b.startDate.localeCompare(a.startDate));

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
  return slug ? blogPosts.find((post) => post.slug === slug) : undefined;
}

export function getBlogCategories(): string[] {
  return ["All", ...Array.from(new Set(blogPosts.map((post) => post.category))).sort()];
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const score = (item: BlogPost) =>
        (item.category === post.category ? 2 : 0) +
        item.tags.filter((tag) => post.tags.includes(tag)).length;
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function getEvents(): SiteEvent[] {
  return siteEvents;
}

export function getEvent(slug: string | undefined): SiteEvent | undefined {
  return slug ? siteEvents.find((event) => event.slug === slug) : undefined;
}

/** Splits events around today's date, with upcoming ones in chronological order. */
export function getEventsByTiming(): { upcoming: SiteEvent[]; past: SiteEvent[] } {
  const today = new Date().toISOString().slice(0, 10);
  const isUpcoming = (event: SiteEvent) => (event.endDate || event.startDate) >= today;

  return {
    upcoming: siteEvents
      .filter(isUpcoming)
      .sort((a, b) => a.startDate.localeCompare(b.startDate)),
    past: siteEvents.filter((event) => !isUpcoming(event)),
  };
}

export function formatDate(value: string): string {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateRange(start: string, end?: string): string {
  if (!end || end === start) return formatDate(start);
  return `${formatDate(start)} – ${formatDate(end)}`;
}
