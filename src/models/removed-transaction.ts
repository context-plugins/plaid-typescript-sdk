import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemovedTransaction = {
  transactionId: string;
  accountId: string;
};

export const removedTransactionSchema: Schema<RemovedTransaction> = s.object<RemovedTransaction>({
  transactionId: s.string(),
  accountId: s.string(),
  _keysMap: {
    transactionId: "transaction_id",
    accountId: "account_id",
  },
});
