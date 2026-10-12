import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Plaid environment the webhook was sent from */
export const WebhookEnvironmentValues = {
  Sandbox: "sandbox",
  Production: "production",
} as const;
export type WebhookEnvironmentValues =
  | (typeof WebhookEnvironmentValues)[keyof typeof WebhookEnvironmentValues]
  | (string & {});

export const webhookEnvironmentValuesSchema: EnumSchema<WebhookEnvironmentValues> =
  s.enumOf<WebhookEnvironmentValues>(WebhookEnvironmentValues);
