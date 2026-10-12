import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** metadata for the set of insights provided in `TransactionsUserInsightsGetResponse` */
export type UserDataOverview = {
  /** The total number of transactions. */
  transactionCount: number;
  /** The date of the oldest transaction processed to generate insights. */
  oldestTransactionDate?: string;
  /** The date of the newest transaction processed to generate insights. */
  newestTransactionDate?: string;
  /** The range of days of transactions available. */
  daysAvailable: number;
  /** Sum of outflow amounts. */
  totalOutflows: number;
  /** Sum of inflow amounts. */
  totalInflows: number;
};

export const userDataOverviewSchema: Schema<UserDataOverview> = s.object<UserDataOverview>({
  transactionCount: s.int(),
  oldestTransactionDate: s.optional(s.dateOnly()),
  newestTransactionDate: s.optional(s.dateOnly()),
  daysAvailable: s.int(),
  totalOutflows: s.float64(),
  totalInflows: s.float64(),
  _keysMap: {
    transactionCount: "transaction_count",
    oldestTransactionDate: "oldest_transaction_date",
    newestTransactionDate: "newest_transaction_date",
    daysAvailable: "days_available",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
  },
});
