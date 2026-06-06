import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import {
  marketingEvent,
  scheduleDays,
  sponsors,
  trackDetails,
  tracks,
} from "../features/marketing/content";
import type { KnowledgeChunk, KnowledgeDocument, KnowledgeSourceType } from "./types";

const CHUNK_TARGET_CHARS = 1_200;
const CHUNK_OVERLAP_CHARS = 180;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeText(value: string): string {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function deterministicUuid(value: string): string {
  const hash = createHash("sha256").update(value).digest("hex");
  const version = `5${hash.slice(13, 16)}`;
  const variant = `a${hash.slice(17, 20)}`;

  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-${version}-${variant}-${hash.slice(20, 32)}`;
}

function makeMarkdownDocument(sourceId: string, title: string, lines: string[]): KnowledgeDocument {
  return {
    sourceType: "site",
    sourceId,
    title,
    path: "src/features/marketing/content.ts",
    text: normalizeText(lines.filter(Boolean).join("\n")),
  };
}

export function buildSiteDocuments(): KnowledgeDocument[] {
  const eventDocument = makeMarkdownDocument("event-overview", "Event Overview", [
    `# ${marketingEvent.name}`,
    marketingEvent.description,
    `Dates: ${marketingEvent.startDate} to ${marketingEvent.endDate}`,
    `Venue: ${marketingEvent.venue}, ${marketingEvent.city}, ${marketingEvent.country}`,
    `Format: ${marketingEvent.format}`,
  ]);

  const scheduleDocument = makeMarkdownDocument(
    "schedule",
    "Schedule",
    scheduleDays.flatMap((day) => [
      `# ${day.title}`,
      `Date: ${day.date}`,
      ...day.items.map((item) => `${item.time}: ${item.title}. ${item.description}`),
    ]),
  );

  const trackDocuments = trackDetails.map((track) =>
    makeMarkdownDocument(`track-${track.slug}`, `${track.name} Track`, [
      `# ${track.name}`,
      `Partner: ${track.partner}`,
      `Category: ${track.category}`,
      track.description,
      `Facts: ${track.facts.join(", ")}`,
      `Challenge: ${track.challenge.title}`,
      ...track.challenge.paragraphs,
      `${track.challenge.requirementsTitle}: ${track.challenge.requirements.join("; ")}`,
      track.prizes ? `${track.prizes.title}: ${track.prizes.items.join("; ")}` : "",
      track.judging
        ? `Judging: ${track.judging
            .map((item) => `${item.name} ${item.weight} - ${item.description}`)
            .join("; ")}`
        : "",
      track.resources
        ? `Resources: ${track.resources
            .map((resource) => `${resource.name} - ${resource.description}`)
            .join("; ")}`
        : "",
      track.people
        ? `People: ${track.people.map((person) => `${person.name} - ${person.role}`).join("; ")}`
        : "",
    ]),
  );

  const trackSummaryDocument = makeMarkdownDocument(
    "tracks-summary",
    "Tracks Summary",
    tracks.map((track) => `${track.name}: ${track.summary} ${track.build}`),
  );

  const sponsorDocument = makeMarkdownDocument(
    "sponsors",
    "Sponsors and Partners",
    sponsors.map((sponsor) => `${sponsor.name}: ${sponsor.website}`),
  );

  return [
    eventDocument,
    scheduleDocument,
    trackSummaryDocument,
    sponsorDocument,
    ...trackDocuments,
  ];
}

async function readMarkdownDocumentsFromDirectory(
  directory: string,
  sourceType: KnowledgeSourceType,
): Promise<KnowledgeDocument[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const documents: KnowledgeDocument[] = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      documents.push(...(await readMarkdownDocumentsFromDirectory(fullPath, sourceType)));
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      continue;
    }

    const text = normalizeText(await readFile(fullPath, "utf8"));
    const firstHeading = text.match(/^#\s+(.+)$/m)?.[1];

    documents.push({
      sourceType,
      sourceId: slugify(path.relative(process.cwd(), fullPath).replace(/\\/g, "/")),
      title: firstHeading || entry.name.replace(/\.md$/, ""),
      path: path.relative(process.cwd(), fullPath).replace(/\\/g, "/"),
      text,
    });
  }

  return documents;
}

export async function loadKnowledgeDocuments(
  knowledgeDir = "knowledge",
): Promise<KnowledgeDocument[]> {
  const knowledgePath = path.resolve(process.cwd(), knowledgeDir);

  return [
    ...buildSiteDocuments(),
    ...(await readMarkdownDocumentsFromDirectory(knowledgePath, "knowledge")),
  ];
}

export function chunkDocument(document: KnowledgeDocument): KnowledgeChunk[] {
  const paragraphs = normalizeText(document.text)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    if (!current) {
      current = paragraph;
      continue;
    }

    if (`${current}\n\n${paragraph}`.length > CHUNK_TARGET_CHARS) {
      chunks.push(current);
      current = `${current.slice(-CHUNK_OVERLAP_CHARS)}\n\n${paragraph}`.trim();
      continue;
    }

    current = `${current}\n\n${paragraph}`;
  }

  if (current) {
    chunks.push(current);
  }

  return chunks.map((text, chunkIndex) => ({
    id: deterministicUuid(`${document.sourceId}:${chunkIndex}`),
    payload: {
      sourceType: document.sourceType,
      sourceId: document.sourceId,
      title: document.title,
      path: document.path,
      url: document.url,
      chunkIndex,
      text,
    },
  }));
}

export function chunkDocuments(documents: KnowledgeDocument[]): KnowledgeChunk[] {
  return documents.flatMap(chunkDocument);
}
