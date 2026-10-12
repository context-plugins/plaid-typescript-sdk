import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A possible account detected to be associated with a transaction user. */
export type DetectedAccount = {
  /** The detected account type (depository, credit, loan, investment etc.). */
  accountType: string | null;
  /** The detected subtype of the account, based on the transactions to/from the institution. */
  accountSubtype: string | null;
  /**
   * The number of transactions associated with this detected account type at this financial
   * institution.
   */
  transactionCount: number;
  /**
   * The date of the oldest transaction associated with this detected account type at this financial
   * institution.
   */
  oldestTransactionDate?: string;
  /**
   * The date of the newest transaction associated with this detected account type at this financial
   * institution.
   */
  newestTransactionDate?: string;
  /**
   * Amount of the most recent transaction associated with this detected account type at this
   * financial institution.
   */
  newestTransactionAmount?: number;
  /**
   * Sum of outflow amounts associated with this detected account type at this financial
   * institution.
   */
  totalOutflows: number;
  /**
   * Sum of inflow amounts associated with this detected account type at this financial institution.
   */
  totalInflows: number;
};

export const detectedAccountSchema: Schema<DetectedAccount> = s.object<DetectedAccount>({
  accountType: s.nullable(s.string()),
  accountSubtype: s.nullable(s.string()),
  transactionCount: s.int(),
  oldestTransactionDate: s.optional(s.dateOnly()),
  newestTransactionDate: s.optional(s.dateOnly()),
  newestTransactionAmount: s.optional(s.float64()),
  totalOutflows: s.float64(),
  totalInflows: s.float64(),
  _keysMap: {
    accountType: "account_type",
    accountSubtype: "account_subtype",
    transactionCount: "transaction_count",
    oldestTransactionDate: "oldest_transaction_date",
    newestTransactionDate: "newest_transaction_date",
    newestTransactionAmount: "newest_transaction_amount",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
  },
});
