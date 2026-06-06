import { QdrantClient } from "@qdrant/js-client-rest";

import type {
  EmbeddingClient,
  KnowledgeChunk,
  KnowledgeChunkPayload,
  RetrievedChunk,
  Retriever,
} from "./types";

type QdrantPayload = Record<string, unknown> | null | undefined;

function asPayload(payload: QdrantPayload): KnowledgeChunkPayload | undefined {
  if (!payload || typeof payload !== "object") {
    return undefined;
  }

  const text = payload.text;
  const title = payload.title;
  const sourceType = payload.sourceType;
  const sourceId = payload.sourceId;
  const chunkIndex = payload.chunkIndex;

  if (
    typeof text !== "string" ||
    typeof title !== "string" ||
    typeof sourceType !== "string" ||
    typeof sourceId !== "string" ||
    typeof chunkIndex !== "number"
  ) {
    return undefined;
  }

  return {
    text,
    title,
    sourceType: sourceType === "knowledge" ? "knowledge" : "site",
    sourceId,
    chunkIndex,
    path: typeof payload.path === "string" ? payload.path : undefined,
    url: typeof payload.url === "string" ? payload.url : undefined,
  };
}

export function createQdrantClient(url: string, apiKey?: string): QdrantClient {
  return new QdrantClient({ url, apiKey });
}

export class QdrantKnowledgeStore implements Retriever {
  constructor(
    private readonly client: QdrantClient,
    private readonly collectionName: string,
    private readonly embeddings: EmbeddingClient,
    private readonly limit: number,
    private readonly minScore: number,
  ) {}

  async recreateCollection(vectorSize: number): Promise<void> {
    await this.client.recreateCollection(this.collectionName, {
      vectors: {
        size: vectorSize,
        distance: "Cosine",
      },
    });

    await this.client.createPayloadIndex(this.collectionName, {
      field_name: "sourceType",
      field_schema: "keyword",
      wait: true,
    });
  }

  async upsertChunks(chunks: KnowledgeChunk[]): Promise<void> {
    const points = [];

    for (const chunk of chunks) {
      points.push({
        id: chunk.id,
        vector: await this.embeddings.embed(chunk.payload.text, "RETRIEVAL_DOCUMENT"),
        payload: chunk.payload,
      });
    }

    if (points.length === 0) {
      return;
    }

    await this.client.upsert(this.collectionName, {
      wait: true,
      points,
    });
  }

  async search(question: string): Promise<RetrievedChunk[]> {
    const query = await this.embeddings.embed(question, "RETRIEVAL_QUERY");
    const response = await this.client.query(this.collectionName, {
      query,
      limit: this.limit,
      score_threshold: this.minScore,
      with_payload: true,
      with_vector: false,
    });

    return response.points.flatMap((point) => {
      const payload = asPayload(point.payload);

      if (!payload || typeof point.score !== "number") {
        return [];
      }

      return [{ ...payload, score: point.score }];
    });
  }
}
