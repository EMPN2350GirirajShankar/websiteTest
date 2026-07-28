import {
  caseStudies as rawCaseStudies,
  guides as rawGuides,
  events as rawEvents,
  jobs as rawJobs,
  type RawContentEntry,
} from "virtual:site-content";

/**
 * Read model for the Git-based CMS (Sveltia). Markdown files under /content are
 * parsed at build time by plugins/vite-plugin-content.ts; this module turns the
 * raw frontmatter into typed, sorted, draft-free collections for the UI.
 *
 * These collections are merged into the existing hand-maintained listings by
 * src/data/insights.ts, src/data/events.ts, and src/data/careers.ts, so a new
 * entry published from the CMS shows up as a card in its section with no code
 * change.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  /** YYYY-MM, matching the format the hand-written case studies use. */
  date: string;
  /** Short label shown on the card chip. */
  tag: string;
  /** Must match a label in `caseStudyFilters` to be filterable by service. */
  service?: string;
  /** Must match a label in `caseStudyIndustryFilters`. */
  industry?: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  readingTimeMinutes: number;
  html: string;
}

export interface Guide {
  slug: string;
  title: string;
  date: string;
  /** Must match a label in `bestPracticeFilters` to be filterable by topic. */
  topic: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
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
  html: string;
}

export type JobRegion = "us" | "india";

export interface JobPosting {
  slug: string;
  title: string;
  region: JobRegion;
  location?: string;
  applyUrl?: string;
  excerpt: string;
  date: string;
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

/** Strips HTML tags so a Markdown body can stand in for a missing excerpt. */
function textExcerpt(html: string, max = 200): string {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

const published = (entry: RawContentEntry) => !entry.draft;

const caseStudyList: CaseStudy[] = rawCaseStudies
  .filter(published)
  .map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    // The hand-written entries use YYYY-MM and the card prints the raw string,
    // so trim the day to keep the two sources visually consistent.
    date: entry.date.slice(0, 7),
    tag: str(entry, "tag", "Case study"),
    service: optionalStr(entry, "service"),
    industry: optionalStr(entry, "industry"),
    excerpt: str(entry, "excerpt") || textExcerpt(entry.html),
    image: optionalStr(entry, "image"),
    imageAlt: optionalStr(entry, "imageAlt"),
    readingTimeMinutes: entry.readingTimeMinutes,
    html: entry.html,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

const guideList: Guide[] = rawGuides
  .filter(published)
  .map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    date: entry.date,
    topic: str(entry, "topic", "Power BI"),
    excerpt: str(entry, "excerpt") || textExcerpt(entry.html),
    image: optionalStr(entry, "image"),
    imageAlt: optionalStr(entry, "imageAlt"),
    readingTimeMinutes: entry.readingTimeMinutes,
    html: entry.html,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

const siteEvents: SiteEvent[] = rawEvents
  .filter(published)
  .map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    startDate: entry.startDate,
    endDate: optionalStr(entry, "endDate"),
    eventType: str(entry, "eventType", "Event"),
    location: str(entry, "location"),
    registrationUrl: optionalStr(entry, "registrationUrl"),
    summary: str(entry, "summary") || textExcerpt(entry.html),
    image: optionalStr(entry, "image"),
    imageAlt: optionalStr(entry, "imageAlt"),
    html: entry.html,
  }))
  .sort((a, b) => b.startDate.localeCompare(a.startDate));

const jobList: JobPosting[] = rawJobs
  .filter(published)
  .map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    region: str(entry, "region") === "india" ? ("india" as const) : ("us" as const),
    location: optionalStr(entry, "location"),
    applyUrl: optionalStr(entry, "applyUrl"),
    excerpt: str(entry, "excerpt") || textExcerpt(entry.html),
    date: entry.date,
    html: entry.html,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getCaseStudies(): CaseStudy[] {
  return caseStudyList;
}

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return slug ? caseStudyList.find((item) => item.slug === slug) : undefined;
}

export function getGuides(): Guide[] {
  return guideList;
}

export function getGuide(slug: string | undefined): Guide | undefined {
  return slug ? guideList.find((item) => item.slug === slug) : undefined;
}

export function getJobs(region: JobRegion): JobPosting[] {
  return jobList.filter((job) => job.region === region);
}

export function getEvents(): SiteEvent[] {
  return siteEvents;
}

export function getEvent(slug: string | undefined): SiteEvent | undefined {
  return slug ? siteEvents.find((event) => event.slug === slug) : undefined;
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
