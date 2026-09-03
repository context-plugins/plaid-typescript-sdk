import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { itemSchema, type Item } from "./item.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type TransactionsGetResponse = {
  accounts: Account[];
  transactions: Transaction[];
  totalTransactions: number;
  item: Item;
  requestId: string;
};

export const transactionsGetResponseSchema: Schema<TransactionsGetResponse> =
  s.object<TransactionsGetResponse>({
    accounts: s.array(s.lazy(() => accountSchema)),
    transactions: s.array(s.lazy(() => transactionSchema)),
    totalTransactions: s.number(),
    item: itemSchema,
    requestId: s.string(),
    _keysMap: {
      totalTransactions: "total_transactions",
      requestId: "request_id",
    },
  });
