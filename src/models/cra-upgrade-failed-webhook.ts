import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a Check Report upgrade attempt has failed */
export type CraUpgradeFailedWebhook = {
  /** `CHECK_REPORT` */
  webhookType: string;
  /** `UPGRADE_FAILED` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /**
   * An array of `item_id`s for items that failed to be upgraded by a Check Report upgrade attempt.
   */
  itemIds: string[];
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const craUpgradeFailedWebhookSchema: Schema<CraUpgradeFailedWebhook> =
  s.object<CraUpgradeFailedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    itemIds: s.array(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
      itemIds: "item_ids",
    },
  });
