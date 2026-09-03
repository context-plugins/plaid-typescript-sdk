import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetectedAccount = {
  accountType: string | null;
  accountSubtype: string | null;
  transactionCount: number;
  oldestTransactionDate?: string;
  newestTransactionDate?: string;
  newestTransactionAmount?: number;
  totalOutflows: number;
  totalInflows: number;
};

export const detectedAccountSchema: Schema<DetectedAccount> = s.object<DetectedAccount>({
  accountType: s.nullable(s.string()),
  accountSubtype: s.nullable(s.string()),
  transactionCount: s.number(),
  oldestTransactionDate: s.optional(s.dateOnly()),
  newestTransactionDate: s.optional(s.dateOnly()),
  newestTransactionAmount: s.optional(s.number()),
  totalOutflows: s.number(),
  totalInflows: s.number(),
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
