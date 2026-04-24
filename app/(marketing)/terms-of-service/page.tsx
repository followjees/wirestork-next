import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Wirestork",
  description: "Terms governing your use of Wirestork's legal screening and background check services.",
};

const BLUE = "#0708E4";

const hs: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontStyle: "italic",
  fontWeight: 900,
  fontSize: 22,
  color: "#fff",
  marginBottom: 12,
  marginTop: 40,
};
const p: React.CSSProperties = { marginBottom: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontSize: 15 };
const li: React.CSSProperties = { marginBottom: 8, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: 15 };

export default function TermsPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12 }}>
            Terms of Service
          </h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

        <h2 style={hs}>1. Introduction</h2>
        <p style={p}>Thank you for using Wirestork. These terms of service (&ldquo;Terms&rdquo;) cover your use and access to the products, services, software, platform, and websites (collectively, &ldquo;Services&rdquo;) provided by Wirestork Incorporated and any of our affiliates (collectively, &ldquo;Wirestork&rdquo;). By using our Services, you agree to be bound by these Terms as well as our Privacy Policy. If you are using our Services as an employee or agent of an organization, you are agreeing to these Terms on behalf of that organization.</p>

        <h2 style={hs}>2. Eligibility</h2>
        <p style={p}>You must be the legal age of majority in your state of residence or otherwise able to form a binding contract with Wirestork in order to use the Services. In no event is use of the Services permitted by those under the age of 13.</p>

        <h2 style={hs}>3. Acceptance of Terms</h2>
        <p style={p}>By accessing the website at https://wirestork.com, you are agreeing to be bound by these Terms, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these Terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

        <h2 style={hs}>4. Use License</h2>
        <p style={p}>Permission is granted to temporarily download one copy of the materials (information or software) on Wirestork&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "Modify or copy the materials;",
            "Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);",
            "Attempt to decompile or reverse engineer any software contained on Wirestork's website;",
            "Remove any copyright or other proprietary notations from the materials; or",
            "Transfer the materials to another person or \"mirror\" the materials on any other server.",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>
        <p style={p}>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Wirestork at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

        <h2 style={hs}>5. Disclaimer</h2>
        <p style={p}>The materials on Wirestork&apos;s website are provided on an &apos;as is&apos; basis. Wirestork makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Wirestork does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

        <h2 style={hs}>6. Limitations</h2>
        <p style={p}>In no event shall Wirestork or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wirestork&apos;s website, even if Wirestork or a Wirestork authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

        <h2 style={hs}>7. Accuracy of Materials</h2>
        <p style={p}>The materials appearing on Wirestork&apos;s website could include technical, typographical, or photographic errors. Wirestork does not warrant that any of the materials on its website are accurate, complete, or current. Wirestork may make changes to the materials contained on its website at any time without notice. However, Wirestork does not make any commitment to update the materials.</p>

        <h2 style={hs}>8. Links</h2>
        <p style={p}>Wirestork has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wirestork of the site. Use of any such linked website is at the user&apos;s own risk.</p>

        <h2 style={hs}>9. Modifications</h2>
        <p style={p}>Wirestork may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.</p>

        <h2 style={hs}>10. Wirestork is Not a Law Firm</h2>
        <p style={p}>Wirestork provides a platform for legal information and self-help. The information provided by Wirestork along with the content on our website related to legal matters (&ldquo;Legal Information&rdquo;) is provided for your private use and does not constitute legal advice. We do not review any information you provide us for legal accuracy or sufficiency, draw legal conclusions, provide opinions about your selection of forms, or apply the law to the facts of your situation.</p>
        <p style={p}>If you need legal advice for a specific problem, you should consult with a licensed attorney. Neither Wirestork nor any Legal Information provided by Wirestork is a substitute for legal advice from a qualified attorney licensed to practice in an appropriate jurisdiction. As Wirestork is not a law firm, please note that communications between you and Wirestork may not be protected as privileged communications under the attorney-client privilege or work product doctrine.</p>
        <p style={p}>Your use of the Services does not create an attorney-client relationship between you and Wirestork, or between you and any Wirestork employee or representative. Unless you are otherwise represented by an attorney, including a Participating Attorney, you represent yourself in any legal matter you undertake through our Services.</p>
        <p style={p}>Wirestork is not a &ldquo;Lawyer Referral Service&rdquo;. The directory of lawyers published on our website is provided to the public free of charge and is for informational purposes only. Wirestork does not endorse or recommend any attorney nor does it make any warranty as to the qualifications or competency of any attorney.</p>

        <h2 style={hs}>11. Interactions with Lawyers</h2>
        <p style={p}>When you use our Services, you will have the opportunity to initiate contact with an independent attorney (a &ldquo;Participating Attorney&rdquo;). Participating Attorneys are neither employees nor agents of Wirestork. Participating Attorneys are third-party independent contractors who carry their own malpractice insurance and have agreed to provide online answers, limited consultations, or other basic legal services to Wirestork users. Communicating with a Participating Attorney through Wirestork is NOT required. However, if you choose to communicate with a Participating Attorney through Wirestork, please note the following:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "When you contact a Participating Attorney through Wirestork, he or she may provide you with an initial consultation, legal review of your forms or documents, or answers to your legal questions. Please note that any such interaction is intended to be a starting point for dealing with a legal matter or addressing basic legal questions and any attorney-client relationship formed during the course of that interaction is strictly between you and the Participating Attorney and expressly EXCLUDES Wirestork.",
            "When you contact a Participating Attorney through Wirestork, he or she may ask you for some information regarding you and your legal affairs in order to properly address your questions. By using our Services, you consent to sharing such personally identifying information for the purpose of securing legal advice with both the requesting attorney and with Wirestork. Wirestork will have access to any communications submitted through our platform for fulfillment and quality assurance purposes.",
            "When you contact a Participating Attorney through Wirestork, you control both the duration and depth of the interaction. Any attorney-client relationship formed during the course of that interaction may, at your option, either end when the interaction with the Participating Attorney ends or continue if you wish to engage the Participating Attorney for further legal services.",
            "If you wish to create an attorney-client relationship with a Participating Attorney that extends beyond your use of our Services, that relationship will be on whatever terms you establish with the attorney in question. Those terms do NOT involve Wirestork.",
            "Participating Attorneys may be compensated by Wirestork for Services performed on your behalf, however, Wirestork does not receive any share of legal fees collected by any attorneys in our network.",
            "Wirestork is an information provider and does not endorse or recommend any attorney, including any of the Participating Attorneys.",
          ].map((item, i) => <li key={i} style={li}>{item}</li>)}
        </ul>
        <p style={{ ...p, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>WIRESTORK SHALL HAVE NO RESPONSIBILITY OR LIABILITY OF ANY KIND FOR ANY PROFESSIONAL SERVICES RENDERED BY ANY ATTORNEY YOU ENCOUNTER ON OR THROUGH OUR WEBSITE, AND ANY USE OR RELIANCE ON SUCH PROFESSIONAL SERVICES IS SOLELY AT YOUR OWN RISK.</p>

        <h2 style={hs}>12. Consent to Receive Emails</h2>
        <p style={p}>By creating an account, you agree that you may receive communications from Wirestork, such as newsletters, special offers, and account reminders and updates. You also understand that you can remove yourself from these communications by clicking the &ldquo;Unsubscribe&rdquo; link in the footer of the actual email.</p>

        <h2 style={hs}>13. Unlawful or Prohibited Use</h2>
        <p style={p}>You can only use our Services if they do not conflict with or violate the laws of your jurisdiction(s). By using our Services, you accept sole responsibility that your use does not violate any applicable laws. The following are specifically excluded or prohibited:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "Use in connection with any legal matter that is frivolous, immaterial, or illegal in nature;",
            "Use in connection with any legal matter involving an alleged violent crime;",
            "Use in connection with any legal matter involving the laws of jurisdictions outside of the United States or its subdivisions;",
            "Use in connection with any legal matter for which you are currently or prospectively represented by legal counsel;",
            "Use in connection with any legal matter that, as determined by the Participating Attorney in his or her sole discretion, lacks sufficient merit to warrant pursuit;",
            "Use in connection with any legal matter that directly or indirectly involves Wirestork or any of its affiliates, directors, agents, or employees.",
            "You may not hack, \"scrape\" or \"crawl\" Wirestork.com whether directly or through intermediaries such as spiders, robots, crawlers, scrapers, framing, iframes, or RSS feeds.",
          ].map((item, i) => <li key={i} style={li}>{item}</li>)}
        </ul>

        <h2 style={hs}>14. Refund Policy</h2>
        <p style={p}>Refunds will not be provided for any service request. We do not provide credit, refunds, or prorated billing for orders that are cancelled.</p>

        <h2 style={hs}>15. Governing Law</h2>
        <p style={p}>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the State of Delaware, and the parties hereby consent to the personal jurisdiction and venue therein.</p>

        <h2 style={hs}>16. Contact Information</h2>
        <p style={p}>If you have any questions or concerns regarding these Terms, please contact us at:</p>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 2 }}>
          Wirestork.com<br />
          Conzurge Inc.<br />
          2035 Sunset Lake Road<br />
          City of Newark, Delaware 19702
        </div>

      </section>
    </div>
  );
}
