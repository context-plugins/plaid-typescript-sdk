import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryExpensesSchema, type CategoryExpenses } from "./category-expenses.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";

/**
 * Summary statistics for a specific expenditure category, including total amount, monthly average,
 * and percentage of income.
 */
export type ExpenditureSummary = {
  /** The total value of all the aggregated transactions in this expenditure category. */
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
   * The total number of outflow transactions in this expenses group, within the given time window
   * across all the accounts in the report.
   */
  transactionsCount?: number | null;
  /**
   * The percentage of the total inflows that was spent in this expenses group, within the given
   * time window across all the accounts in the report. For example, a value of 100 represents that
   * 100% of the inflows were spent on transactions that fall into this expenditure group. If
   * there's no available income for the given time period, this field value will be `-1`.
   */
  percentageOfIncome?: number | null;
  /**
   * The primary credit categories of the expenses within the given time window, across all the
   * accounts in the report.
   *
   * The categories are sorted in descending order by the total value spent. See the [category
   * taxonomy](https://plaid.com/documents/credit-category-taxonomy.csv) for a full listing of
   * category IDs.
   */
  topCategories?: (CategoryExpenses | null)[];
};

export const expenditureSummarySchema: Schema<ExpenditureSummary> = s.object<ExpenditureSummary>({
  amount: s.optionalNullable(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
  transactionsCount: s.optionalNullable(s.int()),
  percentageOfIncome: s.optionalNullable(s.float64()),
  topCategories: s.optional(s.array(s.nullable(s.lazy(() => categoryExpensesSchema)))),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    monthlyAverage: "monthly_average",
    transactionsCount: "transactions_count",
    percentageOfIncome: "percentage_of_income",
    topCategories: "top_categories",
  },
});
