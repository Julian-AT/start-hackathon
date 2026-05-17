import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

type Partner = {
  name: string;
  src: string;
};

const partners: Partner[] = [
  { name: "fonio.ai", src: "/partners/fonio.png" },
  { name: "techbold", src: "/partners/techbold.png" },
  { name: "Lovable", src: "/partners/lovable.svg" },
  { name: "HOIV", src: "/partners/hoiv.webp" },
];

export function PartnerMarquee() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="eyebrow text-muted-foreground text-center">
          Backed by builders, for builders
        </p>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]" repeat={3}>
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={200}
                height={40}
                className="h-9 w-auto object-contain px-2 opacity-80"
              />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
        </div>
      </div>
    </section>
  );
}
