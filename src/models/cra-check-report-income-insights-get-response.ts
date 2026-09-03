import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craIncomeInsightsSchema, type CraIncomeInsights } from "./cra-income-insights.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraCheckReportIncomeInsightsGetResponse = {
  report?: CraIncomeInsights;
  requestId: string;
  warnings?: CraReportWarning[];
};

export const craCheckReportIncomeInsightsGetResponseSchema: Schema<CraCheckReportIncomeInsightsGetResponse> =
  s.object<CraCheckReportIncomeInsightsGetResponse>({
    report: s.optional(s.lazy(() => craIncomeInsightsSchema)),
    requestId: s.string(),
    warnings: s.optional(s.array(s.lazy(() => craReportWarningSchema))),
    _keysMap: {
      requestId: "request_id",
    },
  });
