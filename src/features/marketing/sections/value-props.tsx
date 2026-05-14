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
    icon: "/images/folder.svg",
  },
  {
    title: "Mentors in the room with you",
    body: "Engineers and founders from each case partner are on-site to help you make decisions and unblock your build.",
    icon: "/images/collaborate.svg",
  },
  {
    title: "10,000+ EUR prize pool",
    body: "Track Winners, Overall Winner, and a crowd-voted Community Award. Plus an MIT-licensed GitHub project to take with you.",
    icon: "/images/quiz.svg",
  },
];

export function ValueProps() {
  return (
    <section id="about" className="pt-24 pb-32 lg:pt-32">
      <div className="relative w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 hidden h-full w-[clamp(180px,20vw,316px)] lg:block"
        >
          <div className="sticky top-24">
            <Image
              src="/images/left-side.png"
              alt=""
              width={316}
              height={763}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 hidden h-full w-[clamp(180px,20vw,316px)] lg:block"
        >
          <div className="sticky top-24">
            <Image
              src="/images/right-side.png"
              alt=""
              width={316}
              height={763}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </div>

        <div className="container mx-auto mb-20 max-w-[36.875rem] px-4 text-center">
          <h2 className="h2">What you get for showing up</h2>
        </div>

        <div className="container mx-auto flex max-w-[16rem] flex-col items-center gap-20 px-4 lg:gap-[7.5rem]">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex max-w-[16rem] flex-col items-center justify-center gap-4 text-center"
            >
              <div className="flex items-center justify-center" style={{ height: 160, width: 160 }}>
                <Image
                  src={f.icon}
                  alt=""
                  width={160}
                  height={160}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
              <h3 className="h4">{f.title}</h3>
              <p className="b2 text-dark-3 max-w-[28ch]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
