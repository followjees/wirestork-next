// app/(marketing)/travel-ban-uae-check/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UAE Travel Ban Check | Wirestork",
  description: "Get your official UAE travel ban status. Typical delivery: five working days. 24-hour expedited available. Encrypted. Confidential. Lawyer-verified.",
  keywords: ["UAE travel ban check", "check travel ban UAE", "travel ban check online", "GDRFA travel ban check", "UAE exit ban"],
  openGraph: {
    title: "UAE Travel Ban Check | Wirestork",
    description: "Typical delivery: five working days. 24-hour expedited available. Lawyer-verified. Encrypted and private.",
    type: "website",
    images: [{ url: "https://wirestork.com/wp-content/uploads/2020/02/Travel-Ban-Check-UAE.png" }],
  },
  alternates: { canonical: "https://wirestork.com/travel-ban-uae-check/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const PROOF_IMGS = [
  "https://wired.b-cdn.net/wp-content/uploads/2024/08/3-1.png",
  "https://wired.b-cdn.net/wp-content/uploads/2024/08/1-1.png",
  "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-1.png",
  "https://wired.b-cdn.net/wp-content/uploads/2024/08/4-1.png",
];

const USP_IMGS = [
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Personal-Data-XN4Z8YM-2.png", title: "Lawyer-Verified Reports", body: "Every report is reviewed and signed off by a licensed UAE legal professional. Your report is suitable for counsel, employers, and record-keeping." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Phishing-XN4Z8YM-2.png", title: "Expedited in 24 Hours", body: "Standard delivery is five working days. Need speed? Use Fast-Track for a 24-hour turnaround." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Mail-Attack-XN4Z8YM-2.png", title: "Official Source Checks", body: "Get comprehensive coverage — Police, Immigration, Prosecution, and Financial Courts. One request. Complete clarity." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Protection-XN4Z8YM-2.png", title: "100% Confidential Process", body: "Encrypted intake. Your data stays private and access-controlled." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Personal-XN4Z8YM-3.png", title: "Guidance & Resolution", body: "If a ban is found, you get actionable guidance and access to our Lawyer on Call service for resolution." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Encryption-XN4Z8YM-2.png", title: "Trusted Since 2017", body: "Over 12,000 expats and law firms rely on Wirestork for accurate, compliant, and lawyer-reviewed background checks." },
];

const SCENARIOS = [
  { title: "Before Booking International Flights", rec: "Recommendation:", recBody: "Conduct your check travel ban UAE verification 2-4 weeks before booking flights, allowing time for resolution if issues are discovered.", body: "This is the most critical time for travel ban checking. Airlines cannot refund tickets if you're denied departure due to legal restrictions. Many expats lose thousands of dirhams on non-refundable tickets when UAE travel bans surface at immigration." },
  { title: "Job Changes & Employment Transitions", rec: "Best Practice:", recBody: "Verify status before resigning and again before final exit from UAE.", body: "When switching employers in UAE or leaving for opportunities abroad, a UAE travel ban check is essential. Employers sometimes file absconding reports or labor complaints that trigger immediate exit restrictions. Additionally, unpaid loans or credit cards opened during previous employment may have resulted in court cases." },
  { title: "Visa Applications to Other Countries", rec: "Timeline:", recBody: "Most embassies require clearance documents issued within 6 months of application.", body: "Countries like Canada, Australia, UK, New Zealand, and most European nations require police clearance certificates or travel ban verification for permanent residency, work visas, and immigration applications. Your UAE travel ban check report serves as official documentation that you have no legal restrictions or criminal records in the UAE." },
  { title: "After Financial Difficulties or Disputes", rec: "Important:", recBody: "Even partial payments don't automatically lift bans—verification ensures clearance before travel.", body: "If you've experienced bounced cheques, loan defaults, credit card payment issues, or business debts in UAE, travel ban checking is critical. Financial institutions and creditors frequently request court-issued travel bans as a collection mechanism. These restrictions can remain in place for years even after you believe matters are settled." },
  { title: "Property & Lease Terminations", rec: "Timing:", recBody: "Check status when ending your lease, especially if any disputes exist with your landlord.", body: "Rental disputes are a common source of UAE travel bans. Landlords file cases for unpaid rent, property damage, or lease violations through Rental Dispute Committees. These cases often proceed without tenants' knowledge, resulting in surprise travel restrictions when attempting departure." },
  { title: "Business Closure or Partnership Dissolution", rec: "Due Diligence:", recBody: "Complete travel ban check UAE before finalizing company liquidation or leaving UAE.", body: "Business owners and company shareholders face particular risk of UAE travel bans. Outstanding business debts, partner disputes, employee claims, or government fees can trigger multiple restrictions. In UAE, company debts often attach to individual shareholders personally." },
  { title: "Family Sponsorship & Immigration", rec: "Requirement:", recBody: "Most family sponsorship applications require recent travel ban clearance as supporting documentation.", body: "When sponsoring family members or applying for long-term residency, authorities verify the sponsor's clean legal record. A check travel ban UAE report provides proof of good standing required for family visa approvals, golden visa applications, and long-term residence permits." },
  { title: "Extended Absence from UAE", rec: "Frequency:", recBody: "Expats with any financial obligations should verify every 6 months.", body: "If you haven't traveled internationally in 6+ months, circumstances may have changed. Court cases could have been filed, financial obligations may have defaulted, or administrative actions might have triggered restrictions. Regular UAE travel ban check verification ensures you're aware of your current status." },
];

const TABLE_ROWS = [
  ["Emirates Coverage", "Single emirate only (Dubai OR Abu Dhabi)", "All 7 emirates simultaneously"],
  ["ID Requirements", "Valid Emirates ID mandatory", "Passport number only"],
  ["Ban Types Detected", "Immigration & police (limited)", "All: Immigration, Police, Courts, Financial, Labor"],
  ["Verification Depth", "Surface-level status only", "Complete case details, numbers, authorities"],
  ["Documentation", "Screenshot or screen print only", "Lawyer-certified PDF report"],
  ["Legal Validity", "Not accepted by embassies/employers", "Embassy & employer accepted"],
  ["Resolution Guidance", "None provided", "Step-by-step action plan included"],
  ["Support Available", "Limited or none", "24/7 legal expert assistance"],
  ["Accuracy Rate", "Variable (gaps between systems)", "99.9% (comprehensive databases)"],
  ["Best For", "Quick single-emirate check with Emirates ID", "Pre-travel verification, visa applications, comprehensive clearance"],
];

