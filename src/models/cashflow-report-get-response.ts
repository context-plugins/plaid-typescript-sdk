import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessAccountSchema, type BusinessAccount } from "./business-account.js";
import {
  cashflowReportTransactionSchema,
  type CashflowReportTransaction,
} from "./cashflow-report-transaction.js";
import { itemSchema, type Item } from "./item.js";

export type CashflowReportGetResponse = {
  accounts: BusinessAccount[];
  transactions: CashflowReportTransaction[];
  totalTransactions: number;
  item: Item;
  nextCursor: string;
  hasMore: boolean;
  lastSuccessfulUpdateTime: Date;
  requestId: string;
};

export const cashflowReportGetResponseSchema: Schema<CashflowReportGetResponse> =
  s.object<CashflowReportGetResponse>({
    accounts: s.array(s.lazy(() => businessAccountSchema)),
    transactions: s.array(s.lazy(() => cashflowReportTransactionSchema)),
    totalTransactions: s.number(),
    item: itemSchema,
    nextCursor: s.string(),
    hasMore: s.boolean(),
    lastSuccessfulUpdateTime: s.dateTime(),
    requestId: s.string(),
    _keysMap: {
      totalTransactions: "total_transactions",
      nextCursor: "next_cursor",
      hasMore: "has_more",
      lastSuccessfulUpdateTime: "last_successful_update_time",
      requestId: "request_id",
    },
  });
