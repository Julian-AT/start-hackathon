"use client";

import Link from "next/link";
import { useState } from "react";

type FaqItem = { id: string; title: string; body: string };

const items: FaqItem[] = [
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

export function Faq() {
  const [open, setOpen] = useState<string>("who");

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto grid max-w-full items-start gap-10 px-4 lg:max-w-[54.6rem] lg:grid-cols-[1fr_1fr] lg:gap-[7.625rem]">
        <div className="w-full lg:max-w-[19.5rem]">
          <h2 className="h2 mb-12 lg:mb-14">The basics</h2>
          <div className="w-full">
            {items.map((item) => {
              const isOpen = open === item.id;
              return (
                <div
                  key={item.id}
                  className="border-light-3 my-3 border-b first:mt-0"
                  data-state={isOpen ? "open" : "closed"}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full flex-1 flex-row items-center justify-start gap-2 py-4 text-left font-medium transition-all hover:underline"
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
                        "shrink-0 transition-transform duration-200 " + (isOpen ? "rotate-45" : "")
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
                      <div className="pt-1 pb-4 pl-5">
                        <p className="b2 text-dark-3">{item.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-light-2 relative h-full min-h-[30rem] w-full overflow-hidden rounded-2xl sm:min-w-[24.2rem]">
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(25,25,25,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,25,25,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative z-10 flex h-full min-h-[30rem] w-full flex-col justify-between gap-6 overflow-hidden p-8">
            <div className="flex flex-col gap-3">
              <span className="b3 text-dark-3 tracking-wider uppercase">The venue</span>
              <h3
                className="text-dark-1 text-2xl leading-tight lg:text-3xl"
                style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
              >
                HOIV — Home of InnoVation
              </h3>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="rounded-card bg-light-1 border-light-3 w-full max-w-[20rem] border px-6 py-8 text-center">
                <p className="b1 text-dark-1">Arsenalstraße 11</p>
                <p className="b1 text-dark-1">1030 Wien, Austria</p>
                <Link
                  href="https://maps.google.com/?cid=15116562244002937656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b2 text-dark-2 hover:text-dark-1 mt-4 inline-flex items-center gap-1 underline transition-colors"
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
