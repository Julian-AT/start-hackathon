import Link from "next/link";
import Image from "next/image";

const metaPills = [
  "Jun 6–7, 2026",
  "HOIV Vienna",
  "Free",
  "Teams of 2–4",
];

export function Hero() {
  return (
    <section className="pb-12 pt-28 lg:pt-[6.625rem] lg:pb-14">
      <div className="container mx-auto px-4 max-w-[42rem] text-center">
        <div className="max-w-60 mx-auto">
          <Image
            src="/images/cube.svg"
            alt=""
            width={240}
            height={240}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>
        <h1 className="h1 mt-5 lg:mt-6 mb-5 lg:mb-6">
          START Hack Vienna &rsquo;26
        </h1>
        <p className="b1 text-dark-2 max-w-[36ch] mx-auto mb-8">
          24 hours. 4 real cases. 100 builders. One weekend that hits.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2 mb-10 lg:mb-12">
          {metaPills.map((pill) => (
            <li
              key={pill}
              className="rounded-pill border border-dark-1/15 bg-light-2 px-3 py-1.5 text-sm text-dark-2"
            >
              {pill}
            </li>
          ))}
        </ul>
        <Link
          href="https://luma.com/sp3ivels"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="rounded-[0.625rem] font-normal text-sm leading-[100%] transition-colors inline-flex items-center justify-center text-light-1 px-6 py-4 bg-dark-1 hover:bg-dark-1/90"
          >
            Request to Join
          </button>
        </Link>
      </div>
    </section>
  );
}
