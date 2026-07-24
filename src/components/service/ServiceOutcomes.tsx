import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  Lightbulb24Regular,
  Settings24Regular,
  Rocket24Regular,
} from "@fluentui/react-icons";

/* "Your business outcomes" — stacked editorial rows, split into columns.
   Shared by every service page; each page passes its own `outcomes` array.

   Deliberately NOT a card grid. The capabilities carousel directly above this
   section renders three <FeatureCard>s, and an identical 3-up card grid here
   made the page read as repetitive. The differentiation comes from the vertical
   rhythm and open, borderless rows rather than from card chrome.

   Layout: icon | title | description across three columns, so content spans the
   band and the full-width hairlines have something underneath them. A single
   stacked column left the right half of the section as empty ruled space.

   Below 900px the description tucks under the title (two columns, with the icon
   spanning both rows) rather than collapsing to a full stack — that keeps the
   icon-left reading all the way down to ~360px.

   Griffel note: border longhands only in this file. Mixing `border` with
   `borderTop`/`borderBottom` inside a single rule fails the build with TS2322.

   Icon sizing note: Fluent icons hardcode `width`/`height` SVG attributes at
   their intrinsic size (24 for `*24Regular`), applied AFTER the prop spread in
   createFluentIcon — so a `fontSize` prop does not resize them. Scaling has to
   come from CSS on the svg itself, which is what the `& svg` rule below does. */

export interface OutcomeItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ServiceOutcomesProps {
  title?: string;
  /* Accepted but not rendered — the section leads with the title alone. */
  subhead?: string;
  outcomes?: OutcomeItem[];
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  // Typography comes from the canonical `.maq-h2` class; only layout here.
  title: {
    textAlign: "left",
    margin: "0 0 24px",
  },
  list: {
    display: "block",
    borderTop: "1px solid var(--maq-border)",
  },
  row: {
    display: "grid",
    // The title column is a fixed cap rather than fit-content: each row is its
    // own grid, so a content-sized column would start every description at a
    // different x. 300px clears the longest title ("Increase in efficiency",
    // ~253px at 22px bold) with headroom, without leaving a wide dead gap after
    // the shorter ones.
    gridTemplateColumns: "56px minmax(0, 300px) minmax(0, 1fr)",
    // Centre rather than top-align: the description is the tallest cell and sets
    // the row height, so a top-aligned single-line title sat high against it and
    // read as misaligned next to the centred icon.
    alignItems: "center",
    columnGap: "32px",
    rowGap: "8px",
    padding: "28px 0",
    borderBottom: "1px solid var(--maq-border)",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "56px minmax(0, 1fr)",
      columnGap: "24px",
      rowGap: "10px",
      padding: "24px 0",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "var(--maq-red)",
    // CSS beats the intrinsic width/height attributes the icon renders with.
    "& svg": { width: "32px", height: "32px" },
    "@media (max-width: 900px)": {
      // Span both text rows so the icon still centres once the description
      // tucks under the title.
      gridRow: "1 / span 2",
      "& svg": { width: "28px", height: "28px" },
    },
  },
  rowTitle: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: 1.25,
    color: "var(--maq-black)",
    margin: "0",
    letterSpacing: "-0.01em",
    "@media (max-width: 900px)": { gridColumn: "2", gridRow: "1" },
  },
  rowDesc: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    // No measure cap here: these are one- to two-line descriptions, not running
    // prose, and a `ch`-based cap clamped them to roughly 600px while the column
    // itself is ~1020px at the 1440px container — so they wrapped with a wide
    // empty gutter to their right. The grid column is the only width governor.
    margin: "0",
    "@media (max-width: 900px)": { gridColumn: "2", gridRow: "2" },
  },
});

const defaultOutcomes: OutcomeItem[] = [
  {
    icon: <Lightbulb24Regular />,
    title: "Sharper decisions",
    desc: "Make data-backed decisions faster with grounded AI insights, so teams act on evidence instead of instinct.",
  },
  {
    icon: <Settings24Regular />,
    title: "Less manual work",
    desc: "Automate repetitive tasks and free your team for higher-value work.",
  },
  {
    icon: <Rocket24Regular />,
    title: "Faster delivery",
    desc: "Ship new products faster by building AI and ML into the processes your teams already run.",
  },
];

export function ServiceOutcomes({
  title = "Your business outcomes",
  outcomes = defaultOutcomes,
}: ServiceOutcomesProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        <div className={s.list}>
          {outcomes.map((o) => (
            <div className={s.row} key={o.title}>
              <span className={s.icon} aria-hidden="true">
                {o.icon}
              </span>
              <h3 className={s.rowTitle}>{o.title}</h3>
              <p className={s.rowDesc}>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
