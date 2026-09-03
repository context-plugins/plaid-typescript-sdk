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

export type CashflowReportTransaction = {
  accountId: string;
  amount: number | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  checkNumber?: string | null;
  date: string;
  location: TransactionLocation;
  name: string | null;
  merchantName?: string | null;
  originalDescription?: string | null;
  paymentMeta: CashflowReportPaymentMeta;
  pending: boolean | null;
  pendingTransactionId: string | null;
  accountOwner: string | null;
  transactionId: string;
  logoUrl?: string | null;
  website?: string | null;
  authorizedDate: string | null;
  authorizedDatetime: Date | null;
  datetime: Date | null;
  paymentChannel: TransactionPaymentChannel;
  personalFinanceCategory?: PersonalFinanceCategory | null;
  businessFinanceCategory?: BusinessFinanceCategory | null;
  creditCategory?: CreditCategory | null;
  transactionCode: TransactionCode | null;
  personalFinanceCategoryIconUrl?: string | null;
  counterparties?: TransactionCounterparty[];
  merchantEntityId?: string | null;
};

export const cashflowReportTransactionSchema: Schema<CashflowReportTransaction> =
  s.object<CashflowReportTransaction>({
    accountId: s.string(),
    amount: s.nullable(s.number()),
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
