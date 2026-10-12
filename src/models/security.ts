import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fixedIncomeSchema, type FixedIncome } from "./fixed-income.js";
import { optionContractSchema, type OptionContract } from "./option-contract.js";

/** Contains details about a security */
export type Security = {
  /**
   * A unique, Plaid-specific identifier for the security, used to associate securities with
   * holdings. Like all Plaid identifiers, the `security_id` is case sensitive. The `security_id`
   * may change if inherent details of the security change due to a corporate action, for example,
   * in the event of a ticker symbol change or CUSIP change.
   */
  securityId: string;
  /**
   * 12-character ISIN, a globally unique securities identifier. A verified CUSIP Global Services
   * license is required to receive this data. This field will be null by default for new customers,
   * and null for existing customers starting March 12, 2024. If you would like access to this
   * field, please start the verification process
   * [here](https://docs.google.com/forms/d/e/1FAIpQLSd9asHEYEfmf8fxJTHZTAfAzW4dugsnSu-HS2J51f1mxwd6Sw/viewform).
   */
  isin: string | null;
  /**
   * 9-character CUSIP, an identifier assigned to North American securities. A verified CUSIP Global
   * Services license is required to receive this data. This field will be null by default for new
   * customers, and null for existing customers starting March 12, 2024. If you would like access to
   * this field, please start the verification process
   * [here](https://docs.google.com/forms/d/e/1FAIpQLSd9asHEYEfmf8fxJTHZTAfAzW4dugsnSu-HS2J51f1mxwd6Sw/viewform).
   */
  cusip: string | null;
  /**
   * (Deprecated) 7-character SEDOL, an identifier assigned to securities in the UK.
   *
   * @deprecated
   */
  sedol: string | null;
  /** An identifier given to the security by the institution */
  institutionSecurityId: string | null;
  /**
   * If `institution_security_id` is present, this field indicates the Plaid `institution_id` of the
   * institution to whom the identifier belongs.
   */
  institutionId: string | null;
  /**
   * In certain cases, Plaid will provide the ID of another security whose performance resembles
   * this security, typically when the original security has low volume, or when a private security
   * can be modeled with a publicly traded security.
   */
  proxySecurityId: string | null;
  /** A descriptive name for the security, suitable for display. */
  name: string | null;
  /**
   * The security's trading symbol for publicly traded securities, and otherwise a short identifier
   * if available.
   */
  tickerSymbol: string | null;
  /** Indicates that a security is a highly liquid asset and can be treated like cash. */
  isCashEquivalent: boolean | null;
  /**
   * The security type of the holding.
   *
   * In rare instances, a null value is returned when institutional data is insufficient to
   * determine the security type.
   *
   * Valid security types are:
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
  /**
   * The security subtype of the holding.
   *
   * In rare instances, a null value is returned when institutional data is insufficient to
   * determine the security subtype.
   *
   * Possible values: `asset backed security`, `bill`, `bond`, `bond with warrants`, `cash`, `cash
   * management bill`, `common stock`, `convertible bond`, `convertible equity`, `cryptocurrency`,
   * `depositary receipt`, `depositary receipt on debt`, `etf`, `float rating note`, `fund of
   * funds`, `hedge fund`, `limited partnership unit`, `medium term note`, `money market debt`,
   * `mortgage backed security`, `municipal bond`, `mutual fund`, `note`, `option`, `other`,
   * `preferred convertible`, `preferred equity`, `private equity fund`, `real estate investment
   * trust`, `structured equity product`, `treasury inflation protected securities`, `unit`,
   * `warrant`.
   */
  subtype?: string | null;
  /**
   * Price of the security at the close of the previous trading session. Null for non-public
   * securities.
   *
   * If the security is a foreign currency this field will be updated daily and will be priced in
   * USD.
   *
   * If the security is a cryptocurrency, this field will be updated multiple times a day. As crypto
   * prices can fluctuate quickly and data may become stale sooner than other asset classes, refer
   * to `update_datetime` with the time when the price was last updated.
   */
  closePrice: number | null;
  /** Date for which `close_price` is accurate. Always `null` if `close_price` is `null`. */
  closePriceAsOf: string | null;
  /**
   * Date and time at which `close_price` is accurate, in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ).
   * Always `null` if `close_price` is `null`.
   */
  updateDatetime?: Date | null;
  /**
   * The ISO-4217 currency code of the price given. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the security. Always `null` if `iso_currency_code`
   * is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO
   * currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
  /**
   * The ISO-10383 Market Identifier Code of the exchange or market in which the security is being
   * traded.
   */
  marketIdentifierCode: string | null;
  /**
   * The sector classification of the security, such as Finance, Health Technology, etc.
   *
   * For a complete list of possible values, please refer to the ["Sectors and Industries"
   * spreadsheet](https://docs.google.com/spreadsheets/d/1L7aXUdqLhxgM8qe7hK67qqKXiUdQqILpwZ0LpxvCVnc).
   */
  sector: string | null;
  /**
   * The industry classification of the security, such as Biotechnology, Airlines, etc.
   *
   * For a complete list of possible values, please refer to the ["Sectors and Industries"
   * spreadsheet](https://docs.google.com/spreadsheets/d/1L7aXUdqLhxgM8qe7hK67qqKXiUdQqILpwZ0LpxvCVnc).
   */
  industry: string | null;
  /**
   * The ISO-10962 Classification of Financial Instruments Code used to classify the security based
   * on its structure and function.
   */
  cfiCode: string | null;
  /**
   * 12-character FIGI, a unique Financial Instrument Global Identifier assigned to securities that
   * is immutable and stays consistent across most corporate actions. This is an open data standard
   * issued by the Object Management Group and administered by Bloomberg L.P.
   */
  figi: string | null;
  /**
   * Details about the option security.
   *
   * For the Sandbox environment, this data is currently only available if the Item is using a
   * [custom Sandbox user](https://plaid.com/docs/sandbox/user-custom/) and the `ticker` field of
   * the custom security follows the [OCC Option
   * Symbol](https://en.wikipedia.org/wiki/Option_symbol#The_OCC_Option_Symbol) standard with no
   * spaces. For an example of simulating this in Sandbox, see the [custom Sandbox
   * GitHub](https://github.com/plaid/sandbox-custom-users).
   */
  optionContract: OptionContract | null;
  /** Details about the fixed income security. */
  fixedIncome: FixedIncome | null;
};

