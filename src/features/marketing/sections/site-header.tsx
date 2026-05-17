"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
      className={`bg-background fixed top-0 z-50 w-full transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-announcement text-announcement-foreground group flex h-9 w-full items-center justify-center px-4 transition-[filter] hover:brightness-[0.97]"
      >
        <span className="b3 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 text-center font-semibold">
          <span className="leading-none">
            Early Bird applications are open
            <span className="hidden font-normal lg:inline">
              {" "}
              · Rolling admissions, hear back fast.
            </span>
          </span>
          <span className="inline-flex items-center gap-1 leading-none">
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
            className="text-foreground focus-visible:ring-ring -ms-0.5 inline-flex rounded-md outline-none focus-visible:ring-2"
          >
            <LogoStartHack />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  className="text-foreground hover:bg-foreground/[0.06] focus-visible:ring-ring inline-flex size-9 shrink-0 items-center justify-center rounded-md outline-none focus-visible:ring-2 lg:hidden"
                  aria-label="Toggle navigation"
                />
              }
            >
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
            </SheetTrigger>

            <SheetContent side="right" className="px-6 py-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="mt-2 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((l) => (
                  <SheetClose
                    key={l.label}
                    render={
                      <Link
                        href={l.href}
                        className="b1 text-foreground hover:bg-foreground/[0.06] rounded-md px-3 py-3 transition-colors"
                      >
                        {l.label}
                      </Link>
                    }
                  />
                ))}
                <SheetClose
                  render={
                    <Link
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground mt-3 inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium"
                    >
                      Request to Join
                    </Link>
                  }
                />
              </nav>
            </SheetContent>
          </Sheet>

          <nav
            className="text-foreground hidden items-center gap-1 lg:flex xl:gap-3"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="b3 hover:text-muted-foreground inline-flex h-8 items-center rounded-md px-2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center">
            <Button
              render={
                <Link
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3.5 text-[13px] font-medium"
                >
                  Request to Join
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}
