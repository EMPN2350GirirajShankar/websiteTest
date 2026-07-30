/**
 * Virtual module produced by plugins/vite-plugin-content.ts.
 * Each entry is a Markdown file in /content parsed at build time.
 */
declare module "virtual:site-content" {
  export interface RawContentEntry {
    slug: string;
    title: string;
    date: string;
    startDate: string;
    endDate: string;
    draft: boolean;
    featured: boolean;
    readingTimeMinutes: number;
    html: string;
    /** Raw section list from the CMS section builder; see lib/sections.ts. */
    sections: unknown[];
    [key: string]: unknown;
  }

  export const caseStudies: RawContentEntry[];
  export const guides: RawContentEntry[];
  export const events: RawContentEntry[];
  export const jobs: RawContentEntry[];
}
