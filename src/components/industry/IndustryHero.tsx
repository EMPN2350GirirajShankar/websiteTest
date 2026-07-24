import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--colorNeutralBackground3)", padding: "48px 32px" },
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
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  h1: {
    margin: "0 0 16px",
  },
  sub: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginBottom: "24px",
    maxWidth: "640px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },
  visualWrap: {
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "16px",
    padding: "20px",
    display: "grid",
    gap: "12px",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
    color: "var(--maq-ink)",
  },
});

export interface IndustryHeroProps {
  eyebrow: string;
  h1: string;
  subhead: string;
  mailSubject: string;
  visual: ReactNode;
}

export function IndustryHero({
  eyebrow,
  h1,
  subhead,
  mailSubject,
  visual,
}: IndustryHeroProps) {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          {/* <span className={s.eyebrow}>{eyebrow}</span> */}
          <h1 className={`maq-h1 ${s.h1}`}>{h1}</h1>
          <p className={s.sub}>{subhead}</p>
          <div className={s.btns}>
            <PrimaryButton
              size="large"
              onClick={() => handleContactClick(mailSubject)}
            >
              Contact us
            </PrimaryButton>
          </div>
        </div>
        {visual && (
          <div className={s.visualWrap} aria-hidden="true">
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}
