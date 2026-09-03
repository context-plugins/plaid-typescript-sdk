import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseReportInvestmentSecurity = {
  securityId: string;
  name: string | null;
  isin: string | null;
  cusip: string | null;
  institutionSecurityId: string | null;
  institutionId: string | null;
  tickerSymbol: string | null;
  type: string | null;
};

export const baseReportInvestmentSecuritySchema: Schema<BaseReportInvestmentSecurity> =
  s.object<BaseReportInvestmentSecurity>({
    securityId: s.string(),
    name: s.nullable(s.string()),
    isin: s.nullable(s.string()),
    cusip: s.nullable(s.string()),
    institutionSecurityId: s.nullable(s.string()),
    institutionId: s.nullable(s.string()),
    tickerSymbol: s.nullable(s.string()),
    type: s.nullable(s.string()),
    _keysMap: {
      securityId: "security_id",
      institutionSecurityId: "institution_security_id",
      institutionId: "institution_id",
      tickerSymbol: "ticker_symbol",
    },
  });
