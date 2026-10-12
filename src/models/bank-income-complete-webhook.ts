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

/**
 * Fired when a bank income report has finished generating or failed to generate, triggered by
 * calling `/credit/bank_income/get` in CRA enabled client.
 */
export type BankIncomeCompleteWebhook = {
  /** `INCOME` */
  webhookType: string;
  /** `BANK_INCOME_COMPLETE` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /**
   * The result of the bank income report generation
   *
   * `SUCCESS`: The bank income report was successfully generated and can be retrieved via
   * `/credit/bank_income/get`.
   *
   * `FAILURE`: The bank income report failed to be generated
   */
  result: BankIncomeCompleteResult;
  /** The Plaid environment the webhook was sent from */
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
