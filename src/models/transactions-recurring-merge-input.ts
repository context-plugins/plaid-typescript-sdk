import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRecurringMergeInput = {
  streamIds: string[];
};

export const transactionsRecurringMergeInputSchema: Schema<TransactionsRecurringMergeInput> =
  s.object<TransactionsRecurringMergeInput>({
    streamIds: s.array(s.string()),
    _keysMap: {
      streamIds: "stream_ids",
    },
  });
