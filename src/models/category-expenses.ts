import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";

/**
 * Detailed expense information for a specific credit category, including transaction count and
 * total amount spent.
 */
export type CategoryExpenses = {
  /**
   * The ID of the credit category.
   *
   * See the [category taxonomy](https://plaid.com/documents/credit-category-taxonomy.csv) for a
   * full listing of category IDs.
   */
  id?: string;
  /**
   * The total number of transactions that fall into this credit category within the given time
   * window.
   */
  transactionsCount?: number | null;
  /**
   * The total value for all the transactions that fall into this category within the given time
   * window.
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
};

export const categoryExpensesSchema: Schema<CategoryExpenses> = s.object<CategoryExpenses>({
  id: s.optional(s.string()),
  transactionsCount: s.optionalNullable(s.int()),
  amount: s.optionalNullable(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
  _keysMap: {
    transactionsCount: "transactions_count",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    monthlyAverage: "monthly_average",
  },
});
