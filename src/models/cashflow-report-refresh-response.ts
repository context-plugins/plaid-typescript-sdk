import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashflowReportRefreshResponse = {
  requestId: string;
};

export const cashflowReportRefreshResponseSchema: Schema<CashflowReportRefreshResponse> =
  s.object<CashflowReportRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
