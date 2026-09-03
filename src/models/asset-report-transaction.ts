import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportTransactionTypeSchema,
  type AssetReportTransactionType,
} from "./asset-report-transaction-type.js";
import { creditCategorySchema, type CreditCategory } from "./credit-category.js";
import { paymentMetaSchema, type PaymentMeta } from "./payment-meta.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";

export type AssetReportTransaction = {
  accountId: string;
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  originalDescription: string | null;
  category?: string[] | null;
  categoryId?: string | null;
  creditCategory?: CreditCategory | null;
  checkNumber?: string | null;
  date: string;
  dateTransacted?: string | null;
  location?: TransactionLocation;
  name?: string;
  merchantName?: string | null;
  paymentMeta?: PaymentMeta;
  pending: boolean;
  pendingTransactionId?: string | null;
  accountOwner?: string | null;
  transactionId: string;
  transactionType?: AssetReportTransactionType;
  incomeSourceId?: string;
};

export const assetReportTransactionSchema: Schema<AssetReportTransaction> = s.object<AssetReportTransaction>({
  accountId: s.string(),
  amount: s.number(),
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
