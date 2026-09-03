import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type VerificationExpiredWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  accountId: string;
  environment: WebhookEnvironmentValues;
  error?: Error | null;
};

export const verificationExpiredWebhookSchema: Schema<VerificationExpiredWebhook> =
  s.object<VerificationExpiredWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountId: "account_id",
    },
  });
