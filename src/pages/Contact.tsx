import { makeStyles } from "@fluentui/react-components";
import {
  ArrowRight16Regular,
  Location24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  page: {
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    position: "relative",
    overflow: "hidden",
  },
  heroInner: {
    // 1504 = 1440 content + 32px gutter each side (border-box), so the inner
    // content column is 1440px wide and left-aligns with the footer/home page.
    maxWidth: "1504px",
    margin: "0 auto",
    // Match the other About heroes' 40px top/bottom padding.
    padding: "40px 32px",
    position: "relative",
    zIndex: 1,
    "@media (max-width: 960px)": {
      padding: "40px 20px",
    },
  },
  heroContent: {
    maxWidth: "720px",
  },
  eyebrow: {
    margin: "0 0 10px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
  },
  title: {
    margin: "0 0 10px",
  },
  titleAccent: {
    color: "var(--maq-red)",
  },
  summary: {
    margin: "0 0 14px",
    fontSize: "15px",
    lineHeight: 1.5,
    color: "#2f3a4f",
    maxWidth: "640px",
  },
  cta: {
    minHeight: "38px",
    width: "122px",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },

  // Full-bleed section band (matches the rest of the site); content is capped
  // by the inner container below.
  officesSection: {
    padding: "56px 32px",
    backgroundColor: "#fff",
    "@media (max-width: 960px)": {
      padding: "40px 20px",
    },
  },
  officesInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  officesTitle: {
    margin: "0 0 10px",
    "@media (max-width: 960px)": {
      fontSize: "28px",
      marginBottom: "12px",
    },
  },
  contactLine: {
    margin: "28px 0 0",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
  },
  contactLink: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
  officeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: "10px",
    "@media (max-width: 1100px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "12px",
    },
    "@media (max-width: 860px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "@media (max-width: 620px)": {
      gridTemplateColumns: "1fr",
    },
  },
  officeCard: {
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
    color: "inherit",
    textDecoration: "none",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: "238px",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
    ":focus-visible": {
      outline: "2px solid var(--maq-red)",
      outlineOffset: "2px",
    },
  },
  officeMedia: {
    aspectRatio: "2 / 1",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  locationPin: {
    position: "absolute",
    top: "7px",
    left: "7px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "var(--maq-red)",
    border: "1px solid rgba(200, 16, 46, 0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(15, 23, 42, 0.18)",
  },
  officeBody: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "8px 10px 9px",
    flex: 1,
  },
  officeCity: {
    margin: 0,
    fontSize: "12.5px",
    lineHeight: 1.25,
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  officeAddress: {
    margin: 0,
    fontSize: "12px",
    lineHeight: 1.4,
    whiteSpace: "pre-line" as const,
    color: "var(--maq-ink)",
  },
  officePhone: {
    margin: 0,
    fontSize: "11px",
    lineHeight: 1.3,
    color: "var(--maq-gray-500)",
  },
  directionsLink: {
    marginTop: "auto",
    display: "inline-flex",
    alignItems: "center",
    gap: "3px",
    fontSize: "12px",
    lineHeight: 1.2,
    fontWeight: 700,
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": {
      color: "var(--maq-red-dark)",
    },
  },
  hiddenText: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
});

type Office = {
  city: string;
  address: string;
  phone?: string;
  maps: string;
  image: string;
};

const offices: Office[] = [
  {
    city: "Redmond, Washington, USA",
    address: "2027 152nd Avenue NE\nRedmond, WA 98052",
    phone: "+1 425-526-5399",
    maps: "https://maps.app.goo.gl/Bu9iNvKvn7m9Wvkb6",
    image: "/images/ContactUs/redmond.jpg",
  },
  {
    city: "Plano, Texas, USA",
    address:
      "Lincoln Legacy Two\n5810 Tennyson Parkway, Suite 100\nPlano, TX 75024",
    phone: "+1 425-526-5399",
    maps: "https://maps.app.goo.gl/bipnas8wN2V8Uqst5",
    image: "/images/ContactUs/plano.jpg",
  },
  {
    city: "Noida, Uttar Pradesh, India",
    address:
      "A3, Sector 145, Near Metro Station\nNoida\nG. B. Nagar, UP 201 301",
    phone: "+91 908 256 1327",
    maps: "https://maps.app.goo.gl/GZT67ZkYkp1ajCux6",
    image: "/images/ContactUs/noida.webp",
  },
  {
    city: "Hyderabad, Telangana, India",
    address:
      "Level 7, Astro, aVance Business Hub\nBehind Dell Campus\nHITEC City, Madhapur\nHyderabad 500 081",
    phone: "+91 40 4010 0570",
    maps: "https://maps.app.goo.gl/oUZoswcXNcEiiBmk8",
    image: "/images/ContactUs/Hyderabad.jpg",
  },
  {
    city: "Mumbai, Maharashtra, India",
    address:
      "201, Meadows Building\nSahar Plaza, Andheri Kurla Road\nAndheri East\nMumbai 400 059",
    phone: "+91 908 256 1327",
    maps: "https://maps.app.goo.gl/dnkW8CJhJF9fbZWT9",
    image: "/images/ContactUs/mumbai.jpg",
  },
];

export function Contact() {
  const s = useStyles();

  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            {/* <p className={s.eyebrow}>Contact Us</p> */}
            <h1 className={`maq-h1 ${s.title}`}>
              Let&apos;s build what&apos;s next,
              <br />
              <span className={s.titleAccent}>together.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className={s.officesSection} aria-labelledby="global-offices-heading">
        <div className={s.officesInner}>
          <h2 id="global-offices-heading" className={`maq-h2 ${s.officesTitle}`}>
            Our global offices
          </h2>
          <div className={s.officeGrid}>
            {offices.map((office) => (
              <a
                className={s.officeCard}
                href={office.maps}
                target="_blank"
                rel="noopener noreferrer"
                key={office.city}
                aria-label={`Get directions to ${office.city}`}
              >
                <div
                  className={s.officeMedia}
                  style={{ backgroundImage: `url('${office.image}')` }}
                  aria-hidden="true"
                >
                </div>

                <div className={s.officeBody}>
                  <h3 className={s.officeCity}>{office.city}</h3>
                  <p className={s.officeAddress}>{office.address}</p>
                  {office.phone && <p className={s.officePhone}>{office.phone}</p>}
                  <span className={s.directionsLink}>
                    Get directions
                    <ArrowRight16Regular fontSize={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className={s.contactLine}>
            Have a question or ready to start a project? Contact us at{" "}
            <a className={s.contactLink} href="mailto:CustomerSuccess@MAQSoftware.com">
              CustomerSuccess@MAQSoftware.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
