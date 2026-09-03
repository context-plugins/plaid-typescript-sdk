import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import {
  recurringTransactionFrequencySchema,
  type RecurringTransactionFrequency,
} from "./recurring-transaction-frequency.js";
import { transactionStreamAmountSchema, type TransactionStreamAmount } from "./transaction-stream-amount.js";
import { transactionStreamStatusSchema, type TransactionStreamStatus } from "./transaction-stream-status.js";

export type TransactionStream = {
  accountId: string;
  streamId: string;
  category: string[] | null;
  categoryId: string | null;
  description: string;
  merchantName: string | null;
  firstDate: string;
  lastDate: string;
  predictedNextDate?: string | null;
  frequency: RecurringTransactionFrequency;
  transactionIds: string[];
  averageAmount: TransactionStreamAmount;
  lastAmount: TransactionStreamAmount;
  isActive: boolean;
  status: TransactionStreamStatus;
  personalFinanceCategory?: PersonalFinanceCategory | null;
  isUserModified: boolean;
  lastUserModifiedDatetime?: Date;
};

export const transactionStreamSchema: Schema<TransactionStream> = s.object<TransactionStream>({
  accountId: s.string(),
  streamId: s.string(),
  category: s.nullable(s.array(s.string())),
  categoryId: s.nullable(s.string()),
  description: s.string(),
  merchantName: s.nullable(s.string()),
  firstDate: s.dateOnly(),
  lastDate: s.dateOnly(),
  predictedNextDate: s.optionalNullable(s.dateOnly()),
  frequency: recurringTransactionFrequencySchema,
  transactionIds: s.array(s.string()),
  averageAmount: transactionStreamAmountSchema,
  lastAmount: transactionStreamAmountSchema,
  isActive: s.boolean(),
  status: transactionStreamStatusSchema,
  personalFinanceCategory: s.optionalNullable(s.lazy(() => personalFinanceCategorySchema)),
  isUserModified: s.boolean(),
  lastUserModifiedDatetime: s.optional(s.dateTime()),
  _keysMap: {
    accountId: "account_id",
    streamId: "stream_id",
    categoryId: "category_id",
    merchantName: "merchant_name",
    firstDate: "first_date",
    lastDate: "last_date",
    predictedNextDate: "predicted_next_date",
    transactionIds: "transaction_ids",
    averageAmount: "average_amount",
    lastAmount: "last_amount",
    isActive: "is_active",
    personalFinanceCategory: "personal_finance_category",
    isUserModified: "is_user_modified",
    lastUserModifiedDatetime: "last_user_modified_datetime",
  },
});
