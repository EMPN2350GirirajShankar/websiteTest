import { makeStyles, tokens } from "@fluentui/react-components";
import {
  ArrowRight20Regular,
  Brain24Regular,
  TicketDiagonal24Regular,
} from "@fluentui/react-icons";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button, PrimaryButton, TextButton } from "../buttons";

export interface EventFeaturedSession {
  label: string;
  value: string;
}

export interface EventTalk {
  type: string;
  title: string;
  desc: string;
  time: string;
  room: string;
  speakers: string[];
  href: string;
}

export interface EventResource {
  label: string;
  href: string;
  desc: string;
}

export interface EventSolution {
  name: string;
  desc: string;
  href: string;
}

export interface ConferenceEventPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  promo: string;
  registerUrl: string;
  featuredSessions: EventFeaturedSession[];
  talks: EventTalk[];
  offerings: string[];
  resources: EventResource[];
  solutions: EventSolution[];
  contactSubject: string;
}

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "64px 32px 56px",
    position: "relative",
    overflow: "hidden",
  },
  heroInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "48px",
    alignItems: "center",
    position: "relative",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
    },
  },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  h1: {
    margin: "0 0 16px",
  },
  sub: {
    fontSize: "16px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 0 20px",
    maxWidth: "720px",
  },
  promo: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "8px",
    padding: "10px 12px",
    fontSize: "13px",
    fontWeight: 700,
    marginBottom: "24px",
  },
  btns: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  heroPanel: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "28px",
    boxShadow: "var(--maq-shadow-sm)",
  },
  panelTitle: {
    margin: "0 0 18px",
  },
  eventGrid: {
    display: "grid",
    gap: "14px",
  },
  eventRow: {
    display: "grid",
    gridTemplateColumns: "40px 1fr",
    gap: "12px",
    alignItems: "start",
    cursor: "pointer",
    padding: "12px",
    borderRadius: "8px",
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "var(--maq-red-pale)",
    },
  },
  iconBox: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  eventLabel: {
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "2px",
  },
  eventValue: {
    fontSize: "14px",
    color: "var(--maq-ink)",
    lineHeight: 1.5,
  },
  section: {
    padding: "56px 32px",
    backgroundColor: "#fff",
  },
  sectionAlt: {
    padding: "56px 32px",
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  inner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  head: {
    textAlign: "center",
    marginBottom: "28px",
  },
  title: {
    margin: "0 0 10px",
    textAlign: "left",
  },
  sectionSub: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 auto",
    maxWidth: "720px",
    textAlign: "center",
  },
  talksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
    "@media (max-width: 860px)": {
      gridTemplateColumns: "1fr",
    },
  },
  talkCard: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  talkTitle: {
    fontSize: "20px",
    lineHeight: 1.28,
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
  },
  bodyText: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    margin: 0,
  },
  talkDetails: {
    display: "grid",
    gap: "6px",
    fontSize: "13px",
    color: "var(--maq-ink)",
  },
  speakers: {
    borderTop: "1px solid var(--maq-border)",
    paddingTop: "14px",
    display: "grid",
    gap: "4px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    gap: "16px",
  },
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
    lineHeight: 1.35,
  },
  resourcesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 820px)": {
      gridTemplateColumns: "1fr",
    },
  },
  resourceLink: {
    textDecoration: "none",
    color: "inherit",
  },
  productCard: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "20px",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    minHeight: "150px",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  productName: {
    fontSize: "17px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "8px",
  },
  productDesc: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.55,
    marginBottom: "16px",
    flex: 1,
  },
  more: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    },
});

function ProductLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  if (href.startsWith("http")) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}

export function ConferenceEventPage(props: ConferenceEventPageProps) {
  const s = useStyles();

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div>
            {/* <span className={s.eyebrow}>{props.eyebrow}</span> */}
            <h1 className={`maq-h1 ${s.h1}`}>{props.title}</h1>
            <p className={s.sub}>{props.subtitle}</p>
            <div className={s.promo}>
              <TicketDiagonal24Regular />
              {props.promo}
            </div>
            <div className={s.btns}>
              <PrimaryButton
                href={props.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                iconBefore={<TicketDiagonal24Regular />}
              >
                Register now
              </PrimaryButton>
            </div>
          </div>

          <aside className={s.heroPanel} aria-label="Featured sessions">
            <h2 className={`maq-h2 ${s.panelTitle}`}>Featured sessions</h2>
            <div className={s.eventGrid}>
              {props.featuredSessions.map((item) => (
                <div
                  key={item.label}
                  className={s.eventRow}
                  onClick={() =>
                    document
                      .getElementById("talks-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <div className={s.iconBox}><Brain24Regular /></div>
                  <div>
                    <div className={s.eventLabel}>{item.label}</div>
                    <div className={s.eventValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className={s.section} id="talks-section">
        <div className={s.inner}>
          <div className={s.head}>
            {/* <span className={s.eyebrow}>Our featured talks</span> */}
            <h2 className={`maq-h2 ${s.title}`}>Sessions from MAQ Software leaders</h2>
          </div>
          <div className={s.talksGrid}>
            {props.talks.map((talk) => (
              <article key={talk.title} className={s.talkCard}>
                <h3 className={s.talkTitle}>{talk.title}</h3>
                <p className={s.bodyText}>{talk.desc}</p>
                <div className={s.talkDetails}>
                  <strong>{talk.time}</strong>
                  <span>{talk.room}</span>
                </div>
                <div className={s.speakers}>
                  <strong>Speakers</strong>
                  {talk.speakers.map((speaker) => (
                    <span key={speaker} className={s.bodyText}>{speaker}</span>
                  ))}
                </div>
                <TextButton
                  href={talk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  iconAfter={<ArrowRight20Regular />}
                >
                  Read more
                </TextButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.head}>
            {/* <span className={s.eyebrow}>Our key services and offerings</span> */}
            <h2 className={`maq-h2 ${s.title}`}>Modernize Microsoft 365, Power Platform, Copilot, and AI</h2>
          </div>
          <div className={s.grid}>
            {props.offerings.map((item) => (
              <div key={item} className={s.card}>
                <h3 className={s.cardTitle}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.head}>
            {/* <span className={s.eyebrow}>For more information</span> */}
            <h2 className={`maq-h2 ${s.title}`}>Explore MAQ Software resources</h2>
          </div>
          <div className={s.resourcesGrid}>
            {props.resources.map((resource) => (
              <ProductLink key={resource.label} href={resource.href} className={s.resourceLink}>
                <div className={s.card}>
                  <h3 className={s.cardTitle}>{resource.label}</h3>
                  <p className={s.bodyText}>{resource.desc}</p>
                  <span className={s.more}>
                    Open resource
                  </span>
                </div>
              </ProductLink>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.head}>
            {/* <span className={s.eyebrow}>Our solutions and accelerators</span> */}
            <h2 className={`maq-h2 ${s.title}`}>Solutions designed to improve and streamline your operations</h2>
          </div>
          <div className={s.grid}>
            {props.solutions.map((solution) => (
              <ProductLink key={solution.name} href={solution.href} className={s.productCard}>
                <div className={s.productName}>{solution.name}</div>
                <div className={s.productDesc}>{solution.desc}</div>
                <span className={s.more}>
                  Learn more
                </span>
              </ProductLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
