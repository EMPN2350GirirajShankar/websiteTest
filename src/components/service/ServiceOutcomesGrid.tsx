import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";

/* ==================================================================
   ServiceOutcomesGrid — outcomes laid out as an even column grid:
   red icon on top, bold title, description underneath. Distinct from
   ServiceOutcomes (which stacks icon | title | desc as full-width
   rows). Used where several short outcomes read better side by side.
   ================================================================== */

export interface OutcomeGridItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "40px",
    "@media (max-width: 1080px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "40px 32px",
    },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  item: { display: "flex", flexDirection: "column" },
  icon: {
    color: "var(--maq-red)",
    marginBottom: "16px",
    "& svg": { width: "40px", height: "40px" },
  },
  itemTitle: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1.3,
    color: "var(--maq-black)",
    margin: "0 0 10px",
  },
  itemDesc: {
    fontSize: "17px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
});

export function ServiceOutcomesGrid({
  title = "Business outcomes",
  outcomes,
}: {
  title?: string;
  outcomes: OutcomeGridItem[];
}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        <div className={s.grid}>
          {outcomes.map((o) => (
            <div className={s.item} key={o.title}>
              <span className={s.icon} aria-hidden="true">
                {o.icon}
              </span>
              <h3 className={s.itemTitle}>{o.title}</h3>
              <p className={s.itemDesc}>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
