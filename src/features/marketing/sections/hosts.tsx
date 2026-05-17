import Image from "next/image";
import Link from "next/link";

type Host = {
  name: string;
  role: string;
  handle?: string;
  href?: string;
  bg: string;
  image: string;
};

const hosts: Host[] = [
  {
    name: "Dániel Sydó",
    role: "Co-organizer",
    bg: "bg-blue-3",
    image: "/organizers/sydo_daniel.jpg",
  },
  {
    name: "Abdul Banbhan",
    role: "Co-organizer",
    handle: "@abbanbhan",
    bg: "bg-yellow-3",
    image: "/organizers/abdul_basit_banbahn.png",
  },
  {
    name: "Julian Schmidt",
    role: "Co-organizer",
    bg: "bg-pink-3",
    image: "/organizers/julian_schmidt.png",
  },
  {
    name: "Kyrillus Mehanni",
    role: "Co-organizer",
    handle: "@kyrill.us",
    bg: "bg-green-3",
    image: "/organizers/kyrillus_mehanni.png",
  },
  {
    name: "HOIV",
    role: "Venue partner",
    handle: "@hoiv.me",
    bg: "bg-orange-3",
    image: "/organizers/hoiv_logo.jpeg",
  },
];

export function Hosts() {
  return (
    <section id="hosts" className="py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="h2">The crew running this</h2>
          <p className="b2 text-muted-foreground mx-auto mt-4 max-w-[34rem]">
            START Vienna&rsquo;s organizers and HOIV, in the room with you all weekend.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {hosts.map((h) => (
            <li
              key={h.name}
              className="border-border bg-card flex min-h-44 flex-col items-center gap-4 rounded-2xl border p-6 text-center"
            >
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${h.bg}`}
                aria-hidden
              >
                <Image
                  src={h.image}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                  width={80}
                  height={80}
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="h4">{h.name}</h3>
                <p className="b3 text-muted-foreground">{h.role}</p>
              </div>
              {h.handle ? (
                h.href ? (
                  <Link
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b3 text-dark-2 hover:text-foreground mt-auto underline-offset-4 transition-colors hover:underline"
                  >
                    {h.handle}
                  </Link>
                ) : (
                  <span className="b3 text-muted-foreground mt-auto">{h.handle}</span>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
