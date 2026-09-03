import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craPartnerInsightsSchema, type CraPartnerInsights } from "./cra-partner-insights.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraCheckReportPartnerInsightsGetResponse = {
  report?: CraPartnerInsights;
  requestId: string;
  warnings?: CraReportWarning[];
};

export const craCheckReportPartnerInsightsGetResponseSchema: Schema<CraCheckReportPartnerInsightsGetResponse> =
  s.object<CraCheckReportPartnerInsightsGetResponse>({
    report: s.optional(s.lazy(() => craPartnerInsightsSchema)),
    requestId: s.string(),
    warnings: s.optional(s.array(s.lazy(() => craReportWarningSchema))),
    _keysMap: {
      requestId: "request_id",
    },
  });
