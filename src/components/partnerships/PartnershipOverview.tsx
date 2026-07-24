import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  text: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
});

export interface PartnershipOverviewProps {
  badgeUrl: string;
  badgeAlt: string;
  description: string;
}

export function PartnershipOverview({
  description,
}: PartnershipOverviewProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.grid}>
        <p className={s.text}>{description}</p>
      </div>
    </section>
  );
}
