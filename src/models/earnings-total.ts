import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paySchema, type Pay } from "./pay.js";

/**
 * An object representing both the current pay period and year to date amount for an earning
 * category.
 */
export type EarningsTotal = {
  /** Total amount of the earnings for this pay period */
  currentAmount?: number | null;
  /**
   * An object representing a monetary amount.
   *
   * @deprecated
   */
  currentPay?: Pay;
  /**
   * An object representing a monetary amount.
   *
   * @deprecated
   */
  ytdPay?: Pay;
  /** Total number of hours worked for this pay period */
  hours?: number | null;
  /**
   * The ISO-4217 currency code of the line item. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code associated with the line item. Always `null` if
   * `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do
   * not have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode?: string | null;
  /** The total year-to-date amount of the earnings */
  ytdAmount?: number | null;
};

export const earningsTotalSchema: Schema<EarningsTotal> = s.object<EarningsTotal>({
  currentAmount: s.optionalNullable(s.float64()),
  currentPay: s.optional(s.lazy(() => paySchema)),
  ytdPay: s.optional(s.lazy(() => paySchema)),
  hours: s.optionalNullable(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.float64()),
  _keysMap: {
    currentAmount: "current_amount",
    currentPay: "current_pay",
    ytdPay: "ytd_pay",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
