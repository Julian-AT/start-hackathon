import {
  ChampionIcon,
  Dollar01Icon,
  LanguageSkillIcon,
  Ticket01Icon,
  UserGroupIcon,
  UserQuestion02Icon,
} from "hugeicons-react";

import { cn } from "@/lib/utils";

export const GridFeatures = () => {
  const features = [
    {
      title: "Who can apply?",
      description: "Builders, students, engineers, designers, PMs, founders, operators.",
      icon: <Ticket01Icon />,
    },
    {
      title: "Do I need a team?",
      description: "Teams of 2–4. Solo? We'll match you on-site. No solo builds.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Is it free?",
      description: "Yes! Free food, drinks, and tool credits. Just bring your laptop.",
      icon: <Dollar01Icon />,
    },
    {
      title: "How does it work?",
      description: "Starts Saturday, ends Sunday. Four Track Winners, one Overall Winner.",
      icon: <UserQuestion02Icon />,
    },
    {
      title: "Prize pool?",
      description: "10,000+ EUR total, trophies, Community Award, and MIT project.",
      icon: <ChampionIcon />,
    },
    {
      title: "Event language?",
      description: "English. Vienna is international (so are you).",
      icon: <LanguageSkillIcon />,
    },
  ];
  return (
    <div className="mt-8">
      <h2 className="mb-12 text-center text-5xl lg:mb-6">The basics</h2>
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col border-gray-300 py-10 lg:border-r",
        (index === 0 || index === 3) && "border-gray-300 lg:border-l",
        index < 3 && "border-gray-300 lg:border-b",
      )}
    >
      <div className="relative z-10 mb-4 px-10">{icon}</div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <span className="inline-block transition duration-200">{title}</span>
      </div>
      <p className="text-muted-foreground relative z-10 max-w-xs px-10 text-sm">{description}</p>
    </div>
  );
};
