import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Wirestork — UAE Legal Services",
  description: "Wirestork simplifies legal intelligence across the UAE and GCC. Learn about our mission, attorney network, and technology.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container-sm" style={{ textAlign: "center" }}>
          <div className="badge badge-brand" style={{ marginBottom: 20 }}>About Wirestork</div>
          <h1 className="display" style={{ fontSize: "clamp(36px, 6vw, 64px)", marginBottom: 24 }}>
            Legal Intelligence,{" "}
            <span className="display-italic" style={{ color: "var(--brand)" }}>Simplified.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--muted)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
            Wirestork is a legal services aggregator operated by Conzur Legal Technologies. We connect individuals and businesses with top-rated lawyers and verified legal intelligence across the UAE and GCC.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/services" className="btn btn-primary">Browse Services →</Link>
            <Link href="/attorney-network" className="btn btn-outline">Our Lawyers</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="badge badge-accent" style={{ marginBottom: 16 }}>Our Mission</div>
              <h2 className="display" style={{ fontSize: 40, marginBottom: 20 }}>At great lawyers comes great legal help</h2>
              <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Navigating legal challenges in a foreign country can be overwhelming. Wirestork was built to remove that friction — giving anyone in the UAE and GCC access to fast, accurate, and affordable legal intelligence.
              </p>
              <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
                We are not a law firm. We are a platform that connects you with licensed practitioners and official data sources — so you always know exactly where you stand.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { value: "12,000+", label: "Cases Resolved" },
                { value: "60+", label: "GCC Lawyers" },
                { value: "7", label: "UAE Emirates Covered" },
                { value: "4.9★", label: "Average Rating" },
              ].map((s) => (
                <div key={s.label} className="card" style={{ padding: 24, textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "var(--brand)", fontFamily: "Playfair Display, serif" }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--canvas)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="display" style={{ fontSize: 40 }}>What we stand for</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "🔒", title: "Confidential", desc: "Every request is handled with strict confidentiality. Your data is never shared without consent." },
              { icon: "✅", title: "Human-Verified", desc: "We don't just pull automated data. Every result is reviewed by a qualified team member before delivery." },
              { icon: "⚡", title: "Fast", desc: "Most services are delivered within 24–48 hours. Express options available for urgent cases." },
              { icon: "🏛️", title: "Official Sources", desc: "We work directly with DNRD, ICA, MOHRE, Jawazat and other official government databases." },
              { icon: "🤝", title: "Licensed Lawyers", desc: "Our attorney network includes 60+ licensed practitioners across the UAE and Saudi Arabia." },
              { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. What you see is what you pay. AED pricing, no currency surprises." },
            ].map((v) => (
              <div key={v.title} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{v.title}</div>
                <div style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container-sm" style={{ textAlign: "center" }}>
          <div className="badge badge-brand" style={{ marginBottom: 16 }}>Legal Disclaimer</div>
          <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
            Wirestork provides legal information and connects users with licensed legal professionals. We are not a law firm and do not provide legal advice. Information provided through our platform is for general informational purposes only. Always consult with a qualified lawyer for advice specific to your situation.
          </p>
        </div>
      </section>
    </>
  );
}
