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
    title: "Mentors in the room with you",
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
    <section id="about" className="py-20 lg:py-28">
      <div className="relative w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 hidden h-[100vh] w-[clamp(25vw,20vw,300vw)] lg:block"
        >
          <div className="sticky top-24">
            <Image
              src="/images/test.png"
              alt=""
              width={948}
              height={2289}
              className="h-auto w-full opacity-30"
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

        <div className="container mx-auto mb-20 max-w-2xl px-4 text-center">
          <h2 className="h2">What you get for showing up</h2>
        </div>

        <div className="container mx-auto flex max-w-2xl flex-col items-center gap-20 px-4 lg:gap-[7.5rem]">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex max-w-[32rem] flex-col items-center justify-center gap-4 text-center"
            >
              <div className="flex h-64 w-64 items-center justify-center">
                <Image
                  src={f.icon}
                  alt=""
                  width={256}
                  height={256}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
              <h3 className="h3 text-balance">{f.title}</h3>
              <p className="b2 text-muted-foreground max-w-[34ch] text-balance">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
