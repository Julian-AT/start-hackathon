import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

const suisseIntl = localFont({
  src: [
    { path: "../../public/fonts/SuisseIntl_Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/SuisseIntl_Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/SuisseIntl_Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/SuisseIntl_SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/SuisseIntl_Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-suisse",
  display: "swap",
});

const iowanOld = localFont({
  src: [
    { path: "../../public/fonts/IowanOld.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/IowanOld_Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-iowan",
  display: "swap",
});

const heming = localFont({
  src: [{ path: "../../public/fonts/HemingVariable.ttf", style: "normal" }],
  variable: "--font-heming",
  display: "swap",
});

export const metadata: Metadata = {
  title: "START Hack Vienna '26 — 24 hours · 4 real cases · 100 builders",
  description:
    "A 24-hour hackathon in Vienna. Four real cases from real companies, one weekend that hits. June 6–7, 2026 at HOIV.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`light ${suisseIntl.variable} ${iowanOld.variable} ${heming.variable}`}
    >
      <body className="bg-light-1 text-dark-1 flex min-h-full flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
