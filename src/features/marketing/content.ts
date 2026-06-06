export type MarketingEvent = {
  name: string;
  fullName: string;
  shortName: string;
  tagline: string;
  description: string;
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  country: string;
  format: string;
  location: string;
};

export type MarketingTrack = {
  slug: string;
  name: string;
  partner: string;
  category: string;
  summary: string;
  build: string;
  logo: string;
  tags: string[];
  kind: "onboarding" | "challenge";
  href?: string;
  status?: string;
  panelClassName: string;
};

export type TrackDetail = {
  slug: string;
  name: string;
  partner: string;
  category: string;
  eyebrow: string;
  headline: string;
  description: string;
  logo: string;
  panelClassName: string;
  facts: string[];
  challenge: {
    title: string;
    paragraphs: string[];
    requirementsTitle: string;
    requirements: string[];
  };
  prizes?: {
    title: string;
    items: string[];
  };
  judging?: {
    name: string;
    weight: string;
    description: string;
  }[];
  people?: {
    name: string;
    role: string;
  }[];
  resources?: {
    name: string;
    description: string;
  }[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export type ScheduleDay = {
  date: string;
  title: string;
  items: ScheduleItem[];
};

export type Sponsor = {
  name: string;
  logo: string;
  website: string;
};

export const DISCORD_URL = "https://discord.gg/ZB29cGQr";
export const TEAM_FORMATION_DISCORD_URL = "https://discord.gg/BmvgNZrr";

export const marketingEvent: MarketingEvent = {
  name: "START Hack Vienna '26",
  fullName: "START HACK Vienna 2026",
  shortName: "START Hack Vienna",
  tagline: "24 hours. Partner challenges. One weekend in Vienna.",
  description:
    "A 24-hour onsite hackathon in Vienna with real partner challenges, team formation, mentors on site, food, tool credits, and public MIT-licensed submissions.",
  startDate: "2026-06-06T09:00:00+02:00",
  endDate: "2026-06-07T18:00:00+02:00",
  venue: "HOIV - Home of Innovation Vienna",
  city: "Vienna",
  country: "AT",
  format: "Onsite",
  location: "Vienna",
};

export const eventHighlights = [
  { label: "Dates", value: "June 6-7, 2026" },
  { label: "Format", value: "Onsite at HOIV" },
  { label: "Tracks", value: "Five partner challenges" },
  { label: "Status", value: "Applications closed" },
] as const;

export const tracks: MarketingTrack[] = [
  {
    slug: "team-formation",
    name: "Team Formation",
    partner: "START Hack",
    category: "Onboarding and allocation",
    summary:
      "Find your team, rank your preferred challenges, and get allocated before hacking starts.",
    build:
      "Create or join a team of 2-4 people, submit your top track preferences, and get matched to one build track.",
    logo: "/images/logo_transparent.png",
    tags: ["Teams", "Top 3 ranking", "Allocation"],
    kind: "onboarding",
    href: "/tracks/team-formation",
    panelClassName: "bg-background text-foreground",
  },
  {
    slug: "fonio-ai",
    name: "fonio.ai",
    partner: "fonio.ai",
    category: "Voice AI infrastructure",
    summary:
      "Close the loop on every cancellation with an outbound voice-AI flow that fills freed appointment slots.",
    build:
      "Detect a cancellation, pick the right waiting-list candidate, call them, and book the slot on yes.",
    logo: "/partners/fonio.png",
    tags: ["Voice AI", "Appointments", "Automation"],
    kind: "challenge",
    href: "/tracks/fonio-ai",
    panelClassName: "bg-slate-300 text-announcement-foreground",
  },
  {
    slug: "techbold",
    name: "techbold",
    partner: "techbold",
    category: "AI service desk autopilot",
    summary:
      "Build an AI-assisted technician workspace for real Linux incidents, with human approval for every action.",
    build:
      "Pull tickets from a mock ERP, connect over SSH, diagnose and fix, validate, then write a clean activity log.",
    logo: "/partners/techbold.png",
    tags: ["IT ops", "Linux VMs", "Human approval"],
    kind: "challenge",
    href: "/tracks/techbold",
    panelClassName: "bg-background text-foreground",
  },
  {
    slug: "notarity",
    name: "notarity",
    partner: "notarity",
    category: "Legal-tech booking flow",
    summary:
      "Turn a complex notary appointment workflow into a valid booking experience that takes under 3 minutes.",
    build:
      "Reimagine product, country, participant, shipping, billing, and consent logic as a guided AI-enabled flow.",
    logo: "/sponsors/notarity.png",
    tags: ["Legal tech", "Booking flow", "UX"],
    kind: "challenge",
    href: "/tracks/notarity",
    panelClassName: "bg-mist-300 text-foreground",
  },
  {
    slug: "hoiv-robo-dog",
    name: "HOIV Robo Dog",
    partner: "HOIV",
    category: "Robotics and real-world AI",
    summary: "Bring a four-legged robot to life as a welcome host for Home of Innovation.",
    build:
      "Use sensors, perception, decision-making, and real-time control on the actual robot hardware.",
    logo: "/partners/hoiv.webp",
    tags: ["Robotics", "Hardware", "HOIV"],
    kind: "challenge",
    status: "Details coming soon",
    panelClassName: "bg-white text-announcement-foreground",
  },
  {
    slug: "hoiv-open-track",
    name: "HOIV Open Track",
    partner: "HOIV + proximata",
    category: "Smart glasses and AR agents",
    summary:
      "Build a hands-free AI interface on Meta Ray-Ban glasses with live voice, vision, and agentic actions.",
    build:
      "Use VisionClaw, Gemini Live, and OpenClaw to make real-world assistance feel natural through smart glasses.",
    logo: "/sponsors/proximata.png",
    tags: ["Smart glasses", "AR", "Agents"],
    kind: "challenge",
    href: "/tracks/hoiv-open-track",
    panelClassName: "bg-announcement text-announcement-foreground",
  },
];

export const trackDetails: TrackDetail[] = [
  {
    slug: "team-formation",
    name: "Team Formation and Track Selection",
    partner: "START Hack",
    category: "Onboarding and allocation",
    eyebrow: "START Hack Vienna '26",
    headline: "Find your team. Rank your tracks. Get allocated.",
    description:
      "Everyone passes through team formation before the build begins. It is the lobby for meeting teammates, creating a team, and submitting ranked track preferences.",
    logo: "/images/logo_transparent.png",
    panelClassName: "bg-background text-foreground",
    facts: ["Teams of 2-4", "Rank your top 5", "One build track per team"],
    challenge: {
      title: "How allocation works",
      paragraphs: [
        "Doors open at 09:00 and all cases are revealed at 10:00. Solo applicants can meet teammates through matchmaking and colored armbands.",
        "Teams submit ranked track preferences before allocation. The organizers then move each team into exactly one track, aiming to maximize first-choice matches while respecting partner capacity.",
        "At allocation, you leave team formation and start hacking inside your assigned track.",
      ],
      requirementsTitle: "Before hacking starts",
      requirements: [
        "Form a team of 2-4 people",
        "Rank your top 5 tracks",
        "Submit one preference form per team",
      ],
    },
    resources: [
      {
        name: "Discord",
        description: "Use the event Discord to find teammates and ask organizers for help.",
      },
      {
        name: "Team formation form",
        description:
          "We email you a link to the telli team form at check-in. Use it to create or join your team and submit ranked track preferences.",
      },
    ],
    ctaLabel: "Join Discord",
    ctaHref: TEAM_FORMATION_DISCORD_URL,
  },
  {
    slug: "fonio-ai",
    name: "fonio.ai",
    partner: "fonio.ai",
    category: "Voice AI infrastructure",
    eyebrow: "START Hack Vienna 2026 - fonio.ai",
    headline: "Close the loop on every cancellation.",
    description:
      "fonio.ai builds AI phone assistants that handle calls for businesses around the clock. This track asks teams to fill newly freed appointment slots with a working outbound voice flow.",
    logo: "/partners/fonio.png",
    panelClassName: "bg-announcement text-announcement-foreground",
    facts: ["Teams of 2-4", "Voice AI", "Consent-first workflow"],
    challenge: {
      title: "Build the empty-slot refill loop",
      paragraphs: [
        "When a customer cancels an appointment, the slot often sits empty because staff have to call a waiting list manually and mostly hit voicemail.",
        "Build a system inside fonio that detects a freed slot, chooses the right person from a waiting list, calls them, offers the slot, and books it when they say yes.",
        "The demo should show the full loop end to end: cancellation detection, candidate selection, outbound call, and confirmed booking. Consent and edge cases must be treated seriously.",
      ],
      requirementsTitle: "Submission requirements",
      requirements: ["Public GitHub repo", "Up to 3-minute demo video", "Written submission"],
    },
    prizes: {
      title: "Prize and support",
      items: [
        "EUR 2,000 cash plus 12 months of fonio access",
        "fonio accounts for building and testing",
        "Direct line to fonio engineering during the hackathon",
      ],
    },
    judging: [
      {
        name: "Functional MVP",
        weight: "30%",
        description:
          "The demo runs end to end with a real outbound call rather than falling back to slides.",
      },
      {
        name: "Technical execution",
        weight: "25%",
        description:
          "Engineering choices would survive production: persistence, error handling, idempotency, and sane architecture.",
      },
      {
        name: "Problem fit and relevance",
        weight: "20%",
        description:
          "The team understood the real problem - the receptionist's day and the personalization issue - not an easier adjacent one.",
      },
      {
        name: "User experience and design",
        weight: "15%",
        description:
          "The receptionist can actually use the dashboard and the owner can read the numbers.",
      },
      {
        name: "Pitch and storytelling",
        weight: "10%",
        description: "Four minutes, clear and honest, showing the build rather than slideware.",
      },
    ],
    people: [
      {
        name: "Nicolas Hosp",
        role: "Jury and mentor, HR at fonio - in person Sat 13:00-14:00 and 17:00-18:00, Sun 10:00-11:00",
      },
      {
        name: "Marco Caputo",
        role: "Mentor, GTM Lead Italy at fonio - in person Sat 13:00-14:00 and 17:00-18:00, Sun 10:00-11:00",
      },
      {
        name: "Kim",
        role: "Tech mentor, Forward Deployment Engineer at fonio - available on Discord",
      },
    ],
    resources: [
      {
        name: "fonio account",
        description: "One account per participant for building and testing.",
      },
      {
        name: "Infrastructure and documentation",
        description:
          "Product documentation and build guidance are provided through the event platform.",
      },
      {
        name: "Support",
        description: "Dedicated Discord and on-site help from fonio.",
      },
    ],
  },
  {
    slug: "techbold",
    name: "techbold",
    partner: "techbold",
    category: "AI service desk autopilot",
    eyebrow: "START Hack Vienna 2026 - techbold",
    headline: "Build the AI technician workspace.",
    description:
      "techbold runs IT for more than 1,200 businesses across Europe. This track asks teams to build controlled agentic AI for diagnosing and fixing Linux incidents.",
    logo: "/partners/techbold.png",
    panelClassName: "bg-background text-foreground",
    facts: ["Mock ERP", "Real Linux VMs", "Human approval required"],
    challenge: {
      title: "From ticket to validated fix",
      paragraphs: [
        "Build a technician workspace that pulls assigned tickets from a mock Phoenix ERP, loads the affected customer system, connects over SSH, and diagnoses the incident.",
        "The AI may propose diagnostic and fix steps, but the technician must approve every system action. After validation, the workspace writes a precise activity log back to the ERP.",
        "The evaluation uses fresh systems your team has not seen before, so hard-coded fixes and unsafe broad commands will not hold up.",
      ],
      requirementsTitle: "Submission requirements",
      requirements: ["Public GitHub repo", "Up to 3-minute demo video", "Written submission"],
    },
    prizes: {
      title: "Prize and support",
      items: [
        "EUR 3,000 in hardware plus a paid EUR 7,000 contract for a real techbold case",
        "A social-media winner story with a techbold board endorsement",
        "Production-grade infrastructure and Linux systems to build on",
        "Direct line to techbold's AI engineers on site and on Discord",
      ],
    },
    judging: [
      {
        name: "Functional MVP and ERP workflow",
        weight: "20%",
        description: "Ticket loading, customer context, activity creation, and robust states work.",
      },
      {
        name: "Troubleshooting performance",
        weight: "35%",
        description:
          "Hidden incidents are solved with correct root cause, durable fix, and no regressions.",
      },
      {
        name: "Safety, auditability, responsible AI",
        weight: "20%",
        description: "Actions are auditable, controlled by humans, minimal, and secret-safe.",
      },
      {
        name: "Technician experience",
        weight: "10%",
        description: "The operator can understand, review, retry, and abort agent work.",
      },
      {
        name: "Engineering quality",
        weight: "15%",
        description: "The repo is reproducible, modular, documented, and tested where it matters.",
      },
    ],
    people: [
      {
        name: "Christopher Chellakudam",
        role: "Senior Developer and AI Engineer, techbold - available onsite",
      },
      {
        name: "Benedikt Fritzenwallner",
        role: "Senior Developer and AI Engineer, techbold - available onsite",
      },
    ],
    resources: [
      {
        name: "Mock Phoenix ERP API",
        description:
          "Bearer-token API with endpoints for open tickets, customer system info, and activity creation.",
      },
      {
        name: "Five customer Linux VMs",
        description: "Fresh Ubuntu machines with incidents discovered through assigned tickets.",
      },
      {
        name: "SSH key and reset endpoint",
        description: "Team-specific SSH access and a reset endpoint for replaying cases.",
      },
      {
        name: "Safety hard fails",
        description:
          "Deleting customer data, broad chmod/chown, disabling security controls, exposing secrets, or hiding logs can zero an incident or disqualify a team.",
      },
    ],
  },
  {
    slug: "notarity",
    name: "notarity",
    partner: "notarity",
    category: "Legal-tech booking flow",
    eyebrow: "START Hack Vienna 2026 - notarity",
    headline: "Zero to notary appointment in 3 minutes.",
    description:
      "notarity digitizes legal documents, signatures, and notarization. This track asks teams to rethink appointment booking for users who do not know legal workflows upfront.",
    logo: "/sponsors/notarity.png",
    panelClassName: "bg-background text-foreground",
    facts: ["Teams of 2-4", "Legal-tech", "Under 3 minutes"],
    challenge: {
      title: "Make a complex booking flow feel simple",
      paragraphs: [
        "notarity's appointment booking flow has country rules, product catalogs, participant setups, time slots, billing, shipping, consents, preferred notaries, and conditional logic.",
        "Build an assistant, guided flow, or agent that helps a client complete a valid, fully configured notary appointment in under 3 minutes.",
        "The strongest demos start with a user who only has a document and no clarity on what they need, then reach a valid end-to-end booking while respecting the underlying rules.",
      ],
      requirementsTitle: "Submission requirements",
      requirements: ["Public GitHub repo", "Up to 3-minute demo video", "Written submission"],
    },
    prizes: {
      title: "Prizes for the top three teams",
      items: [
        "1st: EUR 1,000 cash plus a dinner with the notarity founders",
        "2nd: company incorporation via notarity (GmbH, FlexCo, or OG)",
        "3rd: an invite to notarity's Open tennis tournament",
        "All three teams: a standing invite to meet the founders about once a week",
      ],
    },
    judging: [
      {
        name: "Functional MVP",
        weight: "30%",
        description: "The solution actually books an appointment through a valid flow.",
      },
      {
        name: "Technical execution",
        weight: "30%",
        description: "The code, prompts, and architecture are understandable and maintainable.",
      },
      {
        name: "User experience and design",
        weight: "25%",
        description: "The flow helps users understand what they need and move confidently.",
      },
      {
        name: "Pitch and storytelling",
        weight: "15%",
        description: "The team explains the value and build clearly in the pitch.",
      },
    ],
    people: [
      {
        name: "Max Pointinger",
        role: "Mentor and jury, Head of Product, Co-Founder and Developer - available onsite",
      },
      { name: "Hendrik Böttcher", role: "Mentor, AI Ops - available remotely on Discord" },
      {
        name: "Jakobus Schuster",
        role: "Mentor, CEO and Co-Founder - available remotely on Discord",
      },
    ],
    resources: [
      { name: "Company website", description: "notarity.com" },
      { name: "Background video", description: "youtube.com/watch?v=ou0k42Ab4rg" },
      {
        name: "Booking-form configuration",
        description:
          "Representative product, country, participant, billing, shipping, consent, scenario, document, and sandbox endpoint material is shared by email or on Discord.",
      },
    ],
  },
  {
    slug: "hoiv-open-track",
    name: "HOIV Open Track",
    partner: "HOIV + proximata",
    category: "Smart glasses and AR agents",
    eyebrow: "START Hack Vienna 2026 - HOIV Open Track",
    headline: "Ray-Ban Meta x VisionClaw: an AR interface for the real world.",
    description:
      "The Open Track is hosted at HOIV and authored by proximata. Teams build real-world AI assistance through smart glasses using voice, vision, and agentic actions.",
    logo: "/sponsors/proximata.png",
    panelClassName: "bg-announcement text-announcement-foreground",
    facts: ["Meta Ray-Ban glasses", "VisionClaw", "Hands-free AI"],
    challenge: {
      title: "Build a glasses-first AI assistant",
      paragraphs: [
        "Most AI assistants still require screens or peripherals. Smart glasses can make assistance available while a user's hands and eyes stay busy.",
        "Build a visual, voice, or agentic AR interface using Meta's Wearables Device Access Toolkit or VisionClaw. The glasses should see or hear context, the user should speak a request, and the system should return a useful response or action.",
        "A strong demo shows at least two distinct voice-and-vision interactions on real glasses or a virtual emulation. If using OpenClaw, show at least one real action executing.",
      ],
      requirementsTitle: "Submission requirements",
      requirements: ["Public GitHub repo", "Up to 3-minute demo video", "Written submission"],
    },
    prizes: {
      title: "Prize and support",
      items: [
        "One month of office space at HOIV",
        "Immediate builder status at proximata for the winning team",
        "Hands-on access to Meta Ray-Ban glasses in developer mode",
      ],
    },
    judging: [
      {
        name: "Functional MVP",
        weight: "35%",
        description:
          "The end-to-end flow runs live with real visual/audio input and useful output.",
      },
      {
        name: "User experience and design",
        weight: "35%",
        description: "The glasses interaction is intuitive and improves the user's experience.",
      },
      {
        name: "Creativity and originality",
        weight: "15%",
        description: "The use case and AR interface are specific, useful, and non-generic.",
      },
      {
        name: "Pitch and storytelling",
        weight: "15%",
        description:
          "The team explains who it is for, why it matters, and what works in 4 minutes.",
      },
    ],
    people: [
      {
        name: "Sviat",
        role: "Lead mentor, proximata - AI agentic pipelines, data analysis, ML, and cognitive science - available onsite",
      },
    ],
    resources: [
      {
        name: "Meta Wearables Device Access Toolkit",
        description:
          "Meta's official SDK (developer preview) for direct camera, microphone, and speaker access on the glasses.",
      },
      {
        name: "VisionClaw framework",
        description:
          "github.com/Intent-Lab/VisionClaw for real-time voice, vision, and agentic actions.",
      },
      {
        name: "Meta Ray-Ban glasses",
        description:
          "Ray-Ban Meta glasses including a Display unit, in developer mode, shared on site.",
      },
      {
        name: "Gemini and OpenClaw",
        description: "Gemini Live API access, OpenClaw docs, and sandbox credentials.",
      },
    ],
  },
];

export const sharedMentors: { name: string; role: string }[] = [
  { name: "Cristian Livadaru", role: "n8n ambassador - mostly available on Day 1" },
  {
    name: "Gleb, Vlad, Sviat, and the proximata team",
    role: "Available on the fourth floor in the Robotics Area",
  },
];

export const scheduleDays: ScheduleDay[] = [
  {
    date: "June 6",
    title: "Day One - Build starts",
    items: [
      {
        time: "09:00 - 11:00",
        title: "Check-in at HOIV",
        description:
          "Bring your personal QR code and check in at the venue. Cases go live at 10:00 and doors close at 11:00 sharp.",
      },
      {
        time: "10:30 - 11:00",
        title: "Optional matchmaking",
        description:
          "Find team members for your team. Solo applicants get different colored armbands.",
      },
      {
        time: "11:00 - 11:30",
        title: "Opening ceremony",
        description: "Get to know the schedule and hear a 5-minute pitch from each track partner.",
      },
      {
        time: "11:30 - 12:30",
        title: "Break-out rooms",
        description: "Join partner rooms, hear details, and ask questions before ranking tracks.",
      },
      {
        time: "12:30 - 12:45",
        title: "Finalize team structure and preferences",
        description:
          "Fill in the telli team form (link emailed at check-in), add your team members, and submit ranked track preferences.",
      },
      {
        time: "12:45 - 13:00",
        title: "Final allocation",
        description: "Teams are assigned to tracks and hacking starts at 13:00.",
      },
      {
        time: "13:00",
        title: "Hacking starts",
        description: "Code freeze is June 7 at 14:00, no matter how the start lands.",
      },
      {
        time: "14:00 - 15:30",
        title: "Lunch slot",
        description: "Food truck outside, including vegan options.",
      },
      {
        time: "17:00 - 21:00",
        title: "VR/AR experience and flight simulator",
        description: "Try on-site VR and AR experiences with Vrei.",
      },
      {
        time: "18:30 - 22:00",
        title: "Networking dinner slot",
        description: "Dinner outside, again with vegan options.",
      },
    ],
  },
  {
    date: "June 7",
    title: "Day Two - Freeze, pitch, win",
    items: [
      {
        time: "09:00 - 11:00",
        title: "Breakfast slot",
        description: "Start the final day with breakfast downstairs.",
      },
      {
        time: "12:00",
        title: "Optional draft submission",
        description: "Submit a draft in case something goes wrong close to final submission.",
      },
      {
        time: "12:00 - 14:00",
        title: "Lunch slot",
        description: "Food truck lunch while teams finish their submissions.",
      },
      {
        time: "14:00",
        title: "Code freeze and final submission",
        description: "Final work must be submitted by 14:00. Track-specific requirements apply.",
      },
      {
        time: "14:00 - 16:00",
        title: "Community Award",
        description:
          "Optional open mic: pitch in 2 minutes, vote as teams, and compete for the Community Award.",
      },
      {
        time: "16:00 - 17:00",
        title: "Track winners pitch",
        description:
          "Track winners pitch to an external expert jury for the overall software and hardware winners.",
      },
      {
        time: "17:00 - 18:00",
        title: "After-event networking",
        description: "Exchange ideas, meet partners, and close the weekend together.",
      },
      {
        time: "19:00",
        title: "Venue closes",
        description: "HOIV closes and the hackathon wraps.",
      },
    ],
  },
];

export const sponsors: Sponsor[] = [
  { name: "ElevenLabs", logo: "/sponsors/elevenlabs.png", website: "https://elevenlabs.io" },
  { name: "n8n", logo: "/sponsors/n8n.png", website: "https://n8n.io" },
  { name: "Lovable", logo: "/partners/lovable.svg", website: "https://lovable.dev" },
  {
    name: "Speedinvest",
    logo: "/sponsors/speedinvest.png",
    website: "https://www.speedinvest.com",
  },
  { name: "fonio.ai", logo: "/partners/fonio.png", website: "https://www.fonio.ai/de" },
  { name: "techbold", logo: "/partners/techbold.png", website: "https://www.techbold.at" },
  {
    name: "Home of Innovation",
    logo: "/partners/hoiv.webp",
    website: "https://homeofinnovationx.com",
  },
  { name: "xchannels.ai", logo: "/sponsors/xchannels.png", website: "https://www.xchannels.ai" },
  { name: "Vrei", logo: "/sponsors/vrei.png", website: "https://vrei.at" },
  {
    name: "Entrepreneurship Avenue",
    logo: "/sponsors/entrepreneurship-avenue.png",
    website: "https://entrepreneurshipavenue.com",
  },
  { name: "ASAI", logo: "/sponsors/asai.png", website: "https://www.asai.ac.at/en/" },
  { name: "entrovy", logo: "/sponsors/entrovy.png", website: "https://entrovy.law" },
  { name: "notarity", logo: "/sponsors/notarity.png", website: "https://notarity.com" },
  { name: "proximata", logo: "/sponsors/proximata.png", website: "https://proximata.io" },
  { name: "Red Bull", logo: "/sponsors/red-bull.png", website: "https://www.redbull.com/at-de" },
  { name: "Club Mate", logo: "/sponsors/club-mate.png", website: "https://www.club-mate.de" },
];

export function getTrackDetail(slug: string): TrackDetail | undefined {
  return trackDetails.find((track) => track.slug === slug);
}
