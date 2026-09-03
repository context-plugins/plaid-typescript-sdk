import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  statementsRefreshCompleteResultSchema,
  type StatementsRefreshCompleteResult,
} from "./statements-refresh-complete-result.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type StatementsRefreshCompleteWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  result: StatementsRefreshCompleteResult;
  environment: WebhookEnvironmentValues;
};

export const statementsRefreshCompleteWebhookSchema: Schema<StatementsRefreshCompleteWebhook> =
  s.object<StatementsRefreshCompleteWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    result: statementsRefreshCompleteResultSchema,
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
    },
  });
