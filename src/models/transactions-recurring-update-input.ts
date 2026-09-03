import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRecurringUpdateInput = {
  streamId: string;
  transactionIds: string[];
};

export const transactionsRecurringUpdateInputSchema: Schema<TransactionsRecurringUpdateInput> =
  s.object<TransactionsRecurringUpdateInput>({
    streamId: s.string(),
    transactionIds: s.array(s.string()),
    _keysMap: {
      streamId: "stream_id",
      transactionIds: "transaction_ids",
    },
  });
