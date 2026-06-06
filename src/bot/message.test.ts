import { describe, expect, it } from "vitest";

import { isLikelyQuestion, stripBotMention, truncateDiscordMessage } from "./message";

describe("Discord message parsing", () => {
  it("strips normal and nickname bot mentions", () => {
    expect(stripBotMention("<@123> when is check-in? <@!123>", "123")).toBe("when is check-in?");
  });

  it("accepts explicit and implied questions", () => {
    expect(isLikelyQuestion("When is the code freeze")).toBe(true);
    expect(isLikelyQuestion("Where is lunch?")).toBe(true);
  });

  it("rejects non-question chatter", () => {
    expect(isLikelyQuestion("hello bot")).toBe(false);
    expect(isLikelyQuestion("ok")).toBe(false);
  });

  it("truncates long Discord replies", () => {
    const result = truncateDiscordMessage("a".repeat(25), 10);

    expect(result.length).toBeLessThanOrEqual(10);
    expect(result.endsWith("...")).toBe(true);
  });
});
