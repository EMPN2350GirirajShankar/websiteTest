import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ==================================================================
   IconCard (V2) — icon + label card. Default is a horizontal row
   (icon left). `centered` stacks the icon on top with centered text.
   `stacked` puts the icon top-left and the label bottom-left.
   Pass `motionProps` for a scroll-reveal (matches the other card grids).
   ================================================================== */

const MotionLink = motion.create(Link);

const useStyles = makeStyles({
  card: {
    backgroundColor: tokens.colorNeutralBackground1, borderRadius: "12px", border: "1px solid var(--maq-border)", padding: tokens.spacingHorizontalXXL,
    display: "flex", alignItems: "center", gap: "16px",
    textDecoration: "none", color: "inherit", cursor: "pointer",
    transition: "border-color .2s ease, box-shadow .2s ease, transform .2s ease",
    ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
  },
  cardCentered: { flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "14px", "& h3": { fontSize: "1.45rem" }, "& svg": { width: "44px", height: "44px" } },
  // Icon pinned top-left, label pinned bottom-left (fills the card height).
  // The icon sits in a padded rounded chip.
  cardStacked: {
    flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", textAlign: "left", gap: "16px",
    transition: "border-color .2s ease, box-shadow .2s ease, transform .2s ease",
    // Match the content cards: light border-highlight on hover, no scale.
    ":hover": { transform: "translateY(-2px)", border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)" },
    "& svg": { width: "40px", height: "40px", strokeWidth: 1 },
  },
  icon: {
    color: tokens.colorNeutralForeground4,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  // Padding around the icon in the stacked layout (no background); brand red.
  iconChip: { padding: "12px", color: "var(--maq-red)" },
  text: { display: "flex", flexDirection: "column", gap: "6px" },
  title: { fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-.3px", color: "var(--maq-heading-color)", lineHeight: 1.25, margin: 0 },
  desc: { fontSize: "var(--fs-small)", lineHeight: 1.5, color: "var(--maq-muted-color)", margin: 0 },
  // Stacked cards match the page's content cards: --fs-h5 title + --fs-body-lg desc.
  titleStacked: { fontSize: "var(--fs-h5)", letterSpacing: "-.5px", lineHeight: 1.2 },
  descStacked: { fontSize: "var(--fs-body-lg)", lineHeight: 1.55 },
});

export function IconCard({ label, to, icon, desc, centered = false, stacked = false, motionProps }: {
  label: string;
  to: string;
  icon?: ReactNode;
  desc?: string;
  centered?: boolean;
  stacked?: boolean;
  /** Framer-motion props (e.g. a scroll-reveal) spread onto the card. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  motionProps?: any;
}) {
  const s = useStyles();
  return (
    <MotionLink to={to} className={mergeClasses(s.card, centered && s.cardCentered, stacked && s.cardStacked)} {...(motionProps ?? {})}>
      {icon ? <div className={mergeClasses(s.icon, stacked && s.iconChip)} aria-hidden>{icon}</div> : null}
      <div className={s.text}>
        <h3 className={mergeClasses(s.title, stacked && s.titleStacked)}>{label}</h3>
        {desc ? <p className={mergeClasses(s.desc, stacked && s.descStacked)}>{desc}</p> : null}
      </div>
    </MotionLink>
  );
}
