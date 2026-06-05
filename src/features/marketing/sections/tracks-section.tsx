import { ArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";

import { type MarketingTrack, tracks } from "@/features/marketing/content";
import { cn } from "@/lib/utils";

const onboardingTrack = tracks.find((track) => track.kind === "onboarding");
const buildTracks = tracks.filter((track) => track.kind === "challenge");

export function TracksSection() {
  return (
    <section id="tracks" className="py-14 lg:py-24">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-muted-foreground">Tracks</p>
          <h2 className="h2 mt-4">Choose the challenge you want to be known for.</h2>
          <p className="b2 text-muted-foreground mt-4">
            Start with team formation, rank your favorite briefs, then build for one partner track
            with mentors in the room.
          </p>
        </div>

        {onboardingTrack && <TrackCard track={onboardingTrack} variant="featured" />}

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-6">
          {buildTracks.map((track, index) => {
            const lastRowPair = buildTracks.length % 3 === 2;
            const isSecondToLast = lastRowPair && index === buildTracks.length - 2;
            const isLast = lastRowPair && index === buildTracks.length - 1;

            return (
              <div
                key={track.slug}
                className={cn(
                  "md:col-span-2",
                  isSecondToLast && "md:col-start-2",
                  isLast && "md:col-start-4",
                )}
              >
                <TrackCard track={track} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrackCard({
  track,
  variant = "default",
}: {
  track: MarketingTrack;
  variant?: "default" | "featured";
}) {
  const isFeatured = variant === "featured";
  const content = (
    <>
      <div
        className={cn(
          "flex items-center justify-center rounded-xl",
          isFeatured ? "aspect-[16/9] lg:aspect-square" : "aspect-[16/9]",
          !isFeatured ? "bg-olive-300/50" : "",
        )}
      >
        <Image
          src={track.logo}
          alt={track.kind === "onboarding" ? "" : `${track.partner} logo`}
          width={240}
          height={120}
          className={cn(
            "h-auto w-auto object-contain",
            isFeatured ? "max-h-28 max-w-32" : "max-h-16 max-w-[9rem]",
          )}
        />
      </div>

      <div className={cn("flex flex-1 flex-col", isFeatured ? "lg:py-2" : "pt-5")}>
        <div className="flex flex-wrap items-center gap-2">
          {isFeatured && (
            <span className="bg-foreground text-background b3 rounded-md px-2.5 py-1 font-medium">
              Start here
            </span>
          )}
          <p className="eyebrow text-muted-foreground">{track.partner}</p>
        </div>

        <h3 className={cn("mt-3", isFeatured ? "h3" : "h4")}>{track.category}</h3>
        <p className={cn("text-muted-foreground mt-3", isFeatured ? "b2" : "b3")}>
          {track.summary}
        </p>

        <div className="mt-auto pt-6">
          {track.href ? (
            <span className="b2 text-foreground inline-flex items-center gap-1 align-middle font-medium">
              <span className="flex items-center">
                {track.kind === "onboarding" ? "See team flow" : "View brief"}
              </span>
              <span className="flex items-center">
                <ArrowRight01Icon className="size-4" />
              </span>
            </span>
          ) : (
            <span className="text-muted-foreground b2 font-medium">
              {track.status ?? "Details coming soon"}
            </span>
          )}
        </div>
      </div>
    </>
  );

  const className = cn(
    "border-border bg-secondary group flex min-h-full flex-col rounded-2xl border p-4 shadow-[0_1px_0_rgb(24_24_28/0.04)] transition-[box-shadow,transform,border-color,background-color]",
    "hover:shadow-sm",
    isFeatured &&
      "mt-10 gap-5 p-5 sm:p-6 lg:grid lg:grid-cols-[13rem_1fr] lg:items-center bg-secondary",
  );

  if (!track.href) {
    return (
      <article className={cn(className, "hover:border-border opacity-70 hover:shadow-none")}>
        {content}
      </article>
    );
  }

  return (
    <Link
      href={track.href}
      className={cn(
        className,
        "focus-visible:ring-ring outline-none focus-visible:ring-2",
        !isFeatured && "",
      )}
    >
      {content}
    </Link>
  );
}
