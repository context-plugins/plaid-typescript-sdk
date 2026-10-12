import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securityOverrideSchema, type SecurityOverride } from "./security-override.js";

/** Specify the holdings on the account. */
export type HoldingsOverride = {
  /** The last price given by the institution for this security */
  institutionPrice: number;
  /**
   * The date at which `institution_price` was current. Must be formatted as an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) date.
   */
  institutionPriceAsOf?: string;
  /**
   * The total cost basis of the holding (e.g., the total amount spent to acquire all assets
   * currently in the holding).
   */
  costBasis?: number;
  /** The total quantity of the asset held, as reported by the financial institution. */
  quantity: number;
  /** Either a valid `iso_currency_code` or `unofficial_currency_code` */
  currency: string;
  /**
   * Specify the security associated with the holding or investment transaction. When inputting
   * custom security data to the Sandbox, Plaid will perform post-data-retrieval normalization and
   * enrichment. These processes may cause the data returned by the Sandbox to be slightly different
   * from the data you input. An ISO-4217 currency code and a security identifier (`ticker_symbol`,
   * `cusip`, or `isin`) are required.
   */
  security: SecurityOverride;
};

export const holdingsOverrideSchema: Schema<HoldingsOverride> = s.object<HoldingsOverride>({
  institutionPrice: s.float64(),
  institutionPriceAsOf: s.optional(s.dateOnly()),
  costBasis: s.optional(s.float64()),
  quantity: s.float64(),
  currency: s.string(),
  security: securityOverrideSchema,
  _keysMap: {
    institutionPrice: "institution_price",
    institutionPriceAsOf: "institution_price_as_of",
    costBasis: "cost_basis",
  },
});
