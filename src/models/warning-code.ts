import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WarningCode = {
  OwnersUnavailable: "OWNERS_UNAVAILABLE",
  InvestmentsUnavailable: "INVESTMENTS_UNAVAILABLE",
  TransactionsUnavailable: "TRANSACTIONS_UNAVAILABLE",
  BankIncomeInsightsInsufficientData: "BANK_INCOME_INSIGHTS_INSUFFICIENT_DATA",
  BankIncomeInsightsIncomplete: "BANK_INCOME_INSIGHTS_INCOMPLETE",
  BankIncomeInsightsStatusInProgress: "BANK_INCOME_INSIGHTS_STATUS_IN_PROGRESS",
  BankIncomeInsightsInternalError: "BANK_INCOME_INSIGHTS_INTERNAL_ERROR",
  BankIncomeInsightsMismatchedDaysRequested: "BANK_INCOME_INSIGHTS_MISMATCHED_DAYS_REQUESTED",
} as const;
export type WarningCode = (typeof WarningCode)[keyof typeof WarningCode] | (string & {});

export const warningCodeSchema: EnumSchema<WarningCode> = s.enumOf<WarningCode>(WarningCode);
