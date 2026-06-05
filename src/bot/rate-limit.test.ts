import { describe, expect, it } from "vitest";

import { formatRetryAfter, UserCooldown } from "./rate-limit";

describe("UserCooldown", () => {
  it("allows one accepted question per cooldown window", () => {
    let now = 1_000;
    const cooldown = new UserCooldown(300_000, () => now);

    expect(cooldown.check("user-1")).toEqual({ allowed: true });
    expect(cooldown.check("user-1")).toEqual({ allowed: false, retryAfterMs: 300_000 });

    now += 300_000;

    expect(cooldown.check("user-1")).toEqual({ allowed: true });
  });

  it("formats retry time for short Discord replies", () => {
    expect(formatRetryAfter(45_000)).toBe("45s");
    expect(formatRetryAfter(120_000)).toBe("2m");
    expect(formatRetryAfter(125_000)).toBe("2m 5s");
  });
});
