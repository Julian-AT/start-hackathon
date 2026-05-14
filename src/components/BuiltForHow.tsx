"use client";

import { useState } from "react";
import Link from "next/link";

type AccordionItem = { id: string; title: string; body: string };

const items: AccordionItem[] = [
  {
    id: "who",
    title: "Who can apply?",
    body: "Builders, students, engineers, designers, PMs, founders, operators — junior through senior. If you ship things and want to spend a weekend with great people, you’re in the right place.",
  },
  {
    id: "teams",
    title: "Do I need a team?",
    body: "Teams of 2–4 are ideal. If you apply solo, we’ll match you on-site once cases are revealed. No solo builds.",
  },
  {
    id: "cost",
    title: "Is it free? What’s included?",
    body: "Yes, free. We cover 24h catering, food truck, coffee, and premium tool credits from our partners. You bring your laptop.",
  },
  {
    id: "format",
    title: "How does the weekend work?",
    body: "Build kicks off Saturday. Code freeze is Sunday at 14:00. Each case partner picks a Track Winner; the four Track Winners pitch to an external jury for the Overall Winner trophy. A Community Award runs open-mic during deliberation.",
  },
  {
    id: "prize",
    title: "What’s the prize pool?",
    body: "10,000+ EUR total across Track Winners, the Overall Winner trophy, and the crowd-voted Community Award. Plus an MIT-licensed GitHub project that goes in your portfolio.",
  },
  {
    id: "language",
    title: "What language is the event in?",
    body: "English. Vienna is international and so is the room.",
  },
];

export function BuiltForHow() {
  const [open, setOpen] = useState<string>("who");

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-4 max-w-full lg:max-w-[54.6rem] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-[7.625rem] items-start">
        {/* Left column: heading + accordion */}
        <div className="w-full lg:max-w-[19.5rem]">
          <h2 className="h2 mb-12 lg:mb-14">The basics</h2>
          <div className="w-full">
            {items.map((item) => {
              const isOpen = open === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-light-3 my-3 first:mt-0"
                  data-state={isOpen ? "open" : "closed"}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                    className="flex flex-1 py-4 font-medium transition-all hover:underline w-full text-left flex-row items-center justify-start gap-2"
                  >
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                      className="shrink-0"
                    >
                      <path
                        d="M6 1l1.6 4.4 4.4.6-3.4 2.8 1 4.6L6 11l-3.6 2.4 1-4.6L0 6l4.4-.6L6 1z"
                        fill="currentColor"
                      />
                    </svg>
                    <h4 className="b1 flex-1">{item.title}</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={
                        "shrink-0 transition-transform duration-200 " +
                        (isOpen ? "rotate-45" : "")
                      }
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                  <div
                    className={
                      "grid transition-[grid-template-rows] duration-200 " +
                      (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                    }
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 pt-1 pl-5">
                        <p className="b2 text-dark-3">{item.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: venue card with grid bg */}
        <div className="w-full h-full min-h-[30rem] sm:min-w-[24.2rem] relative rounded-2xl overflow-hidden bg-light-2">
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(25,25,25,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,25,25,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative w-full h-full flex flex-col gap-6 justify-between p-8 overflow-hidden z-10 min-h-[30rem]">
            <div className="flex flex-col gap-3">
              <span className="b3 uppercase tracking-wider text-dark-3">The venue</span>
              <h3
                className="text-2xl lg:text-3xl text-dark-1 leading-tight"
                style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
              >
                HOIV — Home of InnoVation
              </h3>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="rounded-card bg-light-1 border border-light-3 px-6 py-8 text-center w-full max-w-[20rem]">
                <p className="b1 text-dark-1">Arsenalstraße 11</p>
                <p className="b1 text-dark-1">1030 Wien, Austria</p>
                <Link
                  href="https://maps.google.com/?cid=15116562244002937656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 b2 text-dark-2 hover:text-dark-1 transition-colors underline"
                >
                  Open in Google Maps
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <p className="b3 text-dark-3">
                Vienna’s home for entrepreneurial talent, hosting START Hack ’26.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
