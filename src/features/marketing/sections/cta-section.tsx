import Image from "next/image";
import Link from "next/link";

import { DISCORD_URL } from "@/features/marketing/content";

export function CtaSection() {
  return (
    <section id="apply" className="pb-12">
      <div className="container mx-auto max-w-5xl px-5">
        <div className="bg-announcement rounded-3xl">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:gap-12 md:px-8 md:py-20 lg:py-24">
            <div className="text-yellow-1 flex max-w-[24rem] flex-col items-center text-center md:items-start md:text-left">
              <p className="eyebrow mb-4 opacity-70">Ready?</p>
              <h2 className="h3 mb-4 text-balance">Bring your laptop. Leave with a portfolio.</h2>
              <p className="b2 mb-8">
                Applications are closed. Join Discord for participant updates, team formation, and
                event ops.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-1 text-light-1 hover:bg-yellow-1/85 focus-visible:ring-yellow-1/40 inline-flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-colors outline-none focus-visible:ring-2"
                >
                  Join Discord
                </Link>
              </div>
            </div>

            <div className="flex w-full items-center justify-center md:w-auto md:flex-1">
              <Image
                src="/images/mascot/8.png"
                alt=""
                width={400}
                height={300}
                className="h-auto w-full max-w-[14rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[22rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
