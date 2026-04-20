// app/(marketing)/client-credit-check/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import CreditCheckClient from "./CreditCheckClient";

export const metadata: Metadata = {
  title: "Client Credit Check UAE | Business Credit Verification | Wirestork",
  description: "Run a comprehensive client credit check in the UAE. Company profile, criminal background, address verification and professional reference checks. 7 working days. AED 1,499.",
  keywords: ["client credit check UAE", "client credit check", "business credit check UAE", "credit verification UAE", "client background check UAE", "credit check company UAE"],
  openGraph: {
    title: "Client Credit Check UAE | Wirestork",
    description: "Company profile, criminal background, address verification and two professional reference checks. 7 working days. AED 1,499.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/client-credit-check/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const WHAT_INCLUDED = [
  {
    icon: "🏢",
    title: "Company Profile Check",
    body: "We verify the client's business registration status, trade license validity, registered address, and directorship details through official UAE government records. Know exactly who you're dealing with before extending credit.",
    tags: ["Trade License", "DED / Freezone", "Director Verification"],
  },
  {
    icon: "🔍",
    title: "Criminal Background Check",
    body: "A comprehensive criminal background check identifies any active court cases, police records, or prosecution filings associated with the client. Protecting your business from high-risk counterparties starts here.",
    tags: ["Court Records", "Police Database", "Prosecution Filings"],
  },
  {
    icon: "📍",
    title: "Address Verification",
    body: "We confirm the client's stated residential or business address through official databases and cross-references — ensuring the contact information on your credit application is accurate and traceable.",
    tags: ["Residential", "Business Address", "Cross-Referenced"],
  },
  {
    icon: "👥",
    title: "Two Professional Reference Checks",
    body: "We contact and verify two professional references provided by the client. Each reference is assessed for validity and their feedback on the client's creditworthiness and business conduct is documented in your report.",
    tags: ["Reference 1 & 2", "Verified Contact", "Documented Feedback"],
  },
];

const FAQS = [
  { q: "What is a client credit check?", a: "A client credit check is a comprehensive due-diligence service that verifies a potential client's financial reliability and business integrity before you extend credit, sign a contract, or enter into a commercial relationship. Wirestork's client credit check covers company profile verification, criminal background checks, address verification, and two professional reference checks — all reviewed by licensed legal professionals." },
  { q: "Why should I run a client credit check in UAE?", a: "Extending credit to unverified clients is one of the leading causes of bad debt and business loss in the UAE. A client credit check helps you identify high-risk counterparties before committing resources, avoid clients with active court cases or criminal records, verify the accuracy of information on credit applications, and maintain compliance with due-diligence best practices." },
  { q: "How long does a client credit check take?", a: "Wirestork's client credit check is delivered within 7 working days. Processing begins within 2 hours of your order and document submission. Our team conducts all four checks simultaneously to ensure the fastest possible turnaround." },
  { q: "What documents are required for a client credit check?", a: "You will need: the name and full address of the client being checked, a completed client credit application form, the residence visa page and Emirates ID of the authorized signatory, and any available purchase references or supporting documentation. These can be submitted via a shareable document link at checkout or emailed to care@wirestork.com with your order number." },
  { q: "Can I run a client credit check on an individual rather than a company?", a: "Yes. Our client credit check service covers both individual clients and business entities in the UAE. For individual checks, we verify criminal background, address, and reference details. For businesses, we additionally verify the company profile and trade license status." },
  { q: "Is the client credit check confidential?", a: "Yes. All client credit check requests are handled with strict confidentiality. Your data and the check subject's information are encrypted, access-controlled, and never shared with third parties. The credit check process does not notify the subject being checked." },
  { q: "What does the client credit check report include?", a: "Your report includes a verified company profile summary, criminal and court case findings, address verification status, documented professional reference feedback, an overall risk assessment, and recommended next steps where issues are identified. All findings are reviewed and certified by licensed UAE legal professionals." },
  { q: "How is this different from a standard background check?", a: "A standard background check typically covers criminal records only. Wirestork's client credit check is specifically designed for business credit decisions and includes company profile verification, address confirmation, and two professional reference assessments — making it a complete pre-credit due-diligence tool." },
];

export default function ClientCreditCheckPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "Product",
        "name": "Client Credit Check UAE",
        "description": "Comprehensive client credit check service in the UAE. Company profile, criminal background, address verification and two professional reference checks. 7 working days.",
        "brand": { "@type": "Brand", "name": "Wirestork" },
        "sku": "CLIENT-CREDIT-CHECK-UAE",
        "offers": { "@type": "Offer", "name": "Client Credit Check", "priceCurrency": "AED", "price": "1499", "availability": "https://schema.org/InStock" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "19" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {[["🔒", "SSL Secured"], ["⚖️", "Lawyer-Verified"], ["⭐", "5-Star Rated"], ["📋", "4 Checks Included"]].map(([icon, label]) => (
            <span key={String(label)} style={{ display: "flex", alignItems: "center", gap: 7, border: "1px dashed rgba(7,8,228,0.4)", borderRadius: 100, padding: "5px 14px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="section-overview" style={{ paddingTop: 100, paddingBottom: 80, position: "relative", scrollMarginTop: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "4px 14px 4px 8px", marginBottom: 28 }}>
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>UAE</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Client Credit Check — Lawyer-Verified</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Client Credit Check UAE —{" "}
              <span style={{ color: BLUE }}>Know Before You Extend Credit</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 16 }}>
              A professional client credit check for UAE businesses. Before onboarding a new client or agreeing to deferred payment terms, verify their company profile, criminal background, address, and professional references.
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginBottom: 36 }}>
              Wirestork&apos;s client credit check delivers a complete, lawyer-reviewed due-diligence report in <strong style={{ color: "#fff" }}>7 working days</strong> — giving you the verified information you need to make confident credit decisions.
            </p>
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 24 }}>
                {["Company profile verified", "Criminal background checked", "Address confirmed", "2 references verified", "Lawyer-reviewed PDF", "7 working days delivery"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#4ADE80" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#product-pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", marginBottom: 14 }}>
                Order a Client Credit Check — AED 1,499 →
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80", marginBottom: 20 }}>
                🔒 Confidential · Subject not notified
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                {["https://wired.b-cdn.net/wp-content/uploads/2024/08/3-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/1-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/4-1.png"].map((src, i) => (
                  <img key={i} src={src} alt="Trust badge" style={{ height: 36, width: "auto", opacity: 0.9 }} loading="lazy" />
                ))}
              </div>
            </div>
          </div>

          {/* Right col — stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
              {[["AED 1,499", "Flat-rate pricing"], ["7 Days", "Delivery time"], ["4 Checks", "Per report"], ["100%", "Confidential"]].map(([n, l]) => (
                <div key={l} style={{ ...GLASS, padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>What&apos;s Covered in Your Client Credit Check</div>
              {[
                { icon: "🏢", label: "Company Profile Check" },
                { icon: "🔍", label: "Criminal Background Check" },
                { icon: "📍", label: "Address Verification" },
                { icon: "👥", label: "Two Professional Reference Checks" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED DEEP DIVE ────────────────────────────────── */}
      <section id="section-what-included" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Full Scope</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 16 }}>What&apos;s Included in a Client Credit Check</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 600, margin: "0 auto" }}>Every client credit check covers four critical verification areas — each reviewed by a licensed UAE legal professional before delivery.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {WHAT_INCLUDED.map((item) => (
              <div key={item.title} style={{ ...GLASS, padding: 32 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 16 }}>{item.body}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{ background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.2)", color: "#818CF8", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING + FORM (client) ──────────────────────────────────── */}
      <CreditCheckClient />

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="section-how" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Process</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>How the Client Credit Check Works</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Four verifications. One report. Seven working days.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr 48px 1fr", alignItems: "start", gap: 0 }}>
            {[
              { n: "1", title: "Submit Client Details", body: "Provide the name and address of the client you need checked, along with the credit application form and any supporting purchase references you have on file.", icon: "📋" },
              { n: "2", title: "We Run All 4 Checks", body: "Our legal team simultaneously runs the company profile check, criminal background check, address verification, and two professional reference checks — all against official UAE records.", icon: "🔍" },
              { n: "3", title: "Receive Your Report", body: "A complete, lawyer-reviewed client credit check report is delivered to your inbox within 7 working days. Includes findings, risk summary, and recommended next steps.", icon: "📄" },
            ].map((step, idx) => (
              <>
                <div key={step.n} style={{ ...GLASS, padding: 32, textAlign: "center", position: "relative" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>{step.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 64, color: "rgba(7,8,228,0.15)", position: "absolute", top: 16, right: 20, lineHeight: 1 }}>{step.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{step.body}</p>
                </div>
                {idx < 2 && (
                  <div key={`arr-${idx}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 40 }}>
                    <div style={{ width: "100%", height: 2, background: "rgba(7,8,228,0.3)", position: "relative" }}>
                      <div style={{ position: "absolute", right: -6, top: -5, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid rgba(7,8,228,0.4)" }} />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Order Client Credit Check →</a>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENT CREDIT CHECK ──────────────────────────────────── */}
      <section id="section-why" style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "#111", marginBottom: 16 }}>Why Run a Client Credit Check Before Extending Credit?</h2>
            <p style={{ fontSize: 18, color: "#6B7280", maxWidth: 640, margin: "0 auto" }}>Bad debt is one of the leading causes of business failure in the UAE. A client credit check costs AED 1,499 — recovering an unpaid invoice costs far more.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, marginBottom: 48 }}>
            {[
              { icon: "❌", heading: "Skip the credit check", risk: "High risk exposure", points: ["No visibility on client's financial history", "No criminal background screening", "Unverified address and identity", "References accepted at face value"] },
              { icon: "✅", heading: "Run a client credit check", risk: "Informed decision", points: ["Verified company profile and trade license", "Criminal and court records surfaced", "Address confirmed against official records", "Two references independently verified"] },
              { icon: "📊", heading: "What the data shows", risk: "UAE business reality", points: ["Bounced cheques remain common in UAE B2B", "Many SMEs lack formal credit histories", "Court cases often unknown to credit grantors", "Fraudulent trade licenses still in circulation"] },
            ].map((col, i) => (
              <div key={col.heading} style={{ background: i === 1 ? "#F0F4FF" : "#F9FAFB", border: i === 1 ? "2px solid #0708E4" : "1px solid #E5E7EB", borderRadius: 20, padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{col.icon}</div>
                <div style={{ fontWeight: 900, fontSize: 16, color: "#111", marginBottom: 4 }}>{col.heading}</div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: i === 1 ? "#0708E4" : "#6B7280", marginBottom: 16 }}>{col.risk}</div>
                {col.points.map((p) => (
                  <div key={p} style={{ display: "flex", gap: 8, fontSize: 13, color: "#374151", marginBottom: 8 }}>
                    <span style={{ color: i === 1 ? "#0708E4" : "#9CA3AF", flexShrink: 0 }}>{i === 1 ? "✓" : "•"}</span>{p}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_CONTRAST, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Run a Client Credit Check Now →</a>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS REQUIRED ───────────────────────────────────────── */}
      <section id="section-docs" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>What You&apos;ll Need</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>Documents Required for a Client Credit Check</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ ...GLASS, padding: 32 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, marginBottom: 24 }}>From You (the requestor)</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  ["🪪", "Emirates ID of the authorized signatory", "The signatory who is authorizing the client credit check on behalf of your business."],
                  ["📋", "Completed Client Credit Application Form", "The credit application form your client submitted to you. Submit via shareable link or email."],
                  ["🛂", "Residence Visa Page of Authorized Signatory", "Required to verify the signatory's identity and residency status in the UAE."],
                  ["📄", "Purchase References & Documentation", "Any purchase orders, invoices, or trade references submitted by your client (if available). Improves report accuracy."],
                ].map(([icon, title, body]) => (
                  <div key={String(title)} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{title}</div>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ ...GLASS, padding: 28 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, marginBottom: 16 }}>About the Client Being Checked</h3>
                {[
                  ["👤", "Full name or company name", "As stated on the credit application"],
                  ["📍", "Registered or residential address", "Full address for verification"],
                  ["☎️", "Two professional references", "Contact details provided by the client"],
                ].map(([icon, title, note]) => (
                  <div key={String(title)} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{title}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{note}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#818CF8", marginBottom: 8 }}>📎 How to Submit Documents</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 12 }}>Upload via a shareable link at checkout (Google Drive, Dropbox, OneDrive), or email all documents to:</p>
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: "10px 14px", fontWeight: 900, fontSize: 14, color: "#818CF8", fontFamily: "monospace" }}>care@wirestork.com</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 8, marginBottom: 0 }}>Use your order number as the subject line.</p>
              </div>
              <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px", fontWeight: 900, fontSize: 14, textAlign: "center", textDecoration: "none" }}>Order Client Credit Check — AED 1,499 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Frequently Asked Questions About Client Credit Checks</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Everything you need to know before ordering a client credit check in the UAE.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {FAQS.map((faq) => (
              <details key={faq.q} style={{ ...GLASS, padding: 20 }}>
                <summary style={{ fontWeight: 700, fontSize: 14, color: "#fff", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  {faq.q}
                  <span style={{ color: BLUE, fontSize: 20, fontWeight: 300, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>{faq.a}</div>
              </details>
            ))}
          </div>

          <div style={{ ...GLASS, padding: 48, marginTop: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 36, marginBottom: 12 }}>Know Your Client Before You Extend Credit</h3>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>One client credit check. Four verifications. Seven working days. AED 1,499.</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginBottom: 32 }}>Trusted by UAE businesses since 2017 for accurate, lawyer-reviewed due-diligence reports</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "15px 40px", fontWeight: 900, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Order Client Credit Check →</a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <style>{`@media (min-width: 768px) { .mob-cta-credit { display: none !important; } }`}</style>
      <div className="mob-cta-credit" style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(7,8,228,0.3)", padding: "12px 16px", zIndex: 50 }}>
        <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px", fontWeight: 900, fontSize: 15, textAlign: "center", textDecoration: "none" }}>Order Client Credit Check →</a>
      </div>

    </div>
  );
}
