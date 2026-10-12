import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The warning code identifies a specific kind of warning. `OWNERS_UNAVAILABLE` indicates that
 * account-owner information is not available. `INVESTMENTS_UNAVAILABLE` indicates that Investments
 * specific information is not available. `TRANSACTIONS_UNAVAILABLE` indicates that transactions
 * information associated with Credit and Depository accounts are unavailable. The
 * `BANK_INCOME_INSIGHTS_*` codes apply to the Bank Income add-on:
 * `BANK_INCOME_INSIGHTS_INSUFFICIENT_DATA` indicates there was not enough data to compute Bank
 * Income Insights; `BANK_INCOME_INSIGHTS_INCOMPLETE` indicates the Bank Income Insights flow was
 * not completed; `BANK_INCOME_INSIGHTS_STATUS_IN_PROGRESS` indicates Bank Income Insights are still
 * being computed; `BANK_INCOME_INSIGHTS_INTERNAL_ERROR` indicates an internal error occurred while
 * computing Bank Income Insights; `BANK_INCOME_INSIGHTS_MISMATCHED_DAYS_REQUESTED` indicates the
 * days requested for Bank Income Insights did not match that of the Asset Report.
 */
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
