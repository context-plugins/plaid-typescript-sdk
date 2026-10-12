import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents an amount and a monthly average */
export type AmountWithCurrencyWithMonthlyAverage = {
  /**
   * If the parent object represents a category of transactions, such as `total_amount`,
   * `transfers_in`, `total_income`, etc. the `amount` represents the sum of all of the transactions
   * in the group.
   *
   * If the parent object is `cash_flow`, the `amount` represents the total value of all the inflows
   * minus all the outflows across all the accounts in the report in the given time window.
   *
   * If the parent object is `minimum_balance`, the `amount` represents the lowest balance of the
   * account during the given time window.
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

export const amountWithCurrencyWithMonthlyAverageSchema: Schema<AmountWithCurrencyWithMonthlyAverage> =
  s.object<AmountWithCurrencyWithMonthlyAverage>({
    amount: s.optionalNullable(s.float64()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
