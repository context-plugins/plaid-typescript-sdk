import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsSyncRequestOptionsSchema,
  type TransactionsSyncRequestOptions,
} from "./transactions-sync-request-options.js";

/**
 * ProcessorTransactionsSyncRequest defines the request schema for `/processor/transactions/sync`
 */
export type ProcessorTransactionsSyncRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * The processor token obtained from the Plaid integration partner. Processor tokens are in the
   * format: `processor-<environment>-<identifier>`
   */
  processorToken: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The cursor value represents the last update requested. Providing it will cause the response to
   * only return changes after this update. If omitted, the entire history of updates will be
   * returned, starting with the first-added transactions on the Item. Note: The upper-bound length
   * of this cursor is 256 characters of base64.
   */
  cursor?: string;
  /** The number of transaction updates to fetch. @default 100 */
  count?: number;
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: TransactionsSyncRequestOptions;
};

export const processorTransactionsSyncRequestSchema: Schema<ProcessorTransactionsSyncRequest> =
  s.object<ProcessorTransactionsSyncRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    cursor: s.optional(s.string()),
    count: s.defaulted(s.int(), 100),
    options: s.optional(s.lazy(() => transactionsSyncRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
