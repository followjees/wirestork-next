// components/blog/AuthorBox.tsx
import type { Author } from "@/lib/authors";

const BLUE = "#0708E4";

interface Props {
  author: Author;
}

export function AuthorBox({ author }: Props) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 20,
      padding: "28px 28px",
      marginTop: 48,
      display: "flex",
      gap: 24,
      alignItems: "flex-start",
    }}>
      {/* Avatar */}
      <div style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: `${author.color}22`,
        border: `2px solid ${author.color}44`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontWeight: 900,
        fontSize: 24,
        color: author.color,
        flexShrink: 0,
        letterSpacing: "-0.02em",
      }}>
        {author.initials}
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4, flexWrap: "wrap" }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: 20,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}>
            {author.name}
          </div>
          {author.linkedIn && (
            <a
              href={author.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: author.color,
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              LinkedIn ↗
            </a>
          )}
        </div>
        <div style={{
          fontSize: 12,
          fontWeight: 700,
          color: author.color,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 10,
        }}>
          {author.role}
        </div>
        <p style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.48)",
          lineHeight: 1.8,
          marginBottom: 14,
        }}>
          {author.bio}
        </p>
        {/* Specialty tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {author.specialties.map((s) => (
            <span key={s} style={{
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 100,
              background: `${author.color}12`,
              border: `1px solid ${author.color}25`,
              color: author.color,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
