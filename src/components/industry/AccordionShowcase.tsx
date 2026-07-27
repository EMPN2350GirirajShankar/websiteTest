import { useState, type ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Add20Regular, Subtract20Regular } from "@fluentui/react-icons";

/* ==================================================================
   AccordionShowcase — a vertical accordion (one item open at a time) on
   the left, with a single static image on the right. One item is always
   open. Used for feature/agent lists paired with a supporting graphic.
   ================================================================== */

export interface AccordionShowcaseItem {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  desc: string;
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px" },
  body: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "stretch",
    "@media (max-width: 900px)": { gridTemplateColumns: "1fr", gap: "28px" },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid var(--maq-border)",
  },
  item: { borderTop: "1px solid var(--maq-border)" },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "20px 0",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "inherit",
    color: "var(--maq-black)",
    transitionProperty: "color",
    transitionDuration: "0.15s",
    ":hover": { color: "var(--maq-red)" },
  },
  headerIcon: {
    color: "var(--maq-red)",
    display: "flex",
    flexShrink: 0,
    "& svg": { width: "22px", height: "22px" },
  },
  headerTitle: { fontSize: "18px", fontWeight: 700, lineHeight: 1.3, flex: 1 },
  indicator: { color: "var(--maq-gray-500)", display: "flex", flexShrink: 0 },
  panel: {
    paddingLeft: "34px", // icon (22px) + gap (12px) so text aligns under the title
    paddingRight: "12px",
    paddingBottom: "20px",
  },
  subtitle: {
    margin: "0 0 6px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-gray-500)",
  },
  desc: {
    margin: 0,
    fontSize: "16px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
  },
  imageWrap: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    backgroundColor: "var(--maq-surface-cream)",
    minHeight: "300px",
    "@media (max-width: 900px)": { minHeight: 0, aspectRatio: "16 / 9" },
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
});

export function AccordionShowcase({
  sectionId,
  title = "Solutions",
  items,
  image,
  imageAlt,
}: {
  sectionId?: string;
  title?: string;
  items: AccordionShowcaseItem[];
  image: string;
  imageAlt: string;
}) {
  const s = useStyles();
  const [active, setActive] = useState(0);

  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        <div className={s.body}>
          <div className={s.list}>
            {items.map((it, i) => {
              const open = i === active;
              return (
                <div className={s.item} key={it.title}>
                  <button
                    type="button"
                    className={s.header}
                    aria-expanded={open}
                    onClick={() => setActive(i)}
                  >
                    <span className={s.headerIcon} aria-hidden="true">
                      {it.icon}
                    </span>
                    <span className={s.headerTitle}>{it.title}</span>
                    <span className={s.indicator} aria-hidden="true">
                      {open ? <Subtract20Regular /> : <Add20Regular />}
                    </span>
                  </button>
                  {open ? (
                    <div className={s.panel}>
                      {it.subtitle ? <p className={s.subtitle}>{it.subtitle}</p> : null}
                      <p className={s.desc}>{it.desc}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className={s.imageWrap}>
            <img
              className={s.image}
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
