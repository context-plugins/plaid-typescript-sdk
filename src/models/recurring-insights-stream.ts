import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recurringTransactionFrequencySchema,
  type RecurringTransactionFrequency,
} from "./recurring-transaction-frequency.js";
import { transactionStreamAmountSchema, type TransactionStreamAmount } from "./transaction-stream-amount.js";
import { transactionStreamStatusSchema, type TransactionStreamStatus } from "./transaction-stream-status.js";

/** Insights object for recurring transactions streams. */
export type RecurringInsightsStream = {
  /** A unique id for the stream. */
  streamId: string;
  /** The client-provided raw description of the most recent transaction in the stream. */
  description?: string;
  /** The merchant or primary counterparty associated with the transaction stream. */
  merchantName: string;
  /** The posted date of the earliest transaction in the stream. */
  oldestTransactionDate?: string;
  /** The posted date of the latest transaction in the stream. */
  newestTransactionDate?: string;
  /** The average number of days between each of the recurring transactions. */
  averageDaysApart: number;
  /**
   * Describes the frequency of the transaction stream.
   *
   * `WEEKLY`: Assigned to a transaction stream that occurs approximately every week.
   *
   * `BIWEEKLY`: Assigned to a transaction stream that occurs approximately every 2 weeks.
   *
   * `SEMI_MONTHLY`: Assigned to a transaction stream that occurs approximately twice per month.
   * This frequency is typically seen for inflow transaction streams.
   *
   * `MONTHLY`: Assigned to a transaction stream that occurs approximately every month.
   *
   * `ANNUALLY`: Assigned to a transaction stream that occurs approximately every year.
   *
   * `UNKNOWN`: Assigned to a transaction stream that does not fit any of the pre-defined
   * frequencies.
   */
  frequency?: RecurringTransactionFrequency;
  /** The number of transactions in this stream. */
  transactionCount?: number;
  /** An array of Plaid transaction IDs belonging to the stream, sorted by posted date. */
  transactionIds?: string[];
  /** Object with data pertaining to an amount on the transaction stream. */
  averageAmount?: TransactionStreamAmount;
  /** Object with data pertaining to an amount on the transaction stream. */
  newestTransactionAmount?: TransactionStreamAmount;
  /** Indicates whether the transaction stream is still live. */
  isActive: boolean;
  /**
   * The current status of the transaction stream.
   *
   * `MATURE`: A `MATURE` recurring stream should have at least 3 transactions and happen on a
   * regular cadence (For Annual recurring stream, we will mark it `MATURE` after 2 instances).
   *
   * `EARLY_DETECTION`: When a recurring transaction first appears in the transaction history and
   * before it fulfills the requirement of a mature stream, the status will be `EARLY_DETECTION`.
   *
   * `TOMBSTONED`: A stream that was previously in the `EARLY_DETECTION` status will move to the
   * `TOMBSTONED` status when no further transactions were found at the next expected date.
   *
   * `UNKNOWN`: A stream is assigned an `UNKNOWN` status when none of the other statuses are
   * applicable.
   */
  status?: TransactionStreamStatus;
  /** The primary category associated with the transaction stream. */
  personalFinanceCategoryPrimary?: string;
  /** The detailed category associated with the transaction stream. */
  personalFinanceCategoryDetailed?: string;
};

export const recurringInsightsStreamSchema: Schema<RecurringInsightsStream> =
  s.object<RecurringInsightsStream>({
    streamId: s.string(),
    description: s.optional(s.string()),
    merchantName: s.string(),
    oldestTransactionDate: s.optional(s.dateOnly()),
    newestTransactionDate: s.optional(s.dateOnly()),
    averageDaysApart: s.float64(),
    frequency: s.optional(s.lazy(() => recurringTransactionFrequencySchema)),
    transactionCount: s.optional(s.int()),
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
