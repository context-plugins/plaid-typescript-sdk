import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportTransactionTypeSchema,
  type AssetReportTransactionType,
} from "./asset-report-transaction-type.js";
import { creditCategorySchema, type CreditCategory } from "./credit-category.js";
import { paymentMetaSchema, type PaymentMeta } from "./payment-meta.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";

/** A transaction on the asset report */
export type AssetReportTransaction = {
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
  /** The string returned by the financial institution to describe the transaction. */
  originalDescription: string | null;
  /**
   * A hierarchical array of the categories to which this transaction belongs. For a full list of
   * categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * This field will only appear in an Asset Report with Insights.
   */
  category?: string[] | null;
  /**
   * The ID of the category to which this transaction belongs. For a full list of categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * This field will only appear in an Asset Report with Insights.
   */
  categoryId?: string | null;
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
   * The merchant name or transaction description. This is a legacy field that is no longer
   * maintained. For merchant name, use the `merchant_name` field. For description, use the
   * `original_description` field.
   *
   * This field will only appear in an Asset Report with Insights.
   *
   * @deprecated
   */
  name?: string;
  /**
   * The merchant name, as enriched by Plaid. This is typically a more human-readable version of the
   * merchant counterparty in the transaction. For some bank transactions (such as checks or account
   * transfers) where there is no meaningful merchant name, this value will be `null`.
   */
  merchantName?: string | null;
  /**
   * Transaction information specific to inter-bank transfers. If the transaction was not an
   * inter-bank transfer, all fields will be `null`.
   *
   * If the `transactions` object was returned by a Transactions endpoint such as
   * `/transactions/sync` or `/transactions/get`, the `payment_meta` key will always appear, but no
   * data elements are guaranteed. If the `transactions` object was returned by an Assets endpoint
   * such as `/asset_report/get` or `/asset_report/pdf/get`, this field will only appear in an Asset
   * Report with Insights.
   */
  paymentMeta?: PaymentMeta;
  /**
   * When `true`, identifies the transaction as pending or unsettled. Pending transaction details
   * (name, type, amount, category ID) may change before they are settled.
   */
  pending: boolean;
  /** The ID of a posted transaction's associated pending transaction, where applicable. */
  pendingTransactionId?: string | null;
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
   * `unresolved:` transactions that do not fit into the other three types.
   */
  transactionType?: AssetReportTransactionType;
  /** A unique identifier for an income source. */
  incomeSourceId?: string;
};

export const assetReportTransactionSchema: Schema<AssetReportTransaction> = s.object<AssetReportTransaction>({
  accountId: s.string(),
  amount: s.float64(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  originalDescription: s.nullable(s.string()),
  category: s.optionalNullable(s.array(s.string())),
  categoryId: s.optionalNullable(s.string()),
  creditCategory: s.optionalNullable(s.lazy(() => creditCategorySchema)),
  checkNumber: s.optionalNullable(s.string()),
  date: s.dateOnly(),
  dateTransacted: s.optionalNullable(s.string()),
  location: s.optional(s.lazy(() => transactionLocationSchema)),
  name: s.optional(s.string()),
  merchantName: s.optionalNullable(s.string()),
  paymentMeta: s.optional(s.lazy(() => paymentMetaSchema)),
  pending: s.boolean(),
  pendingTransactionId: s.optionalNullable(s.string()),
  accountOwner: s.optionalNullable(s.string()),
  transactionId: s.string(),
  transactionType: s.optional(s.lazy(() => assetReportTransactionTypeSchema)),
  incomeSourceId: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    originalDescription: "original_description",
    categoryId: "category_id",
    creditCategory: "credit_category",
    checkNumber: "check_number",
    dateTransacted: "date_transacted",
    merchantName: "merchant_name",
    paymentMeta: "payment_meta",
    pendingTransactionId: "pending_transaction_id",
    accountOwner: "account_owner",
    transactionId: "transaction_id",
    transactionType: "transaction_type",
    incomeSourceId: "income_source_id",
  },
});
