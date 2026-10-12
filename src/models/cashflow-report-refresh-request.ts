import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CashflowReportRefreshRequest defines the request schema for `/cashflow_report/refresh` */
export type CashflowReportRefreshRequest = {
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
  /** Number of days to retrieve transactions data for (1 to 730) @default 365 */
  daysRequested?: number;
};

export const cashflowReportRefreshRequestSchema: Schema<CashflowReportRefreshRequest> =
  s.object<CashflowReportRefreshRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    daysRequested: s.defaulted(s.int(), 365),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      daysRequested: "days_requested",
    },
  });
