import { describe, expect, it, vi } from "vitest";

import { AnswerService } from "./answer-service";
import { UserCooldown } from "./rate-limit";
import type { AnswerClient, Logger, Retriever } from "./types";

const logger: Logger = {
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
};

function createService(options?: {
  retriever?: Retriever;
  answerClient?: AnswerClient;
  now?: () => number;
}) {
  const retriever: Retriever = options?.retriever ?? {
    search: vi.fn().mockResolvedValue([
      {
        sourceType: "knowledge",
        sourceId: "faq",
        title: "FAQ",
        chunkIndex: 0,
        text: "Check-in starts at 09:00.",
        score: 0.9,
      },
    ]),
  };
  const answerClient: AnswerClient = options?.answerClient ?? {
    answer: vi.fn().mockResolvedValue("Check-in starts at 09:00.\n\nSources: FAQ"),
  };

  return {
    retriever,
    answerClient,
    service: new AnswerService(
      retriever,
      answerClient,
      new UserCooldown(300_000, options?.now),
      logger,
      {
        allowedGuildIds: new Set(),
        allowedChannelIds: new Set(),
        maxReplyChars: 1900,
      },
    ),
  };
}

const baseMessage = {
  content: "<@bot-1> when is check-in?",
  authorId: "user-1",
  authorIsBot: false,
  botUserId: "bot-1",
  channelId: "channel-1",
  guildId: "guild-1",
  mentionsCurrentBot: true,
};

describe("AnswerService", () => {
  it("ignores messages that do not mention the bot", async () => {
    const { service, retriever } = createService();

    await expect(
      service.handleMessage({ ...baseMessage, mentionsCurrentBot: false }),
    ).resolves.toEqual({
      type: "ignored",
    });
    expect(retriever.search).not.toHaveBeenCalled();
  });

  it("ignores mentioned non-questions", async () => {
    const { service, retriever } = createService();

    await expect(
      service.handleMessage({ ...baseMessage, content: "<@bot-1> hello" }),
    ).resolves.toEqual({
      type: "ignored",
    });
    expect(retriever.search).not.toHaveBeenCalled();
  });

  it("answers valid questions with retrieved context", async () => {
    const { service, retriever, answerClient } = createService();

    await expect(service.handleMessage(baseMessage)).resolves.toEqual({
      type: "reply",
      counted: true,
      content: "Check-in starts at 09:00.\n\nSources: FAQ",
    });
    expect(retriever.search).toHaveBeenCalledWith("when is check-in?");
    expect(answerClient.answer).toHaveBeenCalledOnce();
  });

  it("rate limits repeated accepted questions before retrieval", async () => {
    let now = 0;
    const { service, retriever } = createService({ now: () => now });

    await service.handleMessage(baseMessage);
    const second = await service.handleMessage(baseMessage);

    expect(second).toMatchObject({ type: "reply", counted: false });
    expect(retriever.search).toHaveBeenCalledTimes(1);

    now = 300_000;

    await service.handleMessage(baseMessage);
    expect(retriever.search).toHaveBeenCalledTimes(2);
  });

  it("returns a grounded fallback when retrieval finds no context", async () => {
    const { service } = createService({
      retriever: { search: vi.fn().mockResolvedValue([]) },
    });

    await expect(service.handleMessage(baseMessage)).resolves.toEqual({
      type: "reply",
      counted: true,
      content:
        "I don't know from the START Hack Vienna docs yet. Please ask an organizer for the freshest answer.",
    });
  });

  it("returns an operational fallback when providers fail", async () => {
    const { service } = createService({
      retriever: { search: vi.fn().mockRejectedValue(new Error("qdrant down")) },
    });

    const result = await service.handleMessage(baseMessage);

    expect(result).toMatchObject({ type: "reply", counted: true });
    expect(result.type === "reply" ? result.content : "").toContain("internal error");
  });
});