export const securitySchema: Schema<Security> = s.object<Security>({
  securityId: s.string(),
  isin: s.nullable(s.string()),
  cusip: s.nullable(s.string()),
  sedol: s.nullable(s.string()),
  institutionSecurityId: s.nullable(s.string()),
  institutionId: s.nullable(s.string()),
  proxySecurityId: s.nullable(s.string()),
  name: s.nullable(s.string()),
  tickerSymbol: s.nullable(s.string()),
  isCashEquivalent: s.nullable(s.boolean()),
  type: s.nullable(s.string()),
  subtype: s.optionalNullable(s.string()),
  closePrice: s.nullable(s.float64()),
  closePriceAsOf: s.nullable(s.dateOnly()),
  updateDatetime: s.optionalNullable(s.dateTime()),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  marketIdentifierCode: s.nullable(s.string()),
  sector: s.nullable(s.string()),
  industry: s.nullable(s.string()),
  cfiCode: s.nullable(s.string()),
  figi: s.nullable(s.string()),
  optionContract: s.nullable(s.lazy(() => optionContractSchema)),
  fixedIncome: s.nullable(s.lazy(() => fixedIncomeSchema)),
  _keysMap: {
    securityId: "security_id",
    institutionSecurityId: "institution_security_id",
    institutionId: "institution_id",
    proxySecurityId: "proxy_security_id",
    tickerSymbol: "ticker_symbol",
    isCashEquivalent: "is_cash_equivalent",
    closePrice: "close_price",
    closePriceAsOf: "close_price_as_of",
    updateDatetime: "update_datetime",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    marketIdentifierCode: "market_identifier_code",
    cfiCode: "cfi_code",
    optionContract: "option_contract",
    fixedIncome: "fixed_income",
  },
});
