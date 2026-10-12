import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Investment security associated with the account. */
export type AssetReportInvestmentSecurity = {
  /**
   * A unique, Plaid-specific identifier for the security, used to associate securities with
   * holdings. Like all Plaid identifiers, the `security_id` is case sensitive. The `security_id`
   * may change if inherent details of the security change due to a corporate action, for example,
   * in the event of a ticker symbol change or CUSIP change.
   */
  securityId: string;
  /** A descriptive name for the security, suitable for display. */
  name: string | null;
  /**
   * The security's trading symbol for publicly traded securities, and otherwise a short identifier
   * if available.
   */
  tickerSymbol: string | null;
  /**
   * The security type of the holding. Valid security types are:
   *
   * `cash`: Cash, currency, and money market funds
   *
   * `cryptocurrency`: Digital or virtual currencies
   *
   * `derivative`: Options, warrants, and other derivative instruments
   *
   * `equity`: Domestic and foreign equities
   *
   * `etf`: Multi-asset exchange-traded investment funds
   *
   * `fixed income`: Bonds and certificates of deposit (CDs)
   *
   * `loan`: Loans and loan receivables
   *
   * `mutual fund`: Open- and closed-end vehicles pooling funds of multiple investors
   *
   * `other`: Unknown or other investment types
   */
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
