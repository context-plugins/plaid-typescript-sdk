import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedRawTransactionSchema,
  type ClientProvidedRawTransaction,
} from "./client-provided-raw-transaction.js";

/** TransactionsEnhanceGetRequest defines the request schema for `/beta/transactions/v1/enhance`. */
export type TransactionsEnhanceGetRequest = {
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
  /** The type of account for the requested transactions (`depository` or `credit`). */
  accountType: string;
  /** An array of raw transactions to be enhanced. */
  transactions: ClientProvidedRawTransaction[];
};

export const transactionsEnhanceGetRequestSchema: Schema<TransactionsEnhanceGetRequest> =
  s.object<TransactionsEnhanceGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accountType: s.string(),
    transactions: s.array(s.lazy(() => clientProvidedRawTransactionSchema)),
    _keysMap: {
      clientId: "client_id",
      accountType: "account_type",
    },
  });
