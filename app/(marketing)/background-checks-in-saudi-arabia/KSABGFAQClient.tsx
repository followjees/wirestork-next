"use client";
import { useState, useMemo } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

const CATEGORIES = [
  { key: "all",          label: "All Questions" },
  { key: "general",     label: "General" },
  { key: "legal",       label: "Legal & Compliance" },
  { key: "verification", label: "Verification" },
  { key: "costs",       label: "Costs & Time" },
];

const BADGE_COLORS: Record<string, string> = {
  general:       "#4A90E2",
  legal:         "#10B981",
  verification:  "#8B5CF6",
  costs:         "#F59E0B",
};

const FAQS = [
  { cat: "general", q: "What are background checks in Saudi?", a: "Background checks in Saudi Arabia are structured verification processes that confirm a candidate's credentials, employment history, education, criminal records, and other material information. These checks enable employers to make defensible hiring decisions by validating the accuracy of claims presented by applicants. In Saudi Arabia's regulated and diverse labor market, background checks are essential for maintaining workforce integrity and meeting local compliance requirements." },
  { cat: "general", q: "Why are background checks in Saudi important for employers?", a: "Background checks in Saudi Arabia protect your organization from critical risks, including credential fraud, undisclosed judicial records, and misrepresented professional history. As the Kingdom attracts global expertise to fuel Giga-projects, verifying talent through official channels like Absher, GOSI, and the Ministry of Education is essential. These checks ensure you avoid the high cost of non-compliance, safeguard your Nitaqat (Saudization) status, and maintain full adherence to the Personal Data Protection Law (PDPL)." },
  { cat: "legal", q: "Are background checks in Saudi legal?", a: "Background screening is not only legal in Saudi Arabia but is increasingly mandated by the Ministry of Human Resources and Social Development (MHRSD) and various sector-specific regulators (like SAMA for finance). At Wirestork, we operate under the strict guidelines of the Personal Data Protection Law (PDPL). Every check we perform—from criminal history to GOSI records—is triggered by explicit candidate consent via the Absher portal, ensuring your organization remains fully compliant with SDAIA regulations while avoiding the risk of administrative fines." },
  { cat: "verification", q: "What types of background checks are available in Saudi?", a: "Wirestork provides localized services including GOSI-authenticated employment history, Ministry of Education-verified credentials, and Absher-integrated criminal record searches. For highly regulated sectors, we offer specialized SIMAH credit reports, Saudi Council of Engineers/Health Specialties license verification, and Najiz judicial status checks." },
  { cat: "verification", q: "Can you verify degrees from universities outside KSA?", a: "Wirestork specializes in authenticating international educational credentials for the Saudi market, navigating the complexities of Ministry of Education (MOE) attestation and the Mosadaqa e-service platform. We facilitate the entire verification chain—from university-level authentication to Saudi Cultural Mission and MOFA stamps—ensuring your international hires meet the Kingdom's Qualification Verification Program (QVP) standards." },
  { cat: "verification", q: "What happens if educational credentials cannot be verified?", a: "If an educational credential cannot be authenticated, Wirestork provides an immediate, detailed report outlining the specific roadblocks encountered. In the Saudi regulatory environment, an unverifiable degree may stem from non-recognition by the Ministry of Education, institutions not listed on the QVP portal, or fraudulent claims. We provide a strategic roadmap for next steps, including guidance on Saudi Equivalency (Muadalah) requirements." },
  { cat: "verification", q: "Are professional certifications verified in Saudi background checks?", a: "Wirestork provides specialized verification for professional certifications and licenses, performing primary-source validation through the Saudi Council of Engineers (SCE), the Saudi Commission for Health Specialties (SCFHS), and the SOCPA (Saudi Organization for Chartered and Professional Accountants). This ensures alignment with the Professional Verification Program (PVP)." },
  { cat: "verification", q: "What shows up on a Saudi criminal background check?", a: "Our screening reveals final criminal convictions, active judicial enforcement orders, and pending criminal cases across all provinces. Through integration with the Ministry of Interior's Amen portal and the Ministry of Justice's Najiz system, we confirm the absence of felonies, financial crimes, and labor-related legal disputes." },
  { cat: "verification", q: "What does employment history verification include in Saudi background checks?", a: "Wirestork delivers authenticated employment verification by integrating directly with the GOSI (General Organization for Social Insurance) database. Unlike traditional manual checks, our process provides an official record of exact joining and termination dates, registered job titles, and salary history." },
  { cat: "verification", q: "Can background checks in Saudi verify employment from other countries?", a: "Yes, we specialize in verifying international employment history within the new Saudi Skill-Tier Classification framework. We ensure global experience aligns with High-Skilled (Tier 1) or Skilled (Tier 2) work permit requirements, managing cross-border data transfers under SDAIA PDPL guidelines." },
  { cat: "verification", q: "What if a candidate's previous employer is no longer in business?", a: "When a previous employer has closed, Wirestork uses alternative verification methods including employment tax records, professional references, salary certificates, and third-party verification databases. While these situations require additional time, we have established protocols to verify history even for defunct companies." },
  { cat: "verification", q: "Do background checks in Saudi include salary verification?", a: "Wirestork provides authenticated salary verification by cross-referencing candidate claims with official GOSI (General Organization for Social Insurance) contribution records and WPS (Wages Protection System) data. This eliminates \"salary inflation\" and provides an accurate baseline for negotiations." },
  { cat: "costs", q: "How long do background checks in Saudi typically take?", a: "The timeframe is optimized through direct integration with Kingdom portals. Local identity and GOSI employment history can often be verified within 24 to 48 hours. Comprehensive screening—including international education—typically requires 5 to 9 business days. Criminal record clearances via Absher/Amen often return results within 1 to 2 business days." },
];

