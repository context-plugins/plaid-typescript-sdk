import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedEnhancedTransactionSchema,
  type ClientProvidedEnhancedTransaction,
} from "./client-provided-enhanced-transaction.js";

export type TransactionsEnhanceGetResponse = {
  enhancedTransactions: ClientProvidedEnhancedTransaction[];
};

export const transactionsEnhanceGetResponseSchema: Schema<TransactionsEnhanceGetResponse> =
  s.object<TransactionsEnhanceGetResponse>({
    enhancedTransactions: s.array(s.lazy(() => clientProvidedEnhancedTransactionSchema)),
    _keysMap: {
      enhancedTransactions: "enhanced_transactions",
    },
  });
