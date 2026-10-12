import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * This contains an amount, denominated in the currency specified by either `iso_currency_code` or
 * `unofficial_currency_code`
 */
export type CreditAmountWithCurrency = {
  /** Value of amount with up to 2 decimal places. */
  amount: number;
  /** The ISO 4217 currency code of the amount or balance. */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   */
  unofficialCurrencyCode: string | null;
};

export const creditAmountWithCurrencySchema: Schema<CreditAmountWithCurrency> =
  s.object<CreditAmountWithCurrency>({
    amount: s.float64(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
