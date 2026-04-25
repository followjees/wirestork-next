// components/blog/NextPosts.tsx
import Link from "next/link";
import { getAuthorForSlug } from "@/lib/authors";

const BLUE = "#0708E4";

interface PostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  readTime?: number;
}

interface Props {
  posts: PostItem[];
  currentSlug: string;
}

export function NextPosts({ posts, currentSlug }: Props) {
  const next = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (next.length === 0) return null;

  return (
    <section style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      paddingTop: 56,
      marginTop: 56,
    }}>
      <div style={{ marginBottom: 32 }}>
        <p style={{
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: BLUE,
          marginBottom: 8,
        }}>
          Continue Reading
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 900,
          fontSize: "clamp(22px, 3vw, 34px)",
          letterSpacing: "-0.03em",
          color: "#fff",
          margin: 0,
        }}>
          More Legal Insights
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {next.map((post, i) => {
          const author = getAuthorForSlug(post.slug);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "24px 22px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "pointer",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,8,228,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(7,8,228,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Post number */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 900,
                  fontSize: 36,
                  color: "rgba(7,8,228,0.2)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Category */}
                {post.categories[0] && (
                  <span style={{
                    display: "inline-block",
                    fontSize: 9,
                    fontWeight: 900,
                    padding: "3px 9px",
                    borderRadius: 100,
                    background: "rgba(7,8,228,0.1)",
                    border: "1px solid rgba(7,8,228,0.2)",
                    color: "#818CF8",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    width: "fit-content",
                  }}>
                    {post.categories[0]}
                  </span>
                )}

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 900,
                  fontSize: 17,
                  color: "#fff",
                  lineHeight: 1.35,
                  marginBottom: 10,
                  flex: 1,
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}>
                  {post.excerpt.slice(0, 90)}…
                </p>

                {/* Author + date row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 12,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: `${author.color}20`,
                      border: `1px solid ${author.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      fontWeight: 900,
                      color: author.color,
                      flexShrink: 0,
                    }}>
                      {author.initials}
                    </div>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
                      {author.name.split(" ")[0]}
                    </span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: BLUE }}>Read →</span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
