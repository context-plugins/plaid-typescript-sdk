import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProcessorDefaultUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  error?: Error | null;
  newTransactions: number;
  accountId: string;
  environment: WebhookEnvironmentValues;
};

export const processorDefaultUpdateWebhookSchema: Schema<ProcessorDefaultUpdateWebhook> =
  s.object<ProcessorDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
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
