import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";
import {
  creditBankIncomeHistoricalSummarySchema,
  type CreditBankIncomeHistoricalSummary,
} from "./credit-bank-income-historical-summary.js";

/** Summary for bank income across all income sources and items (max history of 730 days). */
export type CreditBankIncomeSummary = {
  /**
   * Total amount of earnings across all the income sources in the end user's Items for the days
   * requested by the client. This may return an incorrect value if the summary includes income
   * sources in multiple currencies. Please use
   * [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-bank-income-summary-total-amounts)
   * instead.
   *
   * @deprecated
   */
  totalAmount?: number;
  /**
   * The ISO 4217 currency code of the amount or balance. Please use
   * [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-bank-income-summary-total-amounts)
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
   * [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-bank-income-summary-total-amounts)
   * instead.
   *
   * @deprecated
   */
  unofficialCurrencyCode?: string | null;
  /**
   * Total amount of earnings across all the income sources in the end user's Items for the days
   * requested by the client. This can contain multiple amounts, with each amount denominated in one
   * unique currency.
   */
  totalAmounts?: CreditAmountWithCurrency[];
  /**
   * The earliest date within the days requested in which all income sources identified by Plaid
   * appear in a user's account. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  startDate?: string;
  /**
   * The latest date in which all income sources identified by Plaid appear in the user's account.
   * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate?: string;
  /** Number of income sources per end user. */
  incomeSourcesCount?: number;
  /** Number of income categories per end user. */
  incomeCategoriesCount?: number;
  /** Number of income transactions per end user. */
  incomeTransactionsCount?: number;
  historicalSummary?: CreditBankIncomeHistoricalSummary[];
};

export const creditBankIncomeSummarySchema: Schema<CreditBankIncomeSummary> =
  s.object<CreditBankIncomeSummary>({
    totalAmount: s.optional(s.float64()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    incomeSourcesCount: s.optional(s.int()),
    incomeCategoriesCount: s.optional(s.int()),
    incomeTransactionsCount: s.optional(s.int()),
    historicalSummary: s.optional(s.array(s.lazy(() => creditBankIncomeHistoricalSummarySchema))),
    _keysMap: {
      totalAmount: "total_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      totalAmounts: "total_amounts",
      startDate: "start_date",
      endDate: "end_date",
      incomeSourcesCount: "income_sources_count",
      incomeCategoriesCount: "income_categories_count",
      incomeTransactionsCount: "income_transactions_count",
      historicalSummary: "historical_summary",
    },
  });
