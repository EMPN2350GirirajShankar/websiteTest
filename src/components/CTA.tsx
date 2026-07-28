import {
  makeStyles,
} from "@fluentui/react-components";
import { useContactAction } from "../lib/contact";
import { PrimaryButton } from "./buttons";

const useStyles = makeStyles({
  section: { padding: "32px var(--section-pad-x)", backgroundColor: "var(--maq-surface-cream)" },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 32px",
    color: "var(--maq-ink)",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  },
  title: {
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 8px",
    letterSpacing: "-0.02em",
  },
  sub: {
    fontSize: "15px",
    color: "var(--maq-gray-700)",
    marginBottom: "20px",
    maxWidth: "640px",
    margin: "0 auto 20px",
    display: "block",
  },
  btns: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  email: {
    marginTop: "12px",
    fontSize: "13px",
    color: "var(--maq-gray-700)",
  },
  emailLink: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "underline",
  },
});

export function CTA() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.section} id="contact">
      <div className={s.inner}>
        {/* <span className={s.eyebrow}>Talk to us</span> */}
        <h2 className={s.title}>
          Ready to move faster?
        </h2>
        <div className={s.btns}>
          <PrimaryButton
            size="large"
            onClick={() => handleContactClick()}
          >
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
