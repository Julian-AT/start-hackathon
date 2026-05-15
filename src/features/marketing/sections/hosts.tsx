import Image from "next/image";
import Link from "next/link";

type Host = {
  name: string;
  role: string;
  handle?: string;
  href?: string;
  initial: string;
  bg: string;
  text: string;
  image?: string;
};

const hosts: Host[] = [
  {
    name: "Dániel Sydó",
    role: "Co-organizer",
    initial: "D",
    bg: "bg-blue-3",
    text: "text-blue-1",
    image: "/organizers/sydo_daniel.jpg",
  },
  {
    name: "Abdul Banbhan",
    role: "Co-organizer",
    handle: "@abbanbhan",
    initial: "A",
    bg: "bg-yellow-3",
    text: "text-yellow-1",
    image: "/organizers/abdul_basit_banbahn.png",
  },
  {
    name: "Julian Schmidt",
    role: "Co-organizer",
    initial: "J",
    bg: "bg-pink-3",
    text: "text-pink-1",
    image: "/organizers/julian_schmidt.png",
  },
  {
    name: "Kyrillus Mehanni",
    role: "Co-organizer",
    handle: "@kyrill.us",
    initial: "K",
    bg: "bg-green-3",
    text: "text-green-1",
    image: "/organizers/kyrillus_mehanni.png",
  },
  {
    name: "HOIV",
    role: "Venue partner",
    handle: "@hoiv.me",
    initial: "H",
    bg: "bg-orange-3",
    text: "text-orange-1",
    image: "/organizers/hoiv_logo.jpeg",
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
              {h.image ? (
                <div
                  className={
                    "flex h-20 w-20 shrink-0 items-center justify-center rounded-full " + h.bg
                  }
                  aria-hidden
                >
                  <Image
                    src={h.image}
                    alt={h.name}
                    className="h-full w-full rounded-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
              ) : (
                <div
                  className={
                    "flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-3xl font-semibold " +
                    h.bg +
                    " " +
                    h.text
                  }
                  aria-hidden
                >
                  {h.initial}
                </div>
              )}

              <div className="flex flex-col gap-1">
                <h3 className="text-dark-1 text-lg leading-tight">{h.name}</h3>
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
