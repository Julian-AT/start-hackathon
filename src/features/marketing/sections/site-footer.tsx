import Image from "next/image";
import Link from "next/link";

import { APPLY_URL } from "@/features/marketing/config";

type FooterLink = { label: string; href: string; external?: boolean };

const eventLinks: FooterLink[] = [
  { label: "About the event", href: "#about" },
  { label: "The cases", href: "#cases" },
  { label: "How it runs", href: "#flow" },
  { label: "Hosts", href: "#hosts" },
  { label: "FAQ", href: "#faq" },
];

const communityLinks: FooterLink[] = [
  { label: "Apply on Luma", href: APPLY_URL, external: true },
  { label: "START Vienna", href: "https://www.startglobal.org/", external: true },
  { label: "HOIV", href: "https://instagram.com/hoiv.me", external: true },
  {
    label: "Contact organizers",
    href: "https://instagram.com/abdulbasitbanbhan",
    external: true,
  },
];

const instagramPath = (
  <path
    d="M6.66 2C4.09 2 2 4.09 2 6.66v6.67C2 15.91 4.09 18 6.66 18h6.67C15.9 18 18 15.91 18 13.33V6.67C18 4.09 15.9 2 13.33 2H6.66zm8 2.67c.37 0 .67.29.67.66 0 .37-.3.67-.67.67a.67.67 0 0 1 0-1.33zM10 6c2.2 0 4 1.79 4 4s-1.8 4-4 4-4-1.79-4-4 1.8-4 4-4zm0 1.33A2.67 2.67 0 0 0 7.33 10c0 1.47 1.2 2.67 2.67 2.67S12.67 11.47 12.67 10 11.47 7.33 10 7.33z"
    fill="currentColor"
  />
);

const xPath = (
  <path
    d="M2.76 2.4l5.69 8.29L2.49 17.6h1.27l5.25-6.09 4.18 6.09h4l-5.95-8.67 5.63-6.53h-1.27L10.68 8.1 6.77 2.4H2.76z"
    fill="currentColor"
  />
);

const socials = [
  { label: "Instagram (HOIV)", href: "https://instagram.com/hoiv.me", svg: instagramPath },
  {
    label: "Instagram (Abdul Basit)",
    href: "https://instagram.com/abdulbasitbanbhan",
    svg: instagramPath,
  },
  { label: "X (Abdul Basit)", href: "https://x.com/abbanbhan", svg: xPath },
];

export function SiteFooter() {
  return (
    <footer className="bg-light-1 relative pt-24 pb-8">
      <div className="container mx-auto flex max-w-[49.6rem] flex-col gap-[19.75rem] px-4">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex gap-5">
            <ul className="flex w-[11.5rem] flex-col gap-5">
              <li className="b3 text-dark-3 tracking-wider uppercase">Event</li>
              {eventLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-dark-1/80 hover:text-dark-1 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex w-[11.5rem] flex-col gap-5">
              <li className="b3 text-dark-3 tracking-wider uppercase">Community</li>
              {communityLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-dark-1/80 hover:text-dark-1 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-dark-1 hover:text-dark-1/70 flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    {s.svg}
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-dark-3 b2 flex justify-between">
          <p>© 2026 START Hack Vienna · Powered by START Vienna &amp; HOIV.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-20 left-0 flex items-end justify-center lg:bottom-0 lg:justify-between">
        <Image
          src="/images/footer-left-visual.png"
          alt=""
          width={430}
          height={277}
          className="hidden lg:block"
          unoptimized
        />
        <Image
          src="/images/footer-center-visual.png"
          alt=""
          width={307}
          height={171}
          className="select-none"
          unoptimized
        />
        <Image
          src="/images/footer-right-visual.png"
          alt=""
          width={432}
          height={252}
          className="hidden lg:block"
          unoptimized
        />
      </div>
    </footer>
  );
}
