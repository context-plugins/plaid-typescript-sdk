import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionData = {
  description: string;
  amount: number;
  date: string;
  accountId: string;
  transactionId: string;
};

export const transactionDataSchema: Schema<TransactionData> = s.object<TransactionData>({
  description: s.string(),
  amount: s.number(),
  date: s.dateOnly(),
  accountId: s.string(),
  transactionId: s.string(),
  _keysMap: {
    accountId: "account_id",
    transactionId: "transaction_id",
  },
});
