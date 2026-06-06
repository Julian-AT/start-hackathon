import { Client, GatewayIntentBits } from "discord.js";

import type { AnswerService } from "./answer-service";
import type { Logger } from "./types";

export function createDiscordClient(): Client {
  return new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  });
}

export async function startDiscordBot(
  client: Client,
  token: string,
  service: AnswerService,
  logger: Logger,
): Promise<void> {
  client.once("ready", (readyClient) => {
    logger.info("Discord bot ready", { user: readyClient.user.tag });
  });

  client.on("messageCreate", async (message) => {
    const botUserId = client.user?.id;

    if (!botUserId) {
      return;
    }

    try {
      const result = await service.handleMessage({
        content: message.content,
        authorId: message.author.id,
        authorIsBot: message.author.bot,
        botUserId,
        channelId: message.channelId,
        guildId: message.guildId,
        mentionsCurrentBot: message.mentions.users.has(botUserId),
      });

      if (result.type !== "reply") {
        return;
      }

      await message.reply({
        content: result.content,
        allowedMentions: { parse: [], users: [], roles: [], repliedUser: false },
      });
    } catch (error) {
      logger.error("Failed to process Discord message", error, {
        channelId: message.channelId,
        guildId: message.guildId ?? undefined,
      });
    }
  });

  await client.login(token);
}
