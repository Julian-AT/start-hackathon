import { FiveStars } from "./icons";

type Props = {
  quote: string;
  author: string;
  role: string;
  py?: string;
};

export function TestimonialQuote({
  quote,
  author,
  role,
  py = "pt-20 pb-20 lg:pt-24 lg:pb-24",
}: Props) {
  return (
    <section className={py}>
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6 max-w-[40rem]">
        <FiveStars className="text-dark-1" />
        <h3
          className="text-2xl lg:text-[1.75rem] leading-[1.3] italic text-dark-1 max-w-[32ch]"
          style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
        >
          {quote}
        </h3>
        <p className="b2 text-dark-3">
          {author}, {role}
        </p>
      </div>
    </section>
  );
}
