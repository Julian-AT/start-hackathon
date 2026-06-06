import { GoogleGenAI } from "@google/genai";

import type { AnswerClient, EmbeddingClient, EmbeddingTaskType, RetrievedChunk } from "./types";

const REFUSAL =
  "I don't know from the START Hack Vienna docs yet. Please ask an organizer for the freshest answer.";

export class GeminiClient implements EmbeddingClient, AnswerClient {
  private readonly ai: GoogleGenAI;

  constructor(
    apiKey: string,
    private readonly answerModel: string,
    private readonly embeddingModel: string,
    private readonly embeddingDimensions: number,
  ) {
    this.ai = new GoogleGenAI({ apiKey });
  }

  async embed(text: string, taskType: EmbeddingTaskType): Promise<number[]> {
    const response = await this.ai.models.embedContent({
      model: this.embeddingModel,
      contents: text,
      config: {
        taskType,
        outputDimensionality: this.embeddingDimensions,
      },
    });

    const values = response.embeddings?.[0]?.values;

    if (!values?.length) {
      throw new Error("Gemini returned no embedding values");
    }

    return values;
  }

  async answer(question: string, chunks: RetrievedChunk[]): Promise<string> {
    if (chunks.length === 0) {
      return REFUSAL;
    }

    const context = chunks
      .map(
        (chunk, index) =>
          `[${index + 1}] ${chunk.title}${chunk.path ? ` (${chunk.path})` : ""}\n${chunk.text}`,
      )
      .join("\n\n");

    const response = await this.ai.models.generateContent({
      model: this.answerModel,
      contents: [
        {
          role: "user",
          parts: [
            {
              text: [
                "You answer Discord questions for START Hack Vienna '26.",
                "Use only the provided context. If the context is insufficient, say you do not know from the START Hack Vienna docs.",
                "Be concise, practical, and friendly. Include a short Sources line with the source titles you used.",
                "Never invent dates, prizes, rules, credentials, links, or organizer instructions.",
                "",
                `Question: ${question}`,
                "",
                "Context:",
                context,
              ].join("\n"),
            },
          ],
        },
      ],
      config: {
        temperature: 0.2,
        maxOutputTokens: 450,
      },
    });

    return response.text?.trim() || REFUSAL;
  }
}
