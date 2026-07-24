import { makeStyles } from "@fluentui/react-components";
import { FeatureCard } from "../cards/FeatureCard";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  headLeft: { marginBottom: "20px", textAlign: "center" as const },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
    textAlign: "center" as const,
  },
  titleLg: {
    display: "block",
    margin: 0,
    textAlign: "left" as const,
  },
  list: {
    display: "grid",
    gap: "16px",
  },
});

export interface Offering {
  eyebrow: string;
  title: string;
  desc: string;
}

export interface PartnershipOfferingsProps {
  eyebrow?: string;
  title: string;
  sectionId?: string;
  offerings: Offering[];
}

export function PartnershipOfferings({
  eyebrow,
  title,
  sectionId,
  offerings,
}: PartnershipOfferingsProps) {
  const s = useStyles();
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.headLeft}>
          {/* eyebrow hidden intentionally */}
          <h2 className={`maq-h2 ${s.titleLg}`}>{title}</h2>
        </div>
        <div className={s.list}>
          {offerings.map((o) => (
            <FeatureCard
              key={o.title}
              name={o.title}
              description={o.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
