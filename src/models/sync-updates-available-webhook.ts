import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an Item's transactions change. This can be due to any event resulting in new changes,
 * such as an initial 30-day transactions fetch upon the initialization of an Item with
 * transactions, the backfill of historical transactions that occurs shortly after, or when changes
 * are populated from a regularly-scheduled transactions update job. It is recommended to listen for
 * the `SYNC_UPDATES_AVAILABLE` webhook when using the `/transactions/sync` endpoint. Note that when
 * using `/transactions/sync` the older webhooks `INITIAL_UPDATE`, `HISTORICAL_UPDATE`,
 * `DEFAULT_UPDATE`, and `TRANSACTIONS_REMOVED`, which are intended for use with
 * `/transactions/get`, will also continue to be sent in order to maintain backwards compatibility.
 * It is not necessary to listen for and respond to those webhooks when using `/transactions/sync`.
 *
 * After receipt of this webhook, the new changes can be fetched for the Item from
 * `/transactions/sync`.
 *
 * Note that to receive this webhook for an Item, `/transactions/sync` must have been called at
 * least once on that Item. This means that, unlike the `INITIAL_UPDATE` and `HISTORICAL_UPDATE`
 * webhooks, it will not fire immediately upon Item creation. If `/transactions/sync` is called on
 * an Item that was *not* initialized with Transactions, the webhook will fire twice: once the first
 * 30 days of transactions data has been fetched, and a second time when all available historical
 * transactions data has been fetched.
 *
 * This webhook will fire in the Sandbox environment as it would in Production. It can also be
 * manually triggered in Sandbox by calling `/sandbox/item/fire_webhook`.
 */
export type SyncUpdatesAvailableWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `SYNC_UPDATES_AVAILABLE` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /**
   * Indicates if initial pull information (most recent 30 days of transaction history) is
   * available.
   */
  initialUpdateComplete: boolean;
  /**
   * Indicates if historical pull information (maximum transaction history requested, up to 2 years)
   * is available.
   */
  historicalUpdateComplete: boolean;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const syncUpdatesAvailableWebhookSchema: Schema<SyncUpdatesAvailableWebhook> =
  s.object<SyncUpdatesAvailableWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    initialUpdateComplete: s.boolean(),
    historicalUpdateComplete: s.boolean(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      initialUpdateComplete: "initial_update_complete",
      historicalUpdateComplete: "historical_update_complete",
    },
  });
