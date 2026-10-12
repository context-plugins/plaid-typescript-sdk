import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the earnings line items for the pay period. */
export type PayStubEarningsBreakdown = {
  /** Commonly used term to describe the earning line item. */
  canonicalDescription: string | null;
  /** Raw amount of the earning line item. */
  currentAmount: number | null;
  /** Description of the earning line item. */
  description: string | null;
  /** Number of hours applicable for this earning. */
  hours: number | null;
  /**
   * The ISO-4217 currency code of the line item. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode: string | null;
  /** Hourly rate applicable for this earning. */
  rate: number | null;
  /**
   * The unofficial currency code associated with the line item. Always `null` if
   * `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do
   * not have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
  /** The year-to-date amount of the line item. */
  ytdAmount: number | null;
};

export const payStubEarningsBreakdownSchema: Schema<PayStubEarningsBreakdown> =
  s.object<PayStubEarningsBreakdown>({
    canonicalDescription: s.nullable(s.string()),
    currentAmount: s.nullable(s.float64()),
    description: s.nullable(s.string()),
    hours: s.nullable(s.float64()),
    isoCurrencyCode: s.nullable(s.string()),
    rate: s.nullable(s.float64()),
    unofficialCurrencyCode: s.nullable(s.string()),
    ytdAmount: s.nullable(s.float64()),
    _keysMap: {
      canonicalDescription: "canonical_description",
      currentAmount: "current_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      ytdAmount: "ytd_amount",
    },
  });
