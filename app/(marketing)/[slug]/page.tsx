import { products, getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                <span className="badge badge-brand">{product.category}</span>
                {product.badge && <span className="badge badge-accent">{product.badge}</span>}
              </div>
              <h1 className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", marginBottom: 20 }}>
                {product.title}
              </h1>
              <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
                {product.description}
              </p>
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <div>
                  {product.regularPrice && product.regularPrice > product.price && (
                    <div style={{ fontSize: 14, color: "var(--light)", textDecoration: "line-through" }}>
                      AED {product.regularPrice.toLocaleString()}
                    </div>
                  )}
                  <div style={{ fontSize: 36, fontWeight: 900, color: "var(--ink)", fontFamily: "Playfair Display, serif" }}>
                    AED {product.price.toLocaleString()}
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {product.turnaround}
                </div>
              </div>
            </div>

            {/* Order card */}
            <div className="card" style={{ padding: 32 }}>
              <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>Service Total</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: "var(--brand)", fontFamily: "Playfair Display, serif", marginBottom: 4 }}>
                AED {product.price.toLocaleString()}
              </div>
              {product.regularPrice && product.regularPrice > product.price && (
                <div className="badge badge-accent" style={{ marginBottom: 20 }}>
                  Save AED {(product.regularPrice - product.price).toLocaleString()}
                </div>
              )}
              <div style={{ marginBottom: 20, marginTop: 16 }}>
                {product.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 14 }}>
                    <span style={{ color: "var(--success)", flexShrink: 0 }}>✓</span>
                    <span style={{ color: "var(--muted)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href={`/checkout?product=${product.slug}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "14px" }}>
                Get Started →
              </Link>
              <Link href="/reach-us" className="btn btn-outline" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
                Ask a Question
              </Link>
              <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "var(--light)" }}>
                🔒 Secure checkout · Human-verified results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-sm">
          <h2 className="display" style={{ fontSize: 36, marginBottom: 40 }}>What's included</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {product.features.map((f) => (
              <div key={f} className="card" style={{ padding: "18px 22px", display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand-dim)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "var(--brand)", fontSize: 16 }}>✓</span>
                </div>
                <span style={{ fontWeight: 500, fontSize: 15 }}>{f}</span>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 28, marginTop: 40, background: "var(--surface-2)", borderColor: "var(--brand-border)" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 28 }}>⏱</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Turnaround Time</div>
                <div style={{ color: "var(--muted)", fontSize: 14 }}>{product.turnaround}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--canvas)" }}>
          <div className="container">
            <h2 className="display" style={{ fontSize: 32, marginBottom: 32 }}>Related services</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {related.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card card-hover" style={{ padding: 24 }}>
                    <div style={{ fontSize: 11, color: "var(--brand)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{p.category}</div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 12 }}>{p.tagline}</p>
                    <div style={{ fontWeight: 800, color: "var(--brand)" }}>AED {p.price.toLocaleString()} →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
