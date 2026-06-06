const QUESTION_STARTERS = new Set([
  "can",
  "could",
  "do",
  "does",
  "how",
  "is",
  "are",
  "should",
  "what",
  "when",
  "where",
  "which",
  "who",
  "why",
  "will",
]);

export function stripBotMention(content: string, botUserId: string): string {
  const mentionPattern = new RegExp(`<@!?${botUserId}>`, "g");

  return content.replace(mentionPattern, " ").replace(/\s+/g, " ").trim();
}

export function isLikelyQuestion(text: string): boolean {
  const normalized = text.trim().toLowerCase();

  if (normalized.length < 4) {
    return false;
  }

  if (normalized.includes("?")) {
    return true;
  }

  const firstWord = normalized.match(/^[a-z]+/)?.[0];

  return firstWord ? QUESTION_STARTERS.has(firstWord) : false;
}

export function truncateDiscordMessage(content: string, maxChars: number): string {
  if (content.length <= maxChars) {
    return content;
  }

  const suffix = "\n\n...";
  return `${content.slice(0, Math.max(0, maxChars - suffix.length)).trimEnd()}${suffix}`;
}
