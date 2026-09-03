import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  baseReportTransactionTypeSchema,
  type BaseReportTransactionType,
} from "./base-report-transaction-type.js";
import { creditCategorySchema, type CreditCategory } from "./credit-category.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";

export type BaseReportTransaction = {
  accountId: string;
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  name?: string | null;
  originalDescription: string | null;
  creditCategory?: CreditCategory | null;
  checkNumber?: string | null;
  date: string;
  dateTransacted?: string | null;
  location?: TransactionLocation;
  merchantName?: string | null;
  pending: boolean;
  accountOwner?: string | null;
  transactionId: string;
  transactionType?: BaseReportTransactionType | null;
  category?: string[] | null;
  categoryId?: string | null;
  personalFinanceCategory?: PersonalFinanceCategory | null;
};

export const baseReportTransactionSchema: Schema<BaseReportTransaction> = s.object<BaseReportTransaction>({
  accountId: s.string(),
  amount: s.number(),
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
