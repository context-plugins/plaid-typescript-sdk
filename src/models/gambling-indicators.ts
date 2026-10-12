import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";
import { monthlySummarySchema, type MonthlySummary } from "./monthly-summary.js";

/** Insights into gambling-related transactions, including frequency, amounts, and top merchants. */
export type GamblingIndicators = {
  /**
   * The total value of transactions that fall into the `GAMBLING` credit category, across all the
   * accounts in the report.
   */
  amount?: number | null;
  /**
   * The ISO-4217 currency code of the amount. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code associated with the amount. Always `null` if `iso_currency_code`
   * is non-`null`.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode?: string | null;
  /**
   * The monthly average amount calculated by dividing the total by the number of calendar months in
   * the time period.
   */
  monthlyAverage?: MonthlyAverage | null;
  /**
   * Up to 3 top merchants that the user had the most transactions for in the given time window, in
   * descending order of total spend.
   *
   * If the user has not spent money on any merchants in the given time window, this list will be
   * empty.
   */
  topMerchants?: string[];
  /**
   * The total number of transactions that fall into the `GAMBLING` credit category, across all the
   * accounts in the report.
   */
  transactionsCount?: number | null;
  /**
   * The monthly summaries of the transactions that fall into the `GAMBLING` category within the
   * given time window, across all the accounts in the report.
   */
  monthlySummaries?: (MonthlySummary | null)[];
  /**
   * The number of days since the last transaction that falls into the `GAMBLING` category, across
   * all the accounts in the report.
   */
  daysSinceLastOccurrence?: number | null;
  /**
   * The percentage of the user's monthly inflows that was spent on transactions that fall into the
   * `GAMBLING` category within the given time window, across all the accounts in the report. For
   * example, a value of 100 indicates that 100% of the inflows were spent on transactions that fall
   * into the `GAMBLING` credit category. If there's no available income for the given time period,
   * this field value will be `-1`
   */
  percentageOfIncome?: number | null;
};

export const gamblingIndicatorsSchema: Schema<GamblingIndicators> = s.object<GamblingIndicators>({
  amount: s.optionalNullable(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
  topMerchants: s.optional(s.array(s.string())),
  transactionsCount: s.optionalNullable(s.int()),
  monthlySummaries: s.optional(s.array(s.nullable(s.lazy(() => monthlySummarySchema)))),
  daysSinceLastOccurrence: s.optionalNullable(s.int()),
  percentageOfIncome: s.optionalNullable(s.float64()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    monthlyAverage: "monthly_average",
    topMerchants: "top_merchants",
    transactionsCount: "transactions_count",
    monthlySummaries: "monthly_summaries",
    daysSinceLastOccurrence: "days_since_last_occurrence",
    percentageOfIncome: "percentage_of_income",
  },
});
