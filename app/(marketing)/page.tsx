import Link from "next/link";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wirestork — Legal Intelligence Simplified",
  description: "Fast, accurate travel ban checks, background checks, legal consultations and more across the UAE and GCC.",
};

const stats = [
  { value: "12,000+", label: "Cases Resolved" },
  { value: "60+", label: "GCC Lawyers" },
  { value: "4.9★", label: "Avg. Rating" },
  { value: "24hrs", label: "Avg. Turnaround" },
];

const featured = products.filter((p) =>
  ["travel-ban-uae-check", "uae-court-police-case-checking", "labor-ban-check", "online-lawyer-consultation", "employee-check", "check-travel-ban-in-saudi-arabia"].includes(p.slug)
);

const howItWorks = [
  { step: "01", title: "Choose a Service", desc: "Pick the check or legal service you need from our catalogue." },
  { step: "02", title: "Submit Details", desc: "Fill in the required information securely. Takes under 2 minutes." },
  { step: "03", title: "We Verify", desc: "Our team checks official government databases and attorney networks." },
  { step: "04", title: "Get Results", desc: "Receive your verified report — usually within 24–48 hours." },
];

const testimonials = [
  { name: "Amitava D.", country: "India", text: "Got my travel ban result in under 24 hours. Saved me a trip to the airport." },
  { name: "Rachid E.", country: "Morocco", text: "Used the legal consultation for an employment dispute. The lawyer was clear and practical." },
  { name: "Surpreet K.", country: "Canada", text: "The employee background check was thorough and GDFRA compliant. Exactly what we needed." },
  { name: "Mohmed H.", country: "UK", text: "Mercy petition service was professional. They handled everything and kept me updated." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 140, paddingBottom: 96 }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div className="badge badge-brand" style={{ marginBottom: 24 }}>
              🇦🇪 UAE & GCC Legal Services
            </div>
            <h1 className="display" style={{ fontSize: "clamp(40px, 7vw, 80px)", marginBottom: 24, color: "var(--ink)" }}>
              Legal Intelligence{" "}
              <span className="display-italic" style={{ color: "var(--brand)" }}>Simplified.</span>
            </h1>
            <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
              Travel ban checks, background verifications, legal consultations — fast, accurate, and human-verified across the UAE and GCC.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/travel-ban-uae-check" className="btn btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Check Travel Ban →
              </Link>
              <Link href="/online-lawyer-consultation" className="btn btn-outline" style={{ fontSize: 16, padding: "14px 28px" }}>
                Talk to a Lawyer
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
            maxWidth: 680, margin: "64px auto 0", textAlign: "center"
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--brand)", fontFamily: "Playfair Display, serif" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="badge badge-brand" style={{ marginBottom: 16 }}>Our Services</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: 16 }}>
              Everything legal, <span style={{ color: "var(--brand)" }}>under one roof.</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 17, maxWidth: 480, margin: "0 auto" }}>
              From quick ban checks to full legal representation — we've got the GCC covered.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {featured.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: "none" }}>
                <div className="card card-hover" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
                  {p.badge && <div className="badge badge-brand" style={{ marginBottom: 12, alignSelf: "flex-start" }}>{p.badge}</div>}
                  <div style={{ fontSize: 11, color: "var(--brand)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{p.category}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: "var(--ink)" }}>{p.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, flex: 1, marginBottom: 20 }}>{p.tagline}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      {p.regularPrice && p.regularPrice > p.price && (
                        <span style={{ fontSize: 12, color: "var(--light)", textDecoration: "line-through", marginRight: 6 }}>AED {p.regularPrice.toLocaleString()}</span>
                      )}
                      <span style={{ fontWeight: 800, fontSize: 20, color: "var(--ink)" }}>AED {p.price.toLocaleString()}</span>
                    </div>
                    <span style={{ color: "var(--brand)", fontSize: 20 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "var(--canvas)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="badge badge-accent" style={{ marginBottom: 16 }}>Simple Process</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              How it <span style={{ color: "var(--brand)" }}>works</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {howItWorks.map((h) => (
              <div key={h.step} className="card" style={{ padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{
                  position: "absolute", top: -8, right: 16, fontSize: 80, fontWeight: 900,
                  color: "var(--brand-dim)", fontFamily: "Playfair Display, serif", lineHeight: 1, userSelect: "none"
                }}>{h.step}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--brand)", fontFamily: "JetBrains Mono, monospace", marginBottom: 12 }}>{h.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{h.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="badge badge-success" style={{ marginBottom: 16 }}>Trusted by Thousands</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              What our clients <span style={{ color: "var(--brand)" }}>say</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {testimonials.map((t) => (
              <div key={t.name} className="card" style={{ padding: 24 }}>
                <div style={{ color: "var(--accent)", fontSize: 20, marginBottom: 12 }}>★★★★★</div>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{t.text}"</p>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "var(--light)" }}>{t.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 64px)", marginBottom: 24 }}>
            Know your legal status.<br />
            <span style={{ color: "var(--brand)" }}>Before it's too late.</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 18, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Join over 12,000 people who've used Wirestork to navigate UAE and GCC legal challenges.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/travel-ban-uae-check" className="btn btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
              Start a Ban Check →
            </Link>
            <Link href="/services" className="btn btn-outline" style={{ fontSize: 16, padding: "14px 28px" }}>
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
