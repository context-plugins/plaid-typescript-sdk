import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { transactionSchema, type Transaction } from "./transaction.js";

/**
 * ProcessorTransactionsGetResponse defines the response schema for `/processor/transactions/get`
 */
export type ProcessorTransactionsGetResponse = {
  /** A single account at a financial institution. */
  account: Account;
  /**
   * An array containing transactions from the account. Transactions are returned in reverse
   * chronological order, with the most recent at the beginning of the array. The maximum number of
   * transactions returned is determined by the `count` parameter.
   */
  transactions: Transaction[];
  /**
   * The total number of transactions available within the date range specified. If
   * `total_transactions` is larger than the size of the `transactions` array, more transactions are
   * available and can be fetched via manipulating the `offset` parameter.
   */
  totalTransactions: number;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorTransactionsGetResponseSchema: Schema<ProcessorTransactionsGetResponse> =
  s.object<ProcessorTransactionsGetResponse>({
    account: accountSchema,
    transactions: s.array(s.lazy(() => transactionSchema)),
    totalTransactions: s.int(),
    requestId: s.string(),
    _keysMap: {
      totalTransactions: "total_transactions",
      requestId: "request_id",
    },
  });
