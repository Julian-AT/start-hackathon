import { AnswerService } from "./answer-service";
import { loadBotConfig } from "./config";
import { createDiscordClient, startDiscordBot } from "./discord";
import { GeminiClient } from "./gemini";
import { logger } from "./logger";
import { createQdrantClient, QdrantKnowledgeStore } from "./qdrant";
import { UserCooldown } from "./rate-limit";

async function main() {
  const config = loadBotConfig();
  const gemini = new GeminiClient(
    config.geminiApiKey,
    config.geminiAnswerModel,
    config.geminiEmbeddingModel,
    config.embeddingDimensions,
  );
  const qdrant = new QdrantKnowledgeStore(
    createQdrantClient(config.qdrantUrl, config.qdrantApiKey),
    config.qdrantCollection,
    gemini,
    config.retrievalLimit,
    config.minScore,
  );
  const client = createDiscordClient();
  const service = new AnswerService(qdrant, gemini, new UserCooldown(config.cooldownMs), logger, {
    allowedGuildIds: config.allowedGuildIds,
    allowedChannelIds: config.allowedChannelIds,
    maxReplyChars: config.maxReplyChars,
  });

  await startDiscordBot(client, config.discordToken, service, logger);
}

main().catch((error: unknown) => {
  logger.error("Bot process failed", error);
  process.exitCode = 1;
});
