import { config as loadDotenv } from "dotenv";

import type { BotConfig } from "./types";

loadDotenv({ path: ".env.local", quiet: true });
loadDotenv({ path: ".env", quiet: true });

const DEFAULT_COLLECTION = "start_hackathon_knowledge";
const DEFAULT_ANSWER_MODEL = "gemini-3.5-flash";
const DEFAULT_EMBEDDING_MODEL = "gemini-embedding-001";
const DEFAULT_EMBEDDING_DIMENSIONS = 768;
const DEFAULT_COOLDOWN_SECONDS = 300;
const DEFAULT_RETRIEVAL_LIMIT = 6;
const DEFAULT_MIN_SCORE = 0.55;
const DEFAULT_MAX_REPLY_CHARS = 1900;

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function optionalNumberEnv(name: string, fallback: number): number {
  const value = process.env[name]?.trim();

  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${name} must be a positive number`);
  }

  return parsed;
}

function optionalSetEnv(name: string): Set<string> {
  const value = process.env[name]?.trim();

  if (!value) {
    return new Set();
  }

  return new Set(
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
}

export function loadBotConfig(options: { requireDiscordToken?: boolean } = {}): BotConfig {
  const requireDiscordToken = options.requireDiscordToken ?? true;

  return {
    discordToken: requireDiscordToken ? requiredEnv("DISCORD_TOKEN") : "",
    geminiApiKey: requiredEnv("GEMINI_API_KEY"),
    qdrantUrl: requiredEnv("QDRANT_URL"),
    qdrantApiKey: process.env.QDRANT_API_KEY?.trim() || undefined,
    qdrantCollection: process.env.QDRANT_COLLECTION?.trim() || DEFAULT_COLLECTION,
    geminiAnswerModel: process.env.GEMINI_ANSWER_MODEL?.trim() || DEFAULT_ANSWER_MODEL,
    geminiEmbeddingModel: process.env.GEMINI_EMBEDDING_MODEL?.trim() || DEFAULT_EMBEDDING_MODEL,
    embeddingDimensions: optionalNumberEnv(
      "GEMINI_EMBEDDING_DIMENSIONS",
      DEFAULT_EMBEDDING_DIMENSIONS,
    ),
    cooldownMs:
      optionalNumberEnv("DISCORD_QUESTION_COOLDOWN_SECONDS", DEFAULT_COOLDOWN_SECONDS) * 1000,
    retrievalLimit: optionalNumberEnv("RAG_RETRIEVAL_LIMIT", DEFAULT_RETRIEVAL_LIMIT),
    minScore: optionalNumberEnv("RAG_MIN_SCORE", DEFAULT_MIN_SCORE),
    maxReplyChars: optionalNumberEnv("DISCORD_MAX_REPLY_CHARS", DEFAULT_MAX_REPLY_CHARS),
    allowedGuildIds: optionalSetEnv("DISCORD_ALLOWED_GUILD_IDS"),
    allowedChannelIds: optionalSetEnv("DISCORD_ALLOWED_CHANNEL_IDS"),
  };
}
