import { makeStyles } from "@fluentui/react-components";

// Industry hero modeled on the Services / Data & AI platforms hero
// (ServiceHeroData): rendered red eyebrow, canonical `.maq-h1` title, `.maq-lead`
// subhead on the left, and an optional full-height image on the right. Without an
// image it renders as a text-only band.
export interface IndustryHeroV2Props {
  eyebrow: string;
  h1: string;
  subhead: string;
  image?: string;
  imageAlt?: string;
}

const useStyles = makeStyles({
  wrap: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "0 var(--section-pad-x)",
    height: "360px",
    "@media (max-width: 960px)": { height: "auto", padding: "40px var(--section-pad-x)" },
  },
  // Text-only variant: no fixed height, so the band hugs the copy.
  wrapText: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "56px var(--section-pad-x)",
    "@media (max-width: 960px)": { padding: "44px var(--section-pad-x)" },
  },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr", "& > *:last-child": { display: "none" } },
  },
  // Text-only keeps the same two-column grid so the copy stays the width it was
  // in the left (1.3fr) column; the right column is simply left empty.
  gridTextOnly: {
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
  // Typography from the canonical `.maq-h1`; only layout here.
  h1: { margin: "0 0 16px" },
  // Size/line-height from the canonical `.maq-lead`; only color + layout here.
  sub: { color: "var(--maq-gray-600)", marginBottom: "24px", maxWidth: "640px" },
  visual: {
    background: "transparent",
    border: "none",
    borderRadius: "12px",
    padding: "0",
    display: "grid",
    gap: "0",
    boxShadow: "none",
    color: "var(--maq-ink)",
  },
  heroImage: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
    borderRadius: "12px",
  },
});

export function IndustryHeroV2({ eyebrow, h1, subhead, image, imageAlt }: IndustryHeroV2Props) {
  const s = useStyles();

  const copy = (
    <div>
      <span className={s.eyebrow}>{eyebrow}</span>
      <h1 className={`maq-h1 ${s.h1}`}>{h1}</h1>
      <p className={`maq-lead ${s.sub}`}>{subhead}</p>
    </div>
  );

  if (!image) {
    return (
      <section className={s.wrapText}>
        <div className={s.gridTextOnly}>{copy}</div>
      </section>
    );
  }

  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        {copy}
        <div className={s.visual}>
          <img
            className={s.heroImage}
            src={image}
            alt={imageAlt ?? ""}
            loading="eager"
            decoding="async"
            width={560}
            height={420}
          />
        </div>
      </div>
    </section>
  );
}
