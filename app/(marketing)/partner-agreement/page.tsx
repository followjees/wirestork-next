import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Agreement — Wirestork",
  description: "Wirestork Partnership Agreement governing access to and use of the Wirestork background check platform for partners.",
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
const hs2: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 16,
  color: "rgba(255,255,255,0.8)",
  marginBottom: 10,
  marginTop: 28,
};
const p: React.CSSProperties = {
  marginBottom: 16,
  color: "rgba(255,255,255,0.6)",
  lineHeight: 1.9,
  fontSize: 15,
};
const li: React.CSSProperties = {
  marginBottom: 8,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.8,
  fontSize: 15,
};
const caps: React.CSSProperties = {
  marginBottom: 16,
  color: "rgba(255,255,255,0.65)",
  lineHeight: 1.9,
  fontSize: 14,
  fontWeight: 600,
};

export default function PartnerAgreementPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12 }}>
            Partner Agreement
          </h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

        {/* Preamble */}
        <p style={p}>This Partnership Agreement together with any Orders (as defined below) (collectively, the &ldquo;Agreement&rdquo;) contains the terms and conditions that govern your access to and use of the Platform (as defined below) and is an agreement between Wirestork, Inc. (&ldquo;Wirestork&rdquo;) and you or the entity you represent (&ldquo;Partner&rdquo;, &ldquo;You&rdquo; or &ldquo;Your&rdquo;). This Agreement takes effect when You click the &ldquo;Accept&rdquo; button or check box presented with these terms or, if earlier, when You use any of Wirestork&apos;s service offerings (the &ldquo;Effective Date&rdquo;). You represent that You are lawfully able to enter into this agreement.</p>
        <p style={p}>By entering into this Agreement and/or creating an Account, You are certifying that You have direct knowledge of the facts You are certifying to herein and certify and agree to the following:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
          {[
            "You certify that You will order and use the Reports only for (i) employment purposes, as defined by applicable law, or (ii) the permissible purpose You selected when creating Your Account. Prior to ordering any Reports, you must obtain the Consumer's written authorization and use reasonable steps to verify that all Consumer personal information transferred to Wirestork is accurate.",
            "While You acknowledge sole responsibility for compliance with any state and/or local regulations that require that a copy of the Report be provided to the Consumer upon request, You authorize Wirestork to provide on your behalf a copy of the Report to each Consumer about whom You have requested a Report.",
            "You acknowledge receipt of and certify that You have reviewed and fully understand the Summary of Your Rights Under the Fair Credit Reporting Act, Remedying the Effects of Identity Theft, and Notice to Users of Consumer Reports.",
            "You understand that Your compliance with all applicable Law is solely Your responsibility. Nothing provided to You by Wirestork should be construed as legal advice.",
          ].map((item, i) => <li key={i} style={li}>{item}</li>)}
        </ul>

        {/* Definitions */}
        <h2 style={hs}>1. Definitions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {[
            ["1.1 Account", "A Wirestork account associated with a valid e-mail address."],
            ["1.2 Agreement", "Collectively, this Agreement and any Order(s) including any Exhibits thereto, entered into between the parties."],
            ["1.3 API", "The Wirestork Platform's application programming interface(s) used to provide Wirestork's services."],
            ["1.4 Background Check", "The production of a Report."],
            ["1.5 Consumer", "An individual applicant who is subject to a Background Check in support of their application for employment or engagement as an independent contractor by You."],
            ["1.6 Customer Portal", "The online Wirestork portal and related tools that Wirestork makes available to You to access the Platform and manage Background Checks."],
            ["1.7 Fees", "Collectively, the Service Fees, Pass-Through Fees, and Implementation Fees, if applicable."],
            ["1.8 Platform", "The background check platform offered by Wirestork, including the Customer Portal, the APIs, and other technology and tools offered by Wirestork."],
            ["1.9 Report", "A consumer report or other applicable screening product offered on the Platform, including a Credit Report and an Investigative Consumer Report (if applicable)."],
            ["1.10 Service Fees", "The fees specified in Your Order for the purchase of Reports. Service Fees do not include Pass-Through Fees."],
            ["1.11 Term", "As defined in each applicable Order."],
            ["1.12 Wirestork Partner", "A Wirestork approved third-party service authorized to provide End Users with the access, use, or purchase of Wirestork's services."],
          ].map(([term, def]) => (
            <div key={term as string} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "14px 18px" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>{term as string}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{def as string}</div>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <h2 style={hs}>2. Use of Platform</h2>
        <h3 style={hs2}>2.1 Credentialing Required</h3>
        <p style={caps}>YOU ACKNOWLEDGE AND AGREE THAT THIS AGREEMENT IS CONTINGENT ON WIRESTORK RECEIVING AND APPROVING YOUR CUSTOMER CREDENTIAL APPLICATION. YOU WILL NOT HAVE AN ACCOUNT WITH WIRESTORK OR ACCESS TO THE PLATFORM OR REPORTS UNTIL WIRESTORK APPROVES YOUR CUSTOMER CREDENTIAL APPLICATION.</p>
        <p style={p}>You must submit a complete and accurate Customer Credential Application and provide all reasonably requested information about You as part of Wirestork&apos;s credentialing process. Wirestork, in its sole discretion, may accept or reject Your Customer Credential Application.</p>

        <h3 style={hs2}>2.2 Account Creation</h3>
        <p style={p}>In addition to this Agreement, You must create an Account and enter into an Order with Wirestork before You can use the Platform. The Order will specify the Service Fees and Report(s) that apply.</p>

        <h3 style={hs2}>2.3 Use of Platform</h3>
        <p style={p}>During the Term and subject to the terms of the Agreement, You may access and use the Platform solely for Your own use of the specific Report(s) in the Order, and via the Wirestork API in compliance with its accompanying Documentation.</p>

        <h3 style={hs2}>2.4 Restrictions</h3>
        <p style={p}>You represent and warrant that You shall not:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "Use, or attempt to use, the Platform for unauthorized purposes (e.g., tenant screening);",
            "Use the Platform for the benefit of any third party without Wirestork's prior written permission;",
            "Copy, distribute, rent, lease, lend, sublicense, or transfer the Platform to any third party without Wirestork's express prior written consent;",
            "Modify, decompile, reverse engineer, or disassemble the Platform or otherwise attempt to discover any underlying source code;",
            "Use any agents, robots, scripts, spiders, or other automated means to access or manage the Platform;",
            "Allow Your personnel to access the Platform or order Reports for improper, illegal, or unauthorized purposes.",
          ].map((item, i) => <li key={i} style={li}>{item}</li>)}
        </ul>

        {/* Section 3 */}
        <h2 style={hs}>3. Use of Reports</h2>
        <h3 style={hs2}>3.1 Your Certifications</h3>
        <p style={p}>When requesting and using Reports, You must comply with all Laws, including anti-discrimination Laws, and state and local Laws. You certify and agree:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "To request and use each Report only for the permissible purpose(s) to which You certified in each applicable Order;",
            "To use each Report for only a one-time use;",
            "To develop and follow reasonable procedures to comply with Laws and for the fair and equitable use of Background Information and Reports;",
            "To allow adverse action decisions only on legally reportable information;",
            "To hold the Reports in strict confidence and not disclose the Reports, unless required by Law, to any third parties;",
            "To maintain complete and accurate records of all required consents, authorizations, and disclosure forms of each Consumer.",
          ].map((item, i) => <li key={i} style={li}>{item}</li>)}
        </ul>

        <h3 style={hs2}>3.2 Employment Purposes</h3>
        <p style={p}>If You use or request a Report for Employment Purposes, You certify that a clear and conspicuous disclosure has been made in writing to the Consumer before the Report is obtained, that the Consumer has authorized in writing the procurement of the Report, and that information from the Report will not be used in violation of any employment opportunity Laws.</p>
        <p style={p}>You further certify that before taking adverse action based on a Report, you will provide the Consumer with a copy of the Report, a copy of the Consumer&apos;s rights, and the required pre-adverse action notice.</p>

        <h3 style={hs2}>3.3 Not Legal Advice</h3>
        <p style={p}>Wirestork does not, and cannot, provide legal advice or other compliance-related services to You or guarantee Your compliance with Laws in your use of the Platform or Reports. You agree to consult with your own legal counsel about the use of background screening information.</p>

        {/* Section 4 */}
        <h2 style={hs}>4. Delivery Terms and Limitations</h2>
        <h3 style={hs2}>4.1 Support</h3>
        <p style={p}>You can request Platform support during Wirestork&apos;s normal business hours via email sent to care@wirestork.com. While Wirestork makes commercially reasonable efforts to ensure continuous availability of the Platform, Wirestork makes no representation, warranty, or guarantee regarding the continuous availability or performance of the Platform.</p>

        <h3 style={hs2}>4.2 Updates</h3>
        <p style={p}>Wirestork may change the Platform features and the production, support, delivery, layout, or maintenance of the Reports from time to time in its sole discretion. For any material and adverse changes to Report features, Wirestork will use commercially reasonable efforts to provide at least 30 days advance notice.</p>

        {/* Section 5 */}
        <h2 style={hs}>5. Your Security Obligations</h2>
        <p style={p}>You represent and warrant that You will:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "Establish a robust security policy and system to protect the security and dissemination of Background Information and Reports;",
            "Designate a limited number of key personnel who have a need to know about Background Information and Reports;",
            "Not give Your account credentials (login or password) to any unknown caller;",
            "Assign a unique logon password to each user and strictly prohibit the sharing of passwords;",
            "Shred or destroy all hard copy Reports, and delete or render unreadable any electronic files containing Reports, after they are no longer needed;",
            "Promptly notify Wirestork if You suspect that any account, credentials, Background Information, or Reports have been compromised.",
          ].map((item, i) => <li key={i} style={li}>{item}</li>)}
        </ul>

        {/* Section 6 */}
        <h2 style={hs}>6. Data</h2>
        <h3 style={hs2}>6.1 Background Information</h3>
        <p style={p}>You authorize Wirestork and its contractors/providers to use Background Information provided to the Platform in accordance with Wirestork&apos;s Privacy Policy. As between You and Wirestork, You are solely responsible for the completeness and accuracy of Background Information.</p>

        <h3 style={hs2}>6.2 Usage Data</h3>
        <p style={p}>Wirestork owns all right, title, and interest in and to all data collected by Wirestork related to the operation of the Platform and Your use thereof. Wirestork will not disclose Usage Data to any third party in a manner that identifies You without Your consent.</p>

        {/* Section 7 */}
        <h2 style={hs}>7. Fees and Payment</h2>
        <h3 style={hs2}>7.1 Fees</h3>
        <p style={p}>During the Term, You will pay Wirestork the Fees specified in each Order. Wirestork will automatically debit the ACH debit account You provide each month.</p>

        <h3 style={hs2}>7.2 Automatic Payment Terms</h3>
        <p style={p}>Wirestork will automatically charge or withdraw funds for the Fees on each invoice. Any amounts due not received by the date due will be subject to a late fee of 1.5% per month, or the maximum charge permitted by law, whichever is less. You are responsible for paying any withholding, sales, value added or other taxes applicable to this Agreement.</p>

        {/* Section 8 */}
        <h2 style={hs}>8. Ownership &amp; Confidentiality</h2>
        <h3 style={hs2}>8.1 Ownership</h3>
        <p style={p}>Wirestork owns all right, title, interest, and Intellectual Property Rights, in and to the Platform and any software, technology, materials, and information related to the Platform, whether currently existing or later developed.</p>

        <h3 style={hs2}>8.2 Confidentiality</h3>
        <p style={p}>Each party will keep confidential all information and materials provided by the other party that is marked as confidential or proprietary, or is identified as confidential or proprietary at the time of disclosure. Each party will maintain all Confidential Information in strict confidence by using at least the same level of care that it uses for its own confidential information, but in no case less than a prudent and reasonable standard of care.</p>

        {/* Section 9 */}
        <h2 style={hs}>9. Warranties &amp; Disclaimers</h2>
        <p style={caps}>YOU ACKNOWLEDGE THAT WIRESTORK OBTAINS THE INFORMATION IN ITS REPORTS FROM THIRD PARTY SOURCES &ldquo;AS IS&rdquo;, AND THEREFORE PROVIDES THE INFORMATION TO YOU ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. WIRESTORK MAKES NO REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR PARTICULAR PURPOSE. WIRESTORK AND ITS SUPPLIERS DO NOT WARRANT THAT THE FUNCTIONALITY AND INFORMATION PROVIDED BY THE PLATFORM WILL BE CORRECT, UNINTERRUPTED, OR ERROR-FREE OR THAT DEFECTS WILL BE CORRECTED.</p>

        {/* Section 10 */}
        <h2 style={hs}>10. Indemnification</h2>
        <h3 style={hs2}>10.1 Indemnification by You</h3>
        <p style={p}>You agree to defend and indemnify Wirestork, and its directors, officers, and employees from and against any third-party liabilities, damages, losses, judgments, costs, expenses (including reasonable attorneys&apos; fees), claims, actions, demands, and suits arising out of or relating to: (a) Your breach of any covenants, representations, or warranties of this Agreement; (b) Your violation of any Law; or (c) the willful or malicious conduct by You or Your employees.</p>

        <h3 style={hs2}>10.2 Indemnification by Wirestork</h3>
        <p style={p}>Wirestork agrees to defend and indemnify You, and Your directors, officers, and employees from and against any Claims arising out of or relating to: (a) Wirestork&apos;s failure to comply with its obligations under Law to Consumers as a consumer reporting agency; and (b) an allegation that the Wirestork API infringes any third-party patent or copyright of the United States.</p>

        {/* Section 11 */}
        <h2 style={hs}>11. Limitation of Liability</h2>
        <p style={caps}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, PUNITIVE, SPECIAL, RELIANCE, INCIDENTAL, CONSEQUENTIAL, OR SIMILAR DAMAGES (INCLUDING LOSS OF REVENUE OR PROFITS) ARISING OUT OF OR RELATING TO THIS AGREEMENT, INCLUDING THE USE OR INABILITY TO USE THE SERVICE, OR FOR ANY INFORMATION OBTAINED FROM OR THROUGH THE SERVICE, EVEN IF THAT PARTY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p style={caps}>IN NO EVENT WILL EITHER PARTY&apos;S AGGREGATE LIABILITY AND DAMAGES ARISING OUT OF THIS AGREEMENT EXCEED THE AMOUNTS YOU ACTUALLY PAID DURING THE SIX (6) MONTH PERIOD PRECEDING THE DATE OF THE CLAIM OR $5,000, WHICHEVER IS HIGHER.</p>

        {/* Section 12 */}
        <h2 style={hs}>12. Term &amp; Termination</h2>
        <h3 style={hs2}>12.1 Term</h3>
        <p style={p}>This Agreement is effective for one year from the Effective Date unless terminated earlier. After the Initial Term, this Agreement automatically renews for additional one (1) year periods until either party terminates with at least 30 days&apos; notice prior to the expiration of the then-current term.</p>

        <h3 style={hs2}>12.2 Suspension</h3>
        <p style={p}>Wirestork may suspend or limit Your access to or use of the Platform at any time if: (i) You do not timely pay all Fees due; (ii) in the sole discretion of Wirestork such action is necessary to prevent material errors or harm; or (iii) You attempt to access or use the Platform or Reports in an unauthorized or unlawful manner.</p>

        <h3 style={hs2}>12.3 Termination by Wirestork</h3>
        <p style={p}>Wirestork may terminate this Agreement or any Order at any time upon 30 days&apos; notice to You, or immediately without notice if: (i) Wirestork believes that You have breached this Agreement or violated any Law; (ii) requested to do so by a third-party data provider; or (iii) a material change in existing legal requirements adversely affects this Agreement.</p>

        <h3 style={hs2}>12.4 Termination for Convenience</h3>
        <p style={p}>Either party may terminate this Agreement for any reason upon thirty (30) days written notice to the other party; provided that, You shall remain liable for all Fees incurred up to the termination date.</p>

        {/* Section 13 */}
        <h2 style={hs}>13. General</h2>
        <h3 style={hs2}>13.1 Governing Law</h3>
        <p style={p}>This Agreement is governed by Delaware Law, excluding its choice of law rules. Each party submits to the jurisdiction of the state and federal courts in Delaware.</p>

        <h3 style={hs2}>13.2 Assignment</h3>
        <p style={p}>Unless explicitly provided in this Agreement, You may not assign any of Your rights or obligations under this Agreement without the prior written consent of Wirestork. Any attempted assignment in violation of this clause is void.</p>

        <h3 style={hs2}>13.3 Insurance</h3>
        <p style={p}>You represent and warrant that, during the Term, You will maintain appropriate insurance coverage, which shall include at minimum: (a) at least $1,000,000 in broad form commercial general liability coverage; (b) statutorily required workers compensation insurance; and (c) employer&apos;s liability insurance.</p>

        <h3 style={hs2}>13.4 Force Majeure</h3>
        <p style={p}>Wirestork will not be responsible for any failure or delay in its performance under this Agreement due to causes beyond its reasonable control, including labor disputes, internet or telecommunications failures, war, terrorism, riot, acts of God or governmental action, or acts by hackers or other malicious third parties.</p>

        <h3 style={hs2}>13.5 Notices</h3>
        <p style={p}>Notices from You to Wirestork must be sent via email to legal@wirestork.com and simultaneously via postal mail. Wirestork will notify You via the Platform, or to the postal or email address You provide in the Customer Portal.</p>

        <h3 style={hs2}>13.6 Miscellaneous</h3>
        <p style={p}>The parties are independent contractors, and this Agreement does not create an agency, partnership, or joint venture. If any provision is found unenforceable, it and any related provisions will be interpreted to best accomplish the unenforceable provision&apos;s essential purpose. This Agreement reflects the parties&apos; entire agreement relating to its subject and supersedes any prior or contemporaneous agreements on that subject.</p>

        {/* Contact */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 2, marginTop: 48 }}>
          <div style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 8, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</div>
          Wirestork, Inc.<br />
          Conzurge Inc.<br />
          2035 Sunset Lake Road<br />
          City of Newark, Delaware 19702<br />
          legal@wirestork.com
        </div>

      </section>
    </div>
  );
}
