import Link from "next/link";

import { EVENT } from "@/features/marketing/config";
import { DISCORD_URL } from "@/features/marketing/content";

export function Hero() {
  return (
    <section className="pt-10 pb-8 lg:pt-16 lg:pb-10">
      <div className="container mx-auto flex w-full max-w-2xl flex-col items-center px-5 text-center">
        <div className="relative mx-auto aspect-square w-44 sm:w-56 lg:w-72">
          <video
            className="absolute inset-0 h-full w-full bg-transparent object-contain"
            width={288}
            height={288}
            playsInline
            autoPlay
            muted
            loop
            poster="/images/logo_transparent.png"
          >
            <source src="/videos/logo.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="eyebrow text-muted-foreground -mt-4 mb-4 lg:-mt-6">{EVENT.venue}</p>
        <h1 className="h1 mb-5 text-balance">
          START HACK <br />
          Vienna &rsquo;26
        </h1>
        <p className="b1 text-muted-foreground mx-auto mb-6 w-full max-w-[28ch] text-balance sm:max-w-[36ch]">
          24 hours. Five tracks. One weekend that hits.
        </p>
        <Link
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 items-center gap-2 rounded-md px-6 text-sm font-medium outline-none focus-visible:ring-2"
        >
          Join Discord
        </Link>
      </div>
    </section>
  );
}
