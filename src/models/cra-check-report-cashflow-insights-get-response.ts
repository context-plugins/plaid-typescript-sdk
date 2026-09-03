import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCashflowInsightsReportSchema,
  type CraCashflowInsightsReport,
} from "./cra-cashflow-insights-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraCheckReportCashflowInsightsGetResponse = {
  report: CraCashflowInsightsReport;
  requestId: string;
  warnings?: CraReportWarning[];
};

export const craCheckReportCashflowInsightsGetResponseSchema: Schema<CraCheckReportCashflowInsightsGetResponse> =
  s.object<CraCheckReportCashflowInsightsGetResponse>({
    report: craCashflowInsightsReportSchema,
    requestId: s.string(),
    warnings: s.optional(s.array(s.lazy(() => craReportWarningSchema))),
    _keysMap: {
      requestId: "request_id",
    },
  });
