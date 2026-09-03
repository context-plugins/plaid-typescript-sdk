import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type RecurringTransactionsUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  accountIds: string[];
  environment: WebhookEnvironmentValues;
};

export const recurringTransactionsUpdateWebhookSchema: Schema<RecurringTransactionsUpdateWebhook> =
  s.object<RecurringTransactionsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountIds: s.array(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountIds: "account_ids",
    },
  });
