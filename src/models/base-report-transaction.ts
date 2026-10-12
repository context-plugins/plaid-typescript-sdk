import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  baseReportTransactionTypeSchema,
  type BaseReportTransactionType,
} from "./base-report-transaction-type.js";
import { creditCategorySchema, type CreditCategory } from "./credit-category.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";

/** A transaction on the Base Report */
export type BaseReportTransaction = {
  /** The ID of the account in which this transaction occurred. */
  accountId: string;
  /**
   * The settled value of the transaction, denominated in the transaction's currency, as stated in
   * `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the
   * account; negative values when money moves in. For example, debit card purchases are positive;
   * credit card payments, direct deposits, and refunds are negative.
   */
  amount: number;
  /**
   * The ISO-4217 currency code of the transaction. Always `null` if `unofficial_currency_code` is
   * non-null.
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
  /**
   * The merchant name or transaction description.
   *
   * Note: This is a legacy field that is not actively maintained. Use `merchant_name` instead for
   * the merchant name.
   *
   * @deprecated
   */
  name?: string | null;
  /** The string returned by the financial institution to describe the transaction. */
  originalDescription: string | null;
  /**
   * Information describing the intent of the transaction. Most relevant for credit use cases, but
   * not limited to such use cases.
   *
   * See the [`taxonomy csv file`](https://plaid.com/documents/credit-category-taxonomy.csv) for a
   * full list of credit categories.
   */
  creditCategory?: CreditCategory | null;
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: string | null;
  /**
   * For pending transactions, the date that the transaction occurred; for posted transactions, the
   * date that the transaction posted. Both dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ).
   */
  date: string;
  /** The date on which the transaction took place, in ISO 8601 format. */
  dateTransacted?: string | null;
  /**
   * A representation of where a transaction took place. Location data is provided only for
   * transactions at physical locations, not for online transactions. Location data availability
   * depends primarily on the merchant and is most likely to be populated for transactions at large
   * retail chains; small, local businesses are less likely to have location data available.
   */
  location?: TransactionLocation;
  /**
   * The merchant name, as enriched by Plaid from the `name` field. This is typically a more
   * human-readable version of the merchant counterparty in the transaction. For some bank
   * transactions (such as checks or account transfers) where there is no meaningful merchant name,
   * this value will be `null`.
   */
  merchantName?: string | null;
  /**
   * When `true`, identifies the transaction as pending or unsettled. Pending transaction details
   * (name, type, amount, category ID) may change before they are settled.
   */
  pending: boolean;
  /**
   * The name of the account owner. This field is not typically populated and only relevant when
   * dealing with sub-accounts.
   */
  accountOwner?: string | null;
  /**
   * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case
   * sensitive.
   */
  transactionId: string;
  /**
   * `digital:` transactions that took place online.
   *
   * `place:` transactions that were made at a physical location.
   *
   * `special:` transactions that relate to banks, e.g. fees or deposits.
   *
   * `unresolved:` transactions that do not fit into the other types.
   */
  transactionType?: BaseReportTransactionType | null;
  /**
   * A hierarchical array of the categories to which this transaction belongs. For a full list of
   * categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   */
  category?: string[] | null;
  /**
   * The ID of the category to which this transaction belongs. For a full list of categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   */
  categoryId?: string | null;
  personalFinanceCategory?: PersonalFinanceCategory | null;
};

export const baseReportTransactionSchema: Schema<BaseReportTransaction> = s.object<BaseReportTransaction>({
  accountId: s.string(),
  amount: s.float64(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  name: s.optionalNullable(s.string()),
  originalDescription: s.nullable(s.string()),
  creditCategory: s.optionalNullable(s.lazy(() => creditCategorySchema)),
  checkNumber: s.optionalNullable(s.string()),
  date: s.dateOnly(),
  dateTransacted: s.optionalNullable(s.string()),
  location: s.optional(s.lazy(() => transactionLocationSchema)),
  merchantName: s.optionalNullable(s.string()),
  pending: s.boolean(),
  accountOwner: s.optionalNullable(s.string()),
  transactionId: s.string(),
  transactionType: s.optionalNullable(s.lazy(() => baseReportTransactionTypeSchema)),
  category: s.optionalNullable(s.array(s.string())),
  categoryId: s.optionalNullable(s.string()),
  personalFinanceCategory: s.optionalNullable(s.lazy(() => personalFinanceCategorySchema)),
  _keysMap: {
    accountId: "account_id",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    originalDescription: "original_description",
    creditCategory: "credit_category",
    checkNumber: "check_number",
    dateTransacted: "date_transacted",
    merchantName: "merchant_name",
    accountOwner: "account_owner",
    transactionId: "transaction_id",
    transactionType: "transaction_type",
    categoryId: "category_id",
    personalFinanceCategory: "personal_finance_category",
  },
});
