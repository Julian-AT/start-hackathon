import Link from "next/link";

type Host = {
  name: string;
  role: string;
  handle?: string;
  href?: string;
  initial: string;
  bg: string;
  text: string;
};

const hosts: Host[] = [
  {
    name: "Dániel Sydó",
    role: "Co-organizer",
    initial: "D",
    bg: "bg-blue-3",
    text: "text-blue-1",
  },
  {
    name: "Abdul Basit Banbhan",
    role: "Co-organizer",
    handle: "@abbanbhan",
    href: "https://x.com/abbanbhan",
    initial: "A",
    bg: "bg-yellow-3",
    text: "text-yellow-1",
  },
  {
    name: "Julian Schmidt",
    role: "Co-organizer",
    initial: "J",
    bg: "bg-pink-3",
    text: "text-pink-1",
  },
  {
    name: "Kyrillus Mehanni",
    role: "Co-organizer",
    handle: "@kyrill.us",
    href: "https://instagram.com/kyrill.us",
    initial: "K",
    bg: "bg-green-3",
    text: "text-green-1",
  },
  {
    name: "HOIV",
    role: "Venue partner",
    handle: "@hoiv.me",
    href: "https://instagram.com/hoiv.me",
    initial: "H",
    bg: "bg-orange-3",
    text: "text-orange-1",
  },
];

export function Hosts() {
  return (
    <section id="hosts" className="pt-16 pb-24 lg:pt-20 lg:pb-28">
      <div className="container mx-auto max-w-[68rem] px-4">
        <div className="mb-14 text-center lg:mb-16">
          <h2 className="h2">The crew running this</h2>
          <p className="b2 text-dark-3 mx-auto mt-4 max-w-[34rem]">
            START Vienna&rsquo;s organizers and HOIV, in the room with you all weekend.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {hosts.map((h) => (
            <li
              key={h.name}
              className="rounded-card border-light-3 bg-light-1 flex flex-col items-center gap-4 border p-6 text-center"
            >
              <div
                className={
                  "flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-3xl font-semibold " +
                  h.bg +
                  " " +
                  h.text
                }
                style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
                aria-hidden
              >
                {h.initial}
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-dark-1 text-lg leading-tight"
                  style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
                >
                  {h.name}
                </h3>
                <p className="b3 text-dark-3">{h.role}</p>
              </div>
              {h.handle && h.href ? (
                <Link
                  href={h.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b3 text-dark-2 hover:text-dark-1 underline-offset-4 transition-colors hover:underline"
                >
                  {h.handle}
                </Link>
              ) : (
                <span className="b3 text-dark-3/60">&nbsp;</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
