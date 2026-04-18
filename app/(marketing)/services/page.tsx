import Link from "next/link";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Services — UAE & GCC",
  description: "Browse all Wirestork legal services — travel ban checks, background verifications, legal consultations, and more.",
};

const categories = [...new Set(products.map((p) => p.category))];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 64 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="badge badge-brand" style={{ marginBottom: 20 }}>All Services</div>
          <h1 className="display" style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: 16 }}>
            UAE & GCC Legal Services
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 520, margin: "0 auto" }}>
            Every service is human-verified, confidential, and delivered within 24–72 hours.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {products.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: "none" }}>
                <div className="card card-hover" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: "var(--brand)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {p.category}
                    </div>
                    {p.badge && <div className="badge badge-accent">{p.badge}</div>}
                  </div>
                  <h2 style={{ fontWeight: 700, fontSize: 19, marginBottom: 8, color: "var(--ink)" }}>{p.title}</h2>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, flex: 1, marginBottom: 20 }}>{p.tagline}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                    <div>
                      {p.regularPrice && p.regularPrice > p.price && (
                        <span style={{ fontSize: 12, color: "var(--light)", textDecoration: "line-through", marginRight: 6 }}>
                          AED {p.regularPrice.toLocaleString()}
                        </span>
                      )}
                      <span style={{ fontWeight: 800, fontSize: 22, color: "var(--ink)" }}>
                        AED {p.price.toLocaleString()}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--muted)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {p.turnaround}
                    </div>
                  </div>
                  <div className="btn btn-primary" style={{ marginTop: 16, justifyContent: "center", width: "100%" }}>
                    Get Started →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "var(--surface-2)", padding: "40px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { icon: "🔒", label: "SSL Encrypted" },
              { icon: "✅", label: "Human Verified" },
              { icon: "⚡", label: "24–48hr Delivery" },
              { icon: "🏛️", label: "Official Sources" },
              { icon: "🤝", label: "60+ GCC Lawyers" },
            ].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--muted)" }}>
                <span>{t.icon}</span>
                <span style={{ fontWeight: 500 }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
