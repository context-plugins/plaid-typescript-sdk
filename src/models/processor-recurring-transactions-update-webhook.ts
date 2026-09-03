import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProcessorRecurringTransactionsUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  accountId: string;
  environment: WebhookEnvironmentValues;
};

export const processorRecurringTransactionsUpdateWebhookSchema: Schema<ProcessorRecurringTransactionsUpdateWebhook> =
  s.object<ProcessorRecurringTransactionsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
    },
  });
