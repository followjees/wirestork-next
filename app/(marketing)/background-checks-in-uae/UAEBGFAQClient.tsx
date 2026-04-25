"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

const CATEGORIES = [
  { key: "all",         label: "All Questions" },
  { key: "general",    label: "General" },
  { key: "legal",      label: "Legal & Compliance" },
  { key: "verification", label: "Verification" },
  { key: "costs",      label: "Costs & Time" },
];

const BADGE_COLORS: Record<string, string> = {
  general:      "#4A90E2",
  legal:        "#10B981",
  verification: "#8B5CF6",
  costs:        "#F59E0B",
};

const FAQS = [
  { cat: "general", q: "What are background checks in UAE?", a: "Background checks in UAE are comprehensive verification processes that validate a candidate's credentials, employment history, education, criminal records, and other relevant information. These checks help employers make informed hiring decisions by confirming the authenticity of claims made by job applicants. In the UAE's diverse job market, background checks are essential tools for maintaining workplace integrity and compliance with local labor laws." },
  { cat: "general", q: "Why are background checks in UAE important for employers?", a: "Background checks in UAE protect your business from potential risks including fraudulent credentials, undisclosed criminal history, and misrepresented work experience. The UAE attracts talent from over 200 nationalities, making verification crucial. These checks help you avoid costly hiring mistakes, protect your company reputation, ensure workplace safety, and maintain compliance with UAE labor regulations. With resume inflation common in competitive markets, background checks in UAE give you the reality check you need before making hiring commitments." },
  { cat: "general", q: "What is the difference between background checks and screening?", a: "Background checks and screening are often used interchangeably, but there's a subtle difference. Background checks typically refer to formal verification of criminal records, employment history, and education credentials through official channels. Screening is a broader term that includes background checks plus additional assessments like drug testing, psychometric evaluations, social media reviews, and reference checks. In UAE employment context, comprehensive screening packages include all background verification components required for specific industries and positions." },
  { cat: "legal", q: "Are background checks in UAE legal?", a: "Yes, background checks in UAE are completely legal and encouraged by employers. However, they must be conducted in compliance with UAE labor laws and data protection regulations. Employers must obtain written consent from candidates before initiating background checks in UAE. The process must respect candidate privacy while verifying necessary information. Wirestork ensures all background checks in UAE are conducted within legal frameworks, protecting both employers and candidates throughout the screening process." },
  { cat: "legal", q: "What is PDPL compliance for background checks?", a: "PDPL (Personal Data Protection Law) compliance means background checks in UAE must follow Federal Decree-Law No. 45 of 2021. This requires obtaining written consent from candidates before screening, collecting only job-relevant information, storing data securely with encryption, retaining records only as long as necessary, and allowing candidates to access and dispute their information. Non-compliance can result in fines up to AED 10 million. All background check providers must be PDPL-certified to operate legally in UAE." },
  { cat: "legal", q: "Can employers check social media in UAE legally?", a: "Yes, employers in UAE can review publicly available social media profiles during hiring, but they must comply with PDPL regulations. Employers cannot require candidates to provide passwords or access to private accounts. Social media screening should focus on professional conduct, public statements that might affect the company, and verification of credentials. Any information gathered must be relevant to the job and documented properly. Candidates should be informed that social media may be reviewed as part of the background check process." },
  { cat: "legal", q: "How long are background check records kept in UAE?", a: "Under UAE's PDPL regulations, background check records must be retained only as long as necessary for the business purpose. Most employers keep records for 3-5 years after employment ends for legal protection and audit purposes. Background check providers like Wirestork follow strict data retention policies, typically keeping records for 7 years to comply with various regulatory requirements across industries. Candidates have the right to request deletion of their data after this period unless legal obligations require longer retention." },
  { cat: "legal", q: "Can I refuse a background check in UAE?", a: "Yes, candidates can refuse background checks in UAE, but employers can then refuse to hire you. Background verification is a standard part of UAE's hiring process, especially in regulated industries like healthcare, finance, and education. Employers may also require labor ban checks to ensure candidates can work legally. However, you have the right to know what will be checked, provide consent before checks begin, and access the results. If you refuse specific checks (like credit history) that aren't relevant to the position, you can discuss alternatives with the employer." },
  { cat: "legal", q: "Are reference checks mandatory in UAE?", a: "Reference checks are not legally mandatory in UAE but are strongly recommended and practiced by most reputable employers. While UAE Labor Law doesn't specifically require reference checks, many industries and free zones mandate them as part of due diligence. Financial institutions, healthcare facilities, and educational institutions typically require 2-3 professional references. References help verify employment claims and provide insights into work performance, reliability, and cultural fit that formal background checks cannot reveal." },
  { cat: "verification", q: "What types of background checks are available in UAE?", a: "Background checks in UAE include employment history verification, education credential checks, criminal record searches, reference checks, credit history reports, professional license verification, address verification, social media screening, and international database searches. Employers can choose individual services or comprehensive packages depending on the position's sensitivity and requirements. Wirestork offers customizable background check solutions in UAE tailored to your specific hiring needs and industry requirements." },
  { cat: "verification", q: "Can you verify degrees from universities outside the UAE?", a: "Absolutely. Background checks in UAE routinely verify international educational credentials since most professionals in the UAE obtained their degrees abroad. Wirestork has established relationships with verification services and educational institutions globally. We understand the specific requirements for verifying credentials from different countries and education systems. International education verification typically takes 6-10 business days depending on the institution's location and verification processes, but timelines can vary significantly by country." },
  { cat: "verification", q: "What happens if educational credentials cannot be verified?", a: "If educational credentials cannot be verified during background checks in UAE, Wirestork immediately notifies the employer with detailed information about the verification attempt. Unverifiable credentials may indicate fraudulent claims, closed institutions, or administrative issues. We provide recommendations on next steps, which may include requesting additional documentation from the candidate, attempting alternative verification methods, or flagging the credential as unconfirmed. Employers then decide how to proceed based on the position's requirements and the nature of the verification issue." },
  { cat: "verification", q: "Are professional certifications verified in UAE background checks?", a: "Yes, professional certifications and licenses are commonly verified in comprehensive background checks in UAE. This includes certifications from professional bodies, industry associations, technical qualifications, and regulatory licenses required for specific professions. Wirestork verifies certifications by contacting issuing organizations directly, checking professional registries, and validating license numbers. This is particularly important for positions requiring specific credentials such as healthcare professionals, engineers, financial advisors, and other regulated professions operating in the UAE." },
  { cat: "verification", q: "What shows up on a UAE criminal background check?", a: "UAE criminal background checks reveal convictions, pending criminal cases, court judgments, and legal disputes within the UAE jurisdiction. This includes misdemeanors, felonies, traffic violations resulting in criminal charges, financial crimes, and civil cases that may impact employment suitability. The checks cover all emirates and court jurisdictions within the UAE. However, criminal record checks in UAE conducted through official channels focus on convictions and pending cases rather than arrests that didn't result in charges or minor infractions." },
  { cat: "verification", q: "How to get police clearance certificate in UAE?", a: "To obtain a police clearance certificate in UAE, residents can apply through the Ministry of Interior website or visit their local police station. You'll need your Emirates ID, passport copy, and application fee (typically AED 50-100). The process takes 1-2 business days. For expatriates leaving UAE, you can request the certificate through typing centers or online portals. Some employers require police clearance from your home country as well, which needs attestation by the UAE embassy." },
  { cat: "verification", q: "What shows up on UAE police clearance?", a: "UAE police clearance certificates show criminal convictions within UAE jurisdiction, pending criminal cases in UAE courts, court judgments and sentences, financial crimes and bounced cheque cases, and traffic violations resulting in criminal charges. It covers all seven emirates. The certificate does NOT show minor traffic fines, civil disputes without criminal charges, or arrests that didn't result in convictions. For comprehensive screening, employers often request both UAE police clearance and clearance from the candidate's home country." },
  { cat: "verification", q: "What does employment history verification include in UAE background checks?", a: "Employment history verification in UAE background checks confirms dates of employment, job titles held, responsibilities, reason for leaving, and eligibility for rehire. This process involves contacting previous employers directly through HR departments or authorized representatives. For candidates with international work history, Wirestork coordinates with overseas employers to verify claims. This verification is crucial in UAE's competitive job market where resume embellishment is common, ensuring you hire candidates with genuine experience." },
  { cat: "verification", q: "Can background checks in UAE verify employment from other countries?", a: "Yes, comprehensive background checks in UAE can verify international employment history. Wirestork has established networks and processes to contact employers globally, though international verifications may require additional time depending on the country and employer responsiveness. We navigate different time zones, languages, and verification protocols to provide accurate international employment confirmation. This is particularly important in the UAE where most professionals have worked across multiple countries before relocating." },
  { cat: "verification", q: "What if a candidate's previous employer is no longer in business?", a: "When conducting background checks in UAE for candidates whose previous employers have closed, Wirestork uses alternative verification methods including employment tax records, professional references, salary certificates, and third-party verification databases. We may also contact former colleagues or supervisors directly when appropriate. While these situations require additional investigation time, experienced background check providers in UAE have established protocols to verify employment even when companies no longer operate." },
  { cat: "verification", q: "Do background checks in UAE include salary verification?", a: "Salary verification can be included in background checks in UAE when specifically requested by employers. However, this requires explicit candidate consent and cooperation, as salary information is considered highly confidential. Some employers use salary verification to confirm candidates aren't significantly inflating compensation expectations. Wirestork can coordinate salary verification through previous employers' HR departments or by reviewing official salary certificates, which are common documentation in the UAE." },
  { cat: "verification", q: "How are educational credentials verified in background checks in UAE?", a: "Education verification in background checks in UAE involves directly contacting educational institutions to confirm degrees, diplomas, certificates, dates of attendance, graduation dates, and fields of study. For international degrees, Wirestork coordinates with universities worldwide, navigating different verification processes and requirements. We verify credentials through official registrar offices and can also validate attested documents. This process is essential in the UAE where degree fraud and diploma mills pose significant risks to employers." },
  { cat: "verification", q: "How do criminal record checks work in the UAE?", a: "Criminal record checks in UAE background checks involve obtaining police clearance certificates through official channels. For UAE residents, this includes checking records across all UAE courts and police jurisdictions. Wirestork works with licensed local lawyers who conduct these checks through proper legal channels, ensuring comprehensive coverage of UAE criminal databases. The process verifies whether candidates have any criminal convictions, pending cases, or legal issues within the UAE that could impact their suitability for employment." },
  { cat: "verification", q: "Can background checks in UAE reveal international criminal records?", a: "Yes, comprehensive background checks in UAE can include international criminal record searches. While UAE criminal checks cover local records, international checks access criminal databases from other countries where the candidate has lived or worked. This is crucial for thoroughly vetting candidates in the UAE's international workforce. International criminal checks require additional time and may involve different processes depending on the country. Wirestork coordinates these international verifications to provide employers with complete criminal background information." },
  { cat: "verification", q: "Are reference checks included in background checks in UAE?", a: "Reference checks are commonly included in comprehensive background checks in UAE packages. These involve contacting professional references provided by candidates to gather insights about work performance, character, skills, reliability, and overall suitability for the position. Wirestork conducts structured reference interviews with former supervisors, colleagues, or professional contacts to provide employers with qualitative feedback that complements factual verification. The number of references checked varies by package, typically ranging from 2-5 references." },
  { cat: "verification", q: "What questions are asked during reference checks in UAE?", a: "During reference checks as part of background checks in UAE, Wirestork asks structured questions about the candidate's job performance, work ethic, strengths and weaknesses, reliability, teamwork abilities, communication skills, reasons for leaving, and eligibility for rehire. We also inquire about specific competencies relevant to the position. Questions are professional, factual, and designed to gather honest feedback while respecting candidate privacy. Reference checks provide valuable context beyond factual verification, helping employers understand candidates' actual workplace performance and behavior." },
  { cat: "verification", q: "What if a candidate's references can't be reached?", a: "When references are unreachable during background checks in UAE, Wirestork makes multiple contact attempts through different channels and times. We document all attempts and notify the employer if references remain unavailable. In such cases, we may request alternative references from the candidate or recommend proceeding with available verifications. Unreachable references aren't necessarily red flags—people change jobs, phone numbers, or may be in different time zones. However, consistently unavailable references across all contacts may warrant further investigation or candidate follow-up." },
  { cat: "verification", q: "What documents are needed for employment verification in UAE?", a: "For employment verification in UAE, you'll need previous employment contracts or offer letters, salary certificates stamped by previous employers, resignation letters or termination letters, experience certificates with employment dates and roles, visa and work permit copies from previous UAE employment, and contact information for HR departments or supervisors. For international employment, documents may require attestation by UAE embassy. Having these documents ready speeds up the background check process significantly." },
  { cat: "verification", q: "How to verify degrees from Indian universities in UAE?", a: "To verify Indian degrees in UAE, certificates must first be attested by the issuing university, then by the State Human Resource Department in India, followed by the Ministry of External Affairs (MEA) in India, then by the UAE Embassy in India, and finally by the UAE Ministry of Foreign Affairs (MOFA). This process takes 2-4 weeks. Alternatively, some background check providers have direct verification channels with Indian universities through degree verification platforms, which is faster and takes 7-10 days." },
  { cat: "costs", q: "How long do background checks in UAE typically take?", a: "The timeframe for background checks in UAE varies depending on the type and scope of verification required. Basic employment verification typically takes 4-6 business days, while comprehensive packages including criminal records, education verification, and international checks can take 5-10 business days. Criminal record checks through UAE authorities are often faster, completed within 1-2 business days. Factors affecting turnaround time include the responsiveness of previous employers, educational institutions, and the complexity of international verifications." },
  { cat: "costs", q: "How much do background checks in UAE cost?", a: "Background checks in UAE pricing varies based on the scope and depth of verification required. Individual checks start as low as AED 112 for employment or education verification, while criminal record checks begin at AED 412. Comprehensive packages covering employment, education, criminal records, and references start from AED 787. Wirestork offers competitive pricing with our Best Price Assurance guarantee. Volume discounts are available for employers conducting multiple background checks, with packages for 10+ candidates starting at AED 7,875." },
  { cat: "costs", q: "How long does a UAE criminal record check take?", a: "Criminal record checks are among the fastest components of background checks in UAE, typically completed within 1-2 business days when conducted through proper legal channels. Wirestork works with licensed local lawyers who have established processes with UAE authorities, enabling efficient turnaround times. However, if international criminal checks are included, the overall timeframe extends to 7-10 business days or more depending on the countries involved and their respective verification processes." },
];

export default function UAEBGFAQClient() {
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
          UAE Background Checks - Complete Categorized FAQ
        </h2>
        <p style={{ fontSize: 14, color: BLUE, fontWeight: 700, marginBottom: 4 }}>Background Verification UAE</p>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)" }}>Your Complete Resource for Screening and Compliance</p>
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
