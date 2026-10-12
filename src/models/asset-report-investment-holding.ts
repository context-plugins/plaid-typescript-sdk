import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A securities holding at an institution. */
export type AssetReportInvestmentHolding = {
  /** The Plaid `account_id` associated with the holding. */
  accountId: string;
  /**
   * The Plaid `security_id` associated with the holding. Security data is not specific to a user's
   * account; any user who held the same security at the same financial institution at the same time
   * would have identical security data. The `security_id` for the same security will typically be
   * the same across different institutions, but this is not guaranteed. The `security_id` does not
   * typically change, but may change if inherent details of the security change due to a corporate
   * action, for example, in the event of a ticker symbol change or CUSIP change.
   */
  securityId: string;
  /**
   * The holding's trading symbol for publicly traded holdings, and otherwise a short identifier if
   * available.
   */
  tickerSymbol: string | null;
  /** The last price given by the institution for this security. */
  institutionPrice: number;
  /** The date at which `institution_price` was current. */
  institutionPriceAsOf?: string | null;
  /** The value of the holding, as reported by the institution. */
  institutionValue: number;
  /**
   * The original total value of the holding. This field is calculated by Plaid as the sum of the
   * purchase price of all of the shares in the holding.
   */
  costBasis: number | null;
  /**
   * The total quantity of the asset held, as reported by the financial institution. If the security
   * is an option, `quantity` will reflect the total number of options (typically the number of
   * contracts multiplied by 100), not the number of contracts.
   */
  quantity: number;
  /**
   * The ISO-4217 currency code of the holding. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the holding. Always `null` if `iso_currency_code`
   * is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO
   * currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
};

export const assetReportInvestmentHoldingSchema: Schema<AssetReportInvestmentHolding> =
  s.object<AssetReportInvestmentHolding>({
    accountId: s.string(),
    securityId: s.string(),
    tickerSymbol: s.nullable(s.string()),
    institutionPrice: s.float64(),
    institutionPriceAsOf: s.optionalNullable(s.dateOnly()),
    institutionValue: s.float64(),
    costBasis: s.nullable(s.float64()),
    quantity: s.float64(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      accountId: "account_id",
      securityId: "security_id",
      tickerSymbol: "ticker_symbol",
      institutionPrice: "institution_price",
      institutionPriceAsOf: "institution_price_as_of",
      institutionValue: "institution_value",
      costBasis: "cost_basis",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
