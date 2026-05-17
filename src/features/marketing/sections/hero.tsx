import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APPLY_URL } from "@/features/marketing/config";

export function Hero() {
  return (
    <section className="pt-20 pb-12 lg:pt-24 lg:pb-16">
      <div className="container mx-auto flex max-w-2xl flex-col items-center px-4 text-center">
        <div className="relative mx-auto aspect-square w-56 sm:w-64 lg:w-72">
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

        <h1 className="h1 -mt-6 mb-5 text-balance lg:-mt-10">
          START HACK <br className="sm:hidden" />
          Vienna &rsquo;26
        </h1>
        <p className="b1 text-dark-2 mx-auto mb-8 max-w-[36ch] text-balance">
          24 hours. 4 real cases. 100 builders. <br className="sm:hidden" /> One weekend that hits.
        </p>
        <Button
          render={
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-6 text-sm font-medium"
            >
              Request to Join
            </Link>
          }
        />
      </div>
    </section>
  );
}
