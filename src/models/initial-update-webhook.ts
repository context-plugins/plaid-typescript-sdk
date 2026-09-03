import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type InitialUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  error?: string | null;
  newTransactions: number;
  itemId: string;
  environment: WebhookEnvironmentValues;
};

export const initialUpdateWebhookSchema: Schema<InitialUpdateWebhook> = s.object<InitialUpdateWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  error: s.optionalNullable(s.string()),
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
