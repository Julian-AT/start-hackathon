import type { Logger, LoggerContext } from "./types";

function serializeContext(context?: LoggerContext) {
  return context ? ` ${JSON.stringify(context)}` : "";
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

export const logger: Logger = {
  info(message, context) {
    console.warn(`[bot:info] ${message}${serializeContext(context)}`);
  },
  warn(message, context) {
    console.warn(`[bot:warn] ${message}${serializeContext(context)}`);
  },
  error(message, error, context) {
    console.error(`[bot:error] ${message}: ${errorMessage(error)}${serializeContext(context)}`);
  },
};
