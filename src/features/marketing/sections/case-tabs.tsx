"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { APPLY_URL } from "@/features/marketing/config";

type Case = {
  id: string;
  label: string;
  partner: string;
  category: string;
  problem: string;
  build: string;
  image: string;
};

const cases: Case[] = [
  {
    id: "fonio",
    label: "fonio.ai",
    partner: "fonio.ai",
    category: "Voice AI Infrastructure",
    problem:
      "Real-time voice agents that hold a conversation, retrieve context, and act — without latency that breaks the illusion.",
    build:
      "A working voice-AI feature on top of fonio’s infra: a use case, a demo, and a pitch on why their voice stack should power it.",
    image: "/images/fonio.jpg",
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
    image: "/images/techbold.jpg",
  },
];

export function CaseTabs() {
  const [active, setActive] = useState<string>(cases[0]!.id);
  const current = cases.find((c) => c.id === active) ?? cases[0]!;

  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="h2 font-normal">The cases</h2>
        <p className="b2 text-dark-3 mx-auto mt-4 max-w-[36rem]">
          Pick a case partner. Build something they actually want. More cases announcing soon.
        </p>
      </div>

      <div className="container mx-auto mt-14 max-w-[64rem] px-4">
        <div
          role="tablist"
          aria-label="Case partners"
          className="border-dark-1/10 flex items-center justify-center gap-8 border-b"
        >
          {cases.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`case-panel-${c.id}`}
                onClick={() => setActive(c.id)}
                className={
                  "b2 relative -mb-px py-4 transition-colors " +
                  (isActive
                    ? "text-dark-1 font-medium"
                    : "text-dark-3 hover:text-dark-1 font-normal")
                }
              >
                {c.label}
                <span
                  className={
                    "bg-dark-1 absolute right-0 -bottom-px left-0 h-[2px] transition-opacity duration-200 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                />
              </button>
            );
          })}
        </div>

        <div
          key={current.id}
          id={`case-panel-${current.id}`}
          role="tabpanel"
          className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="border-dark-1/8 overflow-hidden rounded-2xl border bg-white">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={current.image}
                alt={`${current.partner} case preview`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 100vw"
              />
            </div>
          </div>

          <div>
            <p className="b3 text-dark-3 font-medium tracking-wider uppercase">{current.partner}</p>
            <h3 className="h3 mt-2 font-normal">{current.category}</h3>
            <p className="b1 text-dark-2 mt-5">{current.problem}</p>
            <p className="b2 text-dark-3 mt-6">
              <span className="text-dark-1 font-medium">What you’ll build: </span>
              {current.build}
            </p>
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="b2 text-dark-1 group mt-8 inline-flex items-center gap-1.5 font-medium"
            >
              Apply now
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
