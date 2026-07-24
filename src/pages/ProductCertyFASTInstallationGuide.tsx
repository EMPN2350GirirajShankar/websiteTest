import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "64px 32px 56px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  h1: {
    margin: "0 0 12px",
  },
  h2: {
    margin: "0 0 8px",
  },
  meta: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
  },
  section: {
    backgroundColor: "#fff",
    padding: "48px 32px 80px",
  },
  inner: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  sectionTitle: {
    margin: "0 0 18px",
  },
  list: {
    margin: "0 0 22px",
    paddingLeft: "22px",
    display: "grid",
    gap: "10px",
  },
  nestedList: {
    marginTop: "10px",
    paddingLeft: "22px",
    display: "grid",
    gap: "10px",
  },
  listItem: {
    color: "var(--maq-gray-700)",
    lineHeight: 1.7,
    fontSize: "15px",
  },
  paragraph: {
    margin: "0",
    color: "var(--maq-gray-700)",
    lineHeight: 1.75,
    fontSize: "15px",
  },
  media: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    border: "1px solid var(--maq-border)",
    margin: "10px 0 24px",
    display: "block",
    backgroundColor: "#fff",
  },
  link: {
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export function ProductCertyFASTInstallationGuide() {
  const s = useStyles();

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <h1 className={`maq-h1 ${s.h1}`}>Easy Step-by-Step Installation and Usage Guide</h1>
          <h2 className={`maq-h2 ${s.h2}`}>CertyFAST by MAQ Software</h2>
          <div className={s.meta}>5 minutes to read | Posted: 27th May 2024</div>
          <img className={s.media} src="/images/external/certyfast/CertyFastBlogHeadingImage.png" alt="" loading="lazy" />
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <h2 className={`maq-h2 ${s.sectionTitle}`}>Installation Steps</h2>
          <ol className={s.list}>
            <li className={s.listItem}>
              Step 1: <a className={s.link} href="https://github.com/maqsoftware/CertyFAST" target="_blank" rel="noreferrer">Click here</a> to download the latest version of the tool from Github.
            </li>
            <li className={s.listItem}>Step 2: Run the downloaded CertyFAST.Setup.1.0.0.exe file on your local machine.</li>
            <li className={s.listItem}>Step 3: Select Yes when a pop-up appears to allow the app to be downloaded and start the installation.</li>
            <li className={s.listItem}>Step 4: Ensure the Run CertyFAST check box is ticked and select Finish.</li>
          </ol>
          <img className={s.media} src="/images/external/certyfast/CertyFASTSetup.png" alt="" loading="lazy" />

          <h2 className={`maq-h2 ${s.sectionTitle}`}>Exploring the capabilities of CertyFAST</h2>
          <ol className={s.list}>
            <li className={s.listItem}>Home Page: Select your semantic model and report.</li>
            <img className={s.media} src="/images/external/certyfast/CertifyHomePage.png" alt="" loading="lazy" />
            <li className={s.listItem}>
              Insights Page: Identify all the gaps against organizational standards and best practices from a single view.
              <ol className={s.nestedList}>
                <li className={s.listItem}>Navigate by severity: Switch between errors and warnings to prioritize gaps based on their severity.</li>
                <li className={s.listItem}>Organized rulesets: Rulesets are categorized into logical sections based on the impacted Power BI object (tables, columns, measures, visuals).</li>
                <li className={s.listItem}>Detailed non-compliance: Select any ruleset to view detailed information about the non-compliant object.</li>
                <li className={s.listItem}>Visualize lineage: Select the lineage icon to understand the impact and connections of the selected object.</li>
              </ol>
            </li>
            <img className={s.media} src="/images/external/certyfast/gif/Insights.gif" alt="" loading="lazy" />
            <li className={s.listItem}>
              Lineage Page: Perform impact analysis for any field.
              <ol className={s.nestedList}>
                <li className={s.listItem}>Dependency visualization: View the dependencies between different Power BI objects.</li>
                <li className={s.listItem}>Comprehensive field path: Understand the fields used for rendering visuals and trace the complete path through which measures/fields are created.</li>
                <li className={s.listItem}>Impact analysis: Select any measure or field from the dropdowns to understand the specific impact of that field.</li>
              </ol>
            </li>
            <img className={s.media} src="/images/external/certyfast/gif/Lineage.gif" alt="" loading="lazy" />
            <li className={s.listItem}>
              Alignment Page: Understand visual alignment issues in your report.
              <ol className={s.nestedList}>
                <li className={s.listItem}>Highlight alignment issues: Visuals highlighted in red indicate alignment issues with neighboring visuals.</li>
                <li className={s.listItem}>Detailed visual alignment: Select any visual to understand how it is aligned with others.</li>
                <li className={s.listItem}>Red borders indicate misalignment: Visuals with red borders are not aligned and detailed information regarding them can be viewed on the grid in the right pane.</li>
              </ol>
            </li>
            <img className={s.media} src="/images/external/certyfast/gif/Alignment.gif" alt="" loading="lazy" />
            <li className={s.listItem}>
              Documentation Page: Auto-generated knowledge base.
              <ol className={s.nestedList}>
                <li className={s.listItem}>Comprehensive documentation: View a complete documentation of semantic model objects as well as report visualizations.</li>
                <li className={s.listItem}>In-depth metadata: Understand detailed metadata about the tables and columns used in the model, along with security roles.</li>
                <li className={s.listItem}>Visual details: Identify the fields used to render each visual, check tooltips, and verify if conditional formatting is enabled.</li>
                <li className={s.listItem}>Export options: Select Export to Excel to export the documentation in Excel or PDF format, along with the required details.</li>
              </ol>
            </li>
            <img className={s.media} src="/images/external/certyfast/gif/Documentation.gif" alt="" loading="lazy" />
          </ol>

          <p className={s.paragraph}>
            Streamline your Power BI development and download CertyFAST today. Contact us at{" "}
            <a
              className={s.link}
              href="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
            >
              CustomerSuccess@MAQSoftware.com
            </a>{" "}
            for any inquiries.
          </p>
        </div>
      </section>
    </>
  );
}
