import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNullableSchema, type AccountNullable } from "./account-nullable.js";
import { removedTransactionSchema, type RemovedTransaction } from "./removed-transaction.js";
import { transactionSchema, type Transaction } from "./transaction.js";
import {
  transactionsUpdateStatusSchema,
  type TransactionsUpdateStatus,
} from "./transactions-update-status.js";

export type ProcessorTransactionsSyncResponse = {
  transactionsUpdateStatus: TransactionsUpdateStatus;
  account: AccountNullable | null;
  added: Transaction[];
  modified: Transaction[];
  removed: RemovedTransaction[];
  nextCursor: string;
  hasMore: boolean;
  requestId: string;
};

export const processorTransactionsSyncResponseSchema: Schema<ProcessorTransactionsSyncResponse> =
  s.object<ProcessorTransactionsSyncResponse>({
    transactionsUpdateStatus: transactionsUpdateStatusSchema,
    account: s.nullable(s.lazy(() => accountNullableSchema)),
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
