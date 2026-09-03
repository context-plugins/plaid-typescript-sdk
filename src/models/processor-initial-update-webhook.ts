import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProcessorInitialUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  error?: string | null;
  newTransactions: number;
  accountId: string;
  environment: WebhookEnvironmentValues;
};

export const processorInitialUpdateWebhookSchema: Schema<ProcessorInitialUpdateWebhook> =
  s.object<ProcessorInitialUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.string()),
    newTransactions: s.number(),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      newTransactions: "new_transactions",
      accountId: "account_id",
    },
  });
