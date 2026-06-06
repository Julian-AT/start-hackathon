export type BotConfig = {
  discordToken: string;
  qdrantUrl: string;
  qdrantApiKey?: string;
  qdrantCollection: string;
  geminiApiKey: string;
  geminiAnswerModel: string;
  geminiEmbeddingModel: string;
  embeddingDimensions: number;
  cooldownMs: number;
  retrievalLimit: number;
  minScore: number;
  maxReplyChars: number;
  allowedGuildIds: Set<string>;
  allowedChannelIds: Set<string>;
};

export type KnowledgeSourceType = "site" | "knowledge";

export type KnowledgeDocument = {
  sourceType: KnowledgeSourceType;
  sourceId: string;
  title: string;
  text: string;
  path?: string;
  url?: string;
};

export type KnowledgeChunkPayload = {
  sourceType: KnowledgeSourceType;
  sourceId: string;
  title: string;
  text: string;
  chunkIndex: number;
  path?: string;
  url?: string;
};

export type KnowledgeChunk = {
  id: string;
  payload: KnowledgeChunkPayload;
};

export type RetrievedChunk = KnowledgeChunkPayload & {
  score: number;
};

export type EmbeddingTaskType = "RETRIEVAL_DOCUMENT" | "RETRIEVAL_QUERY";

export type EmbeddingClient = {
  embed(text: string, taskType: EmbeddingTaskType): Promise<number[]>;
};

export type AnswerClient = {
  answer(question: string, chunks: RetrievedChunk[]): Promise<string>;
};

export type Retriever = {
  search(question: string): Promise<RetrievedChunk[]>;
};

export type BotReply = { type: "ignored" } | { type: "reply"; content: string; counted: boolean };

export type LoggerContext = Record<string, string | number | boolean | undefined>;

export type Logger = {
  info(message: string, context?: LoggerContext): void;
  warn(message: string, context?: LoggerContext): void;
  error(message: string, error?: unknown, context?: LoggerContext): void;
};
