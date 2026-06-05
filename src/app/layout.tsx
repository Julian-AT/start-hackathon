import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";

import { EVENT, SITE_URL } from "@/features/marketing/config";
import { sponsors, tracks } from "@/features/marketing/content";

const TITLE = `${EVENT.name} - ${EVENT.tagline}`;
const OG_IMAGE = {
  url: "/images/meta.png",
  width: 1640,
  height: 664,
  alt: `${EVENT.name} - ${EVENT.tagline}`,
};

const partnerKeywords = Array.from(
  new Set([...tracks.map((track) => track.partner), ...sponsors.map((sponsor) => sponsor.name)]),
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s - ${EVENT.name}`,
  },
  description: EVENT.description,
  applicationName: EVENT.name,
  authors: [{ name: "START Hack Vienna" }],
  creator: "START Hack Vienna",
  publisher: "START Hack Vienna",
  category: "Technology",
  keywords: [
    "START Hack Vienna",
    "Vienna hackathon",
    "hackathon 2026",
    "Austria hackathon",
    "AI hackathon Vienna",
    "student builders",
    "founders",
    "engineering",
    "voice AI",
    "robotics",
    "legal tech",
    "smart glasses",
    ...partnerKeywords,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: EVENT.name,
    title: TITLE,
    description: EVENT.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: EVENT.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: EVENT.shortName,
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f6" },
    { media: "(prefers-color-scheme: dark)", color: "#191919" },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hackathon",
  name: EVENT.name,
  alternateName: EVENT.shortName,
  description: EVENT.description,
  url: SITE_URL,
  image: [`${SITE_URL}${OG_IMAGE.url}`],
  startDate: EVENT.startDate,
  endDate: EVENT.endDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: EVENT.venue,
    address: {
      "@type": "PostalAddress",
      addressLocality: EVENT.city,
      addressCountry: EVENT.country,
    },
  },
  organizer: {
    "@type": "Organization",
    name: EVENT.shortName,
    url: SITE_URL,
  },
  inLanguage: "en",
  isAccessibleForFree: true,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex min-h-full flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </body>
    </html>
  );
}
