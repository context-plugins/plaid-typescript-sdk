import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craNetworkInsightsReportSchema,
  type CraNetworkInsightsReport,
} from "./cra-network-insights-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraCheckReportNetworkInsightsGetResponse = {
  report: CraNetworkInsightsReport;
  requestId: string;
  warnings?: CraReportWarning[];
};

export const craCheckReportNetworkInsightsGetResponseSchema: Schema<CraCheckReportNetworkInsightsGetResponse> =
  s.object<CraCheckReportNetworkInsightsGetResponse>({
    report: craNetworkInsightsReportSchema,
    requestId: s.string(),
    warnings: s.optional(s.array(s.lazy(() => craReportWarningSchema))),
    _keysMap: {
      requestId: "request_id",
    },
  });
