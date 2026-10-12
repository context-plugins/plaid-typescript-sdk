import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason why the Item is about to be disconnected. `INSTITUTION_MIGRATION`: The institution is
 * moving to API or to a different integration. For example, this can occur when an institution
 * moves from a non-OAuth integration to an OAuth integration. `INSTITUTION_TOKEN_EXPIRATION`: The
 * consent on an Item associated with a US or CA institution is about to expire.
 */
export const PendingDisconnectWebhookReason = {
  InstitutionMigration: "INSTITUTION_MIGRATION",
  InstitutionTokenExpiration: "INSTITUTION_TOKEN_EXPIRATION",
} as const;
export type PendingDisconnectWebhookReason =
  | (typeof PendingDisconnectWebhookReason)[keyof typeof PendingDisconnectWebhookReason]
  | (string & {});

export const pendingDisconnectWebhookReasonSchema: EnumSchema<PendingDisconnectWebhookReason> =
  s.enumOf<PendingDisconnectWebhookReason>(PendingDisconnectWebhookReason);
