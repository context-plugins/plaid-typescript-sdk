import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customSandboxTransactionSchema,
  type CustomSandboxTransaction,
} from "./custom-sandbox-transaction.js";

/**
 * SandboxTransactionsCreateRequest defines the request schema for `/sandbox/transactions/create`
 */
export type SandboxTransactionsCreateRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** List of transactions to be added */
  transactions: CustomSandboxTransaction[];
};

export const sandboxTransactionsCreateRequestSchema: Schema<SandboxTransactionsCreateRequest> =
  s.object<SandboxTransactionsCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    transactions: s.array(s.lazy(() => customSandboxTransactionSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
