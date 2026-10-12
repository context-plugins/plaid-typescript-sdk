import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsRecurringMergeInput defines a single input to the
 * `/transactions/recurring/streams/merge` endpoint.
 */
export type TransactionsRecurringMergeInput = {
  /**
   * IDs of all the streams that will be merged into the first stream. This operation will retain
   * the `stream_id` of the first stream.
   */
  streamIds: string[];
};

export const transactionsRecurringMergeInputSchema: Schema<TransactionsRecurringMergeInput> =
  s.object<TransactionsRecurringMergeInput>({
    streamIds: s.array(s.string()),
    _keysMap: {
      streamIds: "stream_ids",
    },
  });
