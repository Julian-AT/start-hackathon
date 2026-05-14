"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Tab = {
  id: string;
  label: string;
  partner: string;
  category: string;
  problem: string;
  build: string;
};

const tabs: Tab[] = [
  {
    id: "fonio",
    label: "fonio.ai",
    partner: "fonio.ai",
    category: "Voice AI Infrastructure",
    problem:
      "Real-time voice agents that hold a conversation, retrieve context, and act — without latency that breaks the illusion.",
    build:
      "A working voice-AI feature on top of fonio’s infra: a use case, a demo, and a pitch on why their voice stack should power it.",
  },
  {
    id: "techbold",
    label: "techbold",
    partner: "techbold",
    category: "B2B IT & Automation",
    problem:
      "Mid-market IT teams drown in tickets, manual provisioning, and drift between systems. There’s a better automation layer waiting to be built.",
    build:
      "An automation or AI-assisted tool that meaningfully cuts time on a real techbold workflow. Bonus points for measurable wins.",
  },
];

export function GalileoTabs() {
  const [active, setActive] = useState<string>(tabs[0]!.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0]!;

  return (
    <section id="cases">
      <div className="container mx-auto px-4 text-center">
        <h2 className="h2">The cases</h2>
        <p className="b2 text-dark-3 mt-4 max-w-[36rem] mx-auto">
          Pick a case partner. Build something they actually want. More cases announcing soon.
        </p>
      </div>

      <div className="mt-16">
        <div
          className="flex items-center gap-10 lg:gap-16 overflow-x-auto md:justify-center px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={
                  "text-nowrap snap-center group relative pb-2 px-0 transition-opacity duration-200 " +
                  (isActive ? "opacity-100" : "opacity-60 hover:opacity-80")
                }
              >
                <span className="b2">{t.label}</span>
                <span
                  className={
                    "absolute bottom-0 left-0 right-0 h-[2px] bg-dark-1 transition-opacity duration-300 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden mt-4 bg-blue-3">
        {/* Yellow squiggle bg */}
        <Image
          src="/images/yellow-section-bg.svg"
          alt=""
          width={1440}
          height={790}
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-[105%] object-cover"
          unoptimized
        />

        <div className="container mx-auto px-4 relative z-10 max-w-[30.375rem] lg:max-w-[67.75rem]">
          <div className="py-16 lg:py-24">
            <div className="w-full">
              {/* Inner panel with darker blue bg */}
              <div
                className="p-1.5 flex flex-col items-stretch justify-between md:gap-8 lg:gap-[3.25rem] lg:flex-row-reverse rounded-[0.30106rem] lg:rounded-xl"
                style={{ backgroundColor: "#6495FF" }}
              >
                {/* Right column on desktop, top on mobile: Title + button */}
                <div className="px-7 lg:pl-10 lg:pr-4 pt-8 pb-10 lg:py-11 lg:w-[19rem] lg:shrink-0 flex flex-col justify-between gap-12 order-2 lg:order-0">
                  <div className="flex flex-col gap-6">
                    <span className="b3 uppercase tracking-wider text-blue-1/70">
                      {current.category}
                    </span>
                    <h3 className="h3 text-blue-1">{current.partner}</h3>
                    <p className="b2 text-blue-1/80">{current.problem}</p>
                  </div>
                  <div>
                    <Link
                      href="https://luma.com/sp3ivels"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        className="rounded-[0.625rem] font-normal text-sm leading-[100%] transition-colors items-center justify-center inline-flex border border-blue-1/20 px-[1.4375rem] py-[0.9375rem] hover:border-blue-1 text-blue-1"
                      >
                        Request to Join
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Case card */}
                <div className="lg:flex-1 rounded-[0.30106rem] lg:rounded-xl overflow-hidden aspect-square bg-light-1 p-8 lg:p-12 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div
                      className="text-2xl lg:text-3xl text-dark-1 font-bold"
                      style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
                    >
                      {current.partner}
                    </div>
                    <span className="rounded-pill border border-dark-1/15 bg-light-2 px-3 py-1 text-xs text-dark-2">
                      Case partner
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="b3 uppercase tracking-wider text-dark-3">
                      What you’ll build
                    </span>
                    <p
                      className="text-lg lg:text-xl italic text-dark-1 leading-snug"
                      style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
                    >
                      {current.build}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
