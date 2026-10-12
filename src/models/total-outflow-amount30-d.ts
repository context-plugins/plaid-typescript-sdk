import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Total amount of credit transactions out of the account in the last 30 days. This field will be
 * empty for non-depository accounts. This field only takes into account USD transactions from the
 * account.
 */
export type TotalOutflowAmount30D = {
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

export const totalOutflowAmount30DSchema: Schema<TotalOutflowAmount30D> = s.object<TotalOutflowAmount30D>({
  amount: s.float64(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
