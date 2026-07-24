import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--colorNeutralBackground3)", padding: "48px 32px 56px" },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  h1: {
    display: "block",
    margin: "0 0 16px",
  },
  sub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginBottom: "24px",
    maxWidth: "640px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },
  imageWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
  },
  image: {
    width: "100%",
    maxWidth: "520px",
    height: "auto",
    display: "block",
  },
});

export interface PartnershipHeroProps {
  h1: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
  imageAlt: string;
  extraCta?: ReactNode;
}

export function PartnershipHero({
  h1,
  subhead,
  ctaLabel,
  ctaHref,
  imageUrl,
  imageAlt,
  extraCta,
}: PartnershipHeroProps) {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <h1 className={`maq-h1 ${s.h1}`}>{h1}</h1>
          <p className={s.sub}>{subhead}</p>
          <div className={s.btns}>
            <PrimaryButton
              size="large"
              onClick={() => handleContactClick(ctaHref)}
            >
              {ctaLabel}
            </PrimaryButton>
            {extraCta}
          </div>
        </div>
        <div className={s.imageWrap}>
          <img
            className={s.image}
            src={imageUrl}
            alt={imageAlt}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
