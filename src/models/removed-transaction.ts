import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A representation of a removed transaction */
export type RemovedTransaction = {
  /** The ID of the removed transaction. */
  transactionId: string;
  /** The ID of the account of the removed transaction. */
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
