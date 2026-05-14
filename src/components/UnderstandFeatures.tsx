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

export function UnderstandFeatures() {
  return (
    <section id="about" className="pt-24 pb-32 lg:pt-32">
      {/* Heading */}
      <div className="container mx-auto px-4 max-w-[36.875rem] text-center mb-20">
        <h2 className="h2">What you get for showing up</h2>
      </div>

      {/* Sticky-side container: decorations stay pinned at viewport edges
          while the centered feature list scrolls past them. */}
      <div className="relative w-full">
        {/* Left side decoration — anchored to viewport edge */}
        <div
          aria-hidden
          className="hidden lg:block absolute left-0 top-0 h-full pointer-events-none w-[clamp(180px,20vw,316px)]"
        >
          <div className="sticky top-24">
            <Image
              src="/images/left-side.png"
              alt=""
              width={316}
              height={763}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* Right side decoration */}
        <div
          aria-hidden
          className="hidden lg:block absolute right-0 top-0 h-full pointer-events-none w-[clamp(180px,20vw,316px)]"
        >
          <div className="sticky top-24">
            <Image
              src="/images/right-side.png"
              alt=""
              width={316}
              height={763}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* Center column with 3 features (scrolls past the sticky sides) */}
        <div className="container mx-auto px-4 max-w-[16rem] flex flex-col items-center gap-20 lg:gap-[7.5rem]">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center justify-center text-center gap-4 max-w-[16rem]"
            >
              <div
                className="flex items-center justify-center"
                style={{ height: 160, width: 160 }}
              >
                <Image
                  src={f.icon}
                  alt=""
                  width={160}
                  height={160}
                  className="w-full h-auto"
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
