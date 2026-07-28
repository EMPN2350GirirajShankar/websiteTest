import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { assetUrl } from "../../lib/assetUrl";

export interface PartnershipHeroProps {
  eyebrow?: string;
  h1: string;
  subhead: string;
  /** Accepted for compatibility; the hero no longer renders a CTA button. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional supporting image on the right; without it the hero is text-only. */
  imageUrl?: string;
  imageAlt?: string;
  extraCta?: ReactNode;
}

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--colorNeutralBackground3)", padding: "48px var(--section-pad-x) 56px" },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  eyebrow: {
    fontSize: "var(--fs-eyebrow)",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    marginBottom: "12px",
    display: "block",
  },
  h1: {
    display: "block",
    margin: "0 0 16px",
  },
  // Size/line-height come from the canonical `.maq-lead` class; only color +
  // layout live here.
  sub: {
    color: "var(--maq-gray-600)",
    marginBottom: "0",
    maxWidth: "640px",
  },
  extra: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" },
  imageWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    // Once the hero stacks (≤960), left-align the image to the text margin above.
    "@media (max-width: 960px)": {
      justifyContent: "flex-start",
      padding: "8px 8px 8px 0",
    },
  },
  image: {
    width: "100%",
    maxWidth: "520px",
    height: "auto",
    display: "block",
  },
});

export function PartnershipHero({
  eyebrow = "Partnerships",
  h1,
  subhead,
  imageUrl,
  imageAlt,
  extraCta,
}: PartnershipHeroProps) {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h1 className={`maq-h1 ${s.h1}`}>{h1}</h1>
          <p className={`maq-lead ${s.sub}`}>{subhead}</p>
          {extraCta ? <div className={s.extra}>{extraCta}</div> : null}
        </div>
        {imageUrl ? (
          <div className={s.imageWrap}>
            <img
              className={s.image}
              src={assetUrl(imageUrl)}
              alt={imageAlt ?? ""}
              loading="eager"
              decoding="async"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
