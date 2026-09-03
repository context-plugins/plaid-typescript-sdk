import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessFinanceCategorySchema, type BusinessFinanceCategory } from "./business-finance-category.js";
import { clientCustomizationSchema, type ClientCustomization } from "./client-customization.js";
import { paymentChannelSchema, type PaymentChannel } from "./payment-channel.js";
import { paymentMetaSchema, type PaymentMeta } from "./payment-meta.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionCodeSchema, type TransactionCode } from "./transaction-code.js";
import { transactionCounterpartySchema, type TransactionCounterparty } from "./transaction-counterparty.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";

export type Transaction = {
  accountId: string;
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  category?: string[] | null;
  categoryId?: string | null;
  checkNumber?: string | null;
  date: string;
  location: TransactionLocation;
  name: string;
  merchantName?: string | null;
  originalDescription?: string | null;
  paymentMeta: PaymentMeta;
  pending: boolean;
  pendingTransactionId: string | null;
  accountOwner: string | null;
  transactionId: string;
  transactionType?: TransactionType;
  logoUrl?: string | null;
  website?: string | null;
  authorizedDate: string | null;
  authorizedDatetime: Date | null;
  datetime: Date | null;
  paymentChannel: PaymentChannel;
  personalFinanceCategory?: PersonalFinanceCategory | null;
  businessFinanceCategory?: BusinessFinanceCategory | null;
  transactionCode: TransactionCode | null;
  personalFinanceCategoryIconUrl?: string;
  counterparties?: TransactionCounterparty[];
  merchantEntityId?: string | null;
  clientCustomization?: ClientCustomization | null;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  accountId: s.string(),
  amount: s.number(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  category: s.optionalNullable(s.array(s.string())),
  categoryId: s.optionalNullable(s.string()),
  checkNumber: s.optionalNullable(s.string()),
  date: s.dateOnly(),
  location: transactionLocationSchema,
  name: s.string(),
  merchantName: s.optionalNullable(s.string()),
  originalDescription: s.optionalNullable(s.string()),
  paymentMeta: paymentMetaSchema,
  pending: s.boolean(),
  pendingTransactionId: s.nullable(s.string()),
  accountOwner: s.nullable(s.string()),
  transactionId: s.string(),
  transactionType: s.optional(s.lazy(() => transactionTypeSchema)),
  logoUrl: s.optionalNullable(s.string()),
  website: s.optionalNullable(s.string()),
  authorizedDate: s.nullable(s.dateOnly()),
  authorizedDatetime: s.nullable(s.dateTime()),
  datetime: s.nullable(s.dateTime()),
  paymentChannel: paymentChannelSchema,
  personalFinanceCategory: s.optionalNullable(s.lazy(() => personalFinanceCategorySchema)),
  businessFinanceCategory: s.optionalNullable(s.lazy(() => businessFinanceCategorySchema)),
  transactionCode: s.nullable(s.lazy(() => transactionCodeSchema)),
  personalFinanceCategoryIconUrl: s.optional(s.string()),
  counterparties: s.optional(s.array(s.lazy(() => transactionCounterpartySchema))),
  merchantEntityId: s.optionalNullable(s.string()),
  clientCustomization: s.optionalNullable(s.lazy(() => clientCustomizationSchema)),
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
    authorizedDate: "authorized_date",
    authorizedDatetime: "authorized_datetime",
    paymentChannel: "payment_channel",
    personalFinanceCategory: "personal_finance_category",
    businessFinanceCategory: "business_finance_category",
    transactionCode: "transaction_code",
    personalFinanceCategoryIconUrl: "personal_finance_category_icon_url",
    merchantEntityId: "merchant_entity_id",
    clientCustomization: "client_customization",
  },
});
