import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--canvas)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 80, fontWeight: 900, fontFamily: "Playfair Display, serif", color: "var(--brand)", lineHeight: 1 }}>404</div>
        <h1 style={{ fontWeight: 800, fontSize: 28, marginTop: 16, marginBottom: 12 }}>Page not found</h1>
        <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 32 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">Go Home →</Link>
          <Link href="/services" className="btn btn-outline">Browse Services</Link>
        </div>
      </div>
    </div>
  );
}
