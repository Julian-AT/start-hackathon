import { isLikelyQuestion, stripBotMention, truncateDiscordMessage } from "./message";
import { formatRetryAfter, UserCooldown } from "./rate-limit";
import type { AnswerClient, BotReply, Logger, Retriever } from "./types";

const NO_CONTEXT_REPLY =
  "I don't know from the START Hack Vienna docs yet. Please ask an organizer for the freshest answer.";

export type IncomingBotMessage = {
  content: string;
  authorId: string;
  authorIsBot: boolean;
  botUserId: string;
  channelId: string;
  guildId?: string | null;
  mentionsCurrentBot: boolean;
};

export type AnswerServiceOptions = {
  allowedGuildIds: Set<string>;
  allowedChannelIds: Set<string>;
  maxReplyChars: number;
};

export class AnswerService {
  constructor(
    private readonly retriever: Retriever,
    private readonly answerClient: AnswerClient,
    private readonly cooldown: UserCooldown,
    private readonly logger: Logger,
    private readonly options: AnswerServiceOptions,
  ) {}

  async handleMessage(message: IncomingBotMessage): Promise<BotReply> {
    if (message.authorIsBot || !message.mentionsCurrentBot) {
      return { type: "ignored" };
    }

    if (
      this.options.allowedGuildIds.size > 0 &&
      (!message.guildId || !this.options.allowedGuildIds.has(message.guildId))
    ) {
      return { type: "ignored" };
    }

    if (
      this.options.allowedChannelIds.size > 0 &&
      !this.options.allowedChannelIds.has(message.channelId)
    ) {
      return { type: "ignored" };
    }

    const question = stripBotMention(message.content, message.botUserId);

    if (!isLikelyQuestion(question)) {
      return { type: "ignored" };
    }

    const limit = this.cooldown.check(message.authorId);

    if (!limit.allowed) {
      return {
        type: "reply",
        counted: false,
        content: `Please wait ${formatRetryAfter(limit.retryAfterMs)} before asking me another question.`,
      };
    }

    try {
      const chunks = await this.retriever.search(question);

      if (chunks.length === 0) {
        return { type: "reply", counted: true, content: NO_CONTEXT_REPLY };
      }

      const answer = await this.answerClient.answer(question, chunks);

      return {
        type: "reply",
        counted: true,
        content: truncateDiscordMessage(answer, this.options.maxReplyChars),
      };
    } catch (error) {
      this.logger.error("Failed to answer Discord question", error, {
        authorId: message.authorId,
        channelId: message.channelId,
      });

      return {
        type: "reply",
        counted: true,
        content:
          "I hit an internal error while checking the START Hack Vienna docs. Please try again later or ask an organizer.",
      };
    }
  }
}
