import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Retention Policy — Wirestork",
  description: "Wirestork's data retention policy covering collection, storage, deletion periods, consumer rights, and compliance with FCRA, CCPA, and GDPR.",
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
  marginTop: 24,
};
const p: React.CSSProperties = { marginBottom: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontSize: 15 };
const li: React.CSSProperties = { marginBottom: 8, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: 15 };

export default function DataRetentionPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12 }}>
            Data Retention Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

        <h2 style={hs}>1. Introduction</h2>
        <p style={p}>This Data Retention Policy (&ldquo;Policy&rdquo;) outlines the retention, storage, and disposal of data collected and processed by Wirestork, Inc. (&ldquo;Wirestork&rdquo;). Wirestork provides background check services, and this Policy is designed to ensure compliance with applicable U.S. laws and regulations. By using Wirestork&apos;s services, you agree to the terms of this Policy.</p>

        <h2 style={hs}>2. Purpose</h2>
        <p style={p}>The purpose of this Policy is to:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "Ensure compliance with federal, state, and local laws and regulations.",
            "Protect the privacy and confidentiality of personal data.",
            "Manage data efficiently and effectively.",
            "Provide guidelines for data retention, storage, and disposal.",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>

        <h2 style={hs}>3. Scope</h2>
        <p style={p}>This Policy applies to all data collected, processed, and stored by Wirestork, including but not limited to:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            "Personal Identification Information (PII)",
            "Employment Information",
            "Educational Information",
            "Criminal Records",
            "Financial Information",
            "Background Check Reports",
          ].map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>

        <h2 style={hs}>4. Data Collection and Processing</h2>
        <p style={p}>Wirestork collects and processes data in compliance with applicable laws, including the Fair Credit Reporting Act (FCRA), and other federal, state, and local regulations. The data collected is used solely for the purpose of providing background check services to our clients.</p>

        <h2 style={hs}>5. Data Retention Periods</h2>
        <h3 style={hs2}>5.1 General Retention Period</h3>
        <p style={p}>Wirestork retains data for a period of seven (7) years from the date of collection or the completion of the background check report, whichever is later. This retention period complies with federal and state laws, including the FCRA.</p>

        <h3 style={hs2}>5.2 Specific Retention Periods</h3>
        <p style={p}>Certain types of data may be subject to different retention periods based on legal requirements or business needs:</p>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
          {[
            ["Consumer Reports", "7 years from date of report completion"],
            ["Investigative Consumer Reports", "5 years from date of report completion"],
            ["Criminal Records", "7 years from date of report completion"],
            ["Financial Information", "7 years from date of report completion"],
            ["Employment Verification Records", "7 years from date of report completion"],
            ["Educational Verification Records", "7 years from date of report completion"],
          ].map(([type, period], i) => (
            <div key={type} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{type}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textAlign: "right" }}>{period}</span>
            </div>
          ))}
        </div>

        <h2 style={hs}>6. Data Storage and Security</h2>
        <h3 style={hs2}>6.1 Data Storage</h3>
        <p style={p}>Wirestork implements industry-standard security measures to protect data from unauthorized access, use, or disclosure. Data is stored in secure databases and systems that comply with applicable security standards.</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Encryption", "All personal data is encrypted both in transit and at rest using strong encryption protocols."],
            ["Access Controls", "Access to data is restricted to authorized personnel only, based on the principle of least privilege. Role-based access controls are implemented to ensure that individuals have access only to the data necessary for their job functions."],
            ["Regular Security Audits", "Wirestork conducts regular security audits and assessments to identify and address potential vulnerabilities in our data storage systems."],
            ["Data Backup", "Regular backups of data are performed to ensure data integrity and availability. Backups are stored securely and are also subject to the same security measures as primary data."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>7. Data Deletion</h2>
        <h3 style={hs2}>7.1 Data Deletion Procedures</h3>
        <p style={p}>At the end of the retention period, Wirestork will securely dispose of data in compliance with applicable laws and regulations. The methods of disposal include:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Electronic Data", "Secure deletion or destruction of electronic files using industry-standard data wiping methods to ensure data cannot be recovered. This includes overwriting data with random patterns, degaussing, and cryptographic erasure."],
            ["Physical Data", "Shredding, pulping, or incinerating physical documents containing personal data to ensure complete destruction. Physical destruction is conducted by a certified document destruction service."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h3 style={hs2}>7.2 Data Deletion Requests</h3>
        <p style={p}>Consumers have the right to request the deletion of their personal data under certain circumstances. Wirestork will comply with all valid requests in accordance with applicable laws and regulations, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR), as applicable.</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Request Verification", "Before processing a data deletion request, Wirestork will verify the identity of the requester to ensure that the request is legitimate."],
            ["Deletion Timeline", "Wirestork will respond to data deletion requests within the timeframe required by applicable law, typically within 45 days. If an extension is necessary, Wirestork will inform the requester of the reason for the delay and the expected timeframe for completion."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>8. Consumer Rights</h2>
        <h3 style={hs2}>8.1 Right to Access</h3>
        <p style={p}>Consumers have the right to access their personal data held by Wirestork. Upon request, Wirestork will provide a copy of the data in a structured, commonly used, and machine-readable format.</p>

        <h3 style={hs2}>8.2 Right to Correct</h3>
        <p style={p}>Consumers have the right to request corrections to any inaccuracies in their personal data. Wirestork will promptly update any incorrect information upon receiving a valid request.</p>

        <h3 style={hs2}>8.3 Right to Delete</h3>
        <p style={p}>Consumers have the right to request the deletion of their personal data under certain circumstances. Wirestork will comply with all valid requests for data deletion, subject to applicable legal exceptions.</p>

        <h2 style={hs}>9. Compliance and Training</h2>
        <p style={p}>Wirestork employees are trained on this Data Retention Policy and the importance of data protection and compliance with applicable laws. Regular audits and reviews are conducted to ensure adherence to this Policy.</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Employee Training", "All employees receive training on data protection principles, security practices, and compliance requirements. Training is conducted annually and whenever there are significant changes to applicable laws or internal policies."],
            ["Audit and Review", "Wirestork conducts regular audits and reviews of its data retention and security practices to ensure compliance with this Policy and applicable laws. Any identified deficiencies are promptly addressed and remediated."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

        <h2 style={hs}>10. Policy Updates</h2>
        <p style={p}>Wirestork reserves the right to update this Data Retention Policy as necessary to comply with legal requirements or to reflect changes in our business practices. Any updates to this Policy will be posted on our website and communicated to our clients as appropriate.</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {[
            ["Notification of Changes", "Significant changes to this Policy will be communicated to clients and consumers via email or other appropriate channels. The updated Policy will also be available on the Wirestork website."],
            ["Effective Date", "The effective date of any updates will be clearly indicated at the beginning of the Policy document."],
          ].map(([label, detail]) => (
            <li key={label as string} style={li}><strong style={{ color: "rgba(255,255,255,0.75)" }}>{label}:</strong> {detail}</li>
          ))}
        </ul>

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
