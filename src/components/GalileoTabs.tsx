"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
        <p className="b2 text-dark-3 mx-auto mt-4 max-w-[36rem]">
          Pick a case partner. Build something they actually want. More cases announcing soon.
        </p>
      </div>

      <div className="mt-16">
        <div
          className="flex items-center gap-10 overflow-x-auto px-6 md:justify-center lg:gap-16"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={
                  "group relative snap-center px-0 pb-2 text-nowrap transition-opacity duration-200 " +
                  (isActive ? "opacity-100" : "opacity-60 hover:opacity-80")
                }
              >
                <span className="b2">{t.label}</span>
                <span
                  className={
                    "bg-dark-1 absolute right-0 bottom-0 left-0 h-[2px] transition-opacity duration-300 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-3 relative mt-4 overflow-hidden">
        {/* Yellow squiggle bg */}
        <Image
          src="/images/yellow-section-bg.svg"
          alt=""
          width={1440}
          height={790}
          className="pointer-events-none absolute top-0 left-0 h-[105%] w-full object-cover select-none"
          unoptimized
        />

        <div className="relative z-10 container mx-auto max-w-[30.375rem] px-4 lg:max-w-[67.75rem]">
          <div className="py-16 lg:py-24">
            <div className="w-full">
              {/* Inner panel with darker blue bg */}
              <div
                className="flex flex-col items-stretch justify-between rounded-[0.30106rem] p-1.5 md:gap-8 lg:flex-row-reverse lg:gap-[3.25rem] lg:rounded-xl"
                style={{ backgroundColor: "#6495FF" }}
              >
                {/* Right column on desktop, top on mobile: Title + button */}
                <div className="order-2 flex flex-col justify-between gap-12 px-7 pt-8 pb-10 lg:order-0 lg:w-[19rem] lg:shrink-0 lg:py-11 lg:pr-4 lg:pl-10">
                  <div className="flex flex-col gap-6">
                    <span className="b3 text-blue-1/70 tracking-wider uppercase">
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
                        className="border-blue-1/20 hover:border-blue-1 text-blue-1 inline-flex items-center justify-center rounded-[0.625rem] border px-[1.4375rem] py-[0.9375rem] text-sm leading-[100%] font-normal transition-colors"
                      >
                        Request to Join
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Case card */}
                <div className="bg-light-1 flex aspect-square flex-col justify-between overflow-hidden rounded-[0.30106rem] p-8 lg:flex-1 lg:rounded-xl lg:p-12">
                  <div className="flex items-start justify-between">
                    <div
                      className="text-dark-1 text-2xl font-bold lg:text-3xl"
                      style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
                    >
                      {current.partner}
                    </div>
                    <span className="rounded-pill border-dark-1/15 bg-light-2 text-dark-2 border px-3 py-1 text-xs">
                      Case partner
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="b3 text-dark-3 tracking-wider uppercase">
                      What you’ll build
                    </span>
                    <p
                      className="text-dark-1 text-lg leading-snug italic lg:text-xl"
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
