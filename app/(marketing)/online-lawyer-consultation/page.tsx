// app/(marketing)/online-lawyer-consultation/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import ConsultationClient from "./ConsultationClient";

export const metadata: Metadata = {
  title: "Online Legal Consultation UAE & Saudi Arabia | Wirestork",
  description: "Connect directly with licensed lawyers in Dubai and Saudi Arabia. Same-day legal advice on travel bans, employment disputes, debt recovery, court cases and more. Confidential & encrypted.",
  keywords: ["online legal consultation UAE", "lawyer online UAE", "UAE lawyer consultation", "legal advice Dubai", "Saudi Arabia lawyer online"],
  openGraph: {
    title: "Online Legal Consultation UAE & Saudi Arabia | Wirestork",
    description: "Licensed lawyers. Same-day advice. 100% confidential. No appointments needed.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/online-lawyer-consultation/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const LAWYERS = [
  {
    initials: "SA",
    name: "Sara Al-Mansouri",
    title: "Senior Immigration & Travel Ban Specialist",
    location: "Abu Dhabi, UAE",
    exp: "15 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Travel Bans", "Immigration", "Residency Appeals"],
    rating: 4.9,
    reviews: 312,
    color: "#818CF8",
    bg: "rgba(7,8,228,0.15)",
  },
  {
    initials: "AK",
    name: "Ahmed Al-Khalidi",
    title: "Employment & Labour Law Expert",
    location: "Dubai, UAE",
    exp: "12 yrs",
    bar: "Dubai Legal Affairs Dept.",
    specialties: ["Labour Disputes", "Wrongful Termination", "MOHRE Cases"],
    rating: 4.8,
    reviews: 287,
    color: "#34D399",
    bg: "rgba(16,185,129,0.12)",
  },
  {
    initials: "MR",
    name: "Mohammed Al-Rashid",
    title: "Commercial & Debt Recovery Lawyer",
    location: "Riyadh, Saudi Arabia",
    exp: "14 yrs",
    bar: "Saudi Ministry of Justice",
    specialties: ["Debt Recovery", "Bounced Cheques", "Commercial Disputes"],
    rating: 4.9,
    reviews: 198,
    color: "#FCD34D",
    bg: "rgba(245,158,11,0.1)",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    title: "Business & Corporate Law Specialist",
    location: "Dubai, UAE",
    exp: "10 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Company Formation", "Contracts", "M&A"],
    rating: 4.7,
    reviews: 163,
    color: "#F472B6",
    bg: "rgba(236,72,153,0.1)",
  },
  {
    initials: "FA",
    name: "Fatima Al-Amri",
    title: "Family Law & Civil Matters",
    location: "Sharjah, UAE",
    exp: "11 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Divorce", "Child Custody", "Tenancy Disputes"],
    rating: 4.8,
    reviews: 241,
    color: "#60A5FA",
    bg: "rgba(59,130,246,0.1)",
  },
  {
    initials: "YH",
    name: "Yasser Hassan",
    title: "Criminal Defence & Court Strategy",
    location: "Dubai, UAE",
    exp: "16 yrs",
    bar: "Dubai Courts",
    specialties: ["Criminal Defence", "Court Cases", "Arrest Warrants"],
    rating: 5.0,
    reviews: 89,
    color: "#F87171",
    bg: "rgba(239,68,68,0.1)",
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "I had a travel ban I didn't even know about. Within 6 hours of booking a consultation, Sara had reviewed my case, identified the source of the ban, and given me a step-by-step resolution plan. Absolutely professional.",
    name: "Rajan Pillai",
    role: "IT Professional",
    location: "Dubai, UAE",
    img: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Untitled-design-2.jpg.bv.webp",
  },
  {
    stars: 5,
    text: "Wirestork's lawyer helped me understand my rights after being wrongfully terminated. Ahmed was thorough, responsive, and knew exactly what to file with MOHRE. I got my end-of-service settlement within 3 weeks.",
    name: "Omar Hassan",
    role: "CEO, findlawyers.me",
    location: "Abu Dhabi, UAE",
    img: "https://wired.b-cdn.net/wp-content/uploads/2024/08/3-2.jpg.bv.webp",
  },
  {
    stars: 5,
    text: "I was facing a cheque bounce case in Saudi Arabia. Mohammed gave me a clear, practical breakdown of what to expect and how to negotiate. Saved me thousands in unnecessary legal fees. Highly recommend.",
    name: "Elena Martinez",
    role: "Business Owner",
    location: "Riyadh, KSA",
    img: "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-2.jpg.bv.webp",
  },
];

