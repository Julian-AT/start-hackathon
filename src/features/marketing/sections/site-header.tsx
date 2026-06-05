/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
"use client";

import { ArrowDown01Icon } from "hugeicons-react";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLinkItem,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/features/marketing/config";
import { DISCORD_URL, trackDetails } from "@/features/marketing/content";
import { LogoStartHack } from "@/features/marketing/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/70 bg-background/95 fixed top-0 z-50 w-full backdrop-blur-md">
      <Link
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-announcement text-announcement-foreground group flex h-9 w-full items-center justify-center px-4 transition-[filter] hover:brightness-[0.97]"
      >
        <span className="b3 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 text-center font-semibold">
          <span className="leading-none">
            Applications are closed
            <span className="hidden font-normal lg:inline">
              {" "}
              - join Discord for participant updates.
            </span>
          </span>
          <span className="hidden items-center gap-1 leading-none sm:inline-flex">
            Join Discord
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-0.5"
            >
              -&gt;
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

            <SheetContent side="right" className="bg-background border-none px-6 py-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="mt-2 flex flex-col gap-5" aria-label="Mobile">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href={link.href}
                          className="b1 text-foreground hover:bg-foreground/[0.06] rounded-md px-3 py-3 transition-colors"
                        >
                          {link.label}
                        </Link>
                      }
                    />
                    {link.label === "Tracks" && (
                      <div className="border-secondary ml-3 grid border-l pl-3">
                        {trackDetails.map((track) => (
                          <SheetClose
                            key={track.slug}
                            nativeButton={false}
                            render={
                              <Link
                                href={`/tracks/${track.slug}`}
                                className="b3 text-muted-foreground hover:text-foreground rounded-md px-3 py-2 transition-colors"
                              >
                                {track.name}
                              </Link>
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href={DISCORD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium"
                    >
                      Join Discord
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
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.label === "Tracks" ? (
                  <TracksDropdown />
                ) : (
                  <Link
                    href={link.href}
                    className="b3 hover:text-muted-foreground inline-flex h-8 items-center rounded-md px-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center">
            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-8 items-center gap-1.5 rounded-md px-3.5 text-[13px] font-medium outline-none focus-visible:ring-2"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function TracksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        openOnHover
        render={
          <button
            type="button"
            className="b3 hover:text-muted-foreground focus-visible:ring-ring inline-flex h-8 items-center gap-1 rounded-md px-2 transition-colors outline-none focus-visible:ring-2"
          />
        }
      >
        Tracks
        <ArrowDown01Icon className="size-3.5" strokeWidth={1.8} />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuPositioner>
          <DropdownMenuContent className="bg-background">
            <DropdownMenuLinkItem render={<Link href="/#tracks" />}>
              All tracks
            </DropdownMenuLinkItem>
            <DropdownMenuSeparator />
            {trackDetails.map((track) => (
              <DropdownMenuLinkItem
                key={track.slug}
                render={<Link href={`/tracks/${track.slug}`} />}
                className="hover:bg-background"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="font-medium">{track.name}</span>
                  <span className="text-muted-foreground text-xs">{track.category}</span>
                </span>
              </DropdownMenuLinkItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuPositioner>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
