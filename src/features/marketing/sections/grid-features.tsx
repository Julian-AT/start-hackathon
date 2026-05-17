import {
  ChampionIcon,
  Dollar01Icon,
  LanguageSkillIcon,
  Ticket01Icon,
  UserGroupIcon,
  UserQuestion02Icon,
} from "hugeicons-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Who can apply?",
    description: "Builders, students, engineers, designers, PMs, founders, operators.",
    icon: <Ticket01Icon strokeWidth={1.5} />,
  },
  {
    title: "Do I need a team?",
    description: "Teams of 2–4. Solo? We'll match you on-site. No solo builds.",
    icon: <UserGroupIcon strokeWidth={1.5} />,
  },
  {
    title: "Is it free?",
    description: "Yes. Free food, drinks, and tool credits. Just bring your laptop.",
    icon: <Dollar01Icon strokeWidth={1.5} />,
  },
  {
    title: "How does it work?",
    description: "Starts Saturday, ends Sunday. Four Track Winners, one Overall Winner.",
    icon: <UserQuestion02Icon strokeWidth={1.5} />,
  },
  {
    title: "Prize pool?",
    description: "10,000+ EUR total, trophies, Community Award, and an MIT project.",
    icon: <ChampionIcon strokeWidth={1.5} />,
  },
  {
    title: "Event language?",
    description: "English. Vienna is international (so are you).",
    icon: <LanguageSkillIcon strokeWidth={1.5} />,
  },
];

export function GridFeatures() {
  return (
    <section id="basics" className="py-14 lg:py-28">
      <div className="container mx-auto max-w-5xl px-5">
        <h2 className="h2 mb-10 text-center lg:mb-16">The basics</h2>
        <div className="bg-border grid gap-px overflow-hidden rounded-2xl md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background flex flex-col gap-3 p-6 md:p-10">
              <div className="text-foreground [&_svg]:size-6">{feature.icon}</div>
              <h3 className="h4 mt-1">{feature.title}</h3>
              <p className="b3 text-muted-foreground max-w-[30ch]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
