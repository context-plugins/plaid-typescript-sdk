import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedEnrichedTransactionSchema,
  type ClientProvidedEnrichedTransaction,
} from "./client-provided-enriched-transaction.js";

export type TransactionsEnrichResponse = {
  enrichedTransactions: ClientProvidedEnrichedTransaction[];
  requestId?: string;
};

export const transactionsEnrichResponseSchema: Schema<TransactionsEnrichResponse> =
  s.object<TransactionsEnrichResponse>({
    enrichedTransactions: s.array(s.lazy(() => clientProvidedEnrichedTransactionSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      enrichedTransactions: "enriched_transactions",
      requestId: "request_id",
    },
  });
