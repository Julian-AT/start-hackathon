import { describe, expect, it } from "vitest";

import { chunkDocument } from "./knowledge";

describe("knowledge chunking", () => {
  it("keeps source metadata on every chunk", () => {
    const chunks = chunkDocument({
      sourceType: "knowledge",
      sourceId: "faq",
      title: "FAQ",
      path: "knowledge/faq.md",
      text: "First answer.\n\nSecond answer.",
    });

    expect(chunks).toHaveLength(1);
    expect(chunks[0]?.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-a[0-9a-f]{3}-[0-9a-f]{12}$/,
    );
    expect(chunks[0]?.payload).toMatchObject({
      sourceType: "knowledge",
      sourceId: "faq",
      title: "FAQ",
      path: "knowledge/faq.md",
      chunkIndex: 0,
    });
  });

  it("splits long documents into multiple searchable chunks", () => {
    const chunks = chunkDocument({
      sourceType: "site",
      sourceId: "long",
      title: "Long",
      text: Array.from({ length: 8 }, (_, index) => `Paragraph ${index}: ${"x".repeat(350)}`).join(
        "\n\n",
      ),
    });

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks[1]?.payload.text).toContain("Paragraph");
  });
});
