import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeTransactionSchema,
  type CraBankIncomeTransaction,
} from "./cra-bank-income-transaction.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

/** The end user's monthly summary for the income source(s). */
export type CraBankIncomeHistoricalSummary = {
  /**
   * Total amount of earnings for the income source(s) of the user for the month in the summary.
   * This can contain multiple amounts, with each amount denominated in one unique currency.
   */
  totalAmounts?: CreditAmountWithCurrency[];
  /**
   * The start date of the period covered in this monthly summary. This date will be the first day
   * of the month, unless the month being covered is a partial month because it is the first month
   * included in the summary and the date range being requested does not begin with the first day of
   * the month. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  startDate?: string;
  /**
   * The end date of the period included in this monthly summary. This date will be the last day of
   * the month, unless the month being covered is a partial month because it is the last month
   * included in the summary and the date range being requested does not end with the last day of
   * the month. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate?: string;
  transactions?: CraBankIncomeTransaction[];
};

export const craBankIncomeHistoricalSummarySchema: Schema<CraBankIncomeHistoricalSummary> =
  s.object<CraBankIncomeHistoricalSummary>({
    totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    transactions: s.optional(s.array(s.lazy(() => craBankIncomeTransactionSchema))),
    _keysMap: {
      totalAmounts: "total_amounts",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
