// lib/authors.ts — Wirestork blog author profiles

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
  specialties: string[];
  linkedIn?: string;
}

export const AUTHORS: Record<string, Author> = {
  "rahul-mehta": {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Senior Legal Research Analyst",
    bio: "Rahul specializes in UAE labour law, immigration compliance, and employment disputes. With over 8 years advising multinational companies on GCC regulatory requirements, he translates complex legal frameworks into actionable guidance for HR teams and individuals navigating the UAE legal system.",
    initials: "RM",
    color: "#0708E4",
    specialties: ["UAE Labour Law", "Travel Ban", "Employment Disputes", "Immigration"],
    linkedIn: "https://linkedin.com",
  },
  "priya-nair": {
    id: "priya-nair",
    name: "Priya Nair",
    role: "GCC Compliance Specialist",
    bio: "Priya covers background screening regulations, PDPL compliance, and corporate due diligence across all six GCC countries. She has worked with financial institutions and healthcare groups to build compliant hiring frameworks in the UAE, Saudi Arabia, and Qatar.",
    initials: "PN",
    color: "#7C3AED",
    specialties: ["Background Checks", "PDPL Compliance", "Saudi Arabia Law", "Corporate Due Diligence"],
    linkedIn: "https://linkedin.com",
  },
  "omar-al-rashid": {
    id: "omar-al-rashid",
    name: "Omar Al Rashid",
    role: "Head of Legal Intelligence",
    bio: "Omar leads Wirestork's editorial direction on UAE civil law, debt recovery, and business formation. A former in-house legal consultant with experience across Dubai, Abu Dhabi, and Riyadh, he brings first-hand insight into enforcement mechanisms and court procedures across the Gulf.",
    initials: "OA",
    color: "#059669",
    specialties: ["Debt Collection", "Civil Law", "Business Formation", "Court Procedures"],
    linkedIn: "https://linkedin.com",
  },
  "sarah-johnson": {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "International Screening Analyst",
    bio: "Sarah focuses on cross-border employment verification, credential authentication, and international background screening. She manages Wirestork's research partnerships across 55+ jurisdictions and frequently writes on fraud trends and best practices in talent verification.",
    initials: "SJ",
    color: "#DC2626",
    specialties: ["International Screening", "Credential Verification", "Fraud Prevention", "HR Compliance"],
    linkedIn: "https://linkedin.com",
  },
  "george-mathew": {
    id: "george-mathew",
    name: "George Mathew",
    role: "UAE Court & Criminal Records Specialist",
    bio: "George has spent over a decade working within the UAE judicial ecosystem, advising clients on court case checks, police clearance procedures, and criminal record appeals across all seven emirates. His deep network within the Dubai Courts and Abu Dhabi Judicial Department makes him the go-to expert for complex litigation and enforcement matters.",
    initials: "GM",
    color: "#D97706",
    specialties: ["UAE Court Cases", "Police Clearance", "Criminal Records", "Judicial Appeals"],
    linkedIn: "https://linkedin.com",
  },
  "sam-thomas": {
    id: "sam-thomas",
    name: "Sam Thomas",
    role: "Employment Law & Labour Ban Consultant",
    bio: "Sam is a seasoned employment law consultant with extensive experience handling labour ban checks, MOHRE disputes, and end-of-service benefit claims. He has assisted hundreds of expatriate workers and employers in navigating the UAE's evolving labour regulations under Federal Decree-Law No. 33 of 2021.",
    initials: "ST",
    color: "#0891B2",
    specialties: ["Labour Ban Checks", "MOHRE Disputes", "End of Service", "UAE Labour Law"],
    linkedIn: "https://linkedin.com",
  },
  "martin-walborough": {
    id: "martin-walborough",
    name: "Martin Walborough",
    role: "Head of Corporate Verification",
    bio: "Martin leads corporate due diligence and vendor verification services at Wirestork. With a background in financial crime compliance and a decade spent in the Gulf's banking sector, he specializes in AML screening, sanctions compliance, and business partner risk assessments for multinationals entering the GCC market.",
    initials: "MW",
    color: "#BE185D",
    specialties: ["Corporate Due Diligence", "AML & Sanctions", "Vendor Verification", "Financial Crime"],
    linkedIn: "https://linkedin.com",
  },
  "fatima-al-mansoori": {
    id: "fatima-al-mansoori",
    name: "Fatima Al Mansoori",
    role: "Data Protection & Privacy Counsel",
    bio: "Fatima specializes in data protection law across the UAE and GCC, with particular focus on PDPL implementation, ADGM and DIFC data regulations, and cross-border data transfer compliance. She advises technology companies and healthcare providers on building privacy-first operations in the Emirates.",
    initials: "FA",
    color: "#0D9488",
    specialties: ["PDPL Compliance", "Data Privacy", "DIFC & ADGM Law", "Healthcare Compliance"],
    linkedIn: "https://linkedin.com",
  },
  "james-oconnor": {
    id: "james-oconnor",
    name: "James O'Connor",
    role: "Debt Recovery & Civil Litigation Expert",
    bio: "James has handled over 500 debt recovery cases across the UAE, Bahrain, and Kuwait, including bounced cheque prosecutions, civil judgments, and international enforcement. He writes extensively on creditor rights, asset tracing, and the practicalities of recovering unpaid invoices in the Gulf's legal environment.",
    initials: "JO",
    color: "#4F46E5",
    specialties: ["Debt Recovery", "Bounced Cheques", "Civil Litigation", "Asset Tracing"],
    linkedIn: "https://linkedin.com",
  },
  "ananya-krishnan": {
    id: "ananya-krishnan",
    name: "Ananya Krishnan",
    role: "Talent Mobility & Visa Compliance Analyst",
    bio: "Ananya covers the intersection of talent mobility, visa regulations, and employment eligibility across the GCC. With experience supporting large-scale workforce relocations for Indian and South Asian professionals entering the UAE and Saudi Arabia, she brings a grounded, practical voice to immigration and compliance topics.",
    initials: "AK",
    color: "#7C2D12",
    specialties: ["Visa Compliance", "Talent Mobility", "Indian Expat Law", "GCC Immigration"],
    linkedIn: "https://linkedin.com",
  },
};

// Deterministically assign an author based on post slug
export function getAuthorForSlug(slug: string): Author {
  const keys = Object.keys(AUTHORS);
  const index = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % keys.length;
  return AUTHORS[keys[index]];
}
