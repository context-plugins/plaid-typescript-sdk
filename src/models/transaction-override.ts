import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Data to populate as test transaction data. If not specified, random transactions will be
 * generated instead.
 */
export type TransactionOverride = {
  /**
   * The date of the transaction, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD)
   * format. Transactions in Sandbox will move from pending to posted once their transaction date
   * has been reached. If a `date_transacted` is not provided by the institution, a transaction date
   * may be available in the
   * [`authorized_date`](https://plaid.com/docs/api/products/transactions/#transactions-get-response-transactions-authorized-date)
   * field.
   */
  dateTransacted: string;
  /**
   * The date the transaction posted, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * (YYYY-MM-DD) format. Posted dates in the past or present will result in posted transactions;
   * posted dates in the future will result in pending transactions.
   */
  datePosted: string;
  /** The transaction amount. Can be negative. */
  amount: number;
  /** The transaction description. */
  description: string;
  /** The ISO-4217 format currency code for the transaction. */
  currency?: string;
};

export const transactionOverrideSchema: Schema<TransactionOverride> = s.object<TransactionOverride>({
  dateTransacted: s.dateOnly(),
  datePosted: s.dateOnly(),
  amount: s.float64(),
  description: s.string(),
  currency: s.optional(s.string()),
  _keysMap: {
    dateTransacted: "date_transacted",
    datePosted: "date_posted",
  },
});
