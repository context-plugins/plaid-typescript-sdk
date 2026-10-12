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

/**
 * Fired when a refreshed bank income report has finished generating or failed to generate. To
 * obtain refreshed Bank Income data, send the user through Link's update mode, or migrate to CRA
 * Income Insights and call `/cra/check_report/create` for a backend refresh. To get this webhook,
 * subscribe via the [Dashboard](https://dashboard.plaid.com/developers/webhooks).
 */
export type BankIncomeRefreshCompleteWebhook = {
  /** `INCOME` */
  webhookType: string;
  /** `BANK_INCOME_REFRESH_COMPLETE` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /**
   * The result of the bank income refresh report generation
   *
   * `SUCCESS`: The refreshed report was successfully generated and can be retrieved via
   * `/credit/bank_income/get`.
   *
   * `FAILURE`: The refreshed report failed to be generated
   */
  result: BankIncomeRefreshCompleteResult;
  /** The Plaid environment the webhook was sent from */
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
