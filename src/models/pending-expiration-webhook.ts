import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an Item's access consent is expiring in 7 days. This can be resolved by having the
 * user go through Link's update mode. This webhook is fired only for Items associated with
 * institutions in Europe (including the UK); for Items associated with institutions in the US or
 * Canada, see [`PENDING_DISCONNECT`](https://plaid.com/docs/api/items/#pending_disconnect) instead.
 */
export type PendingExpirationWebhook = {
  /** `ITEM` */
  webhookType: string;
  /** `PENDING_EXPIRATION` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /**
   * The date and time at which the Item's access consent will expire, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  consentExpirationTime: Date;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const pendingExpirationWebhookSchema: Schema<PendingExpirationWebhook> =
  s.object<PendingExpirationWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    consentExpirationTime: s.dateTime(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      consentExpirationTime: "consent_expiration_time",
    },
  });
