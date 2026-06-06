import Image from "next/image";
import Link from "next/link";

import { DISCORD_URL, sharedMentors, type TrackDetail, tracks } from "@/features/marketing/content";

type TrackDetailPageProps = {
  track: TrackDetail;
};

export function TrackDetailPage({ track }: TrackDetailPageProps) {
  const trackCard = tracks.find((item) => item.slug === track.slug);

  return (
    <main className="flex-1 overflow-x-clip">
      <section className="py-10 lg:py-16">
        <div className="container mx-auto max-w-4xl px-5">
          <Link
            href="/#tracks"
            className="b3 text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex rounded-md outline-none focus-visible:ring-2"
          >
            &lt;- Back to tracks
          </Link>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center">
            <div
              className={`flex h-32 w-44 items-center justify-center rounded-2xl px-4 ${track.panelClassName} bg-background py-0`}
            >
              <Image
                src={track.logo}
                alt={`${track.partner} logo`}
                width={160}
                height={80}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>

            <p className="eyebrow text-muted-foreground mt-6">{track.eyebrow}</p>
            <h1 className="h1 mt-4">{track.headline}</h1>
            <p className="b1 text-muted-foreground mt-5 max-w-2xl">{track.description}</p>

            <div className="text-muted-foreground b3 mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>{track.partner}</span>
              <span aria-hidden>&bull;</span>
              <span>{track.category}</span>
              {track.facts.map((fact) => (
                <span key={fact} className="contents">
                  <span aria-hidden>&bull;</span>
                  <span>{fact}</span>
                </span>
              ))}
            </div>

            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring mt-8 inline-flex h-10 items-center gap-2 rounded-md px-5 text-sm font-medium outline-none focus-visible:ring-2"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-14">
        <div className="container mx-auto max-w-3xl px-5">
          <div className="space-y-12">
            <section>
              <p className="eyebrow text-muted-foreground">Challenge</p>
              <h2 className="h2 mt-4">{track.challenge.title}</h2>
            </section>
            {track.challenge.paragraphs.map((paragraph) => (
              <p key={paragraph} className="b2 text-muted-foreground">
                {paragraph}
              </p>
            ))}

            {trackCard?.build && (
              <section>
                <p className="eyebrow text-muted-foreground">What to build</p>
                <p className="b1 text-foreground mt-4">{trackCard.build}</p>
              </section>
            )}

            <TrackList
              eyebrow="Requirements"
              title={track.challenge.requirementsTitle}
              items={track.challenge.requirements}
            />

            {track.judging && (
              <TrackList
                eyebrow="Judging"
                title="How this track is scored"
                items={track.judging.map(
                  (criterion) =>
                    `${criterion.name} (${criterion.weight}): ${criterion.description}`,
                )}
              />
            )}

            {/* First prize item is the headline prize; the rest are support/perks shown under Resources. */}
            {track.prizes && (
              <TrackList
                eyebrow="Prize"
                title="Prize for the winning team"
                items={track.prizes.items.slice(0, 1)}
              />
            )}

            {(track.resources || track.prizes) && (
              <TrackList
                eyebrow="Resources"
                title="Resources and support"
                items={[
                  ...(track.prizes?.items.slice(1) ?? []),
                  ...(track.resources?.map(
                    (resource) => `${resource.name}: ${resource.description}`,
                  ) ?? []),
                ]}
              />
            )}

            {track.people && (
              <TrackList
                eyebrow="Mentors / Jury"
                title="People in the room"
                items={track.people.map((person) => `${person.name}: ${person.role}`)}
              />
            )}

            {track.people && (
              <TrackList
                eyebrow="Mentors / Jury"
                title="Mentors for all cases"
                items={sharedMentors.map((person) => `${person.name}: ${person.role}`)}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function TrackList({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <p className="eyebrow text-muted-foreground">{eyebrow}</p>
      <h2 className="h3 mt-3">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="b2 text-muted-foreground flex gap-3">
            <span className="bg-foreground mt-2 size-1.5 shrink-0 rounded-full" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
