import { makeStyles } from "@fluentui/react-components";
import {
  Checkmark24Regular,
  Clock24Regular,
  Money24Regular,
  Chat24Regular,
  Star24Filled,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { AboutSpecializations } from "../components/about/AboutSpecializations";


// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    // Consistent About-page hero padding; height scales with the content.
    padding: "40px 32px",
  },
  heroInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "12px",
  },
  h1: {
    display: "block",
    margin: "0 0 16px",
  },
  heroSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    maxWidth: "600px",
    marginBottom: "28px",
  },
  // ── Shared section shell ──────────────────────────────────────────────────
  sectionWhite: {
    padding: "48px 32px",
    backgroundColor: "#fff",
  },
  sectionGray: {
    padding: "48px 32px",
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  inner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  sectionEyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "8px",
  },
  h2: {
    display: "block",
    margin: "0 0 32px",
    textAlign: "left",
    "@media (max-width: 560px)": {
      fontSize: "24px",
      lineHeight: 1.2,
    },
  },

  // ── Why MAQ ───────────────────────────────────────────────────────────────
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
    gap: "20px",
  },
  whyCard: {
    padding: "24px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "border-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
  whyIconWrap: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "var(--maq-red-pale)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--maq-red)",
  },
  whyTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
  },
  whyDesc: {
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  recognitionStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  recognitionCard: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "32px",
    alignItems: "center",
    padding: "28px 32px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    transition: "border-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  recognitionImgWrap: {
    width: "120px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  recognitionImg: {
    width: "120px",
    height: "auto",
    maxHeight: "120px",
    objectFit: "contain" as const,
    display: "block",
  },
  recognitionIconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    backgroundColor: "var(--maq-red-pale)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--maq-red)",
    flexShrink: 0,
  },
  recognitionTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
    textDecoration: "none",
    display: "block",
    ":hover": { color: "var(--maq-red)" },
  },
  recognitionDesc: {
    fontSize: "13.5px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // ── Certifications ────────────────────────────────────────────────────────
  certStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  certCard: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "32px",
    alignItems: "flex-start",
    padding: "28px 32px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    transition: "border-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  certIconWrap: {
    width: "120px",
    minHeight: "80px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: "8px",
  },
  certTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
    textDecoration: "none",
    display: "block",
    ":hover": { color: "var(--maq-red)" },
  },
  certDesc: {
    fontSize: "13.5px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const heroStats = [
  { metric: "11", label: "Microsoft specializations" },
  { metric: "4", label: "Microsoft solution partner designations" },
  { metric: "5K+", label: "Microsoft technical certifications" },
  { metric: "200+", label: "Microsoft Fabric solutions implemented" },
];

const whyItems = [
  {
    icon: <Checkmark24Regular />,
    title: "Continuous delivery",
    desc: "Get working software through daily build and test, with frequent status updates.",
  },
  {
    icon: <Clock24Regular />,
    title: "Faster implementation",
    desc: "Ship faster with 24/7 support from globally integrated teams.",
  },
  {
    icon: <Money24Regular />,
    title: "Cost-effective process",
    desc: "Optimize at every stage of development to keep costs low.",
  },
  {
    icon: <Chat24Regular />,
    title: "Immediate response",
    desc: "Adapt to changing business needs through daily delivery and feedback.",
  },
];

const recognitions = [
  {
    imgSrc: "/logos/Inc5000-2.png" as string | null,
    title: "Thirteen-Time Honoree, Inc. 5000, Fastest Growing Companies in America",
    href: "https://www.inc.com/profile/maq-software",
    desc: "Inc. has honored MAQ Software on its prestigious Inc. 5000 list thirteen times, a rare achievement. Since 2007, Inc. magazine has recognized more than 35,000 unique companies on its Inc. 5000 list based on the sales growth of the companies. Less than 0.3% of Inc. 5000 companies demonstrate sustained growth by appearing thirteen or more times.",
  },
  {
    imgSrc: "/logos/Power_BI_Partner_Jul2026.webp" as string | null,
    title: "2021 Microsoft Power BI Partner of the Year — Global Award Winner",
    href: "https://news.maqsoftware.com/2021/07/maq-software-honored-as-winner-of-2021.html",
    desc: "The Microsoft Partner of the Year award recognizes Microsoft partners that deliver outstanding solutions and innovations using Microsoft technologies. Microsoft awarded MAQ Software this global award for delivering innovative business intelligence and analytics solutions using Microsoft Power BI.",
  },
  {
    imgSrc: "/logos/Fastest_Growing_Companies.png" as string | null,
    title: "Puget Sound Business Journal's 100 Fastest-Growing Private Companies in Washington State",
    href: "https://www.bizjournals.com/seattle/stories/2009/10/19/focus2.html",
    desc: "MAQ Software is recognized as one of the fastest growing private companies in Washington State for five consecutive years. Because MAQ Software has earned a spot on the list four or more years, we are featured in the Business Journal Hall of Fame.",
  },
];

