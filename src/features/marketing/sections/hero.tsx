import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APPLY_URL } from "@/features/marketing/config";

export function Hero() {
  return (
    <section className="pt-28 pb-12 lg:pt-[6.625rem] lg:pb-8">
      <div className="container mx-auto max-w-[42rem] px-4 text-center">
        <div className="-pt-12 relative mx-auto aspect-square max-w-72">
          <video
            className="absolute inset-0 h-auto w-full bg-transparent object-contain"
            width={240}
            height={240}
            playsInline
            autoPlay
            muted
            loop
            poster="/images/logo_transparent.png"
            style={{ display: "block" }}
          >
            <source src="/videos/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="h1 -mt-12 mb-5 text-6xl font-medium">
          START Hack <br />
          Vienna &rsquo;26
        </h1>
        <p className="b1 text-dark-2 mx-auto mb-4 max-w-[36ch]">
          24 hours. 4 real cases. 100 builders. <br /> One weekend that hits.
        </p>
        <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="default"
            size="default"
            className="bg-dark-1 hover:bg-dark-1/90 text-light-1 h-10 rounded-lg border-0 px-3.5 text-[0.8125rem] font-medium hover:cursor-pointer"
          >
            Request to Join
          </Button>
        </Link>
      </div>
    </section>
  );
}
