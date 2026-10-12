import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specify the security associated with the holding or investment transaction. When inputting custom
 * security data to the Sandbox, Plaid will perform post-data-retrieval normalization and
 * enrichment. These processes may cause the data returned by the Sandbox to be slightly different
 * from the data you input. An ISO-4217 currency code and a security identifier (`ticker_symbol`,
 * `cusip`, or `isin`) are required.
 */
export type SecurityOverride = {
  /**
   * 12-character ISIN, a globally unique securities identifier. A verified CUSIP Global Services
   * license is required to receive this data. This field will be null by default for new customers,
   * and null for existing customers starting March 12, 2024. If you would like access to this
   * field, please [request ISIN/CUSIP access
   * here](https://docs.google.com/forms/d/e/1FAIpQLSd9asHEYEfmf8fxJTHZTAfAzW4dugsnSu-HS2J51f1mxwd6Sw/viewform).
   */
  isin?: string;
  /**
   * 9-character CUSIP, an identifier assigned to North American securities. A verified CUSIP Global
   * Services license is required to receive this data. This field will be null by default for new
   * customers, and null for existing customers starting March 12, 2024. If you would like access to
   * this field, please [request ISIN/CUSIP access
   * here](https://docs.google.com/forms/d/e/1FAIpQLSd9asHEYEfmf8fxJTHZTAfAzW4dugsnSu-HS2J51f1mxwd6Sw/viewform).
   */
  cusip?: string;
  /**
   * (Deprecated) 7-character SEDOL, an identifier assigned to securities in the UK.
   *
   * @deprecated
   */
  sedol?: string;
  /** A descriptive name for the security, suitable for display. */
  name?: string;
  /**
   * The security's trading symbol for publicly traded securities, and otherwise a short identifier
   * if available.
   */
  tickerSymbol?: string;
  /** Either a valid `iso_currency_code` or `unofficial_currency_code` */
  currency?: string;
};

export const securityOverrideSchema: Schema<SecurityOverride> = s.object<SecurityOverride>({
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  sedol: s.optional(s.string()),
  name: s.optional(s.string()),
  tickerSymbol: s.optional(s.string()),
  currency: s.optional(s.string()),
  _keysMap: {
    tickerSymbol: "ticker_symbol",
  },
});