const SPECIALTIES = [
  {
    icon: "🏢",
    title: "Business & Commercial Law",
    items: ["Company Incorporation", "Contract Drafting & Review", "Commercial Lease Agreements", "Shareholder Agreements", "Business Mergers & Acquisitions"],
  },
  {
    icon: "👷",
    title: "Employment & Immigration",
    items: ["Labor Contract Disputes", "Wrongful Termination", "End of Service Benefits", "Work Visa Appeals", "Residency & Sponsorship"],
  },
  {
    icon: "⚖️",
    title: "Civil, Criminal & Debt Matters",
    items: ["Bounced Cheques & Loan Defaults", "Travel Ban & Arrest Warrant Help", "Criminal Defense Strategy", "Dispute Resolution & Settlements", "Debt Collection & Recovery"],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    items: ["Divorce Filing & Settlements", "Child Custody & Visitation", "Alimony & Maintenance", "Domestic Violence Advisory", "Marriage & Prenup Contracts"],
  },
  {
    icon: "🏠",
    title: "Real Estate & Property",
    items: ["Tenancy Disputes", "Developer/Builder Fraud", "Property Transfers", "Joint Ownership Issues", "Eviction & Legal Notices"],
  },
  {
    icon: "💻",
    title: "Technology & Cyber Law",
    items: ["Cybercrime & Online Fraud", "Data Protection & Privacy", "Social Media Defamation", "IT Contract Disputes", "Digital Evidence Handling"],
  },
];

const HOW_STEPS = [
  { n: "1", title: "Submit Your Legal Concern", icon: "📝", body: "Fill out a brief form describing your issue. Choose your country, legal category (e.g., travel ban, employment dispute, debt enforcement), and share any documents or background information you'd like the lawyer to review." },
  { n: "2", title: "Countries We Serve", icon: "🌍", body: "We currently provide legal consultation and support in: 🇦🇪 UAE – Visa bans, labor issues, business disputes. 🇧🇭 Bahrain – Travel bans, family law, employment. 🇸🇦 Saudi Arabia – Enforcement court issues, travel bans, labor claims." },
  { n: "3", title: "Get Matched with a Verified Lawyer", icon: "⚖️", body: "Within minutes, we assign your case to a licensed legal expert experienced in the jurisdiction and subject matter relevant to your issue." },
  { n: "4", title: "Lawyer Reaches Out Within 6 Hours", icon: "📧", body: "You'll receive a personalized email from your assigned lawyer within 6 business hours acknowledging your request, asking for any clarifications, and confirming the scope of advice or legal review." },
  { n: "5", title: "Follow-Up Questions & Case Discussion", icon: "💬", body: "Your lawyer may ask for additional context to better understand your legal position. You'll communicate freely via email or through a secure client portal. All interactions are recorded and confidential." },
  { n: "6", title: "Receive a Written Summary", icon: "📋", body: "Once your lawyer has all necessary information, you receive a clear summary of your issue, answers to your questions point-by-point, and any legal limitations or requirements applicable to your jurisdiction." },
  { n: "7", title: "Get an Actionable Legal Report", icon: "📄", body: "A structured, easy-to-follow Legal Action Report including your legal position, recommended next steps, timelines and expected outcomes, and escalation options (court filing, negotiation, mediation)." },
];

