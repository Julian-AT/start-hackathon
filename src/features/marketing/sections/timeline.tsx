import { Badge } from "@/components/ui/badge";
import { type ScheduleDay, scheduleDays } from "@/features/marketing/content";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="schedule" className="py-14 lg:py-24">
      <div className="container mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-muted-foreground">Timeline</p>
          <h2 className="h2 mt-4">How the weekend runs</h2>
          <p className="b2 text-muted-foreground mt-4">
            Two days, one simple rhythm: form your team, get allocated, build, submit, pitch, and
            close the weekend together.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {scheduleDays.map((day) => (
            <ScheduleTimelineDay key={day.date} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScheduleTimelineDay({ day }: { day: ScheduleDay }) {
  return (
    <section>
      <div className="mb-8 text-center">
        <p className="eyebrow text-muted-foreground">{day.date}</p>
        <h3 className="h3 mt-3">{day.title}</h3>
      </div>

      <ol className="mx-auto max-w-4xl">
        {day.items.map((item, index) => (
          <li
            key={`${day.date}-${item.time}-${item.title}`}
            id={`${day.date}-${index + 1}`}
            className="relative flex scroll-mt-28 justify-end gap-2"
          >
            <div className="sticky top-24 hidden w-40 flex-col items-end gap-2 self-start pb-6 text-right md:flex">
              <Badge className="bg-background text-foreground/90 h-auto rounded-md px-3 py-1.5 font-mono text-sm">
                {item.time}
              </Badge>
              <div className="text-muted-foreground text-sm font-medium">{day.date}</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="sticky top-24 flex size-6 items-center justify-center max-md:top-20">
                <span className="bg-announcement size-4 rounded-full" />
              </div>
              <span
                className={cn(
                  "border-border relative -mt-0.5 w-px flex-1 border",
                  index === day.items.length - 1 && "opacity-100",
                )}
                style={
                  index === day.items.length - 1
                    ? {
                        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                      }
                    : undefined
                }
              />
            </div>

            <article className="flex flex-1 flex-col gap-3 pb-10 pl-4 md:pl-8 lg:pl-10">
              <div className="flex flex-col items-start gap-2 md:hidden">
                <Badge className="bg-foreground text-background h-auto rounded-md px-3 py-1.5 font-mono text-xs">
                  {item.time}
                </Badge>
                <div className="text-muted-foreground text-sm font-medium">{day.date}</div>
              </div>
              <div className="border-border my-auto mt-3 flex h-full flex-col justify-center border-t p-5">
                <h4 className="h4">{item.title}</h4>
                <p className="b2 text-muted-foreground mt-2">{item.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
