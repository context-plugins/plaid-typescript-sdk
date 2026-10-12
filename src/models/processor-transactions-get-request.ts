import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  processorTransactionsGetRequestOptionsSchema,
  type ProcessorTransactionsGetRequestOptions,
} from "./processor-transactions-get-request-options.js";

/** ProcessorTransactionsGetRequest defines the request schema for `/processor/transactions/get` */
export type ProcessorTransactionsGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: ProcessorTransactionsGetRequestOptions;
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
   * The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.
   */
  startDate: string;
  /** The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD. */
  endDate: string;
};

export const processorTransactionsGetRequestSchema: Schema<ProcessorTransactionsGetRequest> =
  s.object<ProcessorTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    options: s.optional(s.lazy(() => processorTransactionsGetRequestOptionsSchema)),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
