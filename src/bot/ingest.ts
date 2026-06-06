import { loadBotConfig } from "./config";
import { GeminiClient } from "./gemini";
import { chunkDocuments, loadKnowledgeDocuments } from "./knowledge";
import { logger } from "./logger";
import { createQdrantClient, QdrantKnowledgeStore } from "./qdrant";

async function main() {
  const config = loadBotConfig({ requireDiscordToken: false });
  const gemini = new GeminiClient(
    config.geminiApiKey,
    config.geminiAnswerModel,
    config.geminiEmbeddingModel,
    config.embeddingDimensions,
  );
  const store = new QdrantKnowledgeStore(
    createQdrantClient(config.qdrantUrl, config.qdrantApiKey),
    config.qdrantCollection,
    gemini,
    config.retrievalLimit,
    config.minScore,
  );
  const documents = await loadKnowledgeDocuments();
  const chunks = chunkDocuments(documents);

  logger.info("Recreating Qdrant knowledge collection", {
    collection: config.qdrantCollection,
    documents: documents.length,
    chunks: chunks.length,
  });

  await store.recreateCollection(config.embeddingDimensions);
  await store.upsertChunks(chunks);

  logger.info("Knowledge ingestion complete", {
    collection: config.qdrantCollection,
    chunks: chunks.length,
  });
}

main().catch((error: unknown) => {
  logger.error("Knowledge ingestion failed", error);
  process.exitCode = 1;
});
