import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

export type TransactionsRecurringUpdateResponse = {
  modifiedStreams: TransactionStream[];
  removedStreamIds?: string[];
};

export const transactionsRecurringUpdateResponseSchema: Schema<TransactionsRecurringUpdateResponse> =
  s.object<TransactionsRecurringUpdateResponse>({
    modifiedStreams: s.array(s.lazy(() => transactionStreamSchema)),
    removedStreamIds: s.optional(s.array(s.string())),
    _keysMap: {
      modifiedStreams: "modified_streams",
      removedStreamIds: "removed_stream_ids",
    },
  });