const FAQS = [
  { q: "What is a UAE travel ban check?", a: "A UAE travel ban check is comprehensive verification of your legal status across all seven emirates to determine if any restrictions prevent you from leaving or entering the UAE. The process searches immigration databases (GDRFA/ICP), police records, court systems, labor ministry files, and prosecution offices to identify any active bans, pending cases, or legal holds on your record." },
  { q: "How long does a UAE travel ban check take?", a: "Our standard UAE travel ban check service takes 5 working days for complete verification across all systems. Express UAE travel ban check delivers results within 24-48 hours. The timeline includes querying multiple government databases, compiling findings, legal review, and report generation." },
  { q: "Can I get UAE travel ban check with just passport number?", a: "Yes, our professional UAE travel ban check service works with passport number only—you don't need Emirates ID. While official government portals require Emirates ID authentication, our service accesses the same databases using passport credentials through licensed legal professionals with official system access. This makes our service particularly valuable for people currently outside the UAE or those whose Emirates ID has expired." },
  { q: "What information is needed for UAE travel ban check?", a: "For a complete UAE travel ban check, we need your full name as it appears on your passport, passport number, nationality, and date of birth. If you have Emirates ID, providing that number helps with more thorough verification though it's not mandatory. Previous visa details and last UAE address are helpful but not required for basic service." },
  { q: "Will UAE travel ban check notify authorities?", a: "No, conducting a UAE travel ban check is a confidential inquiry that doesn't notify any authorities or create alerts in government systems. Whether you use our professional service or check through official portals, these are standard status verification procedures that don't flag your account." },
  { q: "What's included in UAE travel ban check report?", a: "Your report includes clear status confirmation for each category (immigration, police, courts, labor), detailed information about any active bans including case numbers and issuing authorities, verification across all seven emirates with jurisdiction-specific results, explanation of findings in plain language, next steps and resolution guidance if bans exist, and official certification suitable for legal and employment purposes." },
  { q: "What if UAE travel ban check finds a ban?", a: "If your UAE travel ban check reveals an active restriction, your report will include complete details about the ban type (immigration, criminal, financial, labor), the specific case or complaint that triggered it, the issuing authority with contact information, the jurisdiction (which emirate), and recommended next steps for resolution. Premium service includes a 30-minute legal consultation to discuss your specific situation and create a resolution roadmap." },
  { q: "Does UAE travel ban check cover all seven emirates?", a: "Yes, our UAE travel ban check service covers all seven emirates—Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah—in a single comprehensive inquiry. This is the key advantage of professional service over free government portals which only check individual emirates." },
  { q: "Can I use UAE travel ban check report for visa applications?", a: "Yes, our UAE travel ban check reports are legally certified documents accepted by embassies, immigration authorities, and consulates worldwide for visa applications. Many countries including Canada, Australia, New Zealand, UK, and European nations require UAE police clearance or travel ban verification as part of permanent residency, work visa, or immigration applications." },
  { q: "How much does professional UAE travel ban check cost?", a: "Our services are priced based on delivery speed and included features. Standard check costs AED 999 with 5-day turnaround and covers complete verification across all emirates and all ban types. Express check costs AED 1,499 for 24-48 hour delivery with priority processing and enhanced support." },
  { q: "What's the difference between checking Dubai versus Abu Dhabi?", a: "Dubai and Abu Dhabi maintain completely separate legal and immigration systems. Dubai Police and GDRFA Dubai databases only contain Dubai emirate records. Abu Dhabi Police and ICP Abu Dhabi systems only show Abu Dhabi cases. Neither can see the other emirate's records. This is why comprehensive UAE travel ban check must query both systems plus the five northern emirates through Federal MOI." },
  { q: "Is UAE travel ban check different from immigration ban check?", a: "Yes, there's an important distinction. A UAE travel ban check verifies exit restrictions that prevent leaving the UAE—these are called travel bans or exit bans. An immigration ban (also called entry ban) prevents entering the UAE and is a separate restriction type. Our comprehensive service verifies both types." },
  { q: "How long is UAE travel ban check report valid?", a: "A UAE travel ban check report reflects your status at the time of inquiry and typically remains valid for 3-6 months for most purposes. For immigration to other countries, embassies often require clearance issued within 6 months. For employment screening, companies typically accept reports up to 3 months old." },
  { q: "How accurate is UAE travel ban check service?", a: "Our UAE travel ban check service maintains 99.9% accuracy through direct queries to official government databases. We access the same systems used by immigration officers, police, courts, and government officials—not third-party aggregators or scraped data. We've completed over 10,000 UAE travel ban check verifications with this accuracy rate maintained consistently." },
];

