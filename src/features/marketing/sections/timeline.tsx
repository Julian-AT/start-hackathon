import Image from "next/image";

type Step = {
  number: string;
  title: string;
  body: string;
  bg: string;
  text: string;
  rotate: string;
  icon: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Apply",
    body: "Request to Join on Luma. Approval-based, rolling. Apply early, hear back fast.",
    bg: "bg-blue-3",
    text: "text-blue-1",
    rotate: "rotate-[-10.355deg]",
    icon: "/images/mascot/4.png",
  },
  {
    number: "02",
    title: "Get matched",
    body: "Bring a team of 2–4 or come solo and we’ll match you on-site. Pick your case, meet your partner.",
    bg: "bg-yellow-2",
    text: "text-yellow-1",
    rotate: "rotate-[2.391deg]",
    icon: "/images/mascot/5.png",
  },
  {
    number: "03",
    title: "Build for 24 hours",
    body: "Code, design, ship. Mentors from each case partner stay in the room. Catering, food truck, coffee on the house.",
    bg: "bg-yellow-3",
    text: "text-yellow-1",
    rotate: "rotate-[13.222deg]",
    icon: "/images/mascot/6.png",
  },
  {
    number: "04",
    title: "Pitch to the jury",
    body: "Code freezes Sunday at 14:00. Each case partner picks their Track Winner. The four winners then pitch to an external jury of VCs and founders.",
    bg: "bg-pink-2",
    text: "text-pink-1",
    rotate: "rotate-[-7.758deg]",
    icon: "/images/mascot/7.png",
  },
  {
    number: "05",
    title: "Win",
    body: "Track Winners, an Overall Winner trophy, and a crowd-voted Community Award. Plus a public MIT-licensed GitHub project for everyone.",
    bg: "bg-green-3",
    text: "text-green-1",
    rotate: "rotate-[9.399deg]",
    icon: "/images/mascot/8.png",
  },
];

export function Timeline() {
  return (
    <section id="flow" className="pt-28 pb-32">
      <div className="container mx-auto flex max-w-[36.9rem] flex-col items-center gap-16 px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="h2 max-w-[30rem]">How the weekend runs</h2>
        </div>
        <div className="flex flex-col items-center gap-20">
          {steps.map((step) => (
            <div
              key={step.title}
              className={
                "sticky top-28 flex min-h-[22.1875rem] w-[18.4375rem] flex-col justify-end px-8 pt-8 pb-8 md:min-h-[26.125rem] md:w-[21.5625rem] lg:top-36 " +
                step.bg +
                " " +
                step.text +
                " " +
                step.rotate
              }
            >
              <div className="mx-auto flex max-w-[65%] grow items-center justify-center">
                <Image
                  src={step.icon}
                  alt=""
                  width={140}
                  height={140}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="b3 opacity-60">Step {step.number}</span>
                <h3 className="h3">{step.title}</h3>
                <p className="b2 opacity-80">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
