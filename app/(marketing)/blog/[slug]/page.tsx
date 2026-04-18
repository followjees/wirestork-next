import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug && p.categories.some((c) => post.categories.includes(c))).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 56 }}>
        <div className="container-sm">
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <Link href="/blog" style={{ color: "var(--muted)", fontSize: 14, textDecoration: "none" }}>← Blog</Link>
            {post.categories.map((c) => (
              <span key={c} className="badge badge-brand">{c}</span>
            ))}
          </div>
          <h1 className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", marginBottom: 16, lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: 16, alignItems: "center", color: "var(--muted)", fontSize: 14 }}>
            <span>📅 {post.date}</span>
            <span>·</span>
            <span>⏱ {Math.ceil(post.content.split(" ").length / 200)} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "56px 0 80px", background: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 48, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <article className="prose">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i}>{block.slice(3)}</h2>;
              }
              if (block.startsWith("**") || block.includes("\n1.") || block.includes("\n-")) {
                return <div key={i} style={{ marginBottom: 16, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}
                  dangerouslySetInnerHTML={{ __html: block
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:var(--brand)">$1</a>')
                    .replace(/\n/g, "<br/>")
                  }} />;
              }
              return <p key={i}>{block.replace(/\[(.*?)\]\((.*?)\)/g, "$1")}</p>;
            })}
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: 88, alignSelf: "flex-start" }}>
            <div className="card" style={{ padding: 24, marginBottom: 20, background: "var(--brand-dim)", borderColor: "var(--brand-border)" }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Need legal help?</div>
              <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
                Speak to a licensed UAE lawyer within 4 hours.
              </p>
              <Link href="/online-lawyer-consultation" className="btn btn-primary" style={{ fontSize: 13, padding: "9px 16px", width: "100%", justifyContent: "center" }}>
                Book Consultation →
              </Link>
            </div>
            <div className="card" style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Quick Services</div>
              {[
                { label: "Travel Ban Check", href: "/travel-ban-uae-check" },
                { label: "Police Case Check", href: "/uae-court-police-case-checking" },
                { label: "Labor Ban Check", href: "/labor-ban-check" },
              ].map((s) => (
                <Link key={s.href} href={s.href} style={{ display: "block", color: "var(--brand)", fontSize: 13, marginBottom: 8, textDecoration: "none", fontWeight: 500 }}>
                  → {s.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-sm" style={{ background: "var(--canvas)" }}>
          <div className="container">
            <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 24 }}>Related articles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card card-hover" style={{ padding: 20 }}>
                    {p.categories[0] && <div className="badge badge-brand" style={{ marginBottom: 8 }}>{p.categories[0]}</div>}
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, color: "var(--ink)" }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "var(--brand)" }}>Read →</div>
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