const FAQS = [
  { q: "How does Wirestork's online legal consultation work?", a: "We're an online legal aggregator. After you submit your concern and complete payment, we assign a licensed lawyer experienced in your jurisdiction and legal category. They reach out via email within 6 business hours (2 hours for Premium) and provide written legal advice tailored to your case." },
  { q: "Are your lawyers licensed?", a: "Yes. All lawyers on the Wirestork platform are licensed practitioners — UAE Federal Bar members, Dubai Courts registered attorneys, and Saudi Ministry of Justice-licensed lawyers. You can request credentials during your consultation." },
  { q: "Which countries do you cover?", a: "We primarily cover the UAE, Saudi Arabia, and Bahrain. Our Premium plan covers all GCC jurisdictions including Qatar, Kuwait, and Oman." },
  { q: "Is this a real lawyer or AI-generated advice?", a: "This is real advice from real, licensed human lawyers. No AI-generated legal opinions. Your case is reviewed by a qualified practitioner who is accountable for their advice." },
  { q: "What documents should I prepare?", a: "Anything relevant to your case: passport copy, Emirates ID, employment contract, court notices, cheque copies, lease agreements, or visa documentation. Upload via shareable link at booking, or email to care@wirestork.com with your order number." },
  { q: "How is my information kept private?", a: "All information is encrypted in transit and at rest. Our lawyers are bound by attorney-client confidentiality. We do not share your data with any third parties without your explicit consent." },
  { q: "Can this replace going to court?", a: "Our consultation service provides legal advice, case assessment, and strategy. For court representation, our lawyers can be engaged separately. Your Legal Action Report will clearly indicate if court filing is recommended and your options." },
  { q: "What if I need more than one consultation?", a: "The Premium plan includes unlimited questions for 7 days. For ongoing matters, contact us at care@wirestork.com and we'll set up a retainer arrangement with your assigned lawyer." },
];

