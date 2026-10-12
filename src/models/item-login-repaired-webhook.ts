import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an Item has exited the `ITEM_LOGIN_REQUIRED` state without the user having gone
 * through the update mode flow in your app (this can happen if the user completed the update mode
 * in a different app). If you have messaging that tells the user to complete the update mode flow,
 * you should silence this messaging upon receiving the `LOGIN_REPAIRED` webhook.
 */
export type ItemLoginRepairedWebhook = {
  /** `ITEM` */
  webhookType: string;
  /** `LOGIN_REPAIRED` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const itemLoginRepairedWebhookSchema: Schema<ItemLoginRepairedWebhook> =
  s.object<ItemLoginRepairedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
    },
  });
