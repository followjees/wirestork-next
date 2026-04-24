import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Wirestork",
  description: "Wirestork's strict no-refund policy. Payments are transferred directly to legal representatives upon order placement.",
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
const p: React.CSSProperties = {
  marginBottom: 16,
  color: "rgba(255,255,255,0.6)",
  lineHeight: 1.9,
  fontSize: 15,
};

export default function RefundsPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12 }}>
            Refund Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Last updated: April 2026</p>
        </div>
      </section>

      {/* No-refund notice banner */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 32px 0" }}>
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "16px 22px", fontSize: 14, color: "rgba(255,180,180,0.8)", lineHeight: 1.7 }}>
          <strong style={{ color: "#FCA5A5" }}>Important:</strong> Wirestork maintains a strict no-refund policy. Once a payment is made, it is immediately transferred to the relevant legal representative and no refunds will be issued under any circumstances.
        </div>
      </div>

      {/* Body */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "48px 32px 100px" }}>

        <h2 style={hs}>1. Introduction</h2>
        <p style={p}>This Refund Policy (&ldquo;Policy&rdquo;) applies to all services provided by Wirestork.com (&ldquo;Wirestork&rdquo;), a legal services aggregator operated by Conzurge Inc., located at 2035 Sunset Lake Road, City of Newark, Delaware 19702. By using our services, you agree to be bound by this Policy.</p>

        <h2 style={hs}>2. Services Provided</h2>
        <p style={p}>Wirestork acts as a service benefactor, meaning that the payments provided by you are directly transferred to a legal representative within hours of placing your order. All services provided by Wirestork are delivered &ldquo;as is,&rdquo; and you assume the responsibility for your purchase.</p>

        <h2 style={hs}>3. No Refunds</h2>
        <p style={p}>Due to the nature of our services, Wirestork maintains a strict no-refund policy. Once a payment is made, it is immediately transferred to the relevant legal representative, and no refunds will be issued under any circumstances.</p>

        <h2 style={hs}>4. Customer Responsibility</h2>
        <p style={p}>You are solely responsible for ensuring the accuracy of your order and the information provided at the time of purchase. By placing an order, you acknowledge and accept that you will not be entitled to a refund for any reason.</p>

        <h2 style={hs}>5. Contact Information</h2>
        <p style={p}>If you have any questions or concerns regarding this Policy, please contact us at:</p>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 2 }}>
          Wirestork.com<br />
          Conzurge Inc.<br />
          2035 Sunset Lake Road<br />
          City of Newark, Delaware 19702
        </div>

        <h2 style={hs}>6. Changes to This Policy</h2>
        <p style={p}>Wirestork reserves the right to modify this Policy at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services constitutes your acceptance of the revised Policy.</p>

        <h2 style={hs}>7. Governing Law</h2>
        <p style={p}>This Policy shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.</p>

      </section>
    </div>
  );
}
