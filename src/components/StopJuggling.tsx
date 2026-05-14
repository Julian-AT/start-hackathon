import Image from "next/image";

type Card = {
  step: string;
  title: string;
  body: string;
  bg: string;
  text: string;
  rotate: string;
  icon: string;
};

const cards: Card[] = [
  {
    step: "01",
    title: "Apply",
    body: "Request to Join on Luma. Approval-based, rolling. Apply early, hear back fast.",
    bg: "bg-blue-3",
    text: "text-blue-1",
    rotate: "rotate-[-10.355deg]",
    icon: "/images/quiz.svg",
  },
  {
    step: "02",
    title: "Get matched",
    body: "Bring a team of 2–4 or come solo and we’ll match you on-site. Pick your case, meet your partner.",
    bg: "bg-yellow-2",
    text: "text-yellow-1",
    rotate: "rotate-[2.391deg]",
    icon: "/images/collaborate.svg",
  },
  {
    step: "03",
    title: "Build for 24 hours",
    body: "Code, design, ship. Mentors from each case partner stay in the room. Catering, food truck, coffee on the house.",
    bg: "bg-yellow-3",
    text: "text-yellow-1",
    rotate: "rotate-[13.222deg]",
    icon: "/images/cube.svg",
  },
  {
    step: "04",
    title: "Pitch to the jury",
    body: "Code freezes Sunday at 14:00. Each case partner picks their Track Winner. The four winners then pitch to an external jury of VCs and founders.",
    bg: "bg-pink-2",
    text: "text-pink-1",
    rotate: "rotate-[-7.758deg]",
    icon: "/images/folder.svg",
  },
  {
    step: "05",
    title: "Win",
    body: "Track Winners, an Overall Winner trophy, and a crowd-voted Community Award. Plus a public MIT-licensed GitHub project for everyone.",
    bg: "bg-green-3",
    text: "text-green-1",
    rotate: "rotate-[9.399deg]",
    icon: "/images/snake.svg",
  },
];

export function StopJuggling() {
  return (
    <section id="flow" className="pt-28 pb-32">
      <div className="container mx-auto px-4 max-w-[36.9rem] flex flex-col items-center gap-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="h2 max-w-[30rem]">How the weekend runs</h2>
        </div>
        <div className="flex flex-col items-center gap-20">
          {cards.map((card) => (
            <div
              key={card.title}
              className={
                "px-8 pb-8 pt-8 flex flex-col justify-end sticky top-28 lg:top-36 min-h-[22.1875rem] md:min-h-[26.125rem] w-[18.4375rem] md:w-[21.5625rem] " +
                card.bg +
                " " +
                card.text +
                " " +
                card.rotate
              }
            >
              <div className="grow flex justify-center items-center max-w-[65%] mx-auto">
                <Image
                  src={card.icon}
                  alt=""
                  width={140}
                  height={140}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="b3 opacity-60">Step {card.step}</span>
                <h3 className="h3">{card.title}</h3>
                <p className="b2 opacity-80">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
