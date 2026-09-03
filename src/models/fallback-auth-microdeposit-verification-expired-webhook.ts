import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type FallbackAuthMicrodepositVerificationExpiredWebhook = {
  webhookType: string;
  webhookCode: string;
  error?: string | null;
  accountId: string;
  itemId: string;
  environment: WebhookEnvironmentValues;
};

export const fallbackAuthMicrodepositVerificationExpiredWebhookSchema: Schema<FallbackAuthMicrodepositVerificationExpiredWebhook> =
  s.object<FallbackAuthMicrodepositVerificationExpiredWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.string()),
    accountId: s.string(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      itemId: "item_id",
    },
  });
