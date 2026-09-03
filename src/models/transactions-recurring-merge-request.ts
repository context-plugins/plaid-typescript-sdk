import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringMergeInputSchema,
  type TransactionsRecurringMergeInput,
} from "./transactions-recurring-merge-input.js";

export type TransactionsRecurringMergeRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  inputs: TransactionsRecurringMergeInput[];
};

export const transactionsRecurringMergeRequestSchema: Schema<TransactionsRecurringMergeRequest> =
  s.object<TransactionsRecurringMergeRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    inputs: s.array(s.lazy(() => transactionsRecurringMergeInputSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
