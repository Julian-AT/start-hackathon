import { FiveStars } from "@/features/marketing/icons";

type Props = {
  quote: string;
  author: string;
  role: string;
  py?: string;
};

export function Testimonial({ quote, author, role, py = "pt-20 pb-20 lg:pt-24 lg:pb-24" }: Props) {
  return (
    <section className={py}>
      <div className="container mx-auto flex max-w-[40rem] flex-col items-center gap-6 px-4 text-center">
        <FiveStars className="text-dark-1" />
        <h3 className="text-dark-1 max-w-[32ch] text-2xl leading-[1.3] italic lg:text-[1.75rem]">
          {quote}
        </h3>
        <p className="b2 text-dark-3">
          {author}, {role}
        </p>
      </div>
    </section>
  );
}
