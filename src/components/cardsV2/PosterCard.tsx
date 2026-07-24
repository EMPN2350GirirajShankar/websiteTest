import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowUpRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ==================================================================
   PosterCard (V2) — vertical "image on top, text below" card. The
   whole card is a link (keyboard-accessible). Inherits the standard
   card hover states: light border-highlight, image zoom (`.zoom-img`),
   and the optional "Learn more" foot color/arrow.

   Configurable per use: image aspect ratio + object-fit (illustration
   art reads best `contain`; photography `cover`). Used by any 3-up
   card grid so the language stays identical across pages.
   ================================================================== */

const MotionLink = motion.create(Link);
const MotionA = motion.a;

const useStyles = makeStyles({
  card: {
    display: "flex", flexDirection: "column", height: "100%", overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground1,
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    textDecoration: "none", color: "inherit", cursor: "pointer",
    transition: "border-color .2s ease, box-shadow .2s ease, transform .2s ease",
    ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
    ":hover .zoom-img": { transform: "scale(1.06)" },
    ":hover .sc-foot": { color: "var(--maq-red-dark)" },
    ":hover .sc-foot-arrow": { transform: "translateX(4px)" },
  },
  imgWrap: { position: "relative", width: "100%", overflow: "hidden", backgroundColor: "#F7F7F7" },
  img: { display: "block", width: "100%", height: "100%", objectPosition: "center", transition: "transform .35s ease" },
  text: { display: "flex", flexDirection: "column", flex: 1, gap: "10px", padding: "clamp(24px, 2.5vw, 32px)" },
  eyebrow: { margin: 0, fontSize: "var(--fs-eyebrow)", fontWeight: 500, letterSpacing: 0, color: tokens.colorNeutralForeground4 },
  title: { fontSize: "var(--fs-h5)", fontWeight: 600, letterSpacing: "-.5px", lineHeight: 1.2, color: "var(--maq-heading-color)", margin: 0 },
  desc: { fontSize: "var(--fs-body-lg)", lineHeight: 1.55, color: "var(--maq-muted-color)", margin: 0 },
  foot: { marginTop: "auto", paddingTop: "16px", fontSize: "var(--fs-small)", fontWeight: 500, color: "var(--maq-red)", display: "inline-flex", alignItems: "center", gap: "7px", transition: "color .18s" },
  footArrow: { display: "inline-flex", transition: "transform .18s" },
});

export function PosterCard({
  to,
  img,
  imgAlt = "",
  imgFit = "cover",
  aspectRatio = "16 / 9",
  eyebrow,
  title,
  desc,
  cta,
  deriveFormats = true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  motionProps,
}: {
  to: string;
  img?: string;
  imgAlt?: string;
  /** `contain` for illustration art, `cover` for photography (default). */
  imgFit?: "cover" | "contain";
  /** e.g. "16 / 9" (default) or "16 / 10". */
  aspectRatio?: string;
  eyebrow?: string;
  title: string;
  desc: string;
  /** Optional "Learn more"-style foot label. */
  cta?: string;
  /** When true, tries sibling .avif/.webp for .png paths. Disable if those files do not exist. */
  deriveFormats?: boolean;
  /** Framer-motion props (e.g. a scroll-reveal) spread onto the card. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  motionProps?: any;
}) {
  const s = useStyles();
  const isPng = Boolean(deriveFormats && img && /\.png(?=($|\?))/i.test(img));
  const avifSrc = isPng ? img!.replace(/\.png(?=($|\?))/i, ".avif") : undefined;
  const webpSrc = isPng ? img!.replace(/\.png(?=($|\?))/i, ".webp") : undefined;
  const content = (
    <>
      <div className={s.imgWrap} style={{ aspectRatio }} aria-hidden>
        {
          img && (
            <picture style={{ display: "block", width: "100%", height: "100%" }}>
              {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
              {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
              <img src={img} alt={imgAlt} className={`${s.img} zoom-img`} style={{ objectFit: imgFit }} loading="lazy" decoding="async" />
            </picture>
          )
        }
      </div>
      <div className={s.text}>
        {/* eyebrow hidden intentionally */}
        <h3 className={s.title}>{title}</h3>
        <p className={s.desc}>{desc}</p>
        {cta ? (
          <span className={`${s.foot} sc-foot`}>
            {cta} <span className={`${s.footArrow} sc-foot-arrow`}><ArrowUpRight16Regular /></span>
          </span>
        ) : null}
      </div>
    </>
  );

  const isExternal = /^https?:\/\//i.test(to);
  if (isExternal) {
    return (
      <MotionA href={to} target="_blank" rel="noopener noreferrer" className={s.card} {...(motionProps ?? {})}>
        {content}
      </MotionA>
    );
  }

  return (
    <MotionLink to={to} className={s.card} {...(motionProps ?? {})}>
      {content}
    </MotionLink>
  );
}
