import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessAccountSchema, type BusinessAccount } from "./business-account.js";
import {
  cashflowReportTransactionSchema,
  type CashflowReportTransaction,
} from "./cashflow-report-transaction.js";
import { itemSchema, type Item } from "./item.js";

/**
 * CashflowReportTransactionsGetResponse defines the response schema for
 * `/cashflow_report/transactions/get`
 */
export type CashflowReportTransactionsGetResponse = {
  /**
   * An array containing the `accounts` associated with the Item for which transactions are being
   * returned. Each transaction can be mapped to its corresponding account via the `account_id`
   * field.
   */
  accounts: BusinessAccount[];
  /**
   * An array containing transactions from the account. Transactions are returned in reverse
   * chronological order, with the most recent at the beginning of the array. The maximum number of
   * transactions returned is determined by the `count` parameter.
   */
  transactions: CashflowReportTransaction[];
  /**
   * The total number of transactions available within the date range specified. If
   * `total_transactions` is larger than the size of the `transactions` array, more transactions are
   * available and can be fetched using the `cursor` parameter.
   */
  totalTransactions: number;
  /** Metadata about the Item. */
  item: Item;
  /**
   * Cursor used for fetching any future updates after the latest update provided in this response.
   */
  nextCursor: string;
  /** Represents if more than requested count of transactions exists to be fetched */
  hasMore: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const cashflowReportTransactionsGetResponseSchema: Schema<CashflowReportTransactionsGetResponse> =
  s.object<CashflowReportTransactionsGetResponse>({
    accounts: s.array(s.lazy(() => businessAccountSchema)),
    transactions: s.array(s.lazy(() => cashflowReportTransactionSchema)),
    totalTransactions: s.int(),
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
