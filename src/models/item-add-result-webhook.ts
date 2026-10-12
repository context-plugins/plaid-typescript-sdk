import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when a user successfully adds a Plaid Item during a Link session when using Hosted Link or
 * Multi-Item Link sessions. Contains the public token for the Item.
 */
export type ItemAddResultWebhook = {
  /** `LINK` */
  webhookType: string;
  /** `ITEM_ADD_RESULT` */
  webhookCode: string;
  /** The identifier for the Link session. */
  linkSessionId: string;
  /** The `link_token` used to create the Link session. */
  linkToken: string;
  /** The `public_token` corresponding to the Item that was added. */
  publicToken: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const itemAddResultWebhookSchema: Schema<ItemAddResultWebhook> = s.object<ItemAddResultWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  linkSessionId: s.string(),
  linkToken: s.string(),
  publicToken: s.string(),
  environment: webhookEnvironmentValuesSchema,
  _keysMap: {
    webhookType: "webhook_type",
    webhookCode: "webhook_code",
    linkSessionId: "link_session_id",
    linkToken: "link_token",
    publicToken: "public_token",
  },
});
