import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentTransactionSubtypeSchema,
  type InvestmentTransactionSubtype,
} from "./investment-transaction-subtype.js";
import {
  investmentTransactionTypeSchema,
  type InvestmentTransactionType,
} from "./investment-transaction-type.js";

/** A transaction within an investment account. */
export type AssetReportInvestmentTransaction = {
  /**
   * The ID of the Investment transaction, unique across all Plaid transactions. Like all Plaid
   * identifiers, the `investment_transaction_id` is case sensitive.
   */
  investmentTransactionId: string;
  /** The `account_id` of the account against which this transaction posted. */
  accountId: string;
  /** The `security_id` to which this transaction is related. */
  securityId: string | null;
  /** The [ISO 8601](https://wikipedia.org/wiki/ISO_8601) posting date for the transaction. */
  date: string;
  /** The institution's description of the transaction. */
  name: string;
  /**
   * The number of units of the security involved in this transaction. Positive for buy
   * transactions; negative for sell transactions.
   */
  quantity: number;
  /**
   * The total quantity of vested assets held, as reported by the financial institution. Vested
   * assets are only associated with
   * [equities](https://plaid.com/docs/api/products/investments/#investments-holdings-get-response-securities-type).
   */
  vestedQuantity: number;
  /** The value of the vested holdings as reported by the institution. */
  vestedValue: number;
  /**
   * The complete value of the transaction. Positive values when cash is debited, e.g. purchases of
   * stock; negative values when cash is credited, e.g. sales of stock. Treatment remains the same
   * for cash-only movements unassociated with securities. For transactions representing a
   * simultaneous cash contribution and purchase of a security, the portion of the transaction
   * representing the purchase takes precedence, and the `amount` is represented as positive.
   */
  amount: number;
  /** The price of the security at which this transaction occurred. */
  price: number;
  /** The combined value of all fees applied to this transaction */
  fees: number | null;
  /**
   * Value is one of the following: `buy`: Buying an investment `sell`: Selling an investment
   * `cancel`: A cancellation of a pending transaction `cash`: Activity that modifies a cash
   * position `fee`: A fee on the account `transfer`: Activity which modifies a position, but not
   * through buy/sell activity e.g. options exercise, portfolio transfer
   *
   * For descriptions of possible transaction types and subtypes, see the [Investment transaction
   * types schema](https://plaid.com/docs/api/accounts/#investment-transaction-types-schema).
   */
  type: InvestmentTransactionType;
  /**
   * For descriptions of possible transaction types and subtypes, see the [Investment transaction
   * types schema](https://plaid.com/docs/api/accounts/#investment-transaction-types-schema).
   */
  subtype: InvestmentTransactionSubtype;
  /**
   * The ISO-4217 currency code of the transaction. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the transaction. Always `null` if
   * `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do
   * not have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
};

export const assetReportInvestmentTransactionSchema: Schema<AssetReportInvestmentTransaction> =
  s.object<AssetReportInvestmentTransaction>({
    investmentTransactionId: s.string(),
    accountId: s.string(),
    securityId: s.nullable(s.string()),
    date: s.dateOnly(),
    name: s.string(),
    quantity: s.float64(),
    vestedQuantity: s.float64(),
    vestedValue: s.float64(),
    amount: s.float64(),
    price: s.float64(),
    fees: s.nullable(s.float64()),
    type: investmentTransactionTypeSchema,
    subtype: investmentTransactionSubtypeSchema,
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      investmentTransactionId: "investment_transaction_id",
      accountId: "account_id",
      securityId: "security_id",
      vestedQuantity: "vested_quantity",
      vestedValue: "vested_value",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
