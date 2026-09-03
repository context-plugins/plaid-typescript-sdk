import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

export type TransactionsRecurringCreateResponse = {
  addedStreams: TransactionStream[];
  modifiedStreams?: TransactionStream[];
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
