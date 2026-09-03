import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankIncomeRefreshCompleteResultSchema,
  type BankIncomeRefreshCompleteResult,
} from "./bank-income-refresh-complete-result.js";

export type SandboxBankIncomeWebhookFireRequestWebhookFields = {
  userId: string;
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
