import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportInvestmentSecurity = {
  securityId: string;
  name: string | null;
  tickerSymbol: string | null;
  type: string | null;
};

export const assetReportInvestmentSecuritySchema: Schema<AssetReportInvestmentSecurity> =
  s.object<AssetReportInvestmentSecurity>({
    securityId: s.string(),
    name: s.nullable(s.string()),
    tickerSymbol: s.nullable(s.string()),
    type: s.nullable(s.string()),
    _keysMap: {
      securityId: "security_id",
      tickerSymbol: "ticker_symbol",
    },
  });
