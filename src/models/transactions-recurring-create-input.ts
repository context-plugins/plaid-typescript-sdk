import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsRecurringCreateInput defines a single input to the
 * `/transactions/recurring/streams/create` endpoint.
 */
export type TransactionsRecurringCreateInput = {
  /**
   * IDs of all the transactions that will be merged into one stream. If any transaction currently
   * exists in another stream, it will be removed from the other stream.
   */
  transactionIds?: string[];
};

export const transactionsRecurringCreateInputSchema: Schema<TransactionsRecurringCreateInput> =
  s.object<TransactionsRecurringCreateInput>({
    transactionIds: s.optional(s.array(s.string())),
    _keysMap: {
      transactionIds: "transaction_ids",
    },
  });
