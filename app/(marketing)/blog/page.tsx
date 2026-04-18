import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Blog — UAE & GCC Law Insights",
  description: "Expert articles on UAE travel bans, labor law, immigration, debt collection, and GCC legal intelligence.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.flatMap((p) => p.categories))].slice(0, 8);

  return (
    <>
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 64 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="badge badge-brand" style={{ marginBottom: 20 }}>Legal Intelligence Blog</div>
          <h1 className="display" style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: 16 }}>
            UAE & GCC Legal Insights
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 520, margin: "0 auto" }}>
            Expert articles on travel bans, labor law, immigration, debt collection, and more.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <div style={{ background: "white", borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
        <div className="container" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/blog" className="badge badge-brand" style={{ textDecoration: "none" }}>All</Link>
          {categories.map((cat) => (
            <span key={cat} className="badge" style={{ background: "var(--canvas)", color: "var(--muted)", border: "1px solid var(--border)" }}>{cat}</span>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {posts.slice(0, 30).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="card card-hover" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column" }}>
                  {post.categories[0] && (
                    <div className="badge badge-brand" style={{ marginBottom: 12, alignSelf: "flex-start" }}>{post.categories[0]}</div>
                  )}
                  <h2 style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.4, marginBottom: 10, color: "var(--ink)", flex: 1 }}>{post.title}</h2>
                  {post.excerpt && (
                    <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                      {post.excerpt.slice(0, 120)}...
                    </p>
                  )}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "var(--light)" }}>
                    <span>{post.date}</span>
                    <span style={{ color: "var(--brand)" }}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {posts.length > 30 && (
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <p style={{ color: "var(--muted)", fontSize: 15 }}>{posts.length - 30} more articles available.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
