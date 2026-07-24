import { makeStyles } from "@fluentui/react-components";
import { CTA } from "../components/CTA";

const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "64px 32px 56px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center" as const,
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
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
  updated: {
    display: "block",
    fontSize: "14px",
    color: "var(--maq-gray-700)",
  },

  // ── Body ──────────────────────────────────────────────────────────────────
  section: {
    padding: "56px 32px 80px",
    backgroundColor: "#fff",
  },
  inner: {
    maxWidth: "820px",
    margin: "0 auto",
  },
  h2: {
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 24px",
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "var(--maq-gray-700)",
    margin: "0 0 20px",
  },
  orderedList: {
    margin: "0 0 20px",
    paddingLeft: "22px",
    listStyleType: "decimal",
  },
  orderedItem: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "var(--maq-gray-700)",
    margin: "0 0 16px",
    paddingLeft: "6px",
  },
  subList: {
    margin: "12px 0 0",
    paddingLeft: "22px",
    listStyleType: "disc",
  },
  subItem: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: "0 0 8px",
  },
  strong: {
    color: "var(--maq-black)",
    fontWeight: 700,
  },
});

export function PowerBIVisualsEULA() {
  const s = useStyles();

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.eyebrow}>License Agreement</span>
          <h1 className={s.h1}>Power BI Visualization EULA</h1>
          <span className={s.updated}>Last Updated: April 4, 2020</span>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <h2 className={s.h2}>
            Power BI Custom Visuals – Standard Visualization License Terms
          </h2>

          <p className={s.paragraph}>
            These license terms are an agreement between you and MAQ Software,
            LLC DBA MAQ Software, the visualization developer (The Visualization
            Developer). Please read them. They apply to the visualization for
            Power BI you download from the Microsoft AppSource or GitHub.
          </p>
          <p className={s.paragraph}>
            BY DOWNLOADING OR USING THE VISUALIZATION, OR ATTEMPTING TO DO ANY OF
            THESE, YOU ACCEPT THESE TERMS. IF YOU DO NOT ACCEPT THEM, YOU HAVE NO
            RIGHT TO AND MUST NOT DOWNLOAD OR USE THE VISUALIZATION.
          </p>
          <p className={s.paragraph}>
            The Visualization developer means the entity licensing the
            Visualization to you, as identified in the Microsoft AppSource or
            GitHub.
          </p>
          <p className={s.paragraph}>
            If you comply with these license terms, you have the rights below.
          </p>

          <ol className={s.orderedList}>
            <li className={s.orderedItem}>
              <span className={s.strong}>INSTALLATION AND USE RIGHTS.</span> You
              may install and use one copy of the Visualization for use with a
              product or service that supports the Power BI visual interface.
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>INTERNET-BASED SERVICES.</span>
              <ul className={s.subList}>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    Consent for Internet-Based or Wireless Services.
                  </span>{" "}
                  The Visualization connects to computer systems over the
                  Internet, which may include via a wireless network. Using the
                  Visualization operates as your consent to the transmission of
                  standard device information (including but not limited to
                  technical information about your device, system and
                  Visualization software, and peripherals) for internet-based or
                  wireless services.
                </li>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    Misuse of Internet-based Services.
                  </span>{" "}
                  You may not use any Internet-based service in any way that could
                  harm it or impair anyone else’s use of it or the wireless
                  network. You may not use the service to try to gain
                  unauthorized access to any service, data, account or network by
                  any means.
                </li>
              </ul>
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>SCOPE OF LICENSE.</span> The
              Visualization is licensed, not sold. This agreement only gives you
              some rights to use the Visualization. MAQ Software (Visualization
              developer) reserves all other rights. Unless applicable law gives
              you more rights despite this limitation, you may use the
              Visualization only as expressly permitted in this agreement. You may
              not
              <ul className={s.subList}>
                <li className={s.subItem}>
                  work around any technical limitations in the Visualization;
                </li>
                <li className={s.subItem}>
                  reverse engineer, decompile or disassemble the Visualization,
                  except and only to the extent that applicable law expressly
                  permits, despite this limitation;
                </li>
                <li className={s.subItem}>
                  make more copies of the Visualization than specified in this
                  agreement or allowed by applicable law, despite this
                  limitation; or
                </li>
                <li className={s.subItem}>
                  publish or otherwise make the Visualization available for others
                  to copy.
                </li>
              </ul>
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>DOCUMENTATION.</span> If documentation is
              provided with the Visualization, you may copy and use the
              documentation for personal reference purposes.
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>
                TECHNOLOGY AND EXPORT RESTRICTIONS.
              </span>{" "}
              The Visualization may be subject to United States or international
              technology control or export laws and regulations. You must comply
              with all domestic and international export laws and regulations that
              apply to the technology used or supported by the Visualization.
              These laws include restrictions on destinations, end users and end
              use.
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>SUPPORT SERVICES.</span> MAQ Software is
              not responsible for providing support services for the
              Visualization. MAQ Software may provide support services, but is not
              obligated to do so under this agreement.
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>ENTIRE AGREEMENT.</span> This agreement,
              any applicable Visualization developer privacy policy, and the terms
              for supplements and updates are the entire agreement between you and
              MAQ Software (the Visualization developer) for the Visualization.
              This agreement does not change the terms of your relationship with
              Microsoft with regard to Power BI, Microsoft Office, the AppSource,
              or any other Microsoft product or service (which is governed by the
              software license terms that accompanied, or terms of use that are
              associated with, the applicable product or service).
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>APPLICABLE LAW.</span>
              <ul className={s.subList}>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    United States. If you acquired the Visualization in the United
                    States, Washington state law governs the interpretation of
                    this agreement and applies to claims for breach of it,
                    regardless of conflict of laws principles. The laws of the
                    state where you live govern all other claims, including claims
                    under state consumer protection laws, unfair competition laws,
                    and in tort.
                  </span>
                </li>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    Outside the United States. If you acquired the Visualization
                    in any other country, the laws of that country apply.
                  </span>
                </li>
              </ul>
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>LEGAL EFFECT.</span> This agreement
              describes certain legal rights. You may have other rights under the
              laws of your state or country. This agreement does not change your
              rights under the laws of your state or country if the laws of your
              state or country do not permit it to do so.
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>
                DISCLAIMER OF WARRANTY. TO THE FULLEST EXTENT PERMITTED BY LAW, (A)
                THE VISUALIZATION IS LICENSED "AS-IS," "WITH ALL FAULTS," AND "AS
                AVAILABLE" AND YOU BEAR ALL RISK OF USING IT; (B) THE VISUALIZATION
                DEVELOPER, ON BEHALF OF ITSELF, MICROSOFT (IF MICROSOFT IS NOT THE
                VISUALIZATION DEVELOPER), AND EACH OF OUR RESPECTIVE AFFILIATES,
                VENDORS, AGENTS AND SUPPLIERS, GIVES NO EXPRESS WARRANTIES,
                GUARANTEES, OR CONDITIONS IN RELATION TO THE VISUALIZATION; (C) YOU
                MAY HAVE ADDITIONAL CONSUMER RIGHTS UNDER YOUR LOCAL LAWS THAT THIS
                AGREEMENT CANNOT CHANGE; AND (D) VISUALIZATION DEVELOPER AND
                MICROSOFT EXCLUDE ANY IMPLIED WARRANTIES OR CONDITIONS, INCLUDING
                THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NON-INFRINGEMENT.
              </span>
            </li>
            <li className={s.orderedItem}>
              <span className={s.strong}>
                LIMITATION ON AND EXCLUSION OF REMEDIES AND DAMAGES. TO THE EXTENT
                NOT PROHIBITED BY LAW, YOU CAN RECOVER FROM THE VISUALIZATION
                DEVELOPER ONLY DIRECT DAMAGES UP TO THE AMOUNT YOU PAID FOR THE
                VISUALIZATION OR $1.00, WHICHEVER IS GREATER. YOU WILL NOT, AND
                WAIVE ANY RIGHT TO, SEEK TO RECOVER ANY OTHER DAMAGES, INCLUDING
                CONSEQUENTIAL, LOST PROFITS, SPECIAL, INDIRECT OR INCIDENTAL
                DAMAGES FROM MAQ Software (THE VISUALIZATION DEVELOPER.)
              </span>
              <span className={s.strong}> This limitation applies to</span>
              <ul className={s.subList}>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    anything related to the Visualization or services made
                    available through the Visualization; and
                  </span>
                </li>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    claims for breach of contract, breach of warranty, guarantee
                    or condition, strict liability, negligence, or other tort to
                    the extent permitted by applicable law.
                  </span>
                </li>
              </ul>
              <span className={s.strong}> It also applies even if</span>
              <ul className={s.subList}>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    repair, replacement or a refund for the Visualization does not
                    fully compensate you for any losses; or
                  </span>
                </li>
                <li className={s.subItem}>
                  <span className={s.strong}>
                    Visualization developer knew or should have known about the
                    possibility of the damages.
                  </span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
