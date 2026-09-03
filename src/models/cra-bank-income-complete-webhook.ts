import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeCompleteResultSchema,
  type CraBankIncomeCompleteResult,
} from "./cra-bank-income-complete-result.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CraBankIncomeCompleteWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  result?: CraBankIncomeCompleteResult;
  environment: WebhookEnvironmentValues;
};

export const craBankIncomeCompleteWebhookSchema: Schema<CraBankIncomeCompleteWebhook> =
  s.object<CraBankIncomeCompleteWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    result: s.optional(s.lazy(() => craBankIncomeCompleteResultSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
