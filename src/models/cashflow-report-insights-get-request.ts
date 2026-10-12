import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CashflowReportInsightsGetRequest defines the request schema for `/cashflow_report/insights/get`
 */
export type CashflowReportInsightsGetRequest = {
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
};

export const cashflowReportInsightsGetRequestSchema: Schema<CashflowReportInsightsGetRequest> =
  s.object<CashflowReportInsightsGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
