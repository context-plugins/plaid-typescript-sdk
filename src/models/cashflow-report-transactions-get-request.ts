import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowReportTransactionsGetRequestOptionsSchema,
  type CashflowReportTransactionsGetRequestOptions,
} from "./cashflow-report-transactions-get-request-options.js";

/**
 * CashflowReportTransactionsGetRequest defines the request schema for
 * `/cashflow_report/transactions/get`
 */
export type CashflowReportTransactionsGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** Number of transactions to fetch per call @default 100 */
  count?: number;
  /**
   * The cursor value represents the last update requested. Pass in the empty string "" in the first
   * call.
   */
  cursor?: string;
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: CashflowReportTransactionsGetRequestOptions;
};

export const cashflowReportTransactionsGetRequestSchema: Schema<CashflowReportTransactionsGetRequest> =
  s.object<CashflowReportTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    count: s.defaulted(s.int(), 100),
    cursor: s.optional(s.string()),
    options: s.optional(s.lazy(() => cashflowReportTransactionsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
