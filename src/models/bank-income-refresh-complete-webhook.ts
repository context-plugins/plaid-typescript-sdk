import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankIncomeRefreshCompleteResultSchema,
  type BankIncomeRefreshCompleteResult,
} from "./bank-income-refresh-complete-result.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BankIncomeRefreshCompleteWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  result: BankIncomeRefreshCompleteResult;
  environment: WebhookEnvironmentValues;
};

export const bankIncomeRefreshCompleteWebhookSchema: Schema<BankIncomeRefreshCompleteWebhook> =
  s.object<BankIncomeRefreshCompleteWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    result: bankIncomeRefreshCompleteResultSchema,
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
