import { makeStyles } from "@fluentui/react-components";
import { CTA } from "../components/CTA";

const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
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
  paragraph: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "var(--maq-gray-700)",
    margin: "0 0 20px",
  },
  h2: {
    margin: "40px 0 16px",
  },
  list: {
    margin: "0 0 20px",
    paddingLeft: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  listItem: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
  },
});

export function TermsOfService() {
  const s = useStyles();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          {/* <span className={s.eyebrow}>Legal</span> */}
          <h1 className={`maq-h1 ${s.h1}`}>Terms of Service</h1>
          <span className={s.updated}>Last Updated: May 18, 2020</span>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <p className={s.paragraph}>
            MAQ Software (“Us”, “We”, or “Our”) provides the{" "}
            <a href="https://maqsoftware.com">https://maqsoftware.com</a> website
            and various related applications &amp; services (collectively, the
            "Website") to you, the User, subject to your compliance with all the
            terms, conditions, and notices contained or referenced herein (the
            "Terms of Service"), as well as any other written agreement between
            you and us.
          </p>
          <p className={s.paragraph}>
            In addition, when using particular services or materials on this
            Website, Users shall be subject to any posted rules applicable to
            such services or materials that may contain terms and conditions in
            addition to those outlined in these Terms of Service. All such
            guidelines or rules are hereby incorporated by reference into these
            Terms of Service.
          </p>
          <p className={s.paragraph}>
            These Terms of Service are effective as of May 18, 2020. We expressly
            reserve the right to change these Terms of Service from time to time
            without notice to you. You acknowledge and agree that it is your
            responsibility to review this Website and these Terms of Service from
            time to time and to familiarize yourself with any modifications.
          </p>
          <p className={s.paragraph}>
            Your continued use of this Website after such modifications will
            constitute acknowledgement of the modified Terms of Service and
            agreement to abide and be bound by the modified Terms of Service.
          </p>
          <p className={s.paragraph}>
            We reserve the sole right to either modify or discontinue the
            Website, including any of the Website’s features, at any time with or
            without notice to you. We will not be liable to you or any third
            party should we exercise such right. Any new features that augment or
            enhance the then-current services on this Website shall also be
            subject to these Terms of Service.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Conduct on the Website</h2>
          <p className={s.paragraph}>
            Your use of the Website is subject to all applicable laws and
            regulations, and you are solely responsible for the substance of your
            communications through the Website. By posting information in or
            otherwise using any communications service, chat room, message board,
            newsgroup, software library, or other interactive service that may be
            available to you on or through this Website, you agree that you will
            not upload, share, post, or otherwise distribute or facilitate
            distribution of any content — including text, communications,
            software, images, sounds, data, or other information — that:
          </p>
          <ul className={s.list}>
            <li className={s.listItem}>
              Is unlawful, threatening, abusive, harassing, defamatory, libelous,
              deceptive, fraudulent, invasive of another's privacy, tortious,
              contains explicit or graphic descriptions or accounts of sexual
              acts (including but not limited to sexual language of a violent or
              threatening nature directed at another individual or group of
              individuals), or otherwise violates our rules or policies
            </li>
            <li className={s.listItem}>
              Victimizes, harasses, degrades, or intimidates an individual or
              group of individuals on the basis of religion, gender, sexual
              orientation, race, ethnicity, age, or disability
            </li>
            <li className={s.listItem}>
              Infringes on any patent, trademark, trade secret, copyright, right
              of publicity, or other proprietary right of any party
            </li>
            <li className={s.listItem}>
              Constitutes unauthorized or unsolicited advertising, junk, or bulk
              email (also known as "spamming"), chain letters, any other form of
              unauthorized solicitation, or any form of lottery or gambling
            </li>
            <li className={s.listItem}>
              Contains software viruses or any other computer code, files, or
              programs that are designed or intended to disrupt, damage, or limit
              the functioning of any software, hardware, or telecommunications
              equipment, or to damage or obtain unauthorized access to any data
              or other information of any third party
            </li>
            <li className={s.listItem}>
              Impersonates any person or entity, including any of our employees
              or representatives
            </li>
          </ul>
          <p className={s.paragraph}>
            We neither endorse nor assume any liability for the contents of any
            material uploaded or submitted by third party users of the Website.
            We generally do not pre-screen, monitor, or edit the content posted
            by users of communications services, chat rooms, message boards,
            newsgroups, software libraries, or other interactive services that
            may be available on or through this Website. However, we and our
            agents have the right at our sole discretion to remove any content
            that, in our judgment, does not comply with these Terms of Service
            and any other rules of user conduct for our site, or is otherwise
            harmful, objectionable, or inaccurate. We are not responsible for any
            failure or delay caused by removing such content. You hereby consent
            to such removal and waive any claim against us arising out of such
            removal of content.
          </p>
          <p className={s.paragraph}>
            You agree that we may at any time, and at our sole discretion,
            terminate your membership, account, or other affiliation with our
            site without prior notice to you for violating any of the above
            provisions. In addition, you acknowledge that we will cooperate fully
            with investigations of violations of systems or network security at
            other sites, including cooperating with law enforcement authorities
            in investigating suspected criminal violations.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Third-Party Websites</h2>
          <p className={s.paragraph}>
            This site may link you to other sites on the Internet or otherwise
            include references to information, documents, software, materials
            and/or services provided by other parties. These sites may contain
            information or material that some people may find inappropriate or
            offensive.
          </p>
          <p className={s.paragraph}>
            These other sites and parties are not under our control, and you
            acknowledge that we are not responsible for the accuracy, copyright
            compliance, legality, decency, or any other aspect of the content of
            such sites, nor are we responsible for errors or omissions in any
            references to other parties or their products and services. The
            inclusion of such a link or reference is provided merely as a
            convenience and does not imply endorsement of, or association with,
            the Website or party by us, or any warranty of any kind, either
            express or implied.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Intellectual Property</h2>
          <p className={s.paragraph}>
            All custom graphics, icons, logos, and service names used on the
            Website are registered trademarks, service marks, and/or artwork held
            under copyright of MAQ Software or its Affiliates. All other marks are
            property of their respective owners. Nothing in these Terms of
            Service grants you any right to use any trademark, service mark, logo,
            and/or the name or trade names of MAQ Software or its Affiliates.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Disclaimer of Warranties</h2>
          <p className={s.paragraph}>
            Content available through this Website often represents the opinions
            and judgments of an information provider, site user, or other person
            or entity not connected with us. We do not endorse, nor are we
            responsible for the accuracy or reliability of, any opinion, advice,
            or statement made by anyone other than an authorized MAQ Software
            spokesperson speaking in his/her official capacity. Please refer to
            the specific editorial policies posted on various sections of this
            Website for further information. These policies are incorporated by
            reference into these Terms of Service.
          </p>
          <p className={s.paragraph}>
            You understand and agree that temporary interruptions of the services
            available through this Website may occur as normal events. You further
            understand and agree that we have no control over third-party networks
            you may access in the course of the use of this Website, and
            therefore, delays and disruption of other network transmissions are
            completely beyond our control.
          </p>
          <p className={s.paragraph}>
            You understand and agree that the services available on this Website
            are provided "AS IS" and that we assume no responsibility for the
            timeliness, deletion, misdelivery, or failure to store any user
            communications or personalization settings.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>International Use</h2>
          <p className={s.paragraph}>
            Although this Website may be accessible worldwide, we make no
            representation that materials on this Website are appropriate or
            available for use in locations outside the United States (U.S.) and
            accessing them from territories where their contents are illegal is
            prohibited. Those who choose to access this Website from other
            locations do so on their own initiative and are responsible for
            compliance with local laws. Any offer for any product, service,
            and/or information made in connection with this Website is void where
            prohibited.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Termination</h2>
          <p className={s.paragraph}>
            You agree that we may, at our sole discretion, terminate or suspend
            your access to all or part of the Website with or without notice and
            for any reason, including, without limitation, breach of these Terms
            of Service. Any suspected fraudulent, abusive, or illegal activity
            may be grounds for terminating your relationship and may be referred
            to appropriate law enforcement authorities.
          </p>
          <p className={s.paragraph}>
            Upon termination or suspension, regardless of the reasons therefore,
            your right to use the services available on this Website immediately
            ceases, and you acknowledge and agree that we may immediately
            deactivate or delete your account and all related information and
            files in your account and/or bar any further access to such files or
            this Website. We shall not be liable to you or any third party for any
            claims or damages arising out of any termination or suspension or any
            other actions taken by us in connection with such termination or
            suspension.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Governing Law</h2>
          <p className={s.paragraph}>
            These Terms of Service and any dispute or claim arising out of, or
            related to them, shall be governed by and construed in accordance with
            the internal laws of the U.S. without giving effect to any choice or
            conflict of law provision or rule.
          </p>
          <p className={s.paragraph}>
            Any legal suit, action, or proceeding arising out of, or related to,
            these Terms of Service or the Website shall be instituted exclusively
            in the federal courts of the U.S.
          </p>

          <h2 className={`maq-h2 ${s.h2}`}>Third-Party Apps</h2>
          <p className={s.paragraph}>
            You acknowledge that apps on the Website function by accessing one or
            more Third-Party Apps in order to synchronize content found in such
            applications. As such your use of the apps is contingent on your
            continued compliance with the terms and conditions of such Third-Party
            Apps. You also acknowledge that MAQ Software is not responsible or
            liable for the proper operation and maintenance of such Third-Party
            Apps and that any dysfunction in such Third-Party Apps or loss of
            functionality in such Third-Party Apps will have a direct impact on
            the operation of the app. MAQ Software is not liable for
            interruptions, failures, or loss of service related to the operation
            or maintenance of Third-Party Apps. Valid credentials will be provided
            to MAQ Software for the use of Third-Party Apps. To the extent these
            credentials cease to be valid and are not updated in a timely manner
            by you, this will result in a loss of functionality and service of the
            app.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
