import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Wirestork",
  description: "How Wirestork collects, uses, and protects your personal information across our background check services.",
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

export default function PrivacyPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

        <h2 style={hs}>1. Introduction</h2>
        <p style={p}>Your privacy is important to us. It is Wirestork&apos;s policy to respect your privacy regarding any information we may collect from you across our website, https://wirestork.com, and other sites we own and operate. Wirestork.com is operated by Conzurge Inc., located at 2035 Sunset Lake Road, City of Newark, Delaware 19702. This Privacy Policy applies to all background check services provided by Wirestork.</p>

        <h2 style={hs}>2. Information Collection</h2>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 10, marginTop: 24 }}>2.1 Types of Information Collected</h3>
        <p style={p}>We only ask for personal information when we truly need it to provide our background check services to you. We collect it by fair and lawful means, with your knowledge and consent. The types of personal information we may collect include, but are not limited to:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Personal Identification Information", "Name, address, date of birth, social security number."],
            ["Contact Information", "Email address, phone number."],
            ["Employment Information", "Employment history, job titles, employer names, durations of employment."],
            ["Educational Information", "Educational history, institutions attended, degrees awarded."],
            ["Criminal Records", "Arrest records, conviction records, court records."],
            ["Financial Information", "Credit history, financial standing."],
            ["Professional Licenses", "Licenses held, statuses, disciplinary actions."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 10, marginTop: 24 }}>2.2 Collection Methods</h3>
        <p style={p}>Information is collected through various means including:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Direct Input", "Information you provide directly to us through forms, applications, or other communications."],
            ["Third-party Sources", "Information from employers, educational institutions, public records, and other third parties as necessary to perform the background check services."],
            ["Automated Technologies", "Information collected through cookies and similar tracking technologies when you use our website."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>3. Use of Information</h2>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 10, marginTop: 24 }}>3.1 Purpose of Use</h3>
        <p style={p}>We use the collected information for the following purposes:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "To perform and deliver background check services as requested by you or your employer.",
            "To verify the accuracy of the information provided.",
            "To comply with legal and regulatory requirements.",
            "To communicate with you regarding our services, including responding to inquiries and providing updates.",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>

        <h2 style={hs}>4. Data Retention</h2>
        <p style={p}>We only retain collected information for as long as necessary to provide you with your requested background check service, comply with our legal obligations, resolve disputes, and enforce our agreements. Specific retention periods are determined based on the following criteria:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Duration of Service", "As long as necessary to fulfill the purpose for which the information was collected."],
            ["Legal Requirements", "Periods defined by applicable laws and regulations."],
            ["Business Needs", "As required for our legitimate business interests."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>5. Data Security</h2>
        <p style={p}>We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Encryption", "Data encryption during transmission and at rest."],
            ["Access Controls", "Restricted access to personal information to authorized personnel only."],
            ["Monitoring", "Regular monitoring of systems for potential vulnerabilities and attacks."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>6. Information Sharing</h2>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 10, marginTop: 24 }}>6.1 Third-party Disclosure</h3>
        <p style={p}>We do not share any personally identifying information publicly or with third parties, except in the following circumstances:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["With Your Consent", "When you have given us explicit consent to share the information."],
            ["For Legal Compliance", "To comply with legal obligations, such as court orders or subpoenas."],
            ["With Service Providers", "To third-party vendors and service providers who perform services on our behalf, under contractual obligations to protect your information."],
            ["Business Transfers", "In the event of a merger, acquisition, or sale of all or a portion of our assets."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>7. External Links</h2>
        <p style={p}>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies. We encourage you to review the privacy policies of any external sites you visit.</p>

        <h2 style={hs}>8. Your Rights</h2>
        <p style={p}>You have certain rights regarding your personal information under U.S. laws, including:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Access", "The right to request access to your personal information."],
            ["Correction", "The right to request correction of any inaccurate or incomplete information."],
            ["Deletion", "The right to request deletion of your personal information, subject to certain legal restrictions."],
            ["Objection", "The right to object to the processing of your personal information in certain circumstances."],
            ["Portability", "The right to request a copy of your personal information in a structured, commonly used, and machine-readable format."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>9. Acceptance of Terms</h2>
        <p style={p}>Your continued use of our website and services will be regarded as acceptance of our practices around privacy and personal information. If you do not agree with this policy, please do not use our website or services.</p>

        <h2 style={hs}>10. Changes to This Policy</h2>
        <p style={p}>Wirestork reserves the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services constitutes your acceptance of the revised policy.</p>

        <h2 style={hs}>11. Contact Information</h2>
        <p style={p}>If you have any questions or concerns regarding this Policy, please contact us at:</p>
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
