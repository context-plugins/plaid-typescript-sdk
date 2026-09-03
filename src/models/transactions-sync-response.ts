import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { removedTransactionSchema, type RemovedTransaction } from "./removed-transaction.js";
import { transactionSchema, type Transaction } from "./transaction.js";
import {
  transactionsUpdateStatusSchema,
  type TransactionsUpdateStatus,
} from "./transactions-update-status.js";

export type TransactionsSyncResponse = {
  transactionsUpdateStatus: TransactionsUpdateStatus;
  accounts: Account[];
  added: Transaction[];
  modified: Transaction[];
  removed: RemovedTransaction[];
  nextCursor: string;
  hasMore: boolean;
  requestId: string;
};

export const transactionsSyncResponseSchema: Schema<TransactionsSyncResponse> =
  s.object<TransactionsSyncResponse>({
    transactionsUpdateStatus: transactionsUpdateStatusSchema,
    accounts: s.array(s.lazy(() => accountSchema)),
    added: s.array(s.lazy(() => transactionSchema)),
    modified: s.array(s.lazy(() => transactionSchema)),
    removed: s.array(s.lazy(() => removedTransactionSchema)),
    nextCursor: s.string(),
    hasMore: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      transactionsUpdateStatus: "transactions_update_status",
      nextCursor: "next_cursor",
      hasMore: "has_more",
      requestId: "request_id",
    },
  });
