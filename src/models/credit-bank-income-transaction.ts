import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The transactions data for the end user's income source(s). */
export type CreditBankIncomeTransaction = {
  /**
   * The settled value of the transaction, denominated in the transaction's currency as stated in
   * `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the
   * account; negative values when money moves in. For example, credit card purchases are positive;
   * credit card payment, direct deposits, and refunds are negative.
   */
  amount?: number;
  /**
   * For pending transactions, the date that the transaction occurred; for posted transactions, the
   * date that the transaction posted. Both dates are returned in an ISO 8601 format (YYYY-MM-DD).
   */
  date?: string;
  /** The merchant name or transaction description. */
  name?: string;
  /** The string returned by the financial institution to describe the transaction. */
  originalDescription?: string | null;
  /**
   * When true, identifies the transaction as pending or unsettled. Pending transaction details
   * (name, type, amount, category ID) may change before they are settled.
   */
  pending?: boolean;
  /**
   * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case
   * sensitive.
   */
  transactionId?: string;
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: string | null;
  /** The ISO 4217 currency code of the amount or balance. */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   */
  unofficialCurrencyCode?: string | null;
};

export const creditBankIncomeTransactionSchema: Schema<CreditBankIncomeTransaction> =
  s.object<CreditBankIncomeTransaction>({
    amount: s.optional(s.float64()),
    date: s.optional(s.dateOnly()),
    name: s.optional(s.string()),
    originalDescription: s.optionalNullable(s.string()),
    pending: s.optional(s.boolean()),
    transactionId: s.optional(s.string()),
    checkNumber: s.optionalNullable(s.string()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      originalDescription: "original_description",
      transactionId: "transaction_id",
      checkNumber: "check_number",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
