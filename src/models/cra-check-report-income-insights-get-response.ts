import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craIncomeInsightsSchema, type CraIncomeInsights } from "./cra-income-insights.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/**
 * CraCheckReportIncomeInsightsGetResponse defines the response schema for
 * `/cra/check_report/income_insights/get`.
 */
export type CraCheckReportIncomeInsightsGetResponse = {
  /** The Check Income Insights Report for an end user. */
  report?: CraIncomeInsights;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * If the Income Insights generation was successful but a subset of data could not be retrieved,
   * this array will contain information about the errors causing information to be missing
   */
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
