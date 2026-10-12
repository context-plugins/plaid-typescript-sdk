import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The monthly average amount calculated by dividing the total by the number of calendar months in
 * the time period.
 */
export type MonthlyAverage = {
  /**
   * The monthly average amount of all the aggregated transactions of the given category, across all
   * the accounts for the given time window.
   *
   * The average is calculated by dividing the total amount of the transactions by the number of
   * calendar months in the given time window.
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
};

export const monthlyAverageSchema: Schema<MonthlyAverage> = s.object<MonthlyAverage>({
  amount: s.optionalNullable(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
