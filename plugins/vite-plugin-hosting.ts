import fs from "node:fs";
import path from "node:path";
import type { Connect, Plugin } from "vite";

/** Rewrites `/admin` and `/admin/` to the Sveltia CMS entry file. */
const adminMiddleware: Connect.NextHandleFunction = (req, _res, next) => {
  const [pathname, query] = (req.url ?? "").split("?");
  if (/\/admin\/?$/.test(pathname)) {
    req.url = `${pathname.replace(/\/$/, "")}/index.html${query ? `?${query}` : ""}`;
  }
  next();
};

/**
 * Local-server convenience: Vite serves neither directory indexes from
 * `public/` nor from the build output, so `/admin` and `/admin/` fall through
 * to the SPA and render a 404. Static hosts (GitHub Pages, Netlify) resolve
 * both to `index.html` on their own, so this rewrite exists purely to make
 * local URLs behave the same as production.
 */
export function cmsAdminPlugin(): Plugin {
  return {
    name: "maq:cms-admin",
    configureServer(server) {
      server.middlewares.use(adminMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(adminMiddleware);
    },
  };
}

/**
 * public/404.html implements the spa-github-pages redirect trick. Its
 * `pathSegmentsToKeep` must equal the number of path segments in the deployed
 * base URL, or deep links bounce visitors off the site entirely.
 *
 * The source file is written for a root deploy (0). This rewrites the copy in
 * the output folder to match whatever `base` the build actually used, keeping
 * `base` in vite.config.ts as the single source of truth.
 */
export function spaFallbackPlugin(): Plugin {
  let outDir = "dist";
  let segmentsToKeep = 0;

  return {
    name: "maq:spa-fallback",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
      segmentsToKeep = config.base.split("/").filter(Boolean).length;
    },
    closeBundle() {
      const file = path.join(outDir, "404.html");
      if (!fs.existsSync(file)) return;

      const html = fs.readFileSync(file, "utf8");
      const patched = html.replace(
        /var pathSegmentsToKeep = \d+;/,
        `var pathSegmentsToKeep = ${segmentsToKeep};`
      );

      if (patched === html && segmentsToKeep !== 0) {
        this.warn(
          `Could not set pathSegmentsToKeep in 404.html; deep links will break under base "${outDir}".`
        );
        return;
      }

      fs.writeFileSync(file, patched);
    },
  };
}
