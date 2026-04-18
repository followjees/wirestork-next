// app/(marketing)/layout.tsx
import Link from "next/link";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ── NAV ── */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", mixBlendMode: "difference" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, color: "#fff", letterSpacing: "-0.03em" }}>
            Wirestork<span style={{ color: BLUE }}>.</span>
          </div>
        </Link>
        <Link href="/online-lawyer-consultation" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "10px 24px", fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
          Get Legal Help Now
        </Link>
      </header>

      <main>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 32px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, color: "rgba(255,255,255,0.6)", letterSpacing: "-0.02em" }}>Simplifying Legal Intelligence</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 14 }}>W</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: "-0.03em" }}>Wirestork<span style={{ color: BLUE }}>.</span></span>
            </div>
          </div>

          {/* Nav columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            {[
              { heading: "Company", links: [["About", "/lawyers-in-uae"], ["Our technology", "/our-technology"], ["Career", "/careers"], ["Become a Partner", "/partners"], ["Join our attorney network", "/attorney-network"], ["Reach Us", "/reach-us"]] },
              { heading: "Services", links: [["Travel Ban Check", "/travel-ban-uae-check"], ["Police and Courts", "/uae-court-police-case-checking"], ["Labour Ban Check", "/labor-ban-check"], ["Immigration Check", "/background-checks-gcc"], ["Travel Ban Appeal", "/remove-travel-ban-in-uae"], ["Lawyer on call", "/online-lawyer-consultation"]] },
              { heading: "For Business", links: [["Background Verification", "/employee-check"], ["Debt Collection", "/debt-collection-agency"], ["Contract review", "/legal-document-review"], ["Company Formations", "/uae-business-formation"], ["Vendor Verification", "/client-credit-check"], ["Client Verification", "/client-credit-check"]] },
              { heading: "Legal", links: [["Privacy Policy", "/privacy"], ["Data retention Policy", "/data-retention"], ["Terms of service", "/terms-of-service"], ["Refund Policy", "/refunds-and-cancellations"], ["Partner Agreement", "/partners"]] },
              { heading: "Security", links: [] as [string, string][] },
            ].map((col) => (
              <div key={col.heading}>
                <div style={{ fontWeight: 900, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>{col.heading}</div>
                {col.heading === "Security" ? (
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>We take security and privacy seriously. Learn more about security and compliance at Wirestork.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {col.links.map(([label, href]) => (
                      <Link key={label} href={href} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legal disclaimer */}
          <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", lineHeight: 1.8, marginBottom: 10 }}>
              Wirestork is an online legal technology company operated by Conzurge Inc that simplifies and makes legal processes more affordable for businesses and individuals. Wirestork has assisted numerous clients in conducting background screenings, court and police case checks, and travel ban checks across the GCC region.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", lineHeight: 1.8, marginBottom: 32 }}>
              Legal information and other services are provided by or through Wirestork via Wirestork.com. Please note that Wirestork is not a &quot;lawyer referral service,&quot; &quot;accountant referral service,&quot; accounting firm, or law firm. We do not provide legal or tax advice or representation and are not intended as a substitute for an attorney, accountant, accounting firm, or law firm.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontWeight: 900, letterSpacing: "0.1em" }}>© 2026 Wirestork.com. All Rights Reserved. Conzurge Inc.</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,0.25)", letterSpacing: "-0.02em" }}>Simplifying Legal Intelligence</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
