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

/** TransactionsEnrichRequest defines the request schema for `/transactions/enrich`. */
export type TransactionsEnrichRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The account type for the requested transactions (either `depository` or `credit`). */
  accountType: string;
  /**
   * An array of transaction objects to be enriched by Plaid. Maximum of 100 transactions per
   * request.
   */
  transactions: ClientProvidedTransaction[];
  /** An optional object to be used with the request. */
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
