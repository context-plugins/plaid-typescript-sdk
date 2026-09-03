import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

export type TransactionsRecurringMergeResponse = {
  modifiedStreams: TransactionStream[];
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
