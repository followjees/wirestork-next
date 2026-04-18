import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: {
    default: "Wirestork — Legal Intelligence Simplified",
    template: "%s | Wirestork",
  },
  description:
    "Simplified travel ban checks, legal consultations, background checks, and business formation across the UAE and GCC. Fast, accurate, human-verified.",
  keywords: [
    "UAE travel ban check",
    "labor ban check",
    "UAE legal services",
    "Saudi travel ban",
    "background check UAE",
    "online lawyer UAE",
  ],
  openGraph: {
    siteName: "Wirestork",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
