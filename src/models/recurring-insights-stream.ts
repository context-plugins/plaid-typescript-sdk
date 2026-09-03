import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recurringTransactionFrequencySchema,
  type RecurringTransactionFrequency,
} from "./recurring-transaction-frequency.js";
import { transactionStreamAmountSchema, type TransactionStreamAmount } from "./transaction-stream-amount.js";
import { transactionStreamStatusSchema, type TransactionStreamStatus } from "./transaction-stream-status.js";

export type RecurringInsightsStream = {
  streamId: string;
  description?: string;
  merchantName: string;
  oldestTransactionDate?: string;
  newestTransactionDate?: string;
  averageDaysApart: number;
  frequency?: RecurringTransactionFrequency;
  transactionCount?: number;
  transactionIds?: string[];
  averageAmount?: TransactionStreamAmount;
  newestTransactionAmount?: TransactionStreamAmount;
  isActive: boolean;
  status?: TransactionStreamStatus;
  personalFinanceCategoryPrimary?: string;
  personalFinanceCategoryDetailed?: string;
};

export const recurringInsightsStreamSchema: Schema<RecurringInsightsStream> =
  s.object<RecurringInsightsStream>({
    streamId: s.string(),
    description: s.optional(s.string()),
    merchantName: s.string(),
    oldestTransactionDate: s.optional(s.dateOnly()),
    newestTransactionDate: s.optional(s.dateOnly()),
    averageDaysApart: s.number(),
    frequency: s.optional(s.lazy(() => recurringTransactionFrequencySchema)),
    transactionCount: s.optional(s.number()),
    transactionIds: s.optional(s.array(s.string())),
    averageAmount: s.optional(s.lazy(() => transactionStreamAmountSchema)),
    newestTransactionAmount: s.optional(s.lazy(() => transactionStreamAmountSchema)),
    isActive: s.boolean(),
    status: s.optional(s.lazy(() => transactionStreamStatusSchema)),
    personalFinanceCategoryPrimary: s.optional(s.string()),
    personalFinanceCategoryDetailed: s.optional(s.string()),
    _keysMap: {
      streamId: "stream_id",
      merchantName: "merchant_name",
      oldestTransactionDate: "oldest_transaction_date",
      newestTransactionDate: "newest_transaction_date",
      averageDaysApart: "average_days_apart",
      transactionCount: "transaction_count",
      transactionIds: "transaction_ids",
      averageAmount: "average_amount",
      newestTransactionAmount: "newest_transaction_amount",
      isActive: "is_active",
      personalFinanceCategoryPrimary: "personal_finance_category_primary",
      personalFinanceCategoryDetailed: "personal_finance_category_detailed",
    },
  });
