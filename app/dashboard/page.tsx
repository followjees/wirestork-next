import type { Metadata } from "next";
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "My Dashboard | Wirestork",
  description: "View your orders, upload documents, and track progress across all Wirestork services.",
  robots: "noindex, nofollow",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Loading dashboard...</div>
      </div>
    }>
      <DashboardClient />
    </Suspense>
  );
}
