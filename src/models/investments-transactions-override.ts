import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securityOverrideSchema, type SecurityOverride } from "./security-override.js";

/** Specify the list of investments transactions on the account. */
export type InvestmentsTransactionsOverride = {
  /**
   * Posting date for the transaction. Must be formatted as an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) date.
   */
  date: string;
  /** The institution's description of the transaction. */
  name: string;
  /**
   * The number of units of the security involved in this transaction. Must be positive if the type
   * is a buy and negative if the type is a sell.
   */
  quantity: number;
  /** The price of the security at which this transaction occurred. */
  price: number;
  /** The combined value of all fees applied to this transaction. */
  fees?: number;
  /**
   * The type of the investment transaction. Possible values are: `buy`: Buying an investment
   * `sell`: Selling an investment `cash`: Activity that modifies a cash position `fee`: A fee on
   * the account `transfer`: Activity that modifies a position, but not through buy/sell activity
   * e.g. options exercise, portfolio transfer
   */
  type: string;
  /** Either a valid `iso_currency_code` or `unofficial_currency_code` */
  currency: string;
  /**
   * Specify the security associated with the holding or investment transaction. When inputting
   * custom security data to the Sandbox, Plaid will perform post-data-retrieval normalization and
   * enrichment. These processes may cause the data returned by the Sandbox to be slightly different
   * from the data you input. An ISO-4217 currency code and a security identifier (`ticker_symbol`,
   * `cusip`, or `isin`) are required.
   */
  security?: SecurityOverride;
};

export const investmentsTransactionsOverrideSchema: Schema<InvestmentsTransactionsOverride> =
  s.object<InvestmentsTransactionsOverride>({
    date: s.dateOnly(),
    name: s.string(),
    quantity: s.float64(),
    price: s.float64(),
    fees: s.optional(s.float64()),
    type: s.string(),
    currency: s.string(),
    security: s.optional(s.lazy(() => securityOverrideSchema)),
  });
