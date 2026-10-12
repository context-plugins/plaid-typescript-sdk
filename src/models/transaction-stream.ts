import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import {
  recurringTransactionFrequencySchema,
  type RecurringTransactionFrequency,
} from "./recurring-transaction-frequency.js";
import { transactionStreamAmountSchema, type TransactionStreamAmount } from "./transaction-stream-amount.js";
import { transactionStreamStatusSchema, type TransactionStreamStatus } from "./transaction-stream-status.js";

/** A grouping of related transactions */
export type TransactionStream = {
  /** The ID of the account to which the stream belongs */
  accountId: string;
  /** A unique id for the stream */
  streamId: string;
  /**
   * A hierarchical array of the categories to which this transaction belongs. See
   * [Categories](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * All implementations are encouraged to use the new `personal_finance_category` instead of
   * `category`. `personal_finance_category` provides more meaningful categorization and greater
   * accuracy.
   *
   * @deprecated
   */
  category: string[] | null;
  /**
   * The ID of the category to which this transaction belongs. See
   * [Categories](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * All implementations are encouraged to use the new `personal_finance_category` instead of
   * `category`. `personal_finance_category` provides more meaningful categorization and greater
   * accuracy.
   *
   * @deprecated
   */
  categoryId: string | null;
  /** A description of the transaction stream. */
  description: string;
  /** The merchant associated with the transaction stream. */
  merchantName: string | null;
  /** The posted date of the earliest transaction in the stream. */
  firstDate: string;
  /** The posted date of the latest transaction in the stream. */
  lastDate: string;
  /**
   * The predicted date of the next payment. This will only be set if the next payment date can be
   * predicted.
   */
  predictedNextDate?: string | null;
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
  frequency: RecurringTransactionFrequency;
  /** An array of Plaid transaction IDs belonging to the stream, sorted by posted date. */
  transactionIds: string[];
  /** Object with data pertaining to an amount on the transaction stream. */
  averageAmount: TransactionStreamAmount;
  /** Object with data pertaining to an amount on the transaction stream. */
  lastAmount: TransactionStreamAmount;
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
  status: TransactionStreamStatus;
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
   * As the ability to modify transactions streams has been discontinued, this field will always be
   * `false`.
   *
   * @deprecated
   */
  isUserModified: boolean;
  /**
   * The date and time of the most recent user modification. This will only be set if
   * `is_user_modified` is `true`.
   *
   * @deprecated
   */
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
