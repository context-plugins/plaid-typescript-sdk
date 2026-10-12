import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedEnrichedTransactionSchema,
  type ClientProvidedEnrichedTransaction,
} from "./client-provided-enriched-transaction.js";

/** TransactionsEnrichResponse defines the response schema for `/transactions/enrich`. */
export type TransactionsEnrichResponse = {
  /** A list of enriched transactions. */
  enrichedTransactions: ClientProvidedEnrichedTransaction[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
