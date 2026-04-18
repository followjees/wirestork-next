// app/(marketing)/[slug]/page.tsx
import { products, getProduct } from "@/lib/products";
import { getWCProductBySlug, getPageBySlug } from "@/lib/wordpress/client";
import { productToMetadata, pageToMetadata, buildServiceSchema, stripHtml } from "@/lib/wordpress/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wcProduct = await getWCProductBySlug(slug);
  if (wcProduct) return productToMetadata(wcProduct);
  const wpPage = await getPageBySlug(slug);
  if (wpPage) return pageToMetadata(wpPage, slug);
  const local = getProduct(slug);
  if (local) {
    return {
      title: local.title,
      description: local.tagline,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://wirestork.com"}/${slug}`,
      },
    };
  }
  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  // Try WooCommerce product
  const wcProduct = await getWCProductBySlug(slug);
  if (wcProduct) {
    const price = parseFloat(wcProduct.price) || 0;
    const regularPrice = parseFloat(wcProduct.regular_price) || 0;
    const description = stripHtml(wcProduct.description);
    const category = wcProduct.categories?.[0]?.name ?? "";
    const localFallback = getProduct(slug);
    const features = localFallback?.features ?? [];
    const turnaround = localFallback?.turnaround ?? "";
    const badge = localFallback?.badge;
    const related = products
      .filter((p) => p.slug !== slug && p.category === (localFallback?.category ?? category))
      .slice(0, 3);
    return (
      <>
        <JsonLd data={buildServiceSchema(wcProduct)} />
        <ServicePageUI
          slug={slug} title={wcProduct.name} description={description}
          price={price} regularPrice={regularPrice > price ? regularPrice : undefined}
          currency="AED" category={category} badge={badge}
          features={features} turnaround={turnaround} related={related}
        />
      </>
    );
  }

  // Try WP Page (content-only pages)
  const wpPage = await getPageBySlug(slug);
  if (wpPage) {
    return (
      <div style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container-sm">
          <h1
            className="display"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: 32 }}
            dangerouslySetInnerHTML={{ __html: wpPage.title.rendered }}
          />
          <div className="prose" dangerouslySetInnerHTML={{ __html: wpPage.content.rendered }} />
        </div>
      </div>
    );
  }

  // Local product fallback
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

  return (
    <ServicePageUI
      slug={slug} title={product.title} description={product.description}
      price={product.price}
      regularPrice={product.regularPrice && product.regularPrice > product.price ? product.regularPrice : undefined}
      currency={product.currency} category={product.category} badge={product.badge}
      features={product.features} turnaround={product.turnaround} related={related}
    />
  );
}

export const revalidate = 3600;

interface ServicePageUIProps {
  slug: string;
  title: string;
  description: string;
  price: number;
  regularPrice?: number;
  currency: string;
  category: string;
  badge?: string;
  features: string[];
  turnaround: string;
  related: Array<{ slug: string; title: string; category: string; tagline: string; price: number }>;
}

function ServicePageUI({ slug, title, description, price, regularPrice, currency, category, badge, features, turnaround, related }: ServicePageUIProps) {
  return (
    <>
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                <span className="badge badge-brand">{category}</span>
                {badge && <span className="badge badge-accent">{badge}</span>}
              </div>
              <h1 className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", marginBottom: 20 }}>{title}</h1>
              <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>{description}</p>
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <div>
                  {regularPrice && (
                    <div style={{ fontSize: 14, color: "var(--light)", textDecoration: "line-through" }}>
                      {currency} {regularPrice.toLocaleString()}
                    </div>
                  )}
                  <div style={{ fontSize: 36, fontWeight: 900, color: "var(--ink)", fontFamily: "Playfair Display, serif" }}>
                    {currency} {price.toLocaleString()}
                  </div>
                </div>
                {turnaround && (
                  <div style={{ fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {turnaround}
                  </div>
                )}
              </div>
            </div>
            <div className="card" style={{ padding: 32 }}>
              <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>Service Total</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: "var(--brand)", fontFamily: "Playfair Display, serif", marginBottom: 4 }}>
                {currency} {price.toLocaleString()}
              </div>
              {regularPrice && (
                <div className="badge badge-accent" style={{ marginBottom: 16 }}>
                  Save {currency} {(regularPrice - price).toLocaleString()}
                </div>
              )}
              <div style={{ marginBottom: 20, marginTop: 16 }}>
                {features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 14 }}>
                    <span style={{ color: "var(--success)", flexShrink: 0 }}>✓</span>
                    <span style={{ color: "var(--muted)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href={`/checkout?product=${slug}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "14px" }}>
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

      {features.length > 0 && (
        <section className="section" style={{ background: "white" }}>
          <div className="container-sm">
            <h2 className="display" style={{ fontSize: 36, marginBottom: 40 }}>What&apos;s included</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {features.map((f) => (
                <div key={f} className="card" style={{ padding: "18px 22px", display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand-dim)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "var(--brand)", fontSize: 16 }}>✓</span>
                  </div>
                  <span style={{ fontWeight: 500, fontSize: 15 }}>{f}</span>
                </div>
              ))}
            </div>
            {turnaround && (
              <div className="card" style={{ padding: 28, marginTop: 40, background: "var(--surface-2)", borderColor: "var(--brand-border)" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 28 }}>⏱</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Turnaround Time</div>
                    <div style={{ color: "var(--muted)", fontSize: 14 }}>{turnaround}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

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
