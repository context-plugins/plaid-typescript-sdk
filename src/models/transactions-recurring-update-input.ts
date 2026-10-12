import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsRecurringUpdateInput defines a single operation to the
 * `/transactions/recurring/streams/update` endpoint.
 */
export type TransactionsRecurringUpdateInput = {
  /** ID of the stream that all the transactions will be added into. */
  streamId: string;
  /**
   * IDs of all the transactions that will be added into the stream. If any transaction currently
   * exists in another stream, it will be removed from the other stream.
   */
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
