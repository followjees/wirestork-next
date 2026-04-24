import type { Metadata } from "next";
import DebtCollectionClient from "./DebtCollectionClient";

export const metadata: Metadata = {
  title: "Debt Collection Agency in Dubai | Recover Unpaid Debts Swiftly — Wirestork",
  description: "Wirestork is a results-driven debt collection agency in Dubai. AI-powered recovery, skip tracing, bounced cheque recovery, legal escalation. No recovery, no fee.",
  keywords: "debt collection agency Dubai, debt collection UAE, bounced cheque recovery Dubai, receivable management UAE, debt recovery agency Dubai",
  openGraph: {
    title: "Debt Collection Agency in Dubai | Wirestork",
    description: "Recover unpaid debts swiftly with Wirestork's AI-powered debt collection services. No recovery, no fee.",
    type: "website",
  },
};

export default function DebtCollectionPage() {
  return <DebtCollectionClient />;
}
