import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

/**
 * TransactionsRecurringCreateResponse defines the response schema for the
 * `/transactions/recurring/streams/create` endpoint.
 */
export type TransactionsRecurringCreateResponse = {
  /** Streams created as a result of the operation. */
  addedStreams: TransactionStream[];
  /**
   * Other streams with transactions removed from them as a result of the operation (in no
   * particular order).
   */
  modifiedStreams?: TransactionStream[];
  /**
   * The ids of streams that are no longer qualified as recurring transaction streams (in no
   * particular order).
   */
  removedStreamIds?: string[];
};

export const transactionsRecurringCreateResponseSchema: Schema<TransactionsRecurringCreateResponse> =
  s.object<TransactionsRecurringCreateResponse>({
    addedStreams: s.array(s.lazy(() => transactionStreamSchema)),
    modifiedStreams: s.optional(s.array(s.lazy(() => transactionStreamSchema))),
    removedStreamIds: s.optional(s.array(s.string())),
    _keysMap: {
      addedStreams: "added_streams",
      modifiedStreams: "modified_streams",
      removedStreamIds: "removed_stream_ids",
    },
  });
