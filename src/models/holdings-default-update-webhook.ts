import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type HoldingsDefaultUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  error?: Error | null;
  newHoldings: number;
  updatedHoldings: number;
  environment: WebhookEnvironmentValues;
};

export const holdingsDefaultUpdateWebhookSchema: Schema<HoldingsDefaultUpdateWebhook> =
  s.object<HoldingsDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    newHoldings: s.number(),
    updatedHoldings: s.number(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      newHoldings: "new_holdings",
      updatedHoldings: "updated_holdings",
    },
  });
