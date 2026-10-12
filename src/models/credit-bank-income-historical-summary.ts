import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";
import {
  creditBankIncomeTransactionSchema,
  type CreditBankIncomeTransaction,
} from "./credit-bank-income-transaction.js";

/** The end user's monthly summary for the income source(s). */
export type CreditBankIncomeHistoricalSummary = {
  /**
   * Total amount of earnings for the income source(s) of the user for the month in the summary.
   * This may return an incorrect value if the summary includes income sources in multiple
   * currencies. Please use
   * [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-items-bank-income-sources-historical-summary-total-amounts)
   * instead.
   *
   * @deprecated
   */
  totalAmount?: number;
  /**
   * The ISO 4217 currency code of the amount or balance. Please use
   * [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-items-bank-income-sources-historical-summary-total-amounts)
   * instead.
   *
   * @deprecated
   */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries. Please use
   * [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-items-bank-income-sources-historical-summary-total-amounts)
   * instead.
   *
   * @deprecated
   */
  unofficialCurrencyCode?: string | null;
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
  transactions?: CreditBankIncomeTransaction[];
};

export const creditBankIncomeHistoricalSummarySchema: Schema<CreditBankIncomeHistoricalSummary> =
  s.object<CreditBankIncomeHistoricalSummary>({
    totalAmount: s.optional(s.float64()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    transactions: s.optional(s.array(s.lazy(() => creditBankIncomeTransactionSchema))),
    _keysMap: {
      totalAmount: "total_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      totalAmounts: "total_amounts",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
