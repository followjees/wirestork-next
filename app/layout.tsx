import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganizationSchema } from "@/lib/wordpress/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wirestork.com";

export const metadata: Metadata = {
  title: {
    default: "Wirestork — Legal Intelligence Simplified",
    template: "%s | Wirestork",
  },
  description:
    "Fast, accurate travel ban checks, background checks, legal consultations and more across the UAE and GCC.",
  keywords: [
    "UAE travel ban check",
    "labor ban check",
    "UAE legal services",
    "Saudi travel ban",
    "background check UAE",
    "online lawyer UAE",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "Wirestork",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={buildOrganizationSchema()} />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
