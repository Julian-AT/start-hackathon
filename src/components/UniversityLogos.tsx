type Partner = {
  name: string;
  role: string;
};

const partners: Partner[] = [
  { name: "fonio.ai", role: "Case partner" },
  { name: "techbold", role: "Case partner" },
  { name: "Lovable", role: "Tool partner" },
  { name: "HOIV", role: "Venue partner" },
];

function PartnerTrack({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <div className="flex gap-16 shrink-0 items-center" aria-hidden={ariaHidden}>
      {partners.map((p) => (
        <div
          key={p.name}
          className="flex items-baseline gap-3 shrink-0 grayscale"
        >
          <span
            className="text-2xl lg:text-[1.625rem] font-semibold text-dark-1 leading-none"
            style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
          >
            {p.name}
          </span>
          <span className="b3 uppercase tracking-wider text-dark-3 leading-none">
            {p.role}
          </span>
        </div>
      ))}
    </div>
  );
}

export function UniversityLogos() {
  return (
    <div className="pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="container mx-auto px-4 text-center mb-10 lg:mb-12">
        <p className="b3 uppercase tracking-wider text-dark-3">
          Backed by builders, for builders
        </p>
      </div>
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex gap-16 animate-marquee w-max" aria-label="Partner carousel">
          <PartnerTrack ariaHidden={false} />
          <PartnerTrack ariaHidden={true} />
          <PartnerTrack ariaHidden={true} />
        </div>
      </div>
    </div>
  );
}
