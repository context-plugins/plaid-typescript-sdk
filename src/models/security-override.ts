import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecurityOverride = {
  isin?: string;
  cusip?: string;
  sedol?: string;
  name?: string;
  tickerSymbol?: string;
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
