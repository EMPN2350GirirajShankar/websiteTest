import { makeStyles } from "@fluentui/react-components";

/* ==================================================================
   ServiceDifferentiator — a centered section heading above a single
   large full-width image (e.g. a delivery-process / differentiator
   diagram). Title + image are passed in so it can be reused.
   ================================================================== */

const useStyles = makeStyles({
  section: {
    padding: "48px 32px",
    backgroundColor: "#fff",
    "@media (max-width: 720px)": { display: "none" },
  },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px", textAlign: "left" },
  image: { width: "100%", height: "auto", display: "block" },
});

export function ServiceDifferentiator({
  title = "Our differentiator",
  image,
  imageAlt = "",
}: {
  title?: string;
  image: string;
  imageAlt?: string;
}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        <img
          className={s.image}
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
