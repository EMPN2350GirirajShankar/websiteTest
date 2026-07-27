// Standard responsive breakpoints for the site.
//
// Anchored on the two values already dominant across the codebase (960 and 640)
// so migrating existing pages is mostly a snap-to-nearest. Use these instead of
// hand-writing `@media (max-width: …)` — that sprawl (24+ distinct values) is what
// makes responsive behavior inconsistent.
//
// Griffel `makeStyles` runs at runtime here (no build-time plugin), so these can
// be used as computed style keys:
//
//   const useStyles = makeStyles({
//     grid: {
//       gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//       [bp.lg]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
//       [bp.md]: { gridTemplateColumns: "1fr" },
//     },
//   });
//
// Down = desktop-first (max-width); Up = mobile-first (min-width) companions.
// Note: a rule can only carry ONE object per key — collapse multiple old
// breakpoints that snap to the same tier into a single entry.
export const bp = {
  /** ≤ 480px — small phones */
  sm: "@media (max-width: 480px)",
  /** ≤ 640px — phones / small tablets (2-col → 1-col) */
  md: "@media (max-width: 640px)",
  /** ≤ 960px — tablets / small laptops (3-col → 2-col, side-by-side → stacked) */
  lg: "@media (max-width: 960px)",
  /** ≤ 1200px — wide-desktop container cap */
  xl: "@media (max-width: 1200px)",

  smUp: "@media (min-width: 481px)",
  mdUp: "@media (min-width: 641px)",
  lgUp: "@media (min-width: 961px)",
  xlUp: "@media (min-width: 1201px)",
} as const;

// Raw query strings (no `@media` prefix) for matchMedia / useMediaQuery.
export const mq = {
  sm: "(max-width: 480px)",
  md: "(max-width: 640px)",
  lg: "(max-width: 960px)",
  xl: "(max-width: 1200px)",
} as const;
