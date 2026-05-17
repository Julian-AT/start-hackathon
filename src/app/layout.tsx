import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "START Hack Vienna '26 — 24 hours · 4 real cases · 100 builders",
  description:
    "A 24-hour hackathon in Vienna. Four real cases from real companies, one weekend that hits. June 6–7, 2026 at HOIV.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
