import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wirestork",
  description: "Get in touch with Wirestork for order inquiries, legal questions, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="container-sm" style={{ textAlign: "center" }}>
          <div className="badge badge-brand" style={{ marginBottom: 20 }}>Contact Us</div>
          <h1 className="display" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: 16 }}>Get in Touch</h1>
          <p style={{ color: "var(--muted)", fontSize: 18 }}>
            Our contact is for order-related inquiries only. For legal advice, please book a consultation.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container-sm">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {/* Contact info */}
            <div>
              <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 24 }}>Contact Information</h2>
              {[
                { icon: "🌐", label: "Website", value: "wirestork.com" },
                { icon: "📍", label: "Location", value: "Dubai, United Arab Emirates" },
                { icon: "🕐", label: "Hours", value: "Sun–Thu, 9am–6pm GST" },
                { icon: "⚡", label: "Response", value: "Usually within 4 business hours" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--muted)", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: 15 }}>{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="card" style={{ padding: 20, background: "var(--brand-dim)", borderColor: "var(--brand-border)", marginTop: 16 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Need urgent legal help?</div>
                <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 12 }}>Book a same-day consultation with a licensed UAE lawyer.</div>
                <a href="/online-lawyer-consultation" className="btn btn-primary" style={{ fontSize: 13, padding: "9px 18px" }}>
                  Book Consultation →
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 24 }}>Send a Message</h2>
              <form>
                {[
                  { label: "Full Name", type: "text", placeholder: "John Smith" },
                  { label: "Email Address", type: "email", placeholder: "you@example.com" },
                  { label: "Order ID (if applicable)", type: "text", placeholder: "WS-XXXX" },
                ].map((f) => (
                  <div key={f.label} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="input" />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Message</label>
                  <textarea className="input" rows={5} placeholder="Describe your inquiry..." style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
