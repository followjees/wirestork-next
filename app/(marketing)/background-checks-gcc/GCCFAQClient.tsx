"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

const FAQS = [
  {
    category: "general",
    q: "What are background checks in GCC countries?",
    a: "Background checks in GCC (Gulf Cooperation Council) countries are comprehensive verification processes that help employers, organizations, and individuals validate credentials, employment history, criminal records, and other essential information. The GCC region, comprising Saudi Arabia, UAE, Kuwait, Bahrain, Oman, and Qatar, has specific regulations and requirements for conducting thorough background screenings. These checks ensure workplace safety, regulatory compliance, and protect organizations from potential risks associated with fraudulent credentials or undisclosed criminal histories.",
  },
  {
    category: "regional",
    q: "Can I conduct background checks across multiple GCC countries simultaneously?",
    a: "Yes, comprehensive background checks can be conducted across multiple GCC countries at the same time. Wirestork coordinates simultaneous verification in UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain, reducing overall turnaround time compared to sequential country-by-country checks. Our regional infrastructure and established networks in each country enable parallel processing while ensuring compliance with each jurisdiction's specific requirements. This is particularly valuable for candidates with work history across multiple Gulf countries or companies hiring for regional positions.",
  },
  {
    category: "regional",
    q: "Do GCC countries share background check information with each other?",
    a: "GCC countries do not automatically share background check databases or verification information with each other. Each country maintains independent criminal record systems, employment databases, and verification processes. This is why comprehensive regional screening is essential—a travel ban in UAE won't automatically appear in Saudi background checks, and criminal records in Kuwait aren't accessible through Bahrain's systems. However, certain serious crimes may be flagged through Interpol or GCC security cooperation agreements. For thorough due diligence, employers should conduct separate background checks in each GCC country where candidates previously lived or worked.",
  },
  {
    category: "regional",
    q: "How do I verify a candidate who worked across multiple GCC countries?",
    a: "Verifying candidates with multi-country GCC experience requires coordinated regional screening. Start by obtaining comprehensive consent covering all relevant countries, then verify employment history in each GCC country where the candidate worked by contacting employers directly. Check criminal records in all GCC jurisdictions where they resided, verify educational credentials with proper attestation for each country, and confirm no travel bans exist in any GCC country. Wirestork manages this complex process through established networks in all six GCC countries, providing unified reports that compile findings from each jurisdiction into clear, actionable information.",
  },
  {
    category: "regional",
    q: "What shows up on criminal background checks across different GCC countries?",
    a: "Criminal background checks reveal different information across GCC countries. UAE checks show convictions, pending cases, and court judgments across all seven emirates. Saudi Arabia's checks include criminal records, Absher violations, and legal disputes. Qatar reveals criminal history, court cases, and Ministry of Interior records. Kuwait shows criminal convictions, civil litigation, and Public Authority for Manpower violations. Oman displays Royal Oman Police clearance including criminal matters and serious traffic offenses. Bahrain shows criminal records and court judgments. All GCC countries focus on convictions and pending cases rather than minor infractions or arrests without charges. Checks must be conducted through proper legal channels to ensure accuracy and compliance.",
  },
  {
    category: "regional",
    q: "Are background check costs different across GCC countries?",
    a: "Yes, background check costs vary significantly across GCC countries due to different government fees, processing complexity, and infrastructure requirements. UAE offers the lowest starting costs at AED 20 for basic identity verification and AED 412 for criminal checks due to streamlined digital systems. Saudi Arabia starts at AED 112 due to Absher integration requirements. Qatar, Kuwait, Oman, and Bahrain range from AED 112-120 for basic checks, with comprehensive packages varying based on verification complexity. International multi-country packages start at AED 85 per country. Volume discounts apply for companies conducting regular screenings across multiple GCC countries. Despite cost differences, all countries maintain high verification standards.",
  },
  {
    category: "regional",
    q: "How long do background checks take in each GCC country?",
    a: "Background check timelines vary by country and verification type. UAE is fastest at 1-2 business days for criminal checks and 4-6 days for comprehensive packages. Saudi Arabia averages 3-5 business days through Absher integration. Qatar typically requires 4-6 business days for standard checks. Kuwait ranges from 5-7 business days due to traditional verification processes. Oman takes 3-7 days depending on check complexity. Bahrain averages 3-5 days with LMRA coordination. International verifications outside GCC take 7-15 days depending on the country. Factors affecting timelines include government processing speeds, employer responsiveness, holiday periods, and whether documents require attestation. Rush services may be available for urgent hiring needs.",
  },
  {
    category: "regional",
    q: "What's the difference between background checks in UAE vs Saudi Arabia?",
    a: "The main differences include verification systems (UAE uses government portals and MOFA attestation while Saudi Arabia uses Absher platform and GOSI records), data protection laws (both have comprehensive PDPL requirements but with different implementation details), turnaround times (UAE averages 1-2 days for criminal checks vs Saudi's 3-5 days), and attestation procedures (each country requires different embassy and ministry authentication processes). UAE's digital infrastructure is generally more advanced, enabling faster verifications, while Saudi Arabia's Absher integration provides unique access to employment and identity data. Despite differences, both countries require explicit candidate consent and maintain strict data security standards.",
  },
  {
    category: "uae",
    q: "What are the legal requirements for background checks in UAE?",
    a: "Background checks in UAE must comply with UAE Labor Law and data protection regulations. Employers must obtain candidate consent before conducting checks, verify work permits and visa status for expatriate workers, and ensure checks are relevant to the job position.",
    link: { href: "/background-checks-in-uae", text: "Learn more about background checks in UAE" },
  },
  {
    category: "saudi",
    q: "What are background check requirements in Saudi Arabia?",
    a: "Background checks in Saudi Arabia must align with Saudi Labor Law and Ministry of Human Resources and Social Development guidelines. Employers must verify Saudi nationals through Absher system and validate expatriate workers' credentials through proper channels.",
    link: { href: "/background-checks-in-saudi-arabia", text: "Learn more about background checks in Saudi Arabia" },
  },
  {
    category: "compliance",
    q: "What attestation is required for educational credentials across GCC countries?",
    a: "Each GCC country has specific attestation requirements for international educational credentials. UAE requires university attestation, then State/Country authentication, UAE Embassy attestation in the issuing country, and finally UAE Ministry of Foreign Affairs (MOFA) attestation. Saudi Arabia follows similar steps but requires Saudi Cultural Mission or Embassy attestation and Ministry of Foreign Affairs authentication in Saudi. Qatar requires university verification, home country authentication, Qatar Embassy attestation, and Ministry of Education attestation in Qatar. Kuwait, Oman, and Bahrain have comparable multi-step processes through their respective embassies and ministries. The entire attestation process typically takes 2-4 weeks. Wirestork coordinates with verification services globally to navigate these complex requirements efficiently.",
  },
];

