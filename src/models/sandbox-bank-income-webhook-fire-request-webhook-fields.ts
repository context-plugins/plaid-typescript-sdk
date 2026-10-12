import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankIncomeRefreshCompleteResultSchema,
  type BankIncomeRefreshCompleteResult,
} from "./bank-income-refresh-complete-result.js";

/** Optional fields which will be populated in the simulated webhook */
export type SandboxBankIncomeWebhookFireRequestWebhookFields = {
  /** The user id to be returned in INCOME webhooks */
  userId: string;
  /**
   * The result of the bank income refresh report generation
   *
   * `SUCCESS`: The refreshed report was successfully generated and can be retrieved via
   * `/credit/bank_income/get`.
   *
   * `FAILURE`: The refreshed report failed to be generated
   */
  bankIncomeRefreshCompleteResult?: BankIncomeRefreshCompleteResult;
};

export const sandboxBankIncomeWebhookFireRequestWebhookFieldsSchema: Schema<SandboxBankIncomeWebhookFireRequestWebhookFields> =
  s.object<SandboxBankIncomeWebhookFireRequestWebhookFields>({
    userId: s.string(),
    bankIncomeRefreshCompleteResult: s.optional(s.lazy(() => bankIncomeRefreshCompleteResultSchema)),
    _keysMap: {
      userId: "user_id",
      bankIncomeRefreshCompleteResult: "bank_income_refresh_complete_result",
    },
  });
