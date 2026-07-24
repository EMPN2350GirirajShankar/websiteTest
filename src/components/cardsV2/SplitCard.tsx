import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowUpRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/* ==================================================================
   SplitCard (V2) — horizontal card: padded text on the left, image
   filling the right half. When `to` is set the whole card is a link
  (keyboard-accessible); otherwise it is a plain container.

   Inherits the standard card hover states — light border-highlight,
   image zoom (`.zoom-img`), and the "Learn more" foot color/arrow.
   The card height follows the 16/9 image; text centers within.
   ================================================================== */

const useStyles = makeStyles({
  card: {
    display: "grid", gridTemplateColumns: "1fr 1.1fr", alignItems: "stretch",
    backgroundColor: tokens.colorNeutralBackground1,
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    overflow: "hidden",
    textDecoration: "none", color: "inherit",
    transition: "border-color .2s ease, box-shadow .2s ease, transform .2s ease",
    ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
    ":hover .zoom-img": { transform: "scale(1.06)" },
    ":hover .sc-foot": { color: "var(--maq-red-dark)" },
    ":hover .sc-foot-arrow": { transform: "translateX(4px)" },
    "@media (max-width: 760px)": { gridTemplateColumns: "1fr" },
  },
  clickable: { cursor: "pointer" },
  text: {
    display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px",
    padding: "clamp(32px, 4vw, 56px)",
  },
  eyebrow: { margin: "0 0 8px", fontSize: "var(--fs-eyebrow)", fontWeight: 500, letterSpacing: 0, color: tokens.colorNeutralForeground4 },
  title: { fontSize: "var(--fs-h3)", fontWeight: 600, letterSpacing: "-.5px", lineHeight: 1.12, color: "var(--maq-heading-color)", margin: 0 },
  desc: { fontSize: "var(--fs-body-lg)", lineHeight: 1.6, color: "var(--maq-muted-color)", margin: 0, maxWidth: "52ch" },
  foot: { marginTop: "8px", fontSize: "var(--fs-small)", fontWeight: 500, color: "var(--maq-red)", display: "inline-flex", alignItems: "center", gap: "7px", transition: "color .18s" },
  footArrow: { display: "inline-flex", transition: "transform .18s" },
  cta: { marginTop: "4px" },
  imgWrap: {
    position: "relative", overflow: "hidden", width: "100%", aspectRatio: "16 / 9", backgroundColor: "#F7F7F7",
    "@media (max-width: 760px)": { order: 2 },
  },
  img: { display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform .35s ease" },
});

export function SplitCard({
  eyebrow,
  showEyebrow = true,
  title,
  desc,
  img,
  imgAlt = "",
  to,
  cta,
  children,
}: {
  eyebrow?: string;
  /** Hide the eyebrow without dropping the text (default: shown). */
  showEyebrow?: boolean;
  title: string;
  desc: string;
  img?: string;
  imgAlt?: string;
  /** When set, the whole card is a link to this route. */
  to?: string;
  /** Visual "Learn more"-style foot label (use with `to`, not a nested button). */
  cta?: string;
  /** Custom CTA node for the non-link variant (do not use together with `to`). */
  children?: ReactNode;
}) {
  const s = useStyles();
  const isPng = Boolean(img && /\.png(?=($|\?))/i.test(img));
  const avifSrc = isPng ? img!.replace(/\.png(?=($|\?))/i, ".avif") : undefined;
  const webpSrc = isPng ? img!.replace(/\.png(?=($|\?))/i, ".webp") : undefined;
  const inner = (
    <>
      <div className={s.text}>
        {/* eyebrow hidden intentionally */}
        <h3 className={s.title}>{title}</h3>
        <p className={s.desc}>{desc}</p>
        {cta ? (
          <span className={`${s.foot} sc-foot`}>
            {cta} <span className={`${s.footArrow} sc-foot-arrow`}><ArrowUpRight16Regular /></span>
          </span>
        ) : null}
        {children ? <div className={s.cta}>{children}</div> : null}
      </div>
      <div className={s.imgWrap} aria-hidden>
        {img && (
          <picture style={{ display: "block", width: "100%", height: "100%" }}>
            {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
            {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
            <img src={img} alt={imgAlt} className={`${s.img} zoom-img`} loading="lazy" decoding="async" />
          </picture>
        )}
      </div>
    </>
  );

  if (to) {
    return <Link to={to} className={`${s.card} ${s.clickable}`}>{inner}</Link>;
  }
  return <div className={s.card}>{inner}</div>;
}
