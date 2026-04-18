import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Wirestork",
  description: "Wirestork terms of service governing the use of our legal intelligence platform.",
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, background: "white" }}>
      <div className="container-sm">
        <div className="badge badge-brand" style={{ marginBottom: 20 }}>Legal</div>
        <h1 className="display" style={{ fontSize: 44, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: "var(--muted)", marginBottom: 48 }}>Last updated: April 2026</p>
        <div className="prose">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Wirestork's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          <h2>2. Services Description</h2>
          <p>Wirestork is a legal services aggregator operated by Conzur Legal Technologies. We provide information services, connect clients with licensed attorneys, and facilitate legal document verification. We are not a law firm and do not provide legal advice directly.</p>
          <h2>3. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account.</p>
          <h2>4. Payment Terms</h2>
          <p>All prices are in UAE Dirhams (AED) and inclusive of applicable VAT. Payment is due at time of order. We accept major credit/debit cards through our secure payment processor.</p>
          <h2>5. Refund Policy</h2>
          <p>Please refer to our separate <a href="/refunds-and-cancellations">Refund Policy</a> for information on cancellations and refunds.</p>
          <h2>6. Limitation of Liability</h2>
          <p>Wirestork shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</p>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
        </div>
      </div>
    </div>
  );
}
