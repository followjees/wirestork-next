// app/(marketing)/legal-document-review/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import ContractReviewClient from "./ContractReviewClient";

export const metadata: Metadata = {
  title: "Legal Document Review | Contract Review Services — Wirestork UAE",
  description:
    "Expert contract and legal document review across the GCC. Employment contracts, NDAs, partnership agreements, court documents and more. Fast 2–3 day turnaround. Confidential.",
  keywords:
    "legal document review UAE, contract review Dubai, document review GCC, employment contract review, NDA review UAE",
  openGraph: {
    title: "Legal Document Review | Wirestork",
    description:
      "Expert legal document review for businesses and individuals in the UAE and GCC. Upload securely, receive expert analysis in 2–3 days.",
    type: "website",
  },
};

export default function LegalDocumentReviewPage() {
  return <ContractReviewClient />;
}
