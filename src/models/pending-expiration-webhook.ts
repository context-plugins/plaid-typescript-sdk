import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type PendingExpirationWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  consentExpirationTime: Date;
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
