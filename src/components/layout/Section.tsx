import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";
import type { CSSProperties, ReactNode } from "react";

/* ==================================================================
   Section / Container — the page's layout band primitive.
   ------------------------------------------------------------------
   `Section` is a full-bleed band that carries the vertical rhythm and
   horizontal gutters; the inner `Container` caps + centers content at
   the standard 1440px width. Extracted from HomeV2 so every page uses
   the same widths and spacing.
   ================================================================== */

const useStyles = makeStyles({
  section: { padding: "var(--section-pad-y) var(--section-pad-x)" },
  // The canonical section band gray (matches the site-wide band token).
  gray: { backgroundColor: tokens.colorNeutralBackground3 },
  relative: { position: "relative" },
  center: { textAlign: "center" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  heading: {
    margin: "0 0 24px",
    textAlign: "center",
  },
  headingLeft: {
    textAlign: "left",
  },
  cardGrid: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  },
});

export type SectionTone = "default" | "gray";

export function Section({
  tone = "default",
  relative = false,
  center = false,
  className,
  innerClassName,
  style,
  children,
}: {
  /** `gray` paints the neutral band (Fluent background 3); `default` is white
      (transparent over the white page). Tone is the explicit, per-section
      source of truth for band color — there is no positional alternation. */
  tone?: SectionTone;
  /** Adds `position: relative` (e.g. for an absolutely-placed divider). */
  relative?: boolean;
  /** Center-aligns the section content. */
  center?: boolean;
  className?: string;
  innerClassName?: string;
  /** One-off overrides (e.g. a tighter padding) without a bespoke class. */
  style?: CSSProperties;
  children: ReactNode;
}) {
  const s = useStyles();
  return (
    <section
      className={mergeClasses(
        s.section,
        tone === "gray" && s.gray,
        relative && s.relative,
        center && s.center,
        className,
      )}
      style={style}
    >
      <div className={mergeClasses(s.inner, innerClassName)}>{children}</div>
    </section>
  );
}

/** Bare max-width container (no band), for nesting inside custom bands. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  const s = useStyles();
  return <div className={mergeClasses(s.inner, className)}>{children}</div>;
}

export function SectionHeading({
  title,
  align = "left",
  className,
}: {
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  const s = useStyles();
  return (
    <h2 className={mergeClasses("maq-h2", s.heading, align === "left" && s.headingLeft, className)}>
      {title}
    </h2>
  );
}

export function CardGrid({
  columns,
  minRowHeight,
  className,
  style,
  children,
}: {
  columns?: number;
  minRowHeight?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const s = useStyles();
  return (
    <div
      className={mergeClasses(s.cardGrid, className)}
      style={{
        gridTemplateColumns: columns
          ? `repeat(${columns}, minmax(0, 1fr))`
          : undefined,
        gridAutoRows: minRowHeight ? `minmax(${minRowHeight}, auto)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
