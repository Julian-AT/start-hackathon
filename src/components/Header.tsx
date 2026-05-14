"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoStartHack } from "./icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "How it runs", href: "#flow" },
  { label: "Hosts", href: "#hosts" },
  { label: "FAQ", href: "#faq" },
];

const APPLY_URL = "https://luma.com/sp3ivels";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-light-1 fixed top-0 w-full z-50">
      {/* Announcement bar */}
      <Link
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full bg-[var(--color-announcement-bg)] text-[var(--color-announcement-text)] px-4 py-2 hover:brightness-[0.97] transition-[filter]"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="text-[0.8125rem] sm:text-sm leading-none">
            <span className="font-semibold">Early Bird applications are open</span>
            <span className="hidden lg:inline"> · Rolling admissions, hear back fast.</span>
          </span>
          <span className="text-[0.8125rem] sm:text-sm font-semibold leading-none inline-flex items-center gap-1">
            Apply now
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </Link>

      {/* Main nav */}
      <div className="py-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-dark-1">
              <LogoStartHack className="h-6 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900 focus:outline-none"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4h24M2 11h24M2 18h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="b2 text-dark-1 hover:text-dark-3 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="rounded-[0.625rem] font-normal text-sm leading-[100%] transition-colors inline-flex items-center justify-center text-light-1 px-[1.4375rem] py-[0.9375rem] bg-dark-1 hover:bg-dark-1/90"
              >
                Request to Join
              </button>
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-light-3 bg-light-1"
        >
          <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="b1 text-dark-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-[0.625rem] bg-dark-1 px-6 h-12 text-sm font-medium text-light-1"
            >
              Request to Join
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
