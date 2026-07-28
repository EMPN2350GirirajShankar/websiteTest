import { matchPath } from "react-router-dom";
import { getProduct } from "../data/products";
import { findVisualGuideItem } from "../data/insights";
import { getBlogPost, getEvent } from "./content";

const BRAND = "MAQ Software";
const SUFFIX = ` - ${BRAND}`;

type TitleResolver =
  | string
  | ((params: Record<string, string | undefined>) => string | undefined);

// Browser-tab titles keyed by route path pattern — this list mirrors <Routes> in
// App.tsx. The value is the page/nav-link name; resolvePageTitle() appends
// " - MAQ Software". An empty string means brand-only (the home page). Dynamic
// detail pages resolve their name from the same data that renders them.
//
// Keep this in sync when routes change. Order is specific-before-dynamic, though
// patterns with different segment counts never collide.
const ROUTE_TITLES: Array<[string, TitleResolver]> = [
  // Home
  ["/", ""],
  ["/homev3", ""],

  // Industries
  ["/industries/retail", "Retail & consumer goods"],
  ["/industries/financial-services", "Financial services"],
  ["/industries/healthcare-life-sciences", "Healthcare & life sciences"],
  ["/industries/technology", "Technology"],
  ["/industries/manufacturing", "Manufacturing"],
  ["/industries/public-sector", "Public sector"],

  // Services
  ["/services/data-and-analytics", "Data & AI platforms"],
  ["/services/agentic-ai", "AI solutions & agents"],
  ["/services/reporting-bi", "Insights & analytics"],
  ["/services/business-apps", "Business apps & automation"],
  ["/services/cloud", "Cloud modernization"],
  ["/services/security-compliance", "Security & governance"],
  ["/services/workplace-transformation", "Workplace transformation"],

  // Partnerships
  ["/partnerships/microsoft", "Microsoft"],
  ["/partnerships/snowflake", "Snowflake"],
  ["/partnerships/databricks", "Databricks"],

  // Products (specific paths before the dynamic catch-all)
  ["/products", "Products"],
  ["/products/certyfast/installation-and-usage-guide", "CertyFAST installation & usage guide"],
  ["/products/:slug", (p) => getProduct(p.slug ?? "")?.name ?? "Products"],

  // Insights
  ["/insights/case-studies", "Case studies"],
  ["/insights/consulting-offers", "Marketplace offers"],
  ["/insights/best-practice-guides", "Best practice guides"],
  ["/insights/power-bi-custom-visual-guide", "Power BI custom visuals"],
  [
    "/insights/power-bi-custom-visual-guide/:slug",
    (p) => findVisualGuideItem(p.slug ?? "")?.name ?? "Power BI custom visuals",
  ],
  ["/insights/visual-chooser", "Visual chooser"],

  // Best-practice guide detail pages (titles mirror each page's GuideArticle heading)
  ["/insights/github-copilot-best-practices", "Maximizing Developer Productivity with GitHub Copilot"],
  ["/insights/power-bi-copilot-best-practices", "Build AI-ready semantic models with Power BI Copilot"],
  ["/insights/power-bi-best-practices", "Power BI Best Practices"],
  ["/insights/azure-databricks-best-practices", "ADB optimization best practice guide"],
  ["/insights/databricks-best-practices", "Best practices in Databricks"],
  ["/insights/snowflake-and-power-bi-best-practices", "Best practices in Snowflake for Power BI"],
  ["/insights/knowledge-bot-best-practices", "Best practices for creating enterprise-wide knowledge bots"],
  ["/insights/dax-best-practices", "DAX Best Practices"],
  ["/insights/azure-dev-ops-best-practices-guide", "Azure DevOps Best Practice Guide"],
  ["/insights/azure-architecture-best-practices", "Azure Cost Optimization Best Practice Guide"],
  ["/insights/azure-security-best-practices", "Azure Security Best Practice Guide"],
  ["/insights/data-validation-best-practices", "Data Validation Best Practice Guide"],
  ["/insights/dynamics-365-development-best-practices", "Dynamics 365 Development Best Practice Guide"],
  ["/insights/dynamics-365-deployment-best-practices", "Dynamics 365 Deployment Best Practice Guide"],
  ["/insights/power-apps-best-practices", "Power Apps Best Practices"],
  ["/insights/dataverse-security-best-practices", "Security Best Practices in Dataverse"],

  // About / legal
  ["/who-we-are", "Who we are"],
  ["/about/who-we-are", "Who we are"],
  ["/sustainability", "Sustainability"],
  ["/about/sustainability", "Sustainability"],
  ["/careers", "Careers"],
  ["/about/careers", "Careers"],
  ["/contact", "Contact us"],
  ["/privacystatement", "Privacy statement"],
  ["/terms-of-service", "Terms of service"],
  ["/lab", "Component lab"],

  // Events
  ["/events", "Events"],
  ["/techcon365", "TechCon365"],
  ["/techcon365-dallas", "TechCon365 Dallas"],
  ["/techcon365-seattle", "TechCon365 Seattle"],
  ["/fabcon-2027", "FabCon 2027"],
  ["/events/techcon365", "TechCon365"],
  ["/events/techcon365/dallas", "TechCon365 Dallas"],
  ["/events/techcon365/seattle", "TechCon365 Seattle"],
  ["/events/fabcon2027", "FabCon 2027"],
  ["/events/fabcon-2027", "FabCon 2027"],

  // CMS-managed content (Markdown under /content)
  ["/blog", "Blog"],
  ["/blog/:slug", (p) => getBlogPost(p.slug)?.title ?? "Blog"],
  ["/events/all", "All events"],
  ["/events/:slug", (p) => getEvent(p.slug)?.title ?? "Events"],
];

/**
 * Resolves the browser-tab title for a pathname, e.g. "Case studies - MAQ Software".
 * Unmapped paths (redirect-only routes, genuine 404s) fall back to the plain brand.
 */
export function resolvePageTitle(pathname: string): string {
  for (const [pattern, resolver] of ROUTE_TITLES) {
    const match = matchPath(pattern, pathname);
    if (!match) continue;
    const name = typeof resolver === "function" ? resolver(match.params) : resolver;
    if (name === undefined) continue;
    return name === "" ? BRAND : `${name}${SUFFIX}`;
  }
  return BRAND;
}
