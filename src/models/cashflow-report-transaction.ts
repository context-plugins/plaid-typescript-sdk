import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessFinanceCategorySchema, type BusinessFinanceCategory } from "./business-finance-category.js";
import {
  cashflowReportPaymentMetaSchema,
  type CashflowReportPaymentMeta,
} from "./cashflow-report-payment-meta.js";
import { creditCategorySchema, type CreditCategory } from "./credit-category.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionCodeSchema, type TransactionCode } from "./transaction-code.js";
import { transactionCounterpartySchema, type TransactionCounterparty } from "./transaction-counterparty.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import {
  transactionPaymentChannelSchema,
  type TransactionPaymentChannel,
} from "./transaction-payment-channel.js";

/** A representation of a transaction returned from Cashflow Report */
export type CashflowReportTransaction = {
  /** The ID of the account in which this transaction occurred. */
  accountId: string;
  /**
   * The settled value of the transaction, denominated in the transaction's currency, as stated in
   * `iso_currency_code` or `unofficial_currency_code`. For all products except Income: Positive
   * values when money moves out of the account; negative values when money moves in. For example,
   * debit card purchases are positive; credit card payments, direct deposits, and refunds are
   * negative. For Income endpoints, values are positive when representing income.
   */
  amount: number | null;
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
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: string | null;
  /**
   * For pending transactions, the date that the transaction occurred; for posted transactions, the
   * date that the transaction posted. Both dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ). To receive information
   * about the date that a posted transaction was initiated, see the `authorized_date` field.
   */
  date: string;
  /**
   * A representation of where a transaction took place. Location data is provided only for
   * transactions at physical locations, not for online transactions. Location data availability
   * depends primarily on the merchant and is most likely to be populated for transactions at large
   * retail chains; small, local businesses are less likely to have location data available.
   */
  location: TransactionLocation;
  /**
   * The merchant name or transaction description.
   *
   * Note: This is a legacy field that is not actively maintained. Use `merchant_name` instead for
   * the merchant name.
   *
   * If the `transactions` object was returned by a Transactions endpoint such as
   * `/transactions/sync` or `/transactions/get`, this field will always appear. If the
   * `transactions` object was returned by an Assets endpoint such as `/asset_report/get` or
   * `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  name: string | null;
  /**
   * The merchant name, as enriched by Plaid from the `name` field. This is typically a more
   * human-readable version of the merchant counterparty in the transaction. For some bank
   * transactions (such as checks or account transfers) where there is no meaningful merchant name,
   * this value will be `null`.
   */
  merchantName?: string | null;
  /**
   * The string returned by the financial institution to describe the transaction. For transactions
   * returned by `/transactions/sync` or `/transactions/get`, this field will only be included if
   * the client has set `options.include_original_description` to `true`.
   */
  originalDescription?: string | null;
  /**
   * Transaction information specific to inter-bank transfers. If the transaction was not an
   * inter-bank transfer, all fields will be `null`.
   */
  paymentMeta: CashflowReportPaymentMeta;
  /**
   * When `true`, identifies the transaction as pending or unsettled. Pending transaction details
   * (name, type, amount, category ID) may change before they are settled. Not all institutions
   * provide pending transactions.
   */
  pending: boolean | null;
  /**
   * The ID of a posted transaction's associated pending transaction, where applicable. Not all
   * institutions provide pending transactions.
   */
  pendingTransactionId: string | null;
  /**
   * This field is not typically populated and only relevant when dealing with sub-accounts. A
   * sub-account most commonly exists in cases where a single account is linked to multiple cards,
   * each with its own card number and card holder name; each card will be considered a sub-account.
   * If the account does have sub-accounts, this field will typically be some combination of the
   * sub-account owner's name and/or the sub-account mask. The format of this field is not
   * standardized and will vary based on institution.
   */
  accountOwner: string | null;
  /**
   * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case
   * sensitive.
   */
  transactionId: string;
  /**
   * The URL of a logo associated with this transaction, if available. The logo will always be a
   * 100×100 pixel PNG file.
   */
  logoUrl?: string | null;
  /** The website associated with this transaction, if available. */
  website?: string | null;
  /**
   * The date that the transaction was authorized. For posted transactions, the `date` field will
   * indicate the posted date, but `authorized_date` will indicate the day the transaction was
   * authorized by the financial institution. If presenting transactions to the user in a UI, the
   * `authorized_date`, when available, is generally preferable to use over the `date` field for
   * posted transactions, as it will generally represent the date the user actually made the
   * transaction. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (
   * `YYYY-MM-DD` ).
   */
  authorizedDate: string | null;
  /**
   * Date and time when a transaction was authorized in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DDTHH:mm:ssZ` ). For posted
   * transactions, the `datetime` field will indicate the posted date, but `authorized_datetime`
   * will indicate the day the transaction was authorized by the financial institution. If
   * presenting transactions to the user in a UI, the `authorized_datetime`, when available, is
   * generally preferable to use over the `datetime` field for posted transactions, as it will
   * generally represent the date the user actually made the transaction.
   *
   * This field is returned for select financial institutions and comes as provided by the
   * institution. It may contain default time values (such as 00:00:00). This field is only
   * populated in API version 2019-05-29 and later.
   */
  authorizedDatetime: Date | null;
  /**
   * Date and time when a transaction was posted in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ( `YYYY-MM-DDTHH:mm:ssZ` ). For the date that the transaction was initiated, rather than
   * posted, see the `authorized_datetime` field.
   *
   * This field is returned for select financial institutions and comes as provided by the
   * institution. It may contain default time values (such as 00:00:00). This field is only
   * populated in API version 2019-05-29 and later.
   */
  datetime: Date | null;
  /**
   * The channel used to make a payment. `online:` transactions that took place online.
   *
   * `in store:` transactions that were made at a physical location.
   *
   * `other:` transactions that relate to banks, e.g. fees or deposits.
   */
  paymentChannel: TransactionPaymentChannel;
  /**
   * Information describing the intent of the transaction. Most relevant for personal finance use
   * cases, but not limited to such use cases.
   *
   * See the [taxonomy CSV file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list
   * of personal finance categories. If you are migrating to personal finance categories from the
   * legacy categories, also refer to the [migration
   * guide](https://plaid.com/docs/transactions/pfc-migration/).
   */
  personalFinanceCategory?: PersonalFinanceCategory | null;
  /**
   * Information describing the intent of the transaction. Most relevant for business finance use
   * cases, but not limited to such use cases.
   */
  businessFinanceCategory?: BusinessFinanceCategory | null;
  /**
   * Information describing the intent of the transaction. Most relevant for credit use cases, but
   * not limited to such use cases.
   *
   * See the [`taxonomy csv file`](https://plaid.com/documents/credit-category-taxonomy.csv) for a
   * full list of credit categories.
   */
  creditCategory?: CreditCategory | null;
  /**
   * An identifier classifying the transaction type.
   *
   * This field is populated for European institutions, as well as certain institutions in the
   * United States. For institutions where this classification is not available, this field is set
   * to `null`.
   *
   * `adjustment:` Bank adjustment
   *
   * `atm:` Cash deposit or withdrawal via an automated teller machine
   *
   * `bank charge:` Charge or fee levied by the institution
   *
   * `bill payment`: Payment of a bill
   *
   * `cash:` Cash deposit or withdrawal
   *
   * `cash advance:` Cash advance drawn against a credit card or line of credit
   *
   * `cashback:` Cash withdrawal while making a debit card purchase
   *
   * `cheque:` Document ordering the payment of money to another person or organization
   *
   * `direct debit:` Automatic withdrawal of funds initiated by a third party at a regular interval
   *
   * `interest:` Interest earned or incurred
   *
   * `late fee:` Fee associated with a late or past-due payment
   *
   * `membership fee:` Annual or recurring membership fee
   *
   * `payment:` One-off outbound payment not classified as a bill payment, direct debit, or standing
   * order
   *
   * `purchase:` Purchase made with a debit or credit card
   *
   * `refund:` Merchant credit or return, such as a refund of a prior purchase
   *
   * `returned item fee:` Fee for a returned item, such as a returned check or stop payment
   *
   * `standing order:` Payment instructed by the account holder to a third party at a regular
   * interval
   *
   * `transfer:` Transfer of money between accounts
   */
  transactionCode: TransactionCode | null;
  /**
   * The URL of an icon associated with the primary personal finance category. The icon will always
   * be a 100×100 pixel PNG file.
   */
  personalFinanceCategoryIconUrl?: string | null;
  /**
   * The counterparties present in the transaction. Counterparties, such as the merchant or the
   * financial institution, are extracted by Plaid from the raw description.
   */
  counterparties?: TransactionCounterparty[];
  /**
   * A unique, stable, Plaid-generated ID that maps to the merchant. In the case of a merchant with
   * multiple retail locations, this field will map to the broader merchant, not a specific location
   * or store.
   */
  merchantEntityId?: string | null;
};

