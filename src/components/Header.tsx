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
    <header className="bg-light-1 fixed top-0 z-50 w-full">
      {/* Announcement bar */}
      <Link
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full bg-[var(--color-announcement-bg)] px-4 py-2 text-[var(--color-announcement-text)] transition-[filter] hover:brightness-[0.97]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center sm:gap-3">
          <span className="text-[0.8125rem] leading-none sm:text-sm">
            <span className="font-semibold">Early Bird applications are open</span>
            <span className="hidden lg:inline"> · Rolling admissions, hear back fast.</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[0.8125rem] leading-none font-semibold sm:text-sm">
            Apply now
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>

      {/* Main nav */}
      <div className="relative z-50 mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-dark-1 flex items-center">
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
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4h24M2 11h24M2 18h24"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="b2 text-dark-1 hover:text-dark-3 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="text-light-1 bg-dark-1 hover:bg-dark-1/90 inline-flex items-center justify-center rounded-[0.625rem] px-[1.4375rem] py-[0.9375rem] text-sm leading-[100%] font-normal transition-colors"
              >
                Request to Join
              </button>
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-light-3 bg-light-1 border-t lg:hidden">
          <nav className="flex flex-col gap-5 px-6 py-6" aria-label="Mobile">
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
              className="bg-dark-1 text-light-1 mt-2 inline-flex h-12 items-center justify-center rounded-[0.625rem] px-6 text-sm font-medium"
            >
              Request to Join
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
