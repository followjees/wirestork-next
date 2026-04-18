import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Wirestork",
  description: "How Wirestork collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, background: "white" }}>
      <div className="container-sm">
        <div className="badge badge-brand" style={{ marginBottom: 20 }}>Legal</div>
        <h1 className="display" style={{ fontSize: 44, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "var(--muted)", marginBottom: 48 }}>Last updated: April 2026</p>
        <div className="prose">
          <h2>1. Introduction</h2>
          <p>Your privacy is important to us. It is Wirestork's policy to respect your privacy regarding any information we may collect from you across our website, wirestork.com, and other sites we own and operate.</p>
          <h2>2. Information We Collect</h2>
          <p>We collect information you directly provide to us when placing orders, creating an account, or contacting us. This includes: name, email address, phone number, nationality, and passport/Emirates ID number (for verification services only).</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to process and deliver your requested services, communicate with you about your orders, improve our platform, and comply with legal obligations.</p>
          <h2>4. Data Sharing</h2>
          <p>We do not sell your personal data. We share your data only with licensed attorneys and official government entities as required to deliver your requested service, and with payment processors (Stripe) to handle transactions.</p>
          <h2>5. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to provide services and comply with legal requirements. See our <a href="/data-retention">Data Retention Policy</a> for details.</p>
          <h2>6. Security</h2>
          <p>We implement industry-standard security measures including SSL encryption, access controls, and regular security audits to protect your data.</p>
          <h2>7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us through the <a href="/reach-us">contact page</a>.</p>
          <h2>8. Contact</h2>
          <p>For privacy-related inquiries, please visit our <a href="/reach-us">contact page</a>.</p>
        </div>
      </div>
    </div>
  );
}
