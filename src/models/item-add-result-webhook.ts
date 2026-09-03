import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ItemAddResultWebhook = {
  webhookType: string;
  webhookCode: string;
  linkSessionId: string;
  linkToken: string;
  publicToken: string;
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
