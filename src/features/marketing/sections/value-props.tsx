import Image from "next/image";

type Feature = {
  title: string;
  body: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Real challenges from real companies",
    body: "Four case partners bring problems they actually want solved. Pick your case, get matched with a team, build for 24 hours.",
    icon: "/images/mascot/1.png",
  },
  {
    title: "Mentors always on-site",
    body: "Engineers and founders from each case partner are on-site to help you make decisions and unblock your build.",
    icon: "/images/mascot/2.png",
  },
  {
    title: "10,000+ EUR prize pool",
    body: "Track Winners, Overall Winner, and a crowd-voted Community Award. Plus an MIT-licensed GitHub project to take with you.",
    icon: "/images/mascot/3.png",
  },
];

export function ValueProps() {
  return (
    <section id="about" className="relative py-14 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 hidden h-full w-[clamp(140px,16vw,260px)] lg:block"
      >
        <div className="sticky top-32">
          <Image
            src="/images/left-side.png"
            alt=""
            width={632}
            height={1526}
            className="h-auto w-full opacity-70"
          />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-[clamp(140px,16vw,260px)] lg:block"
      >
        <div className="sticky top-32">
          <Image
            src="/images/right-side.png"
            alt=""
            width={676}
            height={1564}
            className="h-auto w-full opacity-70"
          />
        </div>
      </div>

      <div className="relative container mx-auto w-full max-w-2xl px-5">
        <h2 className="h2 mx-auto mb-12 max-w-[13ch] text-center sm:max-w-none lg:mb-20">
          What you get for showing up
        </h2>
        <div className="flex flex-col items-center gap-14 lg:gap-24">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex w-full max-w-md flex-col items-center gap-4 text-center"
            >
              <div className="flex h-44 w-44 items-center justify-center sm:h-64 sm:w-64">
                <Image src={f.icon} alt="" width={256} height={256} className="h-auto w-full" />
              </div>
              <h3 className="h3 max-w-[18ch]">{f.title}</h3>
              <p className="b2 text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
