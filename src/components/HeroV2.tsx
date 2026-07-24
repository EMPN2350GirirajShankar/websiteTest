import { makeStyles } from "@fluentui/react-components";
import {
  Mail20Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { useContactAction } from "../lib/contact";
import { PrimaryButton, SecondaryButton } from "./buttons";
const useStyles = makeStyles({
  wrap: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "72px 32px",
    position: "relative",
    overflow: "hidden",
  },
  strands: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "55%",
    height: "100%",
    pointerEvents: "none",
    opacity: 0.45,
  },
  bgImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
    "@media (max-width: 768px)": {
      opacity: 0.8,
    },
  },
  heroGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(248,250,252,0.88) 0%, rgba(248,250,252,0.77) 32%, rgba(248,250,252,0.50) 56%, rgba(248,250,252,0.14) 76%, rgba(248,250,252,0) 100%)",
    zIndex: 1,
    "@media (max-width: 768px)": {
      background: "linear-gradient(to bottom, rgba(248,250,252,0.72) 0%, rgba(248,250,252,0.45) 50%, rgba(248,250,252,0.10) 100%)",
    },
  },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "56px",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
    },
  },
  h1: {
    fontSize: "52px",
    lineHeight: 1.1,
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 20px",
  },
  em: {
    color: "var(--maq-red)",
    fontStyle: "normal",
    fontWeight: 700,
  },
  sub: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-ink)",
    marginBottom: "32px",
    maxWidth: "580px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

  visual: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  statCard: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "16px",
    padding: "22px 26px",
    boxShadow: "0 4px 12px rgba(15,23,42,0.04)",
  },
  statIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "var(--maq-gray-100)",
    color: "var(--maq-gray-700)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  statBody: { display: "flex", flexDirection: "column" },
  statNumber: {
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
  },
  statAccent: { color: "var(--maq-red)", marginLeft: "2px" },
  statLabel: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-ink)",
    marginTop: "2px",
  },
  statMeta: {
    fontSize: "12px",
    color: "var(--maq-gray-500)",
    marginTop: "2px",
  },
});

export function Hero() {
  const s = useStyles();
  const navigate = useNavigate();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/home_mobile.png" />
        <img
          alt="Team collaborating in a modern office"
          className={s.bgImage}
          decoding="async"
          fetchPriority="high"
          height={911}
          loading="eager"
          src="/images/home-hero.webp"
          width={1726}
        />
      </picture>
      <div className={s.heroGradient}></div>
      {/* <svg
        className={s.strands}
        viewBox="0 0 600 600"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M 50 0 Q 250 80 600 60" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 100 0 Q 280 110 600 100" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 150 0 Q 320 140 600 140" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 200 0 Q 360 170 600 180" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 250 0 Q 400 200 600 220" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 300 0 Q 440 230 600 260" stroke="#fde7ea" strokeWidth="1" fill="none" />
        <path d="M 350 0 Q 480 260 600 300" stroke="#fde7ea" strokeWidth="1" fill="none" />
      </svg> */}

      <div className={s.grid}>
        <div>
          <h1 className={s.h1}>
            Harness data to drive <em className={s.em}>faster</em> decisions with AI-powered analytics
          </h1>
          <p className={s.sub}>
         MAQ Software helps enterprises transform data into decisions and AI into measurable business outcomes. Backed by 26 years of delivery excellence and a global team of certified engineers, we enable organizations to scale AI and agentic automation, modernize data and analytics platforms, and accelerate cloud transformation—delivering results with speed, quality, and confidence.
          </p>
          <div className={s.btns}>
            <PrimaryButton
              size="large"
              className="maq-equal-cta"
              onClick={() => handleContactClick()}
            >
              Contact Us
            </PrimaryButton>
            <SecondaryButton
              size="large"
              className="maq-secondary-btn maq-equal-cta"
              onClick={() => navigate("/insights/case-studies")}
            >
              Case Studies
            </SecondaryButton>
          </div>
        </div>

        {/* <div className={s.visual}>
          <div className={s.statCard}>
            <div className={s.statIcon}>
              <People24Regular />
            </div>
            <div className={s.statBody}>
              <div className={s.statNumber}>
                1,800<span className={s.statAccent}>+</span>
              </div>
              <div className={s.statLabel}>Engineers globally</div>
              <div className={s.statMeta}>Across 9 delivery centers</div>
            </div>
          </div>

          <div className={s.statCard}>
            <div className={s.statIcon}>
              <Trophy24Regular />
            </div>
            <div className={s.statBody}>
              <div className={s.statNumber}>
                26<span className={s.statAccent}>yrs</span>
              </div>
              <div className={s.statLabel}>Microsoft preferred supplier</div>
              <div className={s.statMeta}>Continuous enterprise delivery</div>
            </div>
          </div>

          <div className={s.statCard}>
            <div className={s.statIcon}>
              <Lightbulb24Regular />
            </div>
            <div className={s.statBody}>
              <div className={s.statNumber}>
                13<span className={s.statAccent}>×</span>
              </div>
              <div className={s.statLabel}>Thirteen-Time Honoree, Inc. 5000,</div>
              <div className={s.statMeta}>2013 — 2025</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
