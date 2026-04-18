export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
  content: string;
};

// Stub — will be replaced by the full 260-post migration script output
// Run: node scripts/migrate-posts.js to populate posts/
const SAMPLE_POSTS: Post[] = [
  {
    slug: "how-to-check-police-case-in-uae",
    title: "How to Check Police Case in UAE Online (2026 Complete Guide)",
    date: "Feb 18, 2026",
    excerpt: "A step-by-step guide to checking if you have an active police case in the UAE without visiting a police station.",
    categories: ["UAE police case"],
    content: `Checking for an active police case in the UAE has become significantly easier in recent years thanks to digital government services. Here's everything you need to know.\n\n## Why Check?\n\nMany UAE residents discover they have an outstanding case only when they try to travel or renew a visa. Proactively checking gives you time to resolve issues before they escalate.\n\n## Official Methods\n\n1. **Dubai Police App** — Available on iOS and Android, allows case status checks for Dubai.\n2. **MOI Smart Services** — Abu Dhabi and federal cases can be checked through the Ministry of Interior portal.\n3. **Wirestork Verification** — Human-verified cross-emirate check covering all 7 emirates simultaneously.\n\n## What You'll Need\n\n- Emirates ID or passport number\n- Date of birth\n- Nationality\n\nFor a comprehensive check across all emirates, [our Court & Police Case Check service](/uae-court-police-case-checking) covers all databases simultaneously and delivers results within 48 hours.`,
  },
  {
    slug: "uae-labor-law-changes",
    title: "Here's What Has Changed In UAE Labor Law",
    date: "Feb 18, 2026",
    excerpt: "The UAE has made significant amendments to its labor law. Here's what employees and employers need to know.",
    categories: ["UAE labor Laws"],
    content: `The UAE's Federal Decree-Law No. 33 of 2021 on the Regulation of Labour Relations introduced sweeping changes to how employment is governed in the country.\n\n## Key Changes\n\n**1. New Contract Types**\nThe unlimited contract has been abolished. All contracts are now fixed-term (maximum 3 years, renewable).\n\n**2. Probation Period**\nProbation cannot exceed 6 months. Employees can resign during probation with 1 month's notice.\n\n**3. Annual Leave**\n- 30 calendar days after 1 year\n- Prorated leave for partial years\n\n**4. End of Service Gratuity**\nCalculated at 21 days per year for the first 5 years, and 30 days per year thereafter.\n\n**5. Non-Compete Clauses**\nMaximum 2-year non-compete, limited to same role and geography.\n\nFor specific legal advice on your situation, consult a licensed UAE lawyer through [our legal consultation service](/online-lawyer-consultation).`,
  },
  {
    slug: "what-happens-cheque-bounces-uae",
    title: "What happens if a Cheque bounces in UAE? [Updated]",
    date: "Feb 18, 2026",
    excerpt: "Bounced cheques in the UAE carry serious legal consequences including travel bans and criminal prosecution.",
    categories: ["UAE travel Bans"],
    content: `A bounced cheque in the UAE is not just a financial inconvenience — it's a criminal matter. Here's what you need to know.\n\n## The Legal Framework\n\nUnder UAE law, issuing a cheque with insufficient funds is a criminal offence under Article 401 of the Federal Penal Code. However, recent amendments have shifted some cases to civil proceedings.\n\n## What Happens Next\n\n1. **The bank returns the cheque** unpaid and issues a return memo\n2. **The payee files a complaint** with the police\n3. **A travel ban is issued** — often within days\n4. **Court proceedings begin** — you may face fines or imprisonment\n\n## Amounts Matter\n\n- Cheques under AED 200,000: May be handled civilly\n- Cheques above AED 200,000: More likely to face criminal prosecution\n\n## What To Do\n\nIf you've issued a bounced cheque, act immediately:\n- Contact the payee to negotiate settlement\n- Consult a lawyer before the complaint is filed\n- Check your [travel ban status](/travel-ban-uae-check) immediately\n\nWirestork's legal team can help you navigate cheque bounce cases. [Book a consultation](/online-lawyer-consultation) today.`,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  // In production, this would read from /posts/*.mdx files
  // For now, returns the sample set
  return SAMPLE_POSTS;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}
