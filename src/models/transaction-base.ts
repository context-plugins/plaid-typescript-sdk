import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMetaSchema, type PaymentMeta } from "./payment-meta.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";

export type TransactionBase = {
  accountId: string;
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  category?: string[] | null;
  categoryId?: string | null;
  checkNumber?: string | null;
  date: string;
  location?: TransactionLocation;
  name?: string;
  merchantName?: string | null;
  originalDescription?: string | null;
  paymentMeta?: PaymentMeta;
  pending: boolean;
  pendingTransactionId?: string | null;
  accountOwner?: string | null;
  transactionId: string;
  transactionType?: TransactionType;
  logoUrl?: string | null;
  website?: string | null;
};

export const transactionBaseSchema: Schema<TransactionBase> = s.object<TransactionBase>({
  accountId: s.string(),
  amount: s.number(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  category: s.optionalNullable(s.array(s.string())),
  categoryId: s.optionalNullable(s.string()),
  checkNumber: s.optionalNullable(s.string()),
  date: s.dateOnly(),
  location: s.optional(s.lazy(() => transactionLocationSchema)),
  name: s.optional(s.string()),
  merchantName: s.optionalNullable(s.string()),
  originalDescription: s.optionalNullable(s.string()),
  paymentMeta: s.optional(s.lazy(() => paymentMetaSchema)),
  pending: s.boolean(),
  pendingTransactionId: s.optionalNullable(s.string()),
  accountOwner: s.optionalNullable(s.string()),
  transactionId: s.string(),
  transactionType: s.optional(s.lazy(() => transactionTypeSchema)),
  logoUrl: s.optionalNullable(s.string()),
  website: s.optionalNullable(s.string()),
  _keysMap: {
    accountId: "account_id",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    categoryId: "category_id",
    checkNumber: "check_number",
    merchantName: "merchant_name",
    originalDescription: "original_description",
    paymentMeta: "payment_meta",
    pendingTransactionId: "pending_transaction_id",
    accountOwner: "account_owner",
    transactionId: "transaction_id",
    transactionType: "transaction_type",
    logoUrl: "logo_url",
  },
});
