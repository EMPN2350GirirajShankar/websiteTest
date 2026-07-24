import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { FeatureCard } from "../cards/FeatureCard";
import { SecondaryButton } from "../buttons";

const useStyles = makeStyles({
  section: {
    padding: "64px 32px",
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  inner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  headLeft: {
    marginBottom: "32px",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  titleLg: {
    display: "block",
    margin: 0,
    textAlign: "left",
  },
  intro: {
    fontSize: "16px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    marginTop: "12px",
    marginBottom: "0",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    marginTop: "32px",
    marginBottom: "40px",
  },
  ctaContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

export interface BulletGroup {
  title: string;
  items: ReactNode[];
}

export interface PartnershipMarketplaceProps {
  eyebrow?: string;
  title: string;
  sectionId?: string;
  intro: string;
  bulletGroups: BulletGroup[];
  ctaLabel: string;
  ctaHref: string;
  ctaOpenInNewTab?: boolean;
}

export function PartnershipMarketplace({
  eyebrow,
  title,
  sectionId,
  intro,
  bulletGroups,
  ctaLabel,
  ctaHref,
  ctaOpenInNewTab = false,
}: PartnershipMarketplaceProps) {
  const s = useStyles();
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.headLeft}>
          {/* eyebrow hidden intentionally */}
          <h2 className={`maq-h2 ${s.titleLg}`}>{title}</h2>
          {/* {intro && <p className={s.intro}>{intro}</p>} */}
        </div>

        <div className={s.grid}>
          {bulletGroups.map((group) => (
            <FeatureCard
              key={group.title}
              name={group.title}
              bullets={group.items}
            />
          ))}
        </div>

        <div className={s.ctaContainer}>
          <SecondaryButton
            size="large"
            className="maq-equal-cta"
            href={ctaHref}
            target={ctaOpenInNewTab ? "_blank" : undefined}
            rel={ctaOpenInNewTab ? "noopener noreferrer" : undefined}
          >
            {ctaLabel}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
