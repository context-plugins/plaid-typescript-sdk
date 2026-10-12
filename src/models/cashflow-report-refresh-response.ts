import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CashflowReportRefreshResponse defines the response schema for `/cashflow_report/refresh` */
export type CashflowReportRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const cashflowReportRefreshResponseSchema: Schema<CashflowReportRefreshResponse> =
  s.object<CashflowReportRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
