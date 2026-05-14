import Image from "next/image";
import Link from "next/link";

export function CTAYellow() {
  return (
    <section>
      <div className="container mx-auto max-w-[68rem] px-4">
        <div className="bg-yellow-2">
          <div className="mx-auto flex w-full max-w-[49.75rem] flex-col items-center justify-between gap-16 px-8 py-24 md:flex-row md:gap-0">
            {/* Left: heading + button */}
            <div className="text-yellow-1 flex max-w-[22rem] flex-col items-center text-center md:block md:text-left">
              <h2 className="h3 mb-4">Bring your laptop. Leave with a portfolio.</h2>
              <p className="b2 mb-10">
                Early Bird applications are open. Approval-based, rolling admissions.
              </p>
              <Link href="https://luma.com/sp3ivels" target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="bg-yellow-1 hover:bg-yellow-1/85 inline-flex items-center justify-center rounded-[0.625rem] px-6 py-4 text-sm leading-[100%] font-normal text-white transition-colors"
                >
                  Request to Join
                </button>
              </Link>
            </div>

            {/* Right: doodle illustration */}
            <div
              className="flex w-full items-center justify-center md:w-[20rem] lg:w-[24rem]"
              draggable={false}
            >
              <Image
                src="/images/snake.svg"
                alt=""
                width={400}
                height={300}
                className="h-auto w-full max-w-[20rem]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
