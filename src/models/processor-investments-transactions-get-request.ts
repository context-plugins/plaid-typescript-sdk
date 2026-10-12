import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsTransactionsGetRequestOptionsSchema,
  type InvestmentsTransactionsGetRequestOptions,
} from "./investments-transactions-get-request-options.js";

/**
 * ProcessorInvestmentsTransactionsGetRequest defines the request schema for
 * `/processor/investments/transactions/get`
 */
export type ProcessorInvestmentsTransactionsGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * An optional object to filter `/investments/transactions/get` results. If provided, must be
   * non-`null`.
   */
  options?: InvestmentsTransactionsGetRequestOptions;
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

export const processorInvestmentsTransactionsGetRequestSchema: Schema<ProcessorInvestmentsTransactionsGetRequest> =
  s.object<ProcessorInvestmentsTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    options: s.optional(s.lazy(() => investmentsTransactionsGetRequestOptionsSchema)),
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
