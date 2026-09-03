import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRecurringCreateInput = {
  transactionIds?: string[];
};

export const transactionsRecurringCreateInputSchema: Schema<TransactionsRecurringCreateInput> =
  s.object<TransactionsRecurringCreateInput>({
    transactionIds: s.optional(s.array(s.string())),
    _keysMap: {
      transactionIds: "transaction_ids",
    },
  });
