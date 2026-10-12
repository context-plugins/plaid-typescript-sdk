import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeHistoricalSummarySchema,
  type CraBankIncomeHistoricalSummary,
} from "./cra-bank-income-historical-summary.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

/**
 * This is a V1 (II1) schema. For the V2 (II2) equivalent, use `CraIncomeInsightsUserSummary`.
 * Summary for income across all income sources and items (max history of 730 days).
 */
export type CraBankIncomeSummary = {
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
  /**
   * An estimate of the average gross monthly income based on the historical net amount and income
   * category for the income source(s). The average monthly income is calculated based on the
   * lifetime of the income stream, rather than the entire historical period included in the scope
   * of the report.
   */
  historicalAverageMonthlyGrossIncome?: CreditAmountWithCurrency[];
  /**
   * The average monthly income amount estimated based on the historical data for the income
   * source(s). The average monthly income is calculated based on the lifetime of the income stream,
   * rather than the entire historical period included in the scope of the report.
   */
  historicalAverageMonthlyIncome?: CreditAmountWithCurrency[];
  /** The predicted average monthly income amount for the income source(s). */
  forecastedAverageMonthlyIncome?: CreditAmountWithCurrency[];
  /**
   * An estimate of the annual gross income for the income source, calculated by multiplying the
   * `historical_average_monthly_gross_income` by 12.
   */
  historicalAnnualGrossIncome?: CreditAmountWithCurrency[];
  /**
   * An estimate of the annual net income for the income source, calculated by multiplying the
   * `historical_average_monthly_income` by 12.
   */
  historicalAnnualIncome?: CreditAmountWithCurrency[];
  /** The predicted average annual income amount for the income source(s). */
  forecastedAnnualIncome?: CreditAmountWithCurrency[];
  historicalSummary?: CraBankIncomeHistoricalSummary[];
};

export const craBankIncomeSummarySchema: Schema<CraBankIncomeSummary> = s.object<CraBankIncomeSummary>({
  totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  incomeSourcesCount: s.optional(s.int()),
  incomeCategoriesCount: s.optional(s.int()),
  incomeTransactionsCount: s.optional(s.int()),
  historicalAverageMonthlyGrossIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalAverageMonthlyIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  forecastedAverageMonthlyIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalAnnualGrossIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalAnnualIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  forecastedAnnualIncome: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
  historicalSummary: s.optional(s.array(s.lazy(() => craBankIncomeHistoricalSummarySchema))),
  _keysMap: {
    totalAmounts: "total_amounts",
    startDate: "start_date",
    endDate: "end_date",
    incomeSourcesCount: "income_sources_count",
    incomeCategoriesCount: "income_categories_count",
    incomeTransactionsCount: "income_transactions_count",
    historicalAverageMonthlyGrossIncome: "historical_average_monthly_gross_income",
    historicalAverageMonthlyIncome: "historical_average_monthly_income",
    forecastedAverageMonthlyIncome: "forecasted_average_monthly_income",
    historicalAnnualGrossIncome: "historical_annual_gross_income",
    historicalAnnualIncome: "historical_annual_income",
    forecastedAnnualIncome: "forecasted_annual_income",
    historicalSummary: "historical_summary",
  },
});
