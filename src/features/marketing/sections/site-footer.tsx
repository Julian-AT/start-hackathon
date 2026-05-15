import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-light-1 relative pt-24 pb-8">
      <div className="pointer-events-none absolute right-0 bottom-20 left-0 flex items-end justify-center lg:bottom-0 lg:justify-between">
        <Image
          src="/images/footer-left-visual.png"
          alt=""
          width={430}
          height={277}
          className="hidden lg:block"
          unoptimized
        />
        <Image
          src="/images/footer-center-visual.png"
          alt=""
          width={307}
          height={171}
          className="select-none"
          unoptimized
        />
        <Image
          src="/images/footer-right-visual.png"
          alt=""
          width={432}
          height={252}
          className="hidden lg:block"
          unoptimized
        />
      </div>
    </footer>
  );
}
