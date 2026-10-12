import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  earningsBreakdownCanonicalDescriptionSchema,
  type EarningsBreakdownCanonicalDescription,
} from "./earnings-breakdown-canonical-description.js";

/** An object representing the earnings line items for the pay period. */
export type EarningsBreakdown = {
  /** Commonly used term to describe the earning line item. */
  canonicalDescription?: EarningsBreakdownCanonicalDescription | null;
  /** Raw amount of the earning line item. */
  currentAmount?: number | null;
  /** Description of the earning line item. */
  description?: string | null;
  /** Number of hours applicable for this earning. */
  hours?: number | null;
  /**
   * The ISO-4217 currency code of the line item. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode?: string | null;
  /** Hourly rate applicable for this earning. */
  rate?: number | null;
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
  /** The year-to-date amount of the line item. */
  ytdAmount?: number | null;
};

export const earningsBreakdownSchema: Schema<EarningsBreakdown> = s.object<EarningsBreakdown>({
  canonicalDescription: s.optionalNullable(s.lazy(() => earningsBreakdownCanonicalDescriptionSchema)),
  currentAmount: s.optionalNullable(s.float64()),
  description: s.optionalNullable(s.string()),
  hours: s.optionalNullable(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  rate: s.optionalNullable(s.float64()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.float64()),
  _keysMap: {
    canonicalDescription: "canonical_description",
    currentAmount: "current_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
