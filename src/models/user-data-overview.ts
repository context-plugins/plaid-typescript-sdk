import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserDataOverview = {
  transactionCount: number;
  oldestTransactionDate?: string;
  newestTransactionDate?: string;
  daysAvailable: number;
  totalOutflows: number;
  totalInflows: number;
};

export const userDataOverviewSchema: Schema<UserDataOverview> = s.object<UserDataOverview>({
  transactionCount: s.number(),
  oldestTransactionDate: s.optional(s.dateOnly()),
  newestTransactionDate: s.optional(s.dateOnly()),
  daysAvailable: s.number(),
  totalOutflows: s.number(),
  totalInflows: s.number(),
  _keysMap: {
    transactionCount: "transaction_count",
    oldestTransactionDate: "oldest_transaction_date",
    newestTransactionDate: "newest_transaction_date",
    daysAvailable: "days_available",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
  },
});