const certifications = [
  {
    imgSrc: "/logos/ISO-icon-27001.png",
    title: "ISO 27001:2022 – Information Security",
    href: "https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/IS%20592346",
    desc: "MAQ Software is certified ISO 27001:2022 by British Standards Institution. ISO 27001 standards, the only auditable international standard, provide an Information Security Management Systems (ISMS) model for adequate and proportionate security controls to protect information assets.",
  },
  {
    imgSrc: "/logos/ISO_27701_27001_Logo.png",
    title: "ISO/IEC 27701:2019 – Privacy Information Management",
    href: "https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/PM%20747130",
    desc: "MAQ Software is certified ISO 27701:2019 by British Standards Institution. ISO 27701 standards provide guidance for establishing, implementing, maintaining and continually improving a Privacy Information Management System (PIMS). They serve as an extension of ISO/IEC 27001 for privacy management within MAQ Software.",
  },
  {
    imgSrc: "/logos/ISO-icon-27018.png",
    title: "ISO/IEC 27018:2019 – Cloud Security",
    href: "https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/PII%20732855",
    desc: "MAQ Software is certified ISO/IEC 27018:2019 by British Standards Institution. ISO/IEC 27018:2019 is a code of practice that focuses on protection of personal data in the cloud. It is based on ISO/IEC information security standard 27002 and provides implementation guidance on ISO/IEC 27002 controls applicable to public cloud Personally Identifiable Information (PII).",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function AboutWhoWeAre() {
  const s = useStyles();

  return (
    <>
      {/* ── Hero ── */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <h1 className={`maq-h1 ${s.h1}`}>Who we are</h1>
          <p className={s.heroSub}>
            MAQ Software is a Microsoft Fabric Featured Partner that builds
            business intelligence and analytics for enterprise companies. Clients
            improve operations, reduce costs, increase sales, and build stronger
            customer relationships.
          </p>
        </div>
      </section>



      {/* ── Why Choose MAQ Software ── */}
      <section className={s.sectionGray}>
        <div className={s.inner}>
          <span className={`maq-h2 ${s.h2}`}>Why choose MAQ Software</span>
          <div className={s.whyGrid}>
            {whyItems.map((item) => (
              <div key={item.title} className={s.whyCard}>
                <div className={s.whyIconWrap}>{item.icon}</div>
                <p className={s.whyTitle}>{item.title}</p>
                <p className={s.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Microsoft specializations ── */}
      <AboutSpecializations />

      {/* ── Recognitions ── */}
      <section className={s.sectionGray}>
        <div className={s.inner}>
          <span className={`maq-h2 ${s.h2}`}>Recognitions</span>
          <div className={s.recognitionStack}>
            {recognitions.map((r) => (
              <div key={r.title} className={s.recognitionCard}>
                {r.imgSrc ? (
                  <div className={s.recognitionImgWrap}>
                    <img
                      className={s.recognitionImg}
                      src={r.imgSrc}
                      alt={r.title}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={s.recognitionIconWrap}>
                    <Star24Filled style={{ fontSize: "24px" }} />
                  </div>
                )}
                <div>
                  <a
                    className={s.recognitionTitle}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {r.title}
                  </a>
                  <p className={s.recognitionDesc}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className={s.sectionWhite}>
        <div className={s.inner}>
          <span className={`maq-h2 ${s.h2}`}>Certifications</span>
          <div className={s.certStack}>
            {certifications.map((c) => (
              <div key={c.title} className={s.certCard}>
                {c.imgSrc ? (
                  <div className={s.certIconWrap}>
                    <img src={c.imgSrc} alt={c.title} style={{ width: "100px", height: "auto", maxHeight: "100px", objectFit: "contain" }} loading="lazy" />
                  </div>
                ) : (
                  <div className={s.certIconWrap}>
                    <ShieldCheckmark24Regular style={{ fontSize: "24px" }} />
                  </div>
                )}
                <div>
                  <a
                    className={s.certTitle}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.title}
                  </a>
                  <p className={s.certDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <TrustBanner /> */}
    </>
  );
}
