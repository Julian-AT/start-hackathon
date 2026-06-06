export type RateLimitResult = { allowed: true } | { allowed: false; retryAfterMs: number };

export class UserCooldown {
  private readonly lastAcceptedAt = new Map<string, number>();

  constructor(
    private readonly cooldownMs: number,
    private readonly now: () => number = Date.now,
  ) {}

  check(userId: string): RateLimitResult {
    const currentTime = this.now();
    const previousTime = this.lastAcceptedAt.get(userId);

    if (previousTime !== undefined) {
      const elapsed = currentTime - previousTime;

      if (elapsed < this.cooldownMs) {
        return { allowed: false, retryAfterMs: this.cooldownMs - elapsed };
      }
    }

    this.lastAcceptedAt.set(userId, currentTime);
    return { allowed: true };
  }
}

export function formatRetryAfter(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes === 0) {
    return `${seconds}s`;
  }

  if (seconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${seconds}s`;
}
