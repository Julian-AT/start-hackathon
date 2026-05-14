import Link from "next/link";
import Image from "next/image";

export function CTAYellow() {
  return (
    <section>
      <div className="container mx-auto px-4 max-w-[68rem]">
        <div className="bg-yellow-2">
          <div className="w-full max-w-[49.75rem] mx-auto flex flex-col gap-16 justify-between items-center py-24 px-8 md:flex-row md:gap-0">
            {/* Left: heading + button */}
            <div className="max-w-[22rem] text-yellow-1 flex flex-col items-center text-center md:block md:text-left">
              <h2 className="h3 mb-4">Bring your laptop. Leave with a portfolio.</h2>
              <p className="b2 mb-10">
                Early Bird applications are open. Approval-based, rolling admissions.
              </p>
              <Link
                href="https://luma.com/sp3ivels"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="rounded-[0.625rem] font-normal text-sm leading-[100%] transition-colors inline-flex items-center justify-center text-white px-6 py-4 bg-yellow-1 hover:bg-yellow-1/85"
                >
                  Request to Join
                </button>
              </Link>
            </div>

            {/* Right: doodle illustration */}
            <div className="w-full md:w-[20rem] lg:w-[24rem] flex items-center justify-center" draggable={false}>
              <Image
                src="/images/snake.svg"
                alt=""
                width={400}
                height={300}
                className="w-full h-auto max-w-[20rem]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
