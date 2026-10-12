import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringGetRequestOptionsSchema,
  type TransactionsRecurringGetRequestOptions,
} from "./transactions-recurring-get-request-options.js";

/**
 * ProcessorTransactionsRecurringGetRequest defines the request schema for
 * `/processor/transactions/recurring/get`
 */
export type ProcessorTransactionsRecurringGetRequest = {
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
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: TransactionsRecurringGetRequestOptions;
};

export const processorTransactionsRecurringGetRequestSchema: Schema<ProcessorTransactionsRecurringGetRequest> =
  s.object<ProcessorTransactionsRecurringGetRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    options: s.optional(s.lazy(() => transactionsRecurringGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
