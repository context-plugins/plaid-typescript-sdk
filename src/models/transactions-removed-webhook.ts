import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type TransactionsRemovedWebhook = {
  webhookType: string;
  webhookCode: string;
  error?: Error | null;
  removedTransactions: string[];
  itemId: string;
  environment: WebhookEnvironmentValues;
};

export const transactionsRemovedWebhookSchema: Schema<TransactionsRemovedWebhook> =
  s.object<TransactionsRemovedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    removedTransactions: s.array(s.string()),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      removedTransactions: "removed_transactions",
      itemId: "item_id",
    },
  });
