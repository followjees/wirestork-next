import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Wirestork",
};

export default function RefundsPage() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, background: "white" }}>
      <div className="container-sm">
        <div className="badge badge-brand" style={{ marginBottom: 20 }}>Legal</div>
        <h1 className="display" style={{ fontSize: 44, marginBottom: 8 }}>Refund & Cancellation Policy</h1>
        <p style={{ color: "var(--muted)", marginBottom: 48 }}>Last updated: April 2026</p>
        <div className="prose">
          <h2>1. Introduction</h2>
          <p>This Refund Policy applies to all services provided by Wirestork.com, a legal services aggregator operated by Conzur Legal Technologies.</p>
          <h2>2. Eligibility for Refunds</h2>
          <p>Refunds may be granted in the following circumstances:</p>
          <p>• Service not initiated within 5 business days of payment<br />
          • Duplicate payment made for the same service<br />
          • Service technically impossible to complete due to data unavailability<br />
          • Written cancellation received before service initiation</p>
          <h2>3. Non-Refundable Services</h2>
          <p>The following are non-refundable once initiated:</p>
          <p>• Travel Ban Check services (once database query is submitted)<br />
          • Legal consultations (once the lawyer session has begun)<br />
          • Express service add-on fees<br />
          • Mercy Petition filing fees (once documents are submitted)</p>
          <h2>4. Consultation Services</h2>
          <p>For the UAE Business Formation Consultation, the AED 250 fee is fully refundable when you proceed with Wirestork for your company formation.</p>
          <h2>5. How to Request a Refund</h2>
          <p>To request a refund, contact us through our <a href="/reach-us">contact page</a> within 7 days of your order date, providing your order ID and reason for the refund request.</p>
          <h2>6. Processing Time</h2>
          <p>Approved refunds are processed within 5–10 business days to your original payment method.</p>
        </div>
      </div>
    </div>
  );
}
