import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

/**
 * TransactionsRecurringMergeResponse defines the response schema for the
 * `/transactions/recurring/streams/merge` endpoint.
 */
export type TransactionsRecurringMergeResponse = {
  /**
   * Directly modified stream, along with other streams with transactions removed from them as a
   * result of the operation (in no particular order).
   */
  modifiedStreams: TransactionStream[];
  /**
   * The ids of streams that are no longer qualified as recurring transaction streams (in no
   * particular order).
   */
  removedStreamIds?: string[];
};

export const transactionsRecurringMergeResponseSchema: Schema<TransactionsRecurringMergeResponse> =
  s.object<TransactionsRecurringMergeResponse>({
    modifiedStreams: s.array(s.lazy(() => transactionStreamSchema)),
    removedStreamIds: s.optional(s.array(s.string())),
    _keysMap: {
      modifiedStreams: "modified_streams",
      removedStreamIds: "removed_stream_ids",
    },
  });
