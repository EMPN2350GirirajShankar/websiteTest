import { useProductPageStyles } from "./productPageStyles";

export interface ProductCaseStudy {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

export function ProductCaseStudies({
  heading = "Case studies",
  eyebrow = "Case studies",
  studies,
}: {
  heading?: string;
  eyebrow?: string;
  studies: ProductCaseStudy[];
}) {
  const s = useProductPageStyles();
  return (
    <div className={s.inner}>
      <div className={s.headLeft}>
        {/* <span className={s.secEyebrow}>{eyebrow}</span> */}
        <h2 className={`maq-h2 ${s.titleLg}`}>{heading}</h2>
      </div>
      <div className={s.caseGrid}>
        {studies.map((c) => (
          <a
            key={c.title}
            className={s.caseCard}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              borderStyle: "solid",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--maq-black)",
                marginBottom: "8px",
                lineHeight: 1.35,
              }}
            >
              {c.title}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "var(--maq-gray-700)",
                lineHeight: 1.55,
                flex: 1,
                marginBottom: "12px",
              }}
            >
              {c.teaser}
            </div>
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                color: "var(--maq-red)",
                fontWeight: 700,
                lineHeight: 1.4,
                textDecoration: "none",
              }}
            >
              Read full story
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function CaseStudiesPlaceholder({ count = 3, heading = "Case studies", eyebrow = "Case studies" }: { count?: number; heading?: string; eyebrow?: string }) {
  const s = useProductPageStyles();
  return (
    <div className={s.inner}>
      <div className={s.headLeft}>
        {/* <span className={s.secEyebrow}>{eyebrow}</span> */}
        <h2 className={`maq-h2 ${s.titleLg}`}>{heading}</h2>
      </div>
      <div className={s.caseGrid}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={s.caseCard}>
            <div className={s.casePlaceholderTitle}>Case study {i + 1}</div>
            <div className={s.casePlaceholderText}>Content to be supplied by Sales post-launch.</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsPlaceholder({ count = 2, heading = "What our clients have to say", eyebrow = "Testimonials" }: { count?: number; heading?: string; eyebrow?: string }) {
  const s = useProductPageStyles();
  return (
    <div className={s.inner}>
      <div className={s.headLeft}>
        {/* <span className={s.secEyebrow}>{eyebrow}</span> */}
        <h2 className={`maq-h2 ${s.titleLg}`}>{heading}</h2>
      </div>
      <div className={s.quoteGrid}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={s.quote}>
            <p className={s.quoteBody}>Testimonial {i + 1} — content to be supplied by Sales post-launch.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
