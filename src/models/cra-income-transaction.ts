import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craIncomeTransactionOutlierSchema,
  type CraIncomeTransactionOutlier,
} from "./cra-income-transaction-outlier.js";

/** The transaction data for an income stream. */
export type CraIncomeTransaction = {
  /**
   * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case
   * sensitive.
   */
  transactionId: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /**
   * Plaid's unique identifier for the account. This value will not change unless Plaid can't
   * reconcile the account with the data returned by the financial institution. This may occur, for
   * example, when the name of the account changes. If this happens a new `account_id` will be
   * assigned to the account.
   *
   * If an account with a specific `account_id` disappears instead of changing, the account is
   * likely closed. Closed accounts are not returned by the Plaid API.
   *
   * Like all Plaid identifiers, the `account_id` is case sensitive.
   */
  accountId: string;
  /**
   * The settled value of the transaction, denominated in the transaction's currency as stated in
   * `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the
   * account; negative values when money moves in. For example, credit card purchases are positive;
   * credit card payment, direct deposits, and refunds are negative.
   */
  amount: number;
  /**
   * For pending transactions, the date that the transaction occurred; for posted transactions, the
   * date that the transaction posted. Both dates are returned in an ISO 8601 format (YYYY-MM-DD).
   */
  date: string;
  /** The string returned by the financial institution to describe the transaction. */
  originalDescription: string;
  /** The ISO 4217 currency code of the amount or balance. */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   */
  unofficialCurrencyCode: string | null;
  /** Metadata on whether this income transaction is an outlier. */
  outlier: CraIncomeTransactionOutlier;
};

export const craIncomeTransactionSchema: Schema<CraIncomeTransaction> = s.object<CraIncomeTransaction>({
  transactionId: s.string(),
  itemId: s.string(),
  accountId: s.string(),
  amount: s.float64(),
  date: s.dateOnly(),
  originalDescription: s.string(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  outlier: craIncomeTransactionOutlierSchema,
  _keysMap: {
    transactionId: "transaction_id",
    itemId: "item_id",
    accountId: "account_id",
    originalDescription: "original_description",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
