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
    <section className="py-14 pb-16">
      <div className="container mx-auto px-4 md:px-48">
        <p className="b3 text-dark-3 text-center font-medium tracking-wider uppercase">
          Backed by builders, for builders
        </p>
        <div className="relative mt-4">
          <Marquee className="max-w-full [--duration:40s]">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={200}
                height={40}
                className="h-10 w-auto object-contain px-1"
                unoptimized
              />
            ))}
          </Marquee>
          <div className="from-light-1 pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r" />
          <div className="from-light-1 pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l" />
        </div>
      </div>
    </section>
  );
}
