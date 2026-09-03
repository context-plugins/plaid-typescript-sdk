import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedTransactionSchema,
  type ClientProvidedTransaction,
} from "./client-provided-transaction.js";
import {
  transactionsEnrichRequestOptionsSchema,
  type TransactionsEnrichRequestOptions,
} from "./transactions-enrich-request-options.js";

export type TransactionsEnrichRequest = {
  clientId?: string;
  secret?: string;
  accountType: string;
  transactions: ClientProvidedTransaction[];
  options?: TransactionsEnrichRequestOptions;
};

export const transactionsEnrichRequestSchema: Schema<TransactionsEnrichRequest> =
  s.object<TransactionsEnrichRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accountType: s.string(),
    transactions: s.array(s.lazy(() => clientProvidedTransactionSchema)),
    options: s.optional(s.lazy(() => transactionsEnrichRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accountType: "account_type",
    },
  });
