import { makeStyles } from "@fluentui/react-components";
import { PrimaryButton } from "../components/buttons";
// import { TrustBanner } from "../components/TrustBanner";


const useStyles = makeStyles({
  page: {
    backgroundColor: "#fff",
    color: "var(--maq-black)",
  },
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "48px 32px 56px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    margin: "0 0 16px",
  },
  meta: {
    color: "var(--maq-gray-700)",
    fontSize: "14px",
    marginBottom: "24px",
  },
  intro: {
    fontSize: "15px",
    lineHeight: 1.75,
    maxWidth: "840px",
    margin: "0 0 20px",
    color: "var(--maq-gray-700)",
  },
  section: {
    padding: "56px 32px 80px",
  },
  sectionInner: {
    maxWidth: "820px",
    margin: "0 auto",
  },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "10px",
  },
  sectionTitle: {
    margin: "0 0 24px",
  },
  body: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "var(--maq-gray-700)",
    margin: "0 0 20px",
  },
  list: {
    margin: "0 0 24px 24px",
    color: "var(--maq-gray-700)",
    fontSize: "15px",
    lineHeight: 1.75,
  },
  definition: {
    marginBottom: "24px",
  },
  defTerm: {
    fontWeight: 700,
    marginBottom: "8px",
  },
  note: {
    fontSize: "13px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginTop: "16px",
  },
});

export function AboutPrivacyStatement() {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={`maq-h1 ${styles.heading}`}>Privacy Statement</h1>
          <div className={styles.meta}>Last Updated: March 12, 2026</div>
          <p className={styles.intro}>
            MAQ Software (“we”, “us”, or “our”) offers applications, visualizations & services in the AI, data analytics, cloud transformation, and Power BI spaces. We are committed to protecting your personal information. This Privacy Statement explains the personal data we process, how we process it, and for what purpose. Privacy Statement applies to the applications published by MAQ Software via Microsoft Azure Marketplace, Microsoft App Source, other Microsoft Office stores, or any other means. Visualizations refer to custom Power BI visuals & template apps developed and published by MAQ Software either to the Office 365 store or Power BI gallery.
          </p>
          <PrimaryButton href="mailto:Support@MAQSoftware.com">
            Contact support
          </PrimaryButton>
        </div>
      </section>



      <section className={styles.section}>
        <div className={styles.sectionInner}>
          {/* <span className={styles.eyebrow}>PRIVACY COMMITMENTS</span> */}
          <h2 className={`maq-h2 ${styles.sectionTitle}`}>What this privacy statement means for your data</h2>
          <ul className={styles.list}>
            <li>
              MAQ Software does not collect any personal information, <strong>Customer Data*</strong>, or anything related to your device when you use any of our applications, including visualizations, except for limited service configuration metadata collected by certain applications, as described below.
            </li>
            <li>
              We do not collect or have access to any information that can identify you when you purchase an App or download a trial.
            </li>
            <li>
              We will never sell or share information collected as part of a trial or purchase of any of our Apps without your written consent. Information collected by Microsoft as part of trial or purchase falls under the Microsoft Privacy Policy.
            </li>
            <li>
              We may collect usage and download statistics, trends, or any other <strong>Administrator Data**</strong> that Office 365 application administrators are provided with, but not the specific usage of any user.
            </li>
          </ul>

          <h2 className={`maq-h2 ${styles.sectionTitle}`}>Application Service Configuration Data</h2>
          <p className={styles.body}>
            Certain MAQ Software applications may collect and store limited-service configuration metadata, including Microsoft Tenant ID and limited application connection information, solely to enable application functionality, authentication, troubleshooting, and service reliability. This data is stored within MAQ Software’s Microsoft Azure tenant and is not used beyond required for operating the applicable service.
          </p>

          <h2 className={`maq-h2 ${styles.sectionTitle}`}>Privacy definitions</h2>
          <div className={styles.definition}>
            <div className={styles.defTerm}>Customer Data</div>
            <p className={styles.body}>
              Customer Data is all data, including all text files, sound files, image files, and software that you provide to MAQ Software through your use of our Services. We may use Customer Data to provide Services. This includes troubleshooting aimed at preventing, detecting, and repairing problems affecting the operation of the services provided.
            </p>
          </div>
          <div className={styles.definition}>
            <div className={styles.defTerm}>Administrator Data</div>
            <p className={styles.body}>
              Administrator Data is information about administrators (including account contact and subscription administrators) provided during sign-up, purchase, or administration of the Services. This may include name, address, phone number, and email address, whether collected at initial purchase or later during management of the Services.
            </p>
          </div>
          <p className={styles.body}>
            We will not disclose Customer Data or Administrator Data ("your information") outside of MAQ Software except as you direct, as described in your agreement(s) or as described in this privacy statement.
          </p>

          <h2 className={`maq-h2 ${styles.sectionTitle}`}>Changes to this Privacy Statement</h2>
          <p className={styles.body}>
            We will occasionally update this privacy statement to reflect customer feedback and changes in our Services. When we post changes to this statement, we will revise the "last updated" date at the top of the statement. We encourage you to periodically review this privacy statement to learn how MAQ Software is protecting your information.
          </p>

        </div>
      </section>
    </div>
  );
}
