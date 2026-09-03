import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankIncomeCompleteResultSchema,
  type BankIncomeCompleteResult,
} from "./bank-income-complete-result.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BankIncomeCompleteWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  result: BankIncomeCompleteResult;
  environment: WebhookEnvironmentValues;
};

export const bankIncomeCompleteWebhookSchema: Schema<BankIncomeCompleteWebhook> =
  s.object<BankIncomeCompleteWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    result: bankIncomeCompleteResultSchema,
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
