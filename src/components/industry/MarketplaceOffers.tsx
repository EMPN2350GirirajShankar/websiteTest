import { makeStyles } from "@fluentui/react-components";
import { ResourceMarketplaceCard } from "../cards/ResourceMarketplaceCard";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
  title: {
    margin: "0 0 6px",
    textAlign: "left",
  },
  sub: {
    fontSize: "14px",
    color: "var(--maq-gray-600)",
    margin: "0 auto",
    maxWidth: "720px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
});

export interface MarketplaceOffer {
  pill: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
}

interface MarketplaceOffersProps {
  title?: string;
  sub: string;
  offers: MarketplaceOffer[];
}

export function MarketplaceOffers({
  title = "Our Marketplace Offers",
  sub,
  offers,
}: MarketplaceOffersProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
          {/* <p className={s.sub}>{sub}</p> */}
        </div>
        <div className={s.grid}>
          {offers.map((o) => (
            <ResourceMarketplaceCard
              key={o.title}
              title={o.title}
              description={o.desc}
              href={o.href}
              eyebrow={o.pill}
              imageUrl={o.image}
              ctaLabel="Read more"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
