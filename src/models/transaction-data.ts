import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the matched direct deposit transaction used to verify a user's payroll
 * information.
 */
export type TransactionData = {
  /** The description of the transaction. */
  description: string;
  /** The amount of the transaction. */
  amount: number;
  /**
   * The date of the transaction, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format
   * ("yyyy-mm-dd").
   */
  date: string;
  /** A unique identifier for the end user's account. */
  accountId: string;
  /** A unique identifier for the transaction. */
  transactionId: string;
};

export const transactionDataSchema: Schema<TransactionData> = s.object<TransactionData>({
  description: s.string(),
  amount: s.float64(),
  date: s.dateOnly(),
  accountId: s.string(),
  transactionId: s.string(),
  _keysMap: {
    accountId: "account_id",
    transactionId: "transaction_id",
  },
});
