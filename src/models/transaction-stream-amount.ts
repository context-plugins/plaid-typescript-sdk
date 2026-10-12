import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object with data pertaining to an amount on the transaction stream. */
export type TransactionStreamAmount = {
  /** Represents the numerical value of an amount. */
  amount?: number;
  /**
   * The ISO-4217 currency code of the amount. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `iso_currency_code`s.
   */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code of the amount. Always `null` if `iso_currency_code` is non-`null`.
   * Unofficial currency codes are used for currencies that do not have official ISO currency codes,
   * such as cryptocurrencies and the currencies of certain countries.
   */
  unofficialCurrencyCode?: string | null;
};

export const transactionStreamAmountSchema: Schema<TransactionStreamAmount> =
  s.object<TransactionStreamAmount>({
    amount: s.optional(s.float64()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
