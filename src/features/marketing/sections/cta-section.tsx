import Image from "next/image";
import Link from "next/link";

import { APPLY_URL } from "@/features/marketing/config";

export function CtaSection() {
  return (
    <section id="apply" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="bg-yellow-2 rounded-3xl">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 px-8 py-16 md:flex-row md:gap-12 md:py-20 lg:py-24">
            <div className="text-yellow-1 flex max-w-[22rem] flex-col items-center text-center md:items-start md:text-left">
              <h2 className="h3 mb-4 text-balance">Bring your laptop. Leave with a portfolio.</h2>
              <p className="b2 mb-8">
                Early Bird applications are open. Approval-based, rolling admissions.
              </p>
              <Link
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-1 text-light-1 hover:bg-yellow-1/85 focus-visible:ring-yellow-1/40 inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors outline-none focus-visible:ring-2"
              >
                Request to Join
              </Link>
            </div>

            <div className="flex w-full items-center justify-center md:w-auto md:flex-1">
              <Image
                src="/images/mascot/8.png"
                alt=""
                width={400}
                height={300}
                className="h-auto w-full max-w-[18rem] md:max-w-[20rem] lg:max-w-[22rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
