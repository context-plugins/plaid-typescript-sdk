import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingDisconnectWebhookReason = {
  InstitutionMigration: "INSTITUTION_MIGRATION",
  InstitutionTokenExpiration: "INSTITUTION_TOKEN_EXPIRATION",
} as const;
export type PendingDisconnectWebhookReason =
  | (typeof PendingDisconnectWebhookReason)[keyof typeof PendingDisconnectWebhookReason]
  | (string & {});

export const pendingDisconnectWebhookReasonSchema: EnumSchema<PendingDisconnectWebhookReason> =
  s.enumOf<PendingDisconnectWebhookReason>(PendingDisconnectWebhookReason);
