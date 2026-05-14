import Link from "next/link";

export function AnnouncementBanner() {
  return (
    <Link
      href="https://www.opennote.com/blog/reducto"
      className="group block w-full bg-[var(--color-announcement-bg)] text-[var(--color-announcement-text)] px-4 py-2 hover:brightness-[0.97] transition-[filter]"
    >
      <p className="text-center text-sm md:text-base font-medium">
        <span className="font-semibold">Opennote has been acquired by Reducto</span>
        <span className="hidden sm:inline"> to build the future of document intelligence. </span>
        <span className="sm:hidden">. </span>
        <span className="underline-offset-2 group-hover:underline">Learn More →</span>
      </p>
    </Link>
  );
}
