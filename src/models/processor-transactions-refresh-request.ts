import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTransactionsRefreshRequest defines the request schema for
 * `/processor/transactions/refresh`
 */
export type ProcessorTransactionsRefreshRequest = {
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
};

export const processorTransactionsRefreshRequestSchema: Schema<ProcessorTransactionsRefreshRequest> =
  s.object<ProcessorTransactionsRefreshRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
