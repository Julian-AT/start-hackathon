import Image from "next/image";

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
    <section id="hosts" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="h2">The crew running this</h2>
          <p className="b2 text-muted-foreground mx-auto mt-4 max-w-[34rem]">
            START Vienna&rsquo;s organizers and HOIV, in the room with you all weekend.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {hosts.map((h) => (
            <li
              key={h.name}
              className="border-border bg-secondary flex flex-row items-center gap-4 rounded-2xl border p-4 text-left sm:min-h-44 sm:flex-col sm:gap-4 sm:p-6 sm:pb-12 sm:text-center"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-20 sm:w-20 ${h.bg}`}
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

              <div className="flex flex-col gap-0.5 sm:gap-1">
                <h3 className="h4">{h.name}</h3>
                <p className="b3 text-muted-foreground">{h.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
