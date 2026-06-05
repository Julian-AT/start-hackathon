import Image from "next/image";
import Link from "next/link";

import { Marquee } from "@/components/ui/marquee";
import { sponsors } from "@/features/marketing/content";

export function PartnerMarquee() {
  return (
    <section id="sponsors" className="py-8 lg:py-10">
      <div className="container mx-auto max-w-5xl px-5">
        <p className="eyebrow text-muted-foreground text-center">Backed by the best</p>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:44s]" repeat={3} pauseOnHover>
            {sponsors.map((sponsor) => (
              <Link
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-card focus-visible:ring-ring flex h-14 min-w-36 items-center justify-center rounded-md px-4 transition-colors outline-none focus-visible:ring-2"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={180}
                  height={54}
                  className="max-h-9 w-auto object-contain"
                />
              </Link>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r sm:w-24" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l sm:w-24" />
        </div>
      </div>
    </section>
  );
}
