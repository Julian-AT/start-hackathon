import Image from "next/image";
import Link from "next/link";

const metaPills = ["Jun 6–7, 2026", "HOIV Vienna", "Free", "Teams of 2–4"];

export function Hero() {
  return (
    <section className="pt-28 pb-12 lg:pt-[6.625rem] lg:pb-14">
      <div className="container mx-auto max-w-[42rem] px-4 text-center">
        <div className="mx-auto max-w-60">
          <Image
            src="/images/cube.svg"
            alt=""
            width={240}
            height={240}
            className="h-auto w-full"
            priority
            unoptimized
          />
        </div>
        <h1 className="h1 mt-5 mb-5 lg:mt-6 lg:mb-6">START Hack Vienna &rsquo;26</h1>
        <p className="b1 text-dark-2 mx-auto mb-8 max-w-[36ch]">
          24 hours. 4 real cases. 100 builders. One weekend that hits.
        </p>
        <ul className="mb-10 flex flex-wrap items-center justify-center gap-2 lg:mb-12">
          {metaPills.map((pill) => (
            <li
              key={pill}
              className="rounded-pill border-dark-1/15 bg-light-2 text-dark-2 border px-3 py-1.5 text-sm"
            >
              {pill}
            </li>
          ))}
        </ul>
        <Link href="https://luma.com/sp3ivels" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="text-light-1 bg-dark-1 hover:bg-dark-1/90 inline-flex items-center justify-center rounded-[0.625rem] px-6 py-4 text-sm leading-[100%] font-normal transition-colors"
          >
            Request to Join
          </button>
        </Link>
      </div>
    </section>
  );
}
