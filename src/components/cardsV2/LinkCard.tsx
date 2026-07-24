import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowUpRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

/* ==================================================================
   LinkCard (V2) — impact-led card: headline + description +
   "Learn more". White card, hover lift, red footer link + sliding
   arrow. Part of the HomeV2 design system.
   ================================================================== */

const useStyles = makeStyles({
  card: {
    backgroundColor: tokens.colorNeutralBackground1, borderRadius: "12px", border: "1px solid var(--maq-border)", padding: tokens.spacingHorizontalXXL,
    display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", cursor: "pointer",
    transition: "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s, border-color .2s",
    ":hover": { transform: "translateY(-2px)", boxShadow: "var(--maq-shadow-lift)", border: "1px solid var(--maq-card-hover-border)" },
    ":hover .m3-foot": { color: "var(--maq-red-dark)" },
    ":hover .m3-foot-arrow": { transform: "translateX(4px)" },
  },
  impact: { fontSize: "1.45rem", fontWeight: 600, letterSpacing: "-.5px", color: "var(--maq-heading-color)", lineHeight: 1.2, margin: 0 },
  desc: { fontSize: "0.875rem", lineHeight: 1.55, color: "var(--maq-muted-color)", flex: 1, margin: "11px 0 0" },
  foot: { marginTop: "20px", fontSize: "0.85rem", fontWeight: 700, color: "var(--maq-red)", display: "inline-flex", alignItems: "center", gap: "7px", transition: "color .18s" },
  footArrow: { display: "inline-flex", transition: "transform .18s" },
});

export function LinkCard({
  name,
  desc,
  to,
  cta = "Learn more",
}: {
  name: string;
  desc: string;
  to: string;
  cta?: string;
}) {
  const s = useStyles();
  return (
    <Link to={to} className={s.card}>
      <h3 className={s.impact}>{name}</h3>
      <p className={s.desc}>{desc}</p>
      <span className={`${s.foot} m3-foot`}>
        {cta} <span className={`${s.footArrow} m3-foot-arrow`}><ArrowUpRight16Regular /></span>
      </span>
    </Link>
  );
}
