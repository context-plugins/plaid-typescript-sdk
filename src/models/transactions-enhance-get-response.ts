import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedEnhancedTransactionSchema,
  type ClientProvidedEnhancedTransaction,
} from "./client-provided-enhanced-transaction.js";

/**
 * TransactionsEnhanceGetResponse defines the response schema for `/beta/transactions/v1/enhance`.
 */
export type TransactionsEnhanceGetResponse = {
  /** An array of enhanced transactions. */
  enhancedTransactions: ClientProvidedEnhancedTransaction[];
};

export const transactionsEnhanceGetResponseSchema: Schema<TransactionsEnhanceGetResponse> =
  s.object<TransactionsEnhanceGetResponse>({
    enhancedTransactions: s.array(s.lazy(() => clientProvidedEnhancedTransactionSchema)),
    _keysMap: {
      enhancedTransactions: "enhanced_transactions",
    },
  });
