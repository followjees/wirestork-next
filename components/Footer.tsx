import Link from "next/link";

const services = [
  { label: "UAE Travel Ban Check", href: "/travel-ban-uae-check" },
  { label: "Labor Ban Check", href: "/labor-ban-check" },
  { label: "Court & Police Case Check", href: "/uae-court-police-case-checking" },
  { label: "Background Checks", href: "/background-checks-gcc" },
  { label: "Legal Consultation", href: "/online-lawyer-consultation" },
  { label: "Debt Collection", href: "/debt-collection-agency" },
];

const company = [
  { label: "About", href: "/lawyers-in-uae" },
  { label: "Attorney Network", href: "/attorney-network" },
  { label: "Careers", href: "/careers" },
  { label: "Become a Partner", href: "/partners" },
  { label: "Our Technology", href: "/our-technology" },
  { label: "Blog", href: "/blog" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refunds-and-cancellations" },
  { label: "Data Retention", href: "/data-retention" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--ink)", color: "white", paddingTop: 72 }}>
      <div className="container">
        {/* Top CTA strip */}
        <div style={{
          background: "linear-gradient(135deg, #8550FF 0%, #6E3EFF 100%)",
          borderRadius: 24, padding: "48px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24, marginBottom: 64
        }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>
              Need legal help right now?
            </div>
            <div style={{ opacity: 0.8, fontSize: 15 }}>
              Speak to a licensed UAE lawyer within 4 hours.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/online-lawyer-consultation" className="btn btn-white">
              Talk to a Lawyer
            </Link>
            <Link href="/travel-ban-uae-check" className="btn" style={{
              background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)"
            }}>
              Check Travel Ban →
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, paddingBottom: 56 }}>
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: "linear-gradient(135deg, #8550FF 0%, #6E3EFF 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontWeight: 900, fontSize: 16
              }}>W</div>
              <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em" }}>Wirestork</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
              Simplified legal intelligence for the UAE and GCC. Travel bans, background checks, consultations — fast, accurate, human-verified.
            </p>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "JetBrains Mono, monospace" }}>
              📍 Dubai, UAE · 🇦🇪
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Services
            </div>
            {services.map((s) => (
              <Link key={s.href} href={s.href} style={{
                display: "block", color: "rgba(255,255,255,0.65)", fontSize: 14,
                textDecoration: "none", marginBottom: 10, transition: "color 0.15s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >{s.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Company
            </div>
            {company.map((s) => (
              <Link key={s.href} href={s.href} style={{
                display: "block", color: "rgba(255,255,255,0.65)", fontSize: 14,
                textDecoration: "none", marginBottom: 10, transition: "color 0.15s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >{s.label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Legal
            </div>
            {legal.map((s) => (
              <Link key={s.href} href={s.href} style={{
                display: "block", color: "rgba(255,255,255,0.65)", fontSize: 14,
                textDecoration: "none", marginBottom: 10, transition: "color 0.15s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >{s.label}</Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 0", display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12
        }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            © {year} Wirestork Inc. (Conzur Legal Technologies). All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            Not a law firm. Legal information, not legal advice.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div[style*="grid"] {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div > div[style*="justify-content: space-between"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
}