export const cashflowReportTransactionSchema: Schema<CashflowReportTransaction> =
  s.object<CashflowReportTransaction>({
    accountId: s.string(),
    amount: s.nullable(s.float64()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    checkNumber: s.optionalNullable(s.string()),
    date: s.dateOnly(),
    location: transactionLocationSchema,
    name: s.nullable(s.string()),
    merchantName: s.optionalNullable(s.string()),
    originalDescription: s.optionalNullable(s.string()),
    paymentMeta: cashflowReportPaymentMetaSchema,
    pending: s.nullable(s.boolean()),
    pendingTransactionId: s.nullable(s.string()),
    accountOwner: s.nullable(s.string()),
    transactionId: s.string(),
    logoUrl: s.optionalNullable(s.string()),
    website: s.optionalNullable(s.string()),
    authorizedDate: s.nullable(s.dateOnly()),
    authorizedDatetime: s.nullable(s.dateTime()),
    datetime: s.nullable(s.dateTime()),
    paymentChannel: transactionPaymentChannelSchema,
    personalFinanceCategory: s.optionalNullable(s.lazy(() => personalFinanceCategorySchema)),
    businessFinanceCategory: s.optionalNullable(s.lazy(() => businessFinanceCategorySchema)),
    creditCategory: s.optionalNullable(s.lazy(() => creditCategorySchema)),
    transactionCode: s.nullable(s.lazy(() => transactionCodeSchema)),
    personalFinanceCategoryIconUrl: s.optionalNullable(s.string()),
    counterparties: s.optional(s.array(s.lazy(() => transactionCounterpartySchema))),
    merchantEntityId: s.optionalNullable(s.string()),
    _keysMap: {
      accountId: "account_id",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      checkNumber: "check_number",
      merchantName: "merchant_name",
      originalDescription: "original_description",
      paymentMeta: "payment_meta",
      pendingTransactionId: "pending_transaction_id",
      accountOwner: "account_owner",
      transactionId: "transaction_id",
      logoUrl: "logo_url",
      authorizedDate: "authorized_date",
      authorizedDatetime: "authorized_datetime",
      paymentChannel: "payment_channel",
      personalFinanceCategory: "personal_finance_category",
      businessFinanceCategory: "business_finance_category",
      creditCategory: "credit_category",
      transactionCode: "transaction_code",
      personalFinanceCategoryIconUrl: "personal_finance_category_icon_url",
      merchantEntityId: "merchant_entity_id",
    },
  });
