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
    <div className="flex shrink-0 items-center gap-16" aria-hidden={ariaHidden}>
      {partners.map((p) => (
        <div key={p.name} className="flex shrink-0 items-baseline gap-3 grayscale">
          <span
            className="text-dark-1 text-2xl leading-none font-semibold lg:text-[1.625rem]"
            style={{ fontFamily: "var(--font-iowan), Georgia, serif" }}
          >
            {p.name}
          </span>
          <span className="b3 text-dark-3 leading-none tracking-wider uppercase">{p.role}</span>
        </div>
      ))}
    </div>
  );
}

export function PartnerMarquee() {
  return (
    <div className="pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="container mx-auto mb-10 px-4 text-center lg:mb-12">
        <p className="b3 text-dark-3 tracking-wider uppercase">Backed by builders, for builders</p>
      </div>
      <div className="marquee-mask relative w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-16" aria-label="Partner carousel">
          <PartnerTrack ariaHidden={false} />
          <PartnerTrack ariaHidden={true} />
          <PartnerTrack ariaHidden={true} />
        </div>
      </div>
    </div>
  );
}
