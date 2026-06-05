# Content Review Notes

These items came from comparing the current START Hack site with the BuilderBase public event and track payloads.

## Open Content Conflicts

- Participant count: the current site says "100 builders"; BuilderBase exposes `max_participants: 180`. Public copy should stay generic until final capacity is confirmed.
- Challenge count: the current site says "4 real cases"; BuilderBase lists Team Formation plus five challenge tracks. Public copy now references partner challenges and five tracks where track-specific.
- Prize pool: the current site says "10,000+ EUR"; BuilderBase says "20k EUR+ in cash, projects and API value." Public top-line copy should avoid a single exact prize total until confirmed.
- HOIV Robo Dog: BuilderBase lists the track, but it has no published page-builder data. It should appear as "details coming soon" and should not get a detail page yet.
- Draft placeholders: BuilderBase includes stale or incomplete fields such as "Apply by Sep 28", empty first-place stats, and incomplete mentor details. These are intentionally omitted or marked for confirmation.
- Applications: the public site should treat applications as closed. Discord is the only public CTA until the team explicitly reopens applications.

## Source Research

- BuilderBase event shell: https://app.builderbase.com/v2/event/start-hack-vienna-2026
- Public super-event API: https://api.builderbase.com/super-events/public/start-hack-vienna-2026
- Public tracks API: https://api.builderbase.com/super-events/public/start-hack-vienna-2026/tracks
- Public track API pattern: https://api.builderbase.com/events/public/{track-slug}
- Current live site: https://hack.start-vienna.com/