const CATEGORIES = [
  { key: "all",        label: "All Questions" },
  { key: "general",   label: "General" },
  { key: "uae",       label: "UAE" },
  { key: "saudi",     label: "Saudi Arabia" },
  { key: "regional",  label: "Regional" },
  { key: "industry",  label: "Industry-Specific" },
  { key: "compliance",label: "Compliance" },
];

const BADGE_COLORS: Record<string, string> = {
  general: "#4A90E2",
  uae: "#10B981",
  saudi: "#F59E0B",
  regional: "#8B5CF6",
  industry: "#EC4899",
  compliance: "#06B6D4",
};

export default function GCCFAQClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return FAQS.filter(faq => {
      const matchCat = activeCategory === "all" || faq.category === activeCategory;
      const matchSearch = !search || faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", color: "#fff", marginBottom: 12 }}>
          Background Checks in GCC: Comprehensive FAQ
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 600, margin: "0 auto" }}>
          Everything you need to know about background verification across the Gulf Cooperation Council
        </p>
      </div>

      {/* Search */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: 520 }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for questions..."
            style={{ width: "100%", padding: "14px 48px 14px 20px", background: "rgba(255,255,255,0.04)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: 100, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box", transition: "border-color 0.2s" }}
            onFocus={e => (e.target.style.borderColor = BLUE)}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
          <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.35)", fontSize: 16 }}>🔍</span>
        </div>
      </div>

      {/* Category filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 32 }}>
        {CATEGORIES.map(cat => (
          <button key={cat.key} onClick={() => { setActiveCategory(cat.key); setOpenIndex(null); }}
            style={{
              padding: "9px 22px",
              background: activeCategory === cat.key ? BTN_GRAD : "rgba(255,255,255,0.04)",
              border: activeCategory === cat.key ? "none" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              color: activeCategory === cat.key ? "#fff" : "rgba(255,255,255,0.5)",
              fontWeight: activeCategory === cat.key ? 700 : 500,
              fontSize: 13, cursor: "pointer", fontFamily: "inherit",
              transition: "all 0.2s",
            }}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      {search && (
        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
          Found {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </p>
      )}

      {/* FAQ items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 20px", color: "rgba(255,255,255,0.3)" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
            <h3 style={{ fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>No results found</h3>
            <p style={{ fontSize: 14 }}>Try adjusting your search or category filters</p>
          </div>
        ) : filtered.map((faq, i) => {
          const isOpen = openIndex === i;
          const badgeColor = BADGE_COLORS[faq.category] ?? BLUE;
          const catLabel = CATEGORIES.find(c => c.key === faq.category)?.label ?? faq.category;
          return (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", transition: "box-shadow 0.2s", boxShadow: isOpen ? "0 4px 16px rgba(0,0,0,0.3)" : "none" }}>
              <button onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{ width: "100%", padding: "20px 56px 20px 20px", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", fontFamily: "inherit", position: "relative" }}>
                <span style={{ display: "inline-block", padding: "3px 10px", background: `${badgeColor}22`, color: badgeColor, borderRadius: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>{catLabel}</span>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#fff", lineHeight: 1.4 }}>{faq.q}</div>
                <span style={{ position: "absolute", right: 20, top: "50%", transform: `translateY(-50%) rotate(${isOpen ? 45 : 0}deg)`, fontSize: 24, fontWeight: 300, color: BLUE, transition: "transform 0.25s" }}>+</span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 20px 20px" }}>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0, marginBottom: faq.link ? 10 : 0 }}>{faq.a}</p>
                  {faq.link && (
                    <Link href={faq.link.href} style={{ color: BLUE, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                      {faq.link.text} →
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