export default function TravelBanCheckPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── STRUCTURED DATA ───────────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "Product",
        "name": "UAE Travel Ban Check",
        "image": "https://wirestork.com/wp-content/uploads/2020/02/Travel-Ban-Check-UAE.png",
        "description": "Wirestork offers a comprehensive UAE Travel Ban Check service, helping individuals identify any active travel bans imposed by UAE authorities. Our service scans official databases across all UAE jurisdictions, providing up-to-date information and rapid results.",
        "url": "https://wirestork.com/travel-ban-uae-check/",
        "brand": { "@type": "Brand", "name": "Wirestork" },
        "sku": "UAE-TRAVEL-BAN-CHECK",
        "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "275.00", "url": "https://wirestork.com/travel-ban-uae-check/", "availability": "https://schema.org/InStock" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "19" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        "name": "UAE Travel Ban Report",
        "provider": { "@type": "Organization", "name": "Wirestork" },
        "areaServed": [{ "@type": "Country", "name": "United Arab Emirates" }],
        "offers": [
          { "@type": "Offer", "name": "Basic", "priceCurrency": "AED", "price": "900", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Standard", "priceCurrency": "AED", "price": "1200", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Advanced", "priceCurrency": "AED", "price": "2500", "availability": "https://schema.org/InStock" }
        ]
      })}} />

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {[["🔒", "SSL Secured"], ["⚖️", "Lawyer-Verified"], ["⭐", "5-Star Rated"]].map(([icon, label]) => (
            <span key={String(label)} style={{ display: "flex", alignItems: "center", gap: 7, border: "1px dashed rgba(7,8,228,0.4)", borderRadius: 100, padding: "5px 14px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 100, paddingBottom: 80, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>

          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "4px 14px 4px 8px", marginBottom: 28 }}>
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>UAE</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Travel Ban Check — Official & Verified</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Know Your UAE Travel Ban —{" "}
              <span style={{ color: BLUE }}>Five Working Days</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 36 }}>
              Need it faster? Choose <strong style={{ color: "#fff" }}>24-hour expedited</strong> at checkout. Confidential, encrypted, and lawyer-verified reporting.
            </p>

            {/* Feature checklist card */}
            <div style={{ ...GLASS, padding: 28, marginBottom: 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 24 }}>
                {["Report delivered as PDF", "Secure & Private", "Lawyer review included", "Covers All Emirates"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#4ADE80" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#product-pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", marginBottom: 14, letterSpacing: "0.02em" }}>
                Check My Travel Ban Now →
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80", marginBottom: 20 }}>
                🔒 Encrypted • Privacy-first handling
              </div>
              {/* Trust avatar row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                {PROOF_IMGS.map((src, i) => (
                  <img key={i} src={src} alt="Compliance badge" style={{ height: 36, width: "auto", opacity: 0.9 }} loading="lazy" />
                ))}
              </div>
            </div>
          </div>

          {/* Right — Dubai skyline */}
          <div style={{ borderRadius: 32, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
            <img
              src="https://wirestork.com/wp-content/uploads/2024/09/dubai-downtown-skyline-united-arab-emirates-or-uae-urban-city-.jpg"
              alt="Dubai Downtown skyline — UAE travel context"
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 420 }}
            />
            {/* Overlay stats */}
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {[["12,000+", "Checks Done"], ["99.9%", "Accuracy"], ["24hr", "Fast-Track"]].map(([n, l]) => (
                <div key={l} style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(12px)", borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THOUSANDS CHOOSE WIRESTORK ────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Key Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>Why Thousands Choose Wirestork</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {USP_IMGS.map((u) => (
              <div key={u.title} style={{ ...GLASS, padding: 28, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "border-color 0.2s" }}>
                <img src={u.src} alt={u.title} width={80} height={80} loading="lazy" style={{ marginBottom: 18, opacity: 0.95 }} />
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10 }}>{u.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: u.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section id="product-pricing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Transparent Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>Pricing</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17 }}>
              Typical delivery: <strong style={{ color: "#fff" }}>five working days</strong>. <strong style={{ color: "#fff" }}>24-hour expedited</strong> available at checkout.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {/* Basic */}
            <div style={{ ...GLASS, padding: 32, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Basic</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: "#fff", lineHeight: 1, marginBottom: 6 }}>AED 900</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24, lineHeight: 1.6 }}>Essential Court Case Check For Travelers and Debtors</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginBottom: 28, flex: 1 }}>
                <div style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.6)", alignItems: "flex-start" }}>
                  <span style={{ color: BLUE, flexShrink: 0, fontSize: 15 }}>•</span> Maximum of three case lookups
                </div>
              </div>
              <a href="#" style={{ display: "block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "13px 20px", fontWeight: 900, fontSize: 13, textAlign: "center", textDecoration: "none", letterSpacing: "0.05em" }}>Request A Basic Check</a>
            </div>

            {/* Standard — highlighted */}
            <div style={{ background: "rgba(7,8,228,0.12)", border: "2px solid rgba(7,8,228,0.5)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#818CF8", marginBottom: 12, marginTop: 8 }}>Standard</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: "#fff", lineHeight: 1, marginBottom: 6 }}>AED 1,200</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24, lineHeight: 1.6 }}>Ideal For Individuals With Minimal Financial Liabilities</p>
              <div style={{ borderTop: "1px solid rgba(7,8,228,0.3)", paddingTop: 20, marginBottom: 28, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Covers all courts and police stations", "Includes case numbers or plaintiff details", "Lookup of maximum six case filings", "Lookup with Land Dept/Municipalities", "Delivery: five working days (24-hour expedited available)"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.7)", alignItems: "flex-start" }}>
                    <span style={{ color: "#818CF8", flexShrink: 0, fontSize: 15, marginTop: 1 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="#" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 14, textAlign: "center", textDecoration: "none", letterSpacing: "0.05em" }}>Request A Standard Check</a>
            </div>

            {/* Advanced */}
            <div style={{ ...GLASS, padding: 32, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Advanced</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: "#fff", lineHeight: 1, marginBottom: 6 }}>AED 2,500</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24, lineHeight: 1.6 }}>For complex financial/legal liabilities and business owners</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginBottom: 28, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Covers all UAE courts and police stations", "Includes case numbers or plaintiff details", "Unlimited case lookups", "Detailed resolution plan with instructions", "Delivery: five working days (24-hour expedited available)"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.6)", alignItems: "flex-start" }}>
                    <span style={{ color: BLUE, flexShrink: 0, fontSize: 15, marginTop: 1 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="#" style={{ display: "block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "13px 20px", fontWeight: 900, fontSize: 13, textAlign: "center", textDecoration: "none", letterSpacing: "0.05em" }}>Request An Advanced Check</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, marginBottom: 12, color: "#111" }}>Most Expats Discover Their Travel Ban at the Airport</h2>
            <p style={{ fontSize: 18, color: "#6B7280", marginBottom: 28, fontWeight: 600 }}>Don&apos;t let that be you.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {["Detentions can last hours — even days.", "Missed flights and visa issues cost thousands.", "Public portals rarely show complete, up-to-date records."].map((t) => (
                <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, flexShrink: 0, background: "#FEE2E2", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#B91C1C" }}>!</div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: "#111" }}>{t}</p>
                </div>
              ))}
            </div>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_CONTRAST, color: "#fff", borderRadius: 12, padding: "13px 28px", fontWeight: 900, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Check Now Before You Travel →</a>
          </div>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 20, padding: 28 }}>
            <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 12, color: "#111" }}>What Triggers a Travel Ban?</h3>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>Unpaid loans, credit cards, rental disputes, bounced cheques, civil/criminal cases, or employer complaints. Sometimes you&apos;re not notified. We surface the record before you fly.</p>
          </div>
        </div>
      </section>

      {/* ── 3-STEP PROCESS — FLASHY TIMELINE ─────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>How It Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Your Verified Travel Ban Report in 3 Steps</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Zero guesswork. Verified facts — before you book your next flight.</p>
          </div>

          {/* Timeline connector */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr 48px 1fr", alignItems: "start", gap: 0 }}>
            {[
              { n: "1", title: "Submit Details", body: "Passport or Emirates ID. No login, no bureaucracy. Secure intake process takes less than 5 minutes.", icon: "📋" },
              { n: "2", title: "We Verify Directly", body: "Our legal team retrieves your status from UAE databases and relevant court systems.", icon: "🔍" },
              { n: "3", title: "Get Your Report", body: "Five working days typical delivery. 24-hour expedited available.", icon: "📄" },
            ].map((step, idx) => (
              <>
                <div key={step.n} style={{ ...GLASS, padding: 32, textAlign: "center", position: "relative" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>{step.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 64, color: "rgba(7,8,228,0.15)", position: "absolute", top: 16, right: 20, lineHeight: 1 }}>{step.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: step.body.replace("Five working days", "<strong style='color:#fff'>Five working days</strong>").replace("24-hour expedited", "<strong style='color:#fff'>24-hour expedited</strong>") }} />
                </div>
                {idx < 2 && (
                  <div key={`arrow-${idx}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 40 }}>
                    <div style={{ width: "100%", height: 2, background: `linear-gradient(90deg, rgba(7,8,228,0.4), rgba(7,8,228,0.1))`, position: "relative" }}>
                      <div style={{ position: "absolute", right: -6, top: -5, width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid rgba(7,8,228,0.4)" }} />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Run My Travel Ban Check →</a>
          </div>
        </div>
      </section>

      {/* ── WHY EXPATS TRUST + WHAT YOU GET ───────────────────────────── */}
      <section style={{ padding: "0 32px 80px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 42, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.1 }}>Why Expats Trust Wirestork</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { color: "#06B6D4", label: "All Emirates Coverage (UAE)", rest: " — one scan, full clarity." },
                { color: "#22C55E", label: "Lawyer-Verified Reports", rest: " — valid for legal use." },
                { color: "#F59E0B", label: "Encrypted & Secure", rest: " — your data stays private." },
                { color: "#6366F1", label: "Five working days", rest: " — delivered as a PDF." },
                { color: "#EF4444", label: "24/7 Human Support", rest: " — legal experts, not bots." },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, flexShrink: 0, background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: item.color }}>✓</div>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}><strong style={{ color: "#fff" }}>{item.label}</strong>{item.rest}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...GLASS, padding: 32 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, marginBottom: 20 }}>What You Get</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {["Official record status (UAE)", "Linked case numbers (if any)", "Next-step guidance if a ban exists", "Proof document suitable for counsel/employer"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)", alignItems: "center" }}>
                  <span style={{ color: BLUE, fontSize: 16 }}>→</span> {item}
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", fontSize: 13, fontWeight: 700, color: "#FCD34D" }}>
              ⚡ Fast-Track slots today: <span style={{ fontWeight: 900 }}>3</span> left
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE REPORT ─────────────────────────────────────────────── */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Sample Report</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>What You Get</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 64 }}>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#818CF8", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, marginBottom: 16 }}>Verified Legal Insights</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30, marginBottom: 12 }}>Actionable Legal Intelligence</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>Get accurate information reviewed by vetted lawyers. Confidential, private, and backed with relevant court numbers from the official system.</p>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="https://wired.b-cdn.net/wp-content/uploads/2019/07/Sample-Travel-Ban-Check-Report-Wirestork_page-0001-1187x1536.jpg" alt="Sample of Wirestork travel ban report—page one" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="https://wired.b-cdn.net/wp-content/uploads/2019/07/Sample-Travel-Ban-Check-Report-Wirestork_page-0002-1187x1536.jpg" alt="Sample of Wirestork travel ban report—resolution plan page" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#FCD34D", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, marginBottom: 16 }}>Resolution, Simplified</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30, marginBottom: 12 }}>Directive Roadmaps</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>A detailed, step-by-step plan with clear instructions to help you achieve a fast, confident resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON SCENARIOS ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Common Scenarios</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>When to Get a UAE Travel Ban Check: Common Scenarios</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>Understanding when to conduct a <strong style={{ color: "rgba(255,255,255,0.75)" }}>UAE travel ban check</strong> can save you from costly mistakes and travel disruptions. Here are the most common situations requiring verification:</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {SCENARIOS.map((s, i) => (
              <div key={s.title} style={{ ...GLASS, padding: 28, borderLeft: `3px solid rgba(7,8,228,${0.8 - i * 0.08})`, borderRadius: "0 24px 24px 0", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 10 }}>{s.body}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}><strong style={{ color: "#818CF8" }}>{s.rec}</strong> {s.recBody}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(7,8,228,0.08)", border: "1px solid rgba(7,8,228,0.25)", borderLeft: "4px solid " + BLUE, borderRadius: "0 16px 16px 0", padding: "24px 28px", margin: "32px 0" }}>
            <h4 style={{ fontWeight: 900, fontSize: 17, marginBottom: 8, color: "#fff" }}>Pro Tip: Proactive Verification</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>Don&apos;t wait for travel plans to check your status. Proactive <strong style={{ color: "rgba(255,255,255,0.75)" }}>travel ban checking</strong> gives you time to resolve issues on your schedule, not under airport pressure. Many restrictions can be cleared within weeks when addressed early, but become emergencies when discovered at departure.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Check My Status Now →</a>
          </div>
        </div>
      </section>

      {/* ── GOVERNMENT VS PROFESSIONAL COMPARISON ─────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Comparison</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>Government Portals vs Professional UAE Travel Ban Check</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", maxWidth: 600, margin: "0 auto" }}>Understanding your options for <strong style={{ color: "rgba(255,255,255,0.65)" }}>travel ban check online</strong> services helps you make informed decisions about verification method.</p>
          </div>
          <div style={{ overflowX: "auto", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Feature</th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Free Government Portals</th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818CF8", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Professional Service</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(([feat, gov, pro], i) => (
                  <tr key={feat} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.65)" }}>{feat}</td>
                    <td style={{ padding: "14px 20px", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{gov}</td>
                    <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 600, color: "#4ADE80" }}>✓ {pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 20 }}>
            For comprehensive background verification needs, explore our <a href="/background-checks-gcc" style={{ color: "#818CF8" }}>UAE background check services</a>. If you need to check with passport only, see our guide on <a href="https://wirestork.com/how-to-check-uae-ban-status-with-passport-number/" style={{ color: "#818CF8" }}>checking UAE ban status with passport number</a>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
            <div style={{ background: "rgba(37,99,235,0.08)", border: "2px solid rgba(37,99,235,0.25)", borderRadius: 20, padding: 28 }}>
              <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 12, color: "#93C5FD" }}>Free Government Portal Details</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 16 }}>The <strong style={{ color: "rgba(255,255,255,0.65)" }}>GDRFA travel ban check</strong> portal and <a href="https://smartservices.icp.gov.ae/" target="_blank" rel="noopener noreferrer" style={{ color: "#93C5FD" }}>ICP Smart Services</a> provide free status checking for residents with valid Emirates IDs.</p>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93C5FD", marginBottom: 10 }}>How to Access:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {["Visit GDRFA.ae (Dubai only) or ICP.gov.ae (other emirates)", "Login with Emirates ID and biometric verification", "Navigate to status inquiry section", "View basic travel ban status for that emirate only"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.4)", alignItems: "flex-start" }}>
                    <span style={{ color: "#60A5FA", flexShrink: 0 }}>›</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(7,8,228,0.1)", border: "2px solid rgba(7,8,228,0.3)", borderRadius: 20, padding: 28 }}>
              <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 12, color: "#818CF8" }}>Professional Service Advantages</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 16 }}>Wirestork&apos;s <strong style={{ color: "rgba(255,255,255,0.65)" }}>UAE travel ban check</strong> service provides comprehensive nationwide verification with legal certification, resolution guidance, and support.</p>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818CF8", marginBottom: 10 }}>What Makes It Different:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {["Licensed legal professionals query all systems directly", "Works for expats abroad without Emirates ID", "Discovers bans across ALL seven emirates in one request", "Provides certified documentation for official use", "Includes expert guidance if restrictions are found"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.5)", alignItems: "flex-start" }}>
                    <span style={{ color: "#818CF8", flexShrink: 0 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ ...GLASS, padding: 28, marginTop: 24 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, marginBottom: 16 }}>Which Option Should You Choose?</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 10 }}><strong style={{ color: "rgba(255,255,255,0.75)" }}>Choose Free Government Portals If:</strong> You only lived/worked in one emirate, have valid Emirates ID, need basic verification, and don&apos;t require official documentation.</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0 }}><strong style={{ color: "rgba(255,255,255,0.75)" }}>Choose Professional Check Travel Ban UAE Service If:</strong> You lived in multiple emirates, don&apos;t have Emirates ID, are currently outside UAE, need certified documentation for visas/employment, require complete nationwide verification, or want expert support and resolution guidance.</p>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <p style={{ color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Ready for comprehensive nationwide verification?</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Get Professional UAE Travel Ban Check →</a>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS AFTER — CLEAR vs RESTRICTED ──────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>After Your Report</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>What Happens After Your UAE Travel Ban Check</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>Understanding what to expect after receiving your <strong style={{ color: "rgba(255,255,255,0.7)" }}>UAE travel ban check</strong> report helps you take appropriate action based on your results. Here&apos;s a complete guide to next steps for both clear and restricted statuses.</p>
          </div>

          {/* Clear Status */}
          <div style={{ background: "rgba(16,185,129,0.06)", border: "2px solid rgba(16,185,129,0.2)", borderRadius: 24, padding: 32, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: "#34D399" }}>If No Travel Ban is Found (Clear Status)</h3>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 20 }}>When your <strong style={{ color: "rgba(255,255,255,0.7)" }}>travel ban checking</strong> reveals no restrictions across all seven emirates, you can proceed with confidence. Your clear status means:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#34D399", marginBottom: 10 }}>Immediate Actions You Can Take:</div>
                {[["Book International Travel:", "You're free to purchase flights and plan departures from UAE without risk of airport detention"], ["Apply for Visas:", "Use your certified UAE travel ban check report as supporting documentation for visa applications to other countries"], ["Change Employment:", "Proceed with job transitions knowing no hidden restrictions will block your exit if you decide to leave UAE"], ["Make Major Decisions:", "Confidently commit to property sales, business deals, or personal plans involving international travel"]].map(([b, t]) => (
                  <div key={String(b)} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#34D399", flexShrink: 0 }}>→</span><div><strong style={{ color: "rgba(255,255,255,0.7)" }}>{b}</strong> {t}</div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#34D399", marginBottom: 10 }}>How Long is Your Clearance Valid?</div>
                {[["For immediate travel:", "Report remains valid for 2-4 weeks before departure"], ["For visa applications:", "Most embassies accept reports issued within 6 months"], ["For employment verification:", "Companies typically require reports within 3 months"], ["For general assurance:", "Consider re-verification every 6 months if you have ongoing financial obligations"]].map(([b, t]) => (
                  <div key={String(b)} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#34D399", flexShrink: 0 }}>→</span><div><strong style={{ color: "rgba(255,255,255,0.7)" }}>{b}</strong> {t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restricted Status */}
          <div style={{ background: "rgba(239,68,68,0.06)", border: "2px solid rgba(239,68,68,0.2)", borderRadius: 24, padding: 32, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🚫</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: "#F87171" }}>If Travel Ban is Discovered (Restricted Status)</h3>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 24 }}>If your <strong style={{ color: "rgba(255,255,255,0.7)" }}>UAE travel ban check</strong> reveals active restrictions, don&apos;t panic. Most bans can be resolved with proper guidance and action.</p>

            {/* Resolution steps — numbered timeline */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#F87171", marginBottom: 16 }}>Immediate Steps for Resolution:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  ["Understand Your Restriction", "Review the complete details in your travel ban checking report. Understanding the specific type and cause of your ban is essential for proper resolution approach."],
                  ["Contact the Issuing Authority", "Reach out to the specific government department or court listed in your report. Use the case numbers provided to inquire about resolution requirements and procedures."],
                  ["Determine Settlement Requirements", "For financial bans: Calculate total amounts owed including principal, interest, and court fees. For legal bans: Understand what actions or appearances are required."],
                  ["Engage Professional Support", "Consider using our legal document review service or Lawyer on Call support (included with Advanced packages) for complex cases requiring negotiation or legal representation."],
                  ["Execute Resolution Plan", "Follow the step-by-step guidance provided in your report to settle obligations, make required payments, or complete necessary procedures for ban lift."],
                  ["Obtain Clearance Confirmation", "After resolution, request official clearance letters from relevant authorities. We can conduct a follow-up UAE travel ban check to confirm restrictions have been removed from all systems."],
                ].map(([title, body], idx) => (
                  <div key={String(title)} style={{ display: "flex", gap: 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#F87171", flexShrink: 0 }}>{idx + 1}</div>
                      {idx < 5 && <div style={{ width: 2, flex: 1, background: "rgba(239,68,68,0.15)", minHeight: 24 }} />}
                    </div>
                    <div style={{ paddingLeft: 16, paddingBottom: idx < 5 ? 20 : 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#F87171", marginBottom: 4 }}>{title}</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolution timelines */}
            <div style={{ background: "rgba(239,68,68,0.06)", borderRadius: 14, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#F87171", marginBottom: 12 }}>Resolution Timelines by Ban Type:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  ["Financial/Court Bans", "2-8 weeks after full settlement"],
                  ["Labor Disputes", "1-4 weeks after MOHRE case resolution"],
                  ["Immigration Violations", "1-3 weeks after fine payment"],
                  ["Police Cases", "Variable — requires legal consultation"],
                  ["Multiple Jurisdictions", "+1-2 weeks per additional emirate"],
                ].map(([type, time]) => (
                  <div key={String(type)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "8px 12px", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>{type}</span>
                    <span style={{ fontSize: 12, color: "#FCA5A5", fontWeight: 700, whiteSpace: "nowrap" }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lawyer on Call highlight */}
          <div style={{ background: "rgba(37,99,235,0.08)", borderLeft: "4px solid #3B82F6", borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 20 }}>
            <h4 style={{ fontWeight: 900, fontSize: 17, marginBottom: 10, color: "#93C5FD" }}>Premium Support: Lawyer on Call Service</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 12 }}>Our Advanced <strong style={{ color: "rgba(255,255,255,0.7)" }}>UAE travel ban check</strong> package includes 30 minutes of legal consultation with licensed UAE attorneys. This service provides:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Professional assessment of your specific situation and restrictions", "Customized resolution strategy with timeline and cost estimates", "Direct guidance on negotiation approaches for debt settlement", "Representation options for court appearances or complex cases", "Priority support throughout your resolution process"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
                  <span style={{ color: "#93C5FD", flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Follow-up verification */}
          <div style={{ ...GLASS, padding: 28, marginBottom: 32 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, marginBottom: 14 }}>Follow-Up Verification</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: 14 }}>After resolving restrictions, we recommend a follow-up <strong style={{ color: "rgba(255,255,255,0.7)" }}>check travel ban UAE</strong> to confirm clearance across all systems. Many clients conduct verification:</p>
            {[["Immediately after settlement:", "To verify removal from the specific issuing authority's system"], ["1-2 weeks later:", "To confirm clearance has propagated across all emirates and databases"], ["Before booking travel:", "Final confirmation before purchasing non-refundable tickets"]].map(([b, t]) => (
              <div key={String(b)} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8, alignItems: "flex-start" }}>
                <span style={{ color: "#818CF8", flexShrink: 0 }}>→</span><div><strong style={{ color: "rgba(255,255,255,0.65)" }}>{b}</strong> {t}</div>
              </div>
            ))}
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 12, margin: 0 }}>We offer discounted follow-up verification for clients who have used our service within the past 6 months.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", marginBottom: 12 }}>Start Your UAE Travel Ban Check Now →</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>Questions about the process? <a href="/reach-us" style={{ color: "#818CF8" }}>Contact our support team</a> for guidance.</p>
          </div>
        </div>
      </section>

      {/* ── STATISTICS ────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>By the Numbers</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 14 }}>UAE Travel Ban Statistics & Industry Insights</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", maxWidth: 600, margin: "0 auto" }}>Understanding the landscape of <strong style={{ color: "rgba(255,255,255,0.65)" }}>travel ban checking</strong> in the UAE helps contextualize your verification needs.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 40 }}>
            {[
              { n: "12,000+", label: "Verifications Completed", body: "Since 2017, Wirestork has processed over 12,000 UAE travel ban check requests for expats worldwide" },
              { n: "35%", label: "Discovery Rate", body: "Approximately 35% of travel ban checking requests reveal at least one active restriction" },
              { n: "99.9%", label: "Accuracy Rate", body: "Direct access to official databases ensures consistently accurate check travel ban UAE results" },
            ].map((stat) => (
              <div key={stat.label} style={{ ...GLASS, padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, color: BLUE, lineHeight: 1, marginBottom: 8 }}>{stat.n}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>{stat.label}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>{stat.body}</p>
              </div>
            ))}
          </div>

          {/* Cause breakdown */}
          <div style={{ ...GLASS, padding: 32, marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, marginBottom: 28 }}>Common Causes of UAE Travel Bans (Based on Our Data)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { pct: "62%", label: "Financial & Court Cases", body: "Bounced cheques, unpaid loans, credit card defaults, and rental disputes comprise the majority of UAE travel bans. Financial obligations remain the leading cause of exit restrictions." },
                { pct: "18%", label: "Labor & Employment Disputes", body: "MOHRE complaints for unpaid salaries, end-of-service benefits, or wrongful termination. Both employees and employers can trigger these restrictions." },
                { pct: "12%", label: "Immigration Violations", body: "Visa overstays, residency violations, absconding reports, and document irregularities that trigger automatic exit restrictions." },
                { pct: "8%", label: "Multiple Jurisdictions", body: "Restrictions in more than one emirate, often combining financial and legal issues across Dubai, Abu Dhabi, and other emirates." },
              ].map((item) => (
                <div key={item.label} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 20, alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: BLUE }}>{item.pct}</div>
                    {/* Progress bar */}
                    <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginTop: 8, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: BTN_GRAD, borderRadius: 2, width: item.pct }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>{item.label}</div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "rgba(7,8,228,0.08)", border: "1px solid rgba(7,8,228,0.2)", borderRadius: 20, padding: 24 }}>
              <h4 style={{ fontWeight: 800, fontSize: 16, marginBottom: 16, color: "#818CF8" }}>Most Common Misconceptions</h4>
              {[
                [`"If I haven't been notified, there's no ban"`, "Many bans are filed without direct notification"],
                [`"Checking Dubai is enough"`, "Emirates maintain separate systems; must check all seven"],
                [`"Partial payment removes the ban"`, "Most bans require full settlement plus official clearance"],
                [`"Old debts don't matter anymore"`, "Financial bans can remain active for years or decades"],
              ].map(([myth, reality]) => (
                <div key={String(myth)} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}><span style={{ color: "#F87171" }}>✗ Myth:</span> <em>{myth}</em></div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", paddingLeft: 16, marginTop: 2 }}>Reality: {reality}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 20, padding: 24 }}>
              <h4 style={{ fontWeight: 800, fontSize: 16, marginBottom: 16, color: "#34D399" }}>Resolution Success Factors</h4>
              {[
                ["Early Detection:", "Discovering bans 2+ weeks before travel allows time for proper resolution"],
                ["Complete Information:", "Knowing all case details and jurisdictions prevents surprise additional restrictions"],
                ["Professional Guidance:", "Legal support significantly improves negotiation outcomes for debt settlement"],
                ["Proper Documentation:", "Obtaining official clearance letters ensures system-wide removal"],
              ].map(([label, body]) => (
                <div key={String(label)} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#34D399", flexShrink: 0 }}>✓</span><div><strong style={{ color: "rgba(255,255,255,0.65)" }}>{label}</strong> {body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP GUIDE — 4 PHASES ─────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Complete Guide</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>Complete Step-by-Step Guide to UAE Travel Ban Verification</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>Whether you&apos;re new to the <strong style={{ color: "rgba(255,255,255,0.7)" }}>UAE travel ban check</strong> process or need a comprehensive reference, this guide walks you through every aspect of verification, from initial inquiry to final clearance confirmation.</p>
          </div>

          {/* Phase timeline */}
          {[
            { color: BLUE, label: "Phase 1", title: "Pre-Verification Assessment", steps: [
              { title: "Assess Your Risk Level", color: "#F59E0B", items: [
                { label: "High Risk (Immediate verification recommended):", list: ["Any unpaid financial obligations (loans, credit cards, rent)", "Bounced cheques in your history, even if subsequently paid", "Ongoing or recently resolved legal disputes or court cases", "Left previous employment without proper exit procedures", "Outstanding labor complaints from either employee or employer side", "Business closure with potential outstanding obligations"] },
                { label: "Medium Risk (Verification recommended before travel):", list: ["Lived or worked in multiple emirates over the years", "Haven't traveled internationally from UAE in 12+ months", "Recently settled financial obligations but no confirmation of clearance", "Changed employers multiple times with gaps between jobs"] },
                { label: "Low Risk (Periodic verification for peace of mind):", list: ["Clean financial history with no defaults or disputes", "Proper exit from all previous employers", "Regular international traveler with no issues", "All obligations current and up-to-date"] },
              ]},
              { title: "Gather Your Information", color: "#3B82F6", items: [
                { label: "Required Information:", list: ["Full name exactly as it appears on your passport", "Current passport number", "Nationality and country of passport issuance", "Date of birth"] },
                { label: "Helpful (But Not Required):", list: ["Emirates ID number if you have one", "Previous visa numbers or visa history", "Last known UAE address", "Employment history in UAE (companies and emirates)", "Known case numbers if you're aware of specific issues"] },
              ]},
            ]},
            { color: "#22C55E", label: "Phase 2", title: "Conducting Professional Verification", steps: [
              { title: "Verification Processing Timeline", color: "#22C55E", timeline: [
                { day: "Day 1–2", label: "Database Queries", body: "Our licensed legal professionals query all government systems across all seven emirates simultaneously, including GDRFA Dubai, ICP Abu Dhabi, police databases, court systems, MOHRE records, and municipality files." },
                { day: "Day 2–3", label: "Identity Verification", body: "We cross-reference results to prevent false positives from common names, verify jurisdiction-specific details, and confirm case numbers and dates for any restrictions found." },
                { day: "Day 3–4", label: "Legal Review", body: "Licensed UAE attorneys review all findings, assess restriction types and severity, identify resolution pathways, and prepare actionable guidance if issues exist." },
                { day: "Day 4–5", label: "Report Generation", body: "We compile comprehensive documentation, add official certification and legal signatures, format for embassy/employer acceptance, and deliver securely via encrypted email." },
              ]},
            ]},
            { color: "#A855F7", label: "Phase 3", title: "Taking Action Based on Results", steps: [] },
            { color: "#3B82F6", label: "Phase 4", title: "Maintaining Your Clear Status", steps: [
              { title: "Implement Best Practices", color: "#3B82F6", items: [
                { label: "Financial Management:", list: ["Keep all credit cards and loans current—set up automatic payments", "Never issue cheques without confirmed funds in your account", "Maintain emergency fund to cover minimum 3 months of UAE obligations", "Pay rent on time and document all payments with receipts", "Resolve disputes promptly rather than allowing court filings"] },
                { label: "Employment Best Practices:", list: ["Always complete proper resignation procedures with notice period", "Obtain clearance letters from employers before leaving", "Ensure final settlement including end-of-service benefits", "Keep employment contracts and salary records organized"] },
                { label: "Regular Verification:", list: ["Conduct UAE travel ban check every 6-12 months as preventive measure", "Always verify before booking non-refundable international flights", "Check status when applying for visas to other countries", "Verify before making major commitments dependent on UAE exit ability"] },
              ]},
            ]},
          ].map((phase) => (
            <div key={phase.label} style={{ borderLeft: `4px solid ${phase.color}`, paddingLeft: 28, marginBottom: 40 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ background: phase.color + "20", border: `1px solid ${phase.color}40`, borderRadius: 100, padding: "3px 12px", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", color: phase.color }}>{phase.label}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: phase.color, marginBottom: 20 }}>{phase.title}</h3>
              {phase.steps.map((step: { title: string; color: string; items?: {label: string; list: string[]}[]; timeline?: {day: string; label: string; body: string}[] }) => (
                <div key={step.title} style={{ marginBottom: 24 }}>
                  <h4 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 14 }}>{step.title}</h4>
                  {"timeline" in step && step.timeline && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                      {step.timeline.map((t: {day: string; label: string; body: string}, idx: number) => (
                        <div key={t.day} style={{ display: "flex", gap: 0 }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80, flexShrink: 0 }}>
                            <div style={{ background: "#22C55E20", border: "1px solid #22C55E40", borderRadius: 8, padding: "4px 8px", fontSize: 11, fontWeight: 900, color: "#22C55E", whiteSpace: "nowrap" }}>{t.day}</div>
                            {idx < (step.timeline?.length ?? 0) - 1 && <div style={{ width: 2, flex: 1, background: "rgba(34,197,94,0.15)", minHeight: 20, marginTop: 4 }} />}
                          </div>
                          <div style={{ paddingLeft: 16, paddingBottom: idx < (step.timeline?.length ?? 0) - 1 ? 20 : 0 }}>
                            <div style={{ fontWeight: 700, fontSize: 13, color: "#22C55E", marginBottom: 4 }}>{t.label}</div>
                            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{t.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {"items" in step && step.items && step.items.map((group: {label: string; list: string[]}) => (
                    <div key={group.label} style={{ marginBottom: 16 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: step.color, marginBottom: 8 }}>{group.label}</div>
                      <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 7 }}>
                        {group.list.map((item) => (
                          <div key={item} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", alignItems: "flex-start" }}>
                            <span style={{ color: step.color, flexShrink: 0, marginTop: 2 }}>›</span> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              {phase.label === "Phase 3" && (
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
                  Based on your results, follow the resolution pathway outlined in your report. For clear status: book flights, save your report, maintain obligations. For restricted status: follow the 6-step resolution process detailed above and access Lawyer on Call if included in your package. For detailed guidance, consult our comprehensive resource on <a href="https://wirestork.com/travel-ban-removal-uae/" style={{ color: "#A855F7" }}>UAE travel ban removal</a>.
                </p>
              )}
            </div>
          ))}

          <div style={{ background: "linear-gradient(135deg, rgba(7,8,228,0.12), rgba(16,185,129,0.08))", border: "2px solid rgba(7,8,228,0.25)", borderRadius: 24, padding: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30, marginBottom: 12 }}>Ready to Start Your Verification Journey?</h3>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>Follow this comprehensive guide to ensure smooth, stress-free <strong style={{ color: "rgba(255,255,255,0.75)" }}>travel ban checking</strong> and maintain your freedom to travel internationally from UAE.</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Begin Your UAE Travel Ban Check Now →</a>
          </div>
        </div>
      </section>

      {/* ── OFFICIAL GOVERNMENT RESOURCES ─────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, marginBottom: 32 }}>Official UAE Government Resources</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { org: "Dubai Police", url: "https://www.dubaipolice.gov.ae", label: "www.dubaipolice.gov.ae", body: "Official portal for Dubai emirate police services, criminal status inquiries, and travel ban verification for Dubai residents." },
              { org: "Abu Dhabi Judicial Department (ADJD)", url: "https://www.adjd.gov.ae", label: "www.adjd.gov.ae", body: "Official source for Estafser e-services, Abu Dhabi court information, and Public Prosecution inquiries." },
              { org: "Federal Authority for Identity and Citizenship (ICP)", url: "https://icp.gov.ae/en/", label: "icp.gov.ae | Hotline: 600-522-222", body: "Federal authority overseeing immigration, visa services, and border control across all UAE emirates." },
              { org: "Ministry of Human Resources and Emiratisation (MOHRE)", url: "https://www.mohre.gov.ae/en/home.aspx", label: "www.mohre.gov.ae", body: "Official authority for labor law, employment disputes, labor ban regulations, and work permit information." },
            ].map((item) => (
              <div key={item.org} style={{ ...GLASS, padding: 22, borderLeft: `3px solid ${BLUE}`, borderRadius: "0 16px 16px 0", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{item.org}</h3>
                <a href={item.url} target="_blank" rel="noopener" style={{ color: "#818CF8", fontSize: 13, textDecoration: "none" }}>{item.label}</a>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginTop: 6, marginBottom: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Frequently Asked Questions</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Straight answers. No legalese. Expand a question to see the details.</p>
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

          {/* Final CTA */}
          <div style={{ ...GLASS, padding: 40, marginTop: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, marginBottom: 12 }}>Final Check Before You Fly</h3>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 28 }}>Know your status now — avoid detention, denied boarding, or last-minute surprises.</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 36px", fontWeight: 900, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>View Pricing →</a>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ─────────────────────────────────────────── */}
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(7,8,228,0.3)", padding: "12px 16px", zIndex: 50 }} className="md:hidden">
        <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px", fontWeight: 900, fontSize: 15, textAlign: "center", textDecoration: "none", letterSpacing: "0.05em" }}>Check My Travel Ban Now →</a>
      </div>

    </div>
  );
}
