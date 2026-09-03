import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type AutomaticallyVerifiedWebhook = {
  webhookType: string;
  webhookCode: string;
  accountId: string;
  itemId: string;
  environment: WebhookEnvironmentValues;
  error?: Error | null;
};

export const automaticallyVerifiedWebhookSchema: Schema<AutomaticallyVerifiedWebhook> =
  s.object<AutomaticallyVerifiedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    accountId: s.string(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      itemId: "item_id",
    },
  });
