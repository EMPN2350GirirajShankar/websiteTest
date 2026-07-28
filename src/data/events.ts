import { fetchNews, type NewsArticle } from "./news";
import { getEvents } from "../lib/content";

export interface UpcomingEvent {
  id: string;
  title: string;
  summary: string;
  startDate: string; // ISO date
  endDate: string; // ISO date
  location: string;
  href: string;
  ctaLabel: string;
}

export interface EventCard {
  id: string;
  title: string;
  summary: string;
  date: string;
  location?: string;
  href: string;
  source: "upcoming" | "news";
  tag: string;
}

const staticUpcomingEvents: UpcomingEvent[] = [
  {
    id: "techcon365-2026",
    title: "TechCon 365 Chicago",
    summary:
      "Meet MAQ Software at Booth #20-21 and attend our featured sessions on Agentic Spec-Driven Development and M365 Copilot Enablement.",
    startDate: "2026-06-17",
    endDate: "2026-06-18",
    location: "Chicago, IL",
    href: "/events/techcon365",
    ctaLabel: "View event details",
  },
  {
    id: "techcon365-seattle-2026",
    title: "TechCon 365, DATACON & PWRCON Seattle",
    summary:
      "Join MAQ Software at Seattle's three-in-one Microsoft conference experience across Microsoft 365, data, and Power Platform content.",
    startDate: "2026-08-24",
    endDate: "2026-08-28",
    location: "Seattle, WA",
    href: "/events/techcon365/seattle",
    ctaLabel: "View event details",
  },
  {
    id: "techcon365-dallas-2026",
    title: "TechCon 365 Dallas",
    summary:
      "Meet MAQ Software in Dallas for Microsoft 365, Copilot, Power Platform, Fabric, Azure, and AI conference sessions.",
    startDate: "2026-11-02",
    endDate: "2026-11-06",
    location: "Dallas, TX",
    href: "/events/techcon365/dallas",
    ctaLabel: "View event details",
  },
  {
    id: "fabcon-2027",
    title: "FABCON & SQLCON 2027",
    summary:
      "MAQ Software will be at FABCON & SQLCON in Atlanta to discuss Microsoft Fabric, SQL, Azure AI, and modern analytics transformation.",
    startDate: "2027-03-08",
    endDate: "2027-03-12",
    location: "Atlanta, GA",
    href: "/events/fabcon2027",
    ctaLabel: "View event details",
  },
];

// Events authored in the CMS join the same list the /events page already groups
// into Upcoming / Past, so publishing one is enough to make its card appear.
// `endDate` is optional in the CMS but required here: a single-day event ends
// the day it starts.
export const upcomingEvents: UpcomingEvent[] = [
  ...getEvents().map((event) => ({
    id: event.slug,
    title: event.title,
    summary: event.summary,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: event.location,
    href: `/events/${event.slug}`,
    ctaLabel: "View event details",
  })),
  ...staticUpcomingEvents,
];

function toMidnight(dateIso: string): Date {
  return new Date(`${dateIso}T23:59:59`);
}

function toStartOfDay(dateIso: string): Date {
  return new Date(`${dateIso}T00:00:00`);
}

export function getUpcomingEventTag(
  item: UpcomingEvent,
  now = new Date(),
): "Upcoming" | "Ongoing" {
  return toStartOfDay(item.startDate) <= now && toMidnight(item.endDate) >= now
    ? "Ongoing"
    : "Upcoming";
}

export function splitUpcomingAndPast(
  items: UpcomingEvent[],
  now = new Date(),
): { upcoming: UpcomingEvent[]; past: UpcomingEvent[] } {
  const upcoming = items
    .filter((item) => toMidnight(item.endDate) >= now)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

  const past = items
    .filter((item) => toMidnight(item.endDate) < now)
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    );

  return { upcoming, past };
}

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startLabel = start.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const endLabel = end.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return startDate === endDate ? startLabel : `${startLabel} - ${endLabel}`;
}

export function mapPastUpcomingToCard(item: UpcomingEvent): EventCard {
  return {
    id: item.id,
    title: item.title,
    summary: item.summary,
    date: formatDateRange(item.startDate, item.endDate),
    location: item.location,
    href: item.href,
    source: "upcoming",
    tag: "Archived",
  };
}

export function mapNewsToPastEvent(article: NewsArticle): EventCard {
  const d = new Date(article.date);
  const dateLabel = Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  return {
    id: article.id,
    title: article.title,
    summary: article.excerpt,
    date: dateLabel,
    href: article.href,
    source: "news",
    tag: "Archived",
  };
}

export async function fetchPastEventsFromNews(
  maxResults = 30,
): Promise<EventCard[]> {
  const { articles } = await fetchNews(1, maxResults);
  return articles
    .map(mapNewsToPastEvent)
    .sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return bTime - aTime;
    });
}
