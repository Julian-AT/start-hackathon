import Image from "next/image";

type Partner = {
  name: string;
  src: string;
};

const partners: Partner[] = [
  { name: "fonio.ai", src: "/partners/fonio.png" },
  { name: "techbold", src: "/partners/techbold.png" },
  { name: "Lovable", src: "/partners/lovable.svg" },
  { name: "HOIV", src: "/partners/hoiv.webp" },
];

function PartnerTrack({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-16" aria-hidden={ariaHidden}>
      {partners.map((p) => (
        <div key={p.name} className="flex h-12 shrink-0 items-center">
          <Image
            src={p.src}
            alt={ariaHidden ? "" : p.name}
            width={200}
            height={48}
            className="h-12 w-auto object-contain"
            unoptimized
          />
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
