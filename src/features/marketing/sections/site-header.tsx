"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { APPLY_URL, navLinks } from "@/features/marketing/config";
import { LogoStartHack } from "@/features/marketing/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY < 80 || open) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`bg-light-1 fixed top-0 z-50 w-full transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-9 w-full items-center justify-center bg-[var(--color-announcement-bg)] px-4 text-[var(--color-announcement-text)] transition-[filter] hover:brightness-[0.97]"
      >
        <span className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center sm:gap-x-3">
          <span className="text-sm leading-none font-semibold sm:text-[0.9375rem]">
            Early Bird applications are open
            <span className="hidden font-normal lg:inline">
              {" "}
              · Rolling admissions, hear back fast.
            </span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm leading-none font-semibold sm:text-[0.9375rem]">
            Apply now
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </span>
      </Link>

      <div className="relative z-50">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-dark-1 focus-visible:ring-dark-1/20 -ms-0.5 inline-flex outline-none focus-visible:ring-2"
          >
            <LogoStartHack />
          </Link>

          <button
            type="button"
            className="text-dark-1 hover:bg-dark-1/[0.06] focus-visible:ring-dark-1/20 inline-flex size-9 shrink-0 items-center justify-center rounded-lg outline-none focus-visible:ring-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden
            >
              <path
                d="M1.5 3h19M1.5 9h19M1.5 15h19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav
            className="text-dark-1 hidden items-center gap-0.5 pt-1 lg:flex lg:gap-1 xl:gap-5"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="b2 hover:text-dark-3 inline-flex h-8 items-center rounded-md px-2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center">
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:ring-dark-1/25 outline-none focus-visible:rounded-lg focus-visible:ring-2"
            >
              <Button
                variant="default"
                size="default"
                className="bg-dark-1 hover:bg-dark-1/90 text-light-1 h-8 rounded-lg border-0 px-3.5 text-[0.8125rem] font-medium hover:cursor-pointer"
              >
                Request to Join
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="bg-light-1 lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="b1 text-dark-1 hover:bg-dark-1/[0.06] rounded-md px-3 py-3 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-1 text-light-1 mt-2 inline-flex h-10 items-center justify-center rounded-lg px-5 text-sm font-medium"
            >
              Request to Join
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
