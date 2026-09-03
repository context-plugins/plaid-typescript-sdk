import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type UserAccountRevokedWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  accountId: string;
  environment: WebhookEnvironmentValues;
};

export const userAccountRevokedWebhookSchema: Schema<UserAccountRevokedWebhook> =
  s.object<UserAccountRevokedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      accountId: "account_id",
    },
  });
