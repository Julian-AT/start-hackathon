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
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="h2 mb-16 text-center lg:mb-20">What you get for showing up</h2>
        <div className="flex flex-col items-center gap-20 lg:gap-24">
          {features.map((f) => (
            <div key={f.title} className="flex max-w-md flex-col items-center gap-4 text-center">
              <div className="flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
                <Image src={f.icon} alt="" width={256} height={256} className="h-auto w-full" />
              </div>
              <h3 className="h3">{f.title}</h3>
              <p className="b2 text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
