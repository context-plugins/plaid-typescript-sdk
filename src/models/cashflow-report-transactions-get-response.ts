import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessAccountSchema, type BusinessAccount } from "./business-account.js";
import {
  cashflowReportTransactionSchema,
  type CashflowReportTransaction,
} from "./cashflow-report-transaction.js";
import { itemSchema, type Item } from "./item.js";

export type CashflowReportTransactionsGetResponse = {
  accounts: BusinessAccount[];
  transactions: CashflowReportTransaction[];
  totalTransactions: number;
  item: Item;
  nextCursor: string;
  hasMore: boolean;
  requestId: string;
};

export const cashflowReportTransactionsGetResponseSchema: Schema<CashflowReportTransactionsGetResponse> =
  s.object<CashflowReportTransactionsGetResponse>({
    accounts: s.array(s.lazy(() => businessAccountSchema)),
    transactions: s.array(s.lazy(() => cashflowReportTransactionSchema)),
    totalTransactions: s.number(),
    item: itemSchema,
    nextCursor: s.string(),
    hasMore: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      totalTransactions: "total_transactions",
      nextCursor: "next_cursor",
      hasMore: "has_more",
      requestId: "request_id",
    },
  });
