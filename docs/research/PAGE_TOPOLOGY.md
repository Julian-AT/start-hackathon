# Opennote.com Page Topology

## Page Metadata
- **URL:** https://www.opennote.com/
- **Total scroll height:** 8819px (desktop 1440)
- **Body bg:** `rgb(255, 253, 248)` (--light-1, warm off-white)
- **Body text:** `rgb(10, 10, 10)`
- **HTML class:** `light` (always — no dark mode toggle visible)
- **Body classes:** `antialiased font-sans suisseintl_*`
- **Framework:** Next.js (`/_next/` paths)
- **Smooth scroll lib:** None detected (no Lenis)

## Fonts (preloaded in `/_next/static/media/`)
- **SuisseIntl** (Light/Regular/Medium/SemiBold/Bold) — body sans serif, default font
- **Heming Variable** (.ttf) — display serif for major headings ("The notebook that thinks with you")
- **IowanOld + IowanOld_Bold** — italic serif accents (testimonial pull quotes)
- **ClashDisplay/ClashGrotesk** — preloaded but rarely used
- **JetBrains Mono Variable** — preloaded but limited use
- **NeueHaasGrotesk Medium** — preloaded but limited use

## Section List (top → bottom, desktop 1440px)

| # | Section | Top | Height | Notes |
|---|---------|-----|--------|-------|
| 0 | AnnouncementBanner | 0 | ~36 | Pink/lavender bar above header — "Opennote has been acquired by Reducto" |
| 0a | Header | 0 (fixed) | 98 | Fixed top, z-50, bg `rgb(255,253,248)` (--light-1). Logo, nav (Pricing/Community/Blog/Careers/Guide), CTA "Get started free" |
| 1 | Hero | 0 | 583 | Plane video doodle + serif heading + "Try for free" black pill button |
| 2 | UniversityLogos | 583 | 280 | Marquee of 11 university logos (UCLA, Harvard, Berkeley, Michigan, NUS, Yale, Waterloo, Caltech, Stanford, CMU, Princeton). Mask gradient on edges. |
| 3 | GalileoTabs | 863 | 1017 | "Everything you need in one place" + 4 tabs (Ask Galileo/Visualize concepts/Connect) → tab content shows browser-chrome video player. Volcano left/right side images. Yellow section bg SVG. |
| 4 | UnderstandFeatures | 1880 | 1557 | "AI that helps you understand, not just answer" + 3 feature blocks (Knows what you're working on / Helps as you go / Explains used at clicks). Each has a doodle + heading + body. |
| 5 | TestimonialQuote1 | 3437 | 344 | 5-star + italic pullquote "I've never learned this well..." — Reni, Engineering student |
| 6 | BuiltForHow | 3781 | 736 | "Built for how you learn" + sub-eyebrow + text column with bullets + cube doodle, plus testimonial card |
| 7 | StopJuggling | 4517 | 2790 | "Stop juggling five different apps" + 5 stacked colored cards (blue=Notes, yellow=AI Chat, pink=Recorder, green=Tutorials, sage=Practice tools) — each card has sticker title and doodle |
| 8 | TestimonialQuote2 | 7307 | 428 | 5-star + "I used to struggle..." — Rushil, Computer science student |
| 9 | CTAYellow | 7735 | 428 | Yellow card "Your ideas deserve better tools" + "Try for free" button + frog/volcano doodles overlay |
| 10 | Footer | 8163 | 656 | 4 column links + social icons + © 2025 Opennote |

## Global Behaviors

### Marquee (logos)
- Logos in `flex gap-16 shrink-0` repeated 4×
- Gradient masks on left/right via `linear-gradient(to right/left, rgb(255, 253, 248), rgba(255, 253, 248, 0.2), rgba(0, 0, 0, 0))`
- CSS marquee animation (likely `animation: marquee Ns linear infinite`)

### Galileo Tabs Section
- **INTERACTION MODEL: click-driven** — buttons toggle which video plays
- 4 video sources (prefetched):
  - `landing_feynman_tab.mp4` (default, "Ask Galileo")
  - `landing_generation_tab.mp4`
  - `landing_references_tab.mp4`
  - `landing_practice_tab.mp4`
- Tab labels visible: "Ask Galileo", "Visualize concepts", "Connect"
- Side decorations: `left-side.png` (volcano), `right-side.png` (volcano) — only `lg:block`
- Yellow tab section background SVG: `yellow-section-bg.svg`

### Hero plane video
- `<video autoplay loop muted>` source `videos/plane.mp4`
- Doodle of person on surfboard with arrow

### Hand-drawn aesthetic
- Subtle dotted/gridded paper background (look at full screenshot — there are tiny dots/marks across the page background)
- Hand-drawn doodle style for ALL illustrations (cube, paper plane, snake, formula girl, footer creatures)
- "Sticker" labels on Stop Juggling cards (rotated, hand-drawn looking)

## Asset Inventory (downloaded to public/)

### University logos (`public/images/logos/`)
ucla.svg, harvard.svg, berkeley.svg, michigan.svg, nus.svg, yale.svg, waterloo.svg, caltech.svg, stanford.svg, cmu.svg, princeton.svg

### Hero/section illustrations (`public/images/`)
- plane.mp4 (video, hero)
- formula-girl.svg (Built For How section)
- cube.svg (Notes card or Built For How)
- collaborate.svg / paper-plane.svg
- folder.svg
- snake.svg
- quiz.svg
- testimonial-bg.png (grid bg behind testimonial card)
- left-side.png, right-side.png (volcano decorations beside Galileo tabs)
- yellow-section-bg.svg (yellow gradient bg)
- footer-left-visual.png, footer-center-visual.png (frog), footer-right-visual.png

### Tab videos (assets.opennote.com)
- landing_feynman_tab.mp4
- landing_generation_tab.mp4
- landing_references_tab.mp4
- landing_practice_tab.mp4
- landing_green_section.mp4
- intelligent-not-boring_square.mp4

## Color Tokens (observed)
- `--light-1`: rgb(255, 253, 248) — body bg, header bg
- `--blue-3`: light cool blue (Galileo tab section bg)
- Pink: announcement bar — light lavender ~ rgb(238, 220, 250)
- Black pill bg: ~ rgb(10, 10, 10)
- Body text: ~ rgb(10, 10, 10)
- Card colors:
  - Notes (blue): light blue ~#cde6f5
  - AI Chat (yellow): #f5e174
  - Recorder (pink): #ffd7e2
  - Tutorials (green): #c5e8b7
  - Practice (sage): light green
  - CTA card: #fce375 / yellow
