import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowReportGetRequestOptionsSchema,
  type CashflowReportGetRequestOptions,
} from "./cashflow-report-get-request-options.js";

export type CashflowReportGetRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  daysRequested: number;
  count?: number;
  cursor?: string;
  options?: CashflowReportGetRequestOptions;
};

export const cashflowReportGetRequestSchema: Schema<CashflowReportGetRequest> =
  s.object<CashflowReportGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    daysRequested: s.number(),
    count: s.optional(s.number()),
    cursor: s.optional(s.string()),
    options: s.optional(s.lazy(() => cashflowReportGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      daysRequested: "days_requested",
    },
  });
