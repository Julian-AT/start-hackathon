import Image from "next/image";
import Link from "next/link";

import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
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
    image: "/partners/fonio.png",
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
  return (
    <section id="cases" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="h2">The cases</h2>
        <p className="b2 text-muted-foreground mx-auto mt-4 max-w-[36rem]">
          Pick a case partner. Build something they actually want. More cases announcing soon.
        </p>
      </div>

      <div className="container mx-auto mt-12 max-w-5xl px-4 lg:mt-16">
        <Tabs defaultValue={cases[0]!.id} aria-label="Case partners">
          <TabsList>
            {cases.map((c) => (
              <TabsTab key={c.id} value={c.id}>
                {c.label}
              </TabsTab>
            ))}
            <TabsIndicator />
          </TabsList>

          {cases.map((c) => (
            <TabsPanel key={c.id} value={c.id}>
              <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
                <div className="border-border bg-card overflow-hidden rounded-2xl border">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={c.image}
                      alt={`${c.partner} case preview`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 32rem, 100vw"
                    />
                  </div>
                </div>

                <div>
                  <p className="eyebrow text-muted-foreground">{c.partner}</p>
                  <h3 className="h3 mt-3">{c.category}</h3>
                  <p className="b1 text-dark-2 mt-5">{c.problem}</p>
                  <p className="b2 text-muted-foreground mt-6">
                    <span className="text-foreground font-medium">What you’ll build: </span>
                    {c.build}
                  </p>
                  <Link
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b2 text-foreground focus-visible:ring-ring group mt-8 inline-flex items-center gap-1.5 rounded-md font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-2"
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
            </TabsPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
