import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pendingDisconnectWebhookReasonSchema,
  type PendingDisconnectWebhookReason,
} from "./pending-disconnect-webhook-reason.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an Item is expected to be disconnected. The webhook will currently be fired 7 days
 * before the existing Item is scheduled for disconnection. This can be resolved by having the user
 * go through Link's [update mode](https://plaid.com/docs/link/update-mode). Currently, this webhook
 * is fired only for US or Canadian institutions; in the UK or EU, you should continue to listen for
 * the [`PENDING_EXPIRATION`](https://plaid.com/docs/api/items/#pending_expiration) webhook instead.
 */
export type PendingDisconnectWebhook = {
  /** `ITEM` */
  webhookType: string;
  /** `PENDING_DISCONNECT` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /**
   * Reason why the Item is about to be disconnected. `INSTITUTION_MIGRATION`: The institution is
   * moving to API or to a different integration. For example, this can occur when an institution
   * moves from a non-OAuth integration to an OAuth integration. `INSTITUTION_TOKEN_EXPIRATION`: The
   * consent on an Item associated with a US or CA institution is about to expire.
   */
  reason: PendingDisconnectWebhookReason;
  /**
   * The date and time at which the Item is scheduled to disconnect, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  disconnectTime: Date;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const pendingDisconnectWebhookSchema: Schema<PendingDisconnectWebhook> =
  s.object<PendingDisconnectWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    reason: pendingDisconnectWebhookReasonSchema,
    disconnectTime: s.dateTime(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      disconnectTime: "disconnect_time",
    },
  });
