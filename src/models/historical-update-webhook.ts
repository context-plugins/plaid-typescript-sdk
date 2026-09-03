import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type HistoricalUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  error?: Error | null;
  newTransactions: number;
  itemId: string;
  environment: WebhookEnvironmentValues;
};

export const historicalUpdateWebhookSchema: Schema<HistoricalUpdateWebhook> =
  s.object<HistoricalUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    newTransactions: s.number(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      newTransactions: "new_transactions",
      itemId: "item_id",
    },
  });
