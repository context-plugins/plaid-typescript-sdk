import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing information about the net pay amount on the pay stub. */
export type CreditPayStubNetPay = {
  /** Raw amount of the net pay for the pay period. */
  currentAmount: number | null;
  /** Description of the net pay. */
  description: string | null;
  /**
   * The ISO-4217 currency code of the net pay. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the net pay. Always `null` if `iso_currency_code`
   * is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO
   * currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
  /** The year-to-date amount of the net pay. */
  ytdAmount: number | null;
};

export const creditPayStubNetPaySchema: Schema<CreditPayStubNetPay> = s.object<CreditPayStubNetPay>({
  currentAmount: s.nullable(s.float64()),
  description: s.nullable(s.string()),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  ytdAmount: s.nullable(s.float64()),
  _keysMap: {
    currentAmount: "current_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