export default function ConsultationPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "Service",
        "name": "Online Legal Consultation UAE & Saudi Arabia",
        "provider": { "@type": "Organization", "name": "Wirestork" },
        "description": "Licensed lawyers in Dubai and Saudi Arabia. Same-day legal advice on travel bans, employment disputes, debt recovery, court cases. Confidential and encrypted.",
        "areaServed": [{ "@type": "Country", "name": "United Arab Emirates" }, { "@type": "Country", "name": "Saudi Arabia" }],
        "offers": [
          { "@type": "Offer", "name": "Essential", "priceCurrency": "AED", "price": "499" },
          { "@type": "Offer", "name": "Standard", "priceCurrency": "AED", "price": "999" },
          { "@type": "Offer", "name": "Premium", "priceCurrency": "AED", "price": "1999" },
        ],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "312" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {[["⚖️", "Licensed UAE & Saudi Lawyers"], ["⏱️", "Same-Day Legal Advice"], ["🔒", "100% Confidential & Secure"], ["📄", "Document Review Included"]].map(([icon, label]) => (
            <span key={String(label)} style={{ display: "flex", alignItems: "center", gap: 7, border: "1px dashed rgba(7,8,228,0.4)", borderRadius: 100, padding: "5px 14px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="section-overview" style={{ paddingTop: 100, paddingBottom: 80, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "4px 14px 4px 8px", marginBottom: 28 }}>
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>LIVE</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Licensed lawyers available now</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Online Legal Consultation — <span style={{ color: BLUE }}>Same-Day Advice</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 36 }}>
              Wirestork&apos;s legal consultation connects you directly with licensed lawyers in Dubai and Saudi Arabia — no appointments, no delays. Submit your concern, get a clear actionable legal opinion.
            </p>
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 24 }}>
                {["Licensed UAE & Saudi lawyers", "Same-day legal advice", "100% confidential & secure", "Document review included", "Anytime, anywhere access", "Written legal opinion delivered"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#4ADE80" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#product-pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", marginBottom: 14 }}>
                Book a Consultation Now →
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80" }}>
                🔒 Attorney-client privilege guaranteed
              </div>
            </div>
          </div>

          {/* Right — stat cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Rating card */}
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, color: BLUE, lineHeight: 1 }}>4.9</div>
                  <div style={{ color: "#F59E0B", fontSize: 18, letterSpacing: 2, marginTop: 4 }}>★★★★★</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>312 consultations</div>
                </div>
                <div style={{ flex: 1, borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 20 }}>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontStyle: "italic" }}>&quot;Wirestork&apos;s platform connects you directly with licensed legal experts in the GCC — no appointments, no delays. Real lawyers, real advice, real results.&quot;</p>
                </div>
              </div>
            </div>
            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {[["6hrs", "Avg. Response Time"], ["60+", "GCC Lawyers"], ["100%", "Confidential"]].map(([n, l]) => (
                <div key={l} style={{ ...GLASS, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
            {/* Countries */}
            <div style={{ ...GLASS, padding: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Countries We Cover</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[["🇦🇪", "UAE"], ["🇸🇦", "Saudi Arabia"], ["🇧🇭", "Bahrain"], ["🇶🇦", "Qatar"], ["🇰🇼", "Kuwait"], ["🇴🇲", "Oman"]].map(([flag, name]) => (
                  <div key={String(name)} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "6px 12px", fontSize: 13 }}>
                    <span>{flag}</span> <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE WIRESTORK ─────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Key Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>Why Choose Wirestork&apos;s Online Legal Consultation?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { icon: "🕐", title: "24/7 Availability", body: "Our lawyers are available around the clock to assist you, any time of day or night." },
              { icon: "🎯", title: "Expert Legal Advice", body: "Get precise legal guidance from qualified professionals in various fields of UAE law." },
              { icon: "🏠", title: "Convenience", body: "Access legal consultation from your home or office — no appointments, no travel." },
              { icon: "🔒", title: "Confidential and Secure", body: "Your information is kept completely private with top-tier data protection standards." },
              { icon: "💰", title: "Cost-Effective", body: "Receive premium legal support at an affordable rate — no inflated law firm fees." },
              { icon: "⚖️", title: "Wide Legal Coverage", body: "From business disputes to family law and cybercrime, Wirestork handles diverse legal matters under one roof." },
            ].map((u) => (
              <div key={u.title} style={{ ...GLASS, padding: 28, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{u.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10 }}>{u.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING + FORM (client) ──────────────────────────────────── */}
      <ConsultationClient />

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="section-how" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>How It Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>How Legal Consultation Works</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {HOW_STEPS.map((step, idx) => (
              <div key={step.n} style={{ display: "flex", gap: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{step.icon}</div>
                  {idx < HOW_STEPS.length - 1 && <div style={{ width: 2, flex: 1, background: "rgba(7,8,228,0.2)", minHeight: 32 }} />}
                </div>
                <div style={{ paddingLeft: 24, paddingBottom: idx < HOW_STEPS.length - 1 ? 36 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, paddingTop: 12 }}>
                    <span style={{ background: "rgba(7,8,228,0.15)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, color: "#818CF8", letterSpacing: "0.1em" }}>STEP {step.n}</span>
                    <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff" }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Book Your Consultation →</a>
          </div>
        </div>
      </section>

      {/* ── LAWYER PROFILES ──────────────────────────────────────────── */}
      <section id="section-lawyers" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Our Lawyers</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 16 }}>Meet Our Attorney Network</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>Every lawyer on our platform is licensed, vetted, and experienced in GCC law. You get matched automatically based on your legal category and jurisdiction.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {LAWYERS.map((l) => (
              <div key={l.name} style={{ ...GLASS, padding: 28, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: l.bg, border: `2px solid ${l.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: l.color, flexShrink: 0 }}>{l.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 3 }}>{l.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, marginBottom: 6 }}>{l.title}</div>
                    <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map((s) => <span key={s} style={{ color: s <= Math.floor(l.rating) ? "#F59E0B" : "rgba(255,255,255,0.15)", fontSize: 13 }}>★</span>)}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginLeft: 5 }}>{l.rating} ({l.reviews})</span></div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>📍 {l.location}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>• {l.exp} exp.</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>Specialties</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {l.specialties.map((s) => (
                    <span key={s} style={{ background: `${l.color}15`, border: `1px solid ${l.color}30`, color: l.color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>{s}</span>
                  ))}
                </div>
                <div style={{ marginTop: "auto", fontSize: 11, color: "rgba(255,255,255,0.25)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
                  Licensed: {l.bar}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ──────────────────────────────────────────────── */}
      <section id="section-specialties" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>What We Cover</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 16 }}>Wirestork Specializes In</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SPECIALTIES.map((s) => (
              <div key={s.title} style={{ ...GLASS, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 12 }}>{s.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.5)", alignItems: "flex-start" }}>
                      <span style={{ color: BLUE, flexShrink: 0, marginTop: 2 }}>›</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section id="section-testimonials" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Testimonials</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 38, lineHeight: 1.15, marginBottom: 16 }}>What Clients Are Saying</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: 24 }}>Whether you need urgent legal advice, ongoing legal support, or simply peace of mind, Wirestork&apos;s Lawyer on Call service is the solution you can trust.</p>
              <a href="#product-pricing" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BTN_GRAD, color: "#fff", padding: "12px 22px", borderRadius: 12, fontWeight: 900, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Book a Consultation</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ ...GLASS, padding: "28px 32px" }}>
                  <div style={{ color: "#F59E0B", fontSize: 16, marginBottom: 12, letterSpacing: 2 }}>{"★".repeat(t.stars)}</div>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 20, fontStyle: "italic" }}>&quot;{t.text}&quot;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                      <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 900, fontSize: 14, color: "#fff" }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{t.role} · {t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS / MISSION — white section ───────────────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 64, marginBottom: 56, flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.04em", lineHeight: 0.95, maxWidth: 480 }}>Interact Efficiently With GCC Lawyers</h2>
            <div style={{ maxWidth: 440 }}>
              <p style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.7, marginBottom: 12, color: "#111" }}>With Wirestork, you can get in touch with experienced GCC lawyers proficient in all aspects of law including immigration, family matters, civil and criminal law and business law who are ready to help with your legal issues, no matter where you are.</p>
              <p style={{ fontSize: 14, color: "#6B7280", fontStyle: "italic", lineHeight: 1.7 }}>All you have to do is sign up, describe your legal issue, and we&apos;ll match you with a lawyer in the GCC who can help.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
            {[
              { n: "01", label: "Tailored Advice", body: "Our legal experts take the time to understand your situation and provide guidance tailored to your specific needs." },
              { n: "02", label: "Detailed Directives", body: "Documentation requirements, departments to reach, and possible outcomes — all clearly laid out for your case." },
              { n: "03", label: "Fast & Accessible", body: "Our platform is easy to use. With just a few clicks, receive personalized legal advice from a qualified lawyer." },
              { n: "04", label: "Document Assistance", body: "Our lawyers can assist with drafting legal documents, contracts, legal agreements, and other legal paperwork." },
            ].map((item) => (
              <div key={item.n} style={{ borderLeft: "2px solid #0708E4", paddingLeft: 20 }}>
                <h5 style={{ fontWeight: 900, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, color: "#111" }}>{item.n} / {item.label}</h5>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Frequently Asked Questions</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Direct answers. No legalese.</p>
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

          <div style={{ ...GLASS, padding: 40, marginTop: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, marginBottom: 12 }}>Ready to Talk to a Lawyer?</h3>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 28 }}>Same-day advice. No appointments. Real lawyers.</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 36px", fontWeight: 900, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Book a Consultation →</a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <style>{`@media (min-width: 768px) { .mob-cta-consult { display: none !important; } }`}</style>
      <div className="mob-cta-consult" style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(7,8,228,0.3)", padding: "12px 16px", zIndex: 50 }}>
        <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px", fontWeight: 900, fontSize: 15, textAlign: "center", textDecoration: "none" }}>Book a Consultation →</a>
      </div>

    </div>
  );
}