export default function KSABGFAQClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => FAQS.filter(f => {
    const matchCat = activeCategory === "all" || f.cat === activeCategory;
    const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  }), [search, activeCategory]);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(22px, 3.5vw, 36px)", letterSpacing: "-0.03em", color: "#fff", marginBottom: 8 }}>
          KSA Background Checks - Categorized FAQ
        </h2>
        <p style={{ fontSize: 14, color: BLUE, fontWeight: 700, marginBottom: 4 }}>Saudi Arabia Background Screening</p>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)" }}>Compliance with MHRSD, PDPL, and Vision 2030</p>
      </div>

      {/* Search */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: 520 }}>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for questions..."
            style={{ width: "100%", padding: "13px 44px 13px 18px", background: "rgba(255,255,255,0.04)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: 100, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
            onFocus={e => (e.target.style.borderColor = BLUE)} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
          <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "rgba(255,255,255,0.3)" }}>🔍</span>
        </div>
      </div>

      {/* Category filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 28 }}>
        {CATEGORIES.map(cat => (
          <button key={cat.key} onClick={() => { setActiveCategory(cat.key); setOpenIndex(null); }}
            style={{ padding: "8px 20px", background: activeCategory === cat.key ? BTN_GRAD : "rgba(255,255,255,0.04)", border: activeCategory === cat.key ? "none" : "1px solid rgba(255,255,255,0.1)", borderRadius: 100, color: activeCategory === cat.key ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: activeCategory === cat.key ? 700 : 500, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
            {cat.label}
          </button>
        ))}
      </div>

      {search && <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Found {filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>}

      {/* FAQ items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 20px", color: "rgba(255,255,255,0.3)" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
            <h3 style={{ fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>No results found</h3>
            <p style={{ fontSize: 14 }}>Try adjusting your search or category filters</p>
          </div>
        ) : filtered.map((faq, i) => {
          const isOpen = openIndex === i;
          const badgeColor = BADGE_COLORS[faq.cat] ?? BLUE;
          const catLabel = CATEGORIES.find(c => c.key === faq.cat)?.label ?? faq.cat;
          return (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
              <button onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{ width: "100%", padding: "20px 52px 20px 20px", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", fontFamily: "inherit", position: "relative" }}>
                <span style={{ display: "inline-block", padding: "3px 10px", background: `${badgeColor}22`, color: badgeColor, borderRadius: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>{catLabel}</span>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#fff", lineHeight: 1.4 }}>{faq.q}</div>
                <span style={{ position: "absolute", right: 18, top: "50%", transform: `translateY(-50%) rotate(${isOpen ? 45 : 0}deg)`, fontSize: 22, fontWeight: 300, color: BLUE, transition: "transform 0.25s" }}>+</span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 20px 20px" }}>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
