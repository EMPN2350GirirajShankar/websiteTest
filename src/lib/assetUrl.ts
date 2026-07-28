/**
 * Prepends Vite's base URL to an asset path.
 *
 * When deployed to a sub-path (e.g. /websiteTest/), Vite sets
 * import.meta.env.BASE_URL to that prefix at build time. Wrapping
 * every public-folder asset path with this function ensures images,
 * logos, and other static files resolve correctly regardless of where
 * the app is hosted (root domain or project sub-path).
 *
 * Usage:
 *   <img src={assetUrl("/images/hero.webp")} />
 *   imageUrl: assetUrl("/images/foo.png")
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  return base + path;
}
