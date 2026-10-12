import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowReportGetRequestOptionsSchema,
  type CashflowReportGetRequestOptions,
} from "./cashflow-report-get-request-options.js";

/** CashflowReportGetRequest defines the request schema for `/cashflow_report/get` */
export type CashflowReportGetRequest = {
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
  /** Number of days to retrieve transactions data for (1 to 730) */
  daysRequested: number;
  /** Number of transactions to fetch per call @default 100 */
  count?: number;
  /**
   * The cursor value represents the last update requested. Pass in the empty string "" in the first
   * call.
   */
  cursor?: string;
  /** An optional object to be used with the request. If specified, `options` must not be `null`. */
  options?: CashflowReportGetRequestOptions;
};

export const cashflowReportGetRequestSchema: Schema<CashflowReportGetRequest> =
  s.object<CashflowReportGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    daysRequested: s.int(),
    count: s.defaulted(s.int(), 100),
    cursor: s.optional(s.string()),
    options: s.optional(s.lazy(() => cashflowReportGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      daysRequested: "days_requested",
    },
  });
