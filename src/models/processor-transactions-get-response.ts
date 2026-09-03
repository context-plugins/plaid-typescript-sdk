import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type ProcessorTransactionsGetResponse = {
  account: Account;
  transactions: Transaction[];
  totalTransactions: number;
  requestId: string;
};

export const processorTransactionsGetResponseSchema: Schema<ProcessorTransactionsGetResponse> =
  s.object<ProcessorTransactionsGetResponse>({
    account: accountSchema,
    transactions: s.array(s.lazy(() => transactionSchema)),
    totalTransactions: s.number(),
    requestId: s.string(),
    _keysMap: {
      totalTransactions: "total_transactions",
      requestId: "request_id",
    },
  });
