// app/(marketing)/blog/page.tsx
import Link from "next/link";
import { getAllPosts as getWPPosts } from "@/lib/wordpress/client";
import { getAllPosts as getLocalPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Blog — UAE & GCC Law Insights",
  description: "Expert articles on UAE travel bans, labor law, immigration, debt collection, and GCC legal intelligence.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://wirestork.com"}/blog`,
  },
};

export const revalidate = 300;

interface DisplayPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
}

export default async function BlogPage() {
  let posts: DisplayPost[] = [];

  // Try WordPress first
  const wpPosts = await getWPPosts(50).catch(() => []);
  if (wpPosts.length > 0) {
    posts = wpPosts.map((p) => ({
      slug: p.slug,
      title: p.title.rendered,
      excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 150),
      date: new Date(p.date).toLocaleDateString("en-AE", { year: "numeric", month: "short", day: "numeric" }),
      categories: p._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [],
    }));
  } else {
    // Local fallback
    const local = await getLocalPosts();
    posts = local.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      categories: p.categories,
    }));
  }

  const categories = [...new Set(posts.flatMap((p) => p.categories))].slice(0, 8);

  return (
    <>
      <section className="hero-bg" style={{ paddingTop: 120, paddingBottom: 64 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="badge badge-brand" style={{ marginBottom: 20 }}>Legal Intelligence Blog</div>
          <h1 className="display" style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: 16 }}>
            UAE &amp; GCC Legal Insights
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
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
              No articles found.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {posts.slice(0, 30).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card card-hover" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column" }}>
                    {post.categories[0] && (
                      <div className="badge badge-brand" style={{ marginBottom: 12, alignSelf: "flex-start" }}>{post.categories[0]}</div>
                    )}
                    <h2
                      style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.4, marginBottom: 10, color: "var(--ink)", flex: 1 }}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
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
          )}
        </div>
      </section>
    </>
  );
}
