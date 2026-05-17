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
    bg: "bg-[#bfbdc1]",
    text: "text-[#37323e]",
    rotate: "motion-safe:-rotate-[6deg]",
    icon: "/images/mascot/4.png",
  },
  {
    number: "02",
    title: "Get matched",
    body: "Bring a team of 2–4 or come solo and we’ll match you on-site. Pick your case, meet your partner.",
    bg: "bg-[#6d6a75]",
    text: "text-white",
    rotate: "motion-safe:rotate-[4deg]",
    icon: "/images/mascot/5.png",
  },
  {
    number: "03",
    title: "Build for 24 hours",
    body: "Code, design, ship. Mentors from each case partner stay in the room. Catering, food truck, coffee on the house.",
    bg: "bg-yellow-1",
    text: "text-white",
    rotate: "motion-safe:-rotate-[3deg]",
    icon: "/images/mascot/6.png",
  },
  {
    number: "04",
    title: "Pitch to the jury",
    body: "Code freezes Sunday at 14:00. Each case partner picks their Track Winner. The four winners then pitch to an external jury of VCs and founders.",
    bg: "bg-yellow-2",
    text: "text-[#37323e]",
    rotate: "motion-safe:rotate-[5deg]",
    icon: "/images/mascot/7.png",
  },
  {
    number: "05",
    title: "Win",
    body: "Track Winners, an Overall Winner trophy, and a crowd-voted Community Award. Plus a public MIT-licensed GitHub project for everyone.",
    bg: "bg-announcement",
    text: "text-[#37323e]",
    rotate: "motion-safe:-rotate-[4deg]",
    icon: "/images/mascot/8.png",
  },
];

export function Timeline() {
  return (
    <section id="flow" className="py-20 lg:py-28">
      <div className="container mx-auto flex max-w-2xl flex-col items-center gap-16 px-4">
        <h2 className="h2 max-w-[30rem] text-center">How the weekend runs</h2>
        <ol className="flex flex-col items-center gap-20">
          {steps.map((step) => (
            <li
              key={step.title}
              className={`sticky top-24 flex min-h-80 w-[min(20rem,calc(100vw-2.5rem))] flex-col justify-end p-8 md:min-h-96 md:w-80 lg:top-32 ${step.bg} ${step.text} ${step.rotate}`}
            >
              <div className="mx-auto flex max-w-[65%] grow items-center justify-center">
                <Image src={step.icon} alt="" width={140} height={140} className="h-auto w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <span className="b3 opacity-60">Step {step.number}</span>
                <h3 className="h3">{step.title}</h3>
                <p className="b2 opacity-80">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
