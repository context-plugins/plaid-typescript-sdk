import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCashflowInsightsReportSchema,
  type CraCashflowInsightsReport,
} from "./cra-cashflow-insights-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/**
 * CraCheckReportCashflowInsightsGetResponse defines the response schema for
 * `/cra/check_report/cashflow_insights/get`.
 */
export type CraCheckReportCashflowInsightsGetResponse = {
  /** Contains data for the CRA Cashflow Insights Report. */
  report: CraCashflowInsightsReport;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * If the Cashflow Insights generation was successful but a subset of data could not be retrieved,
   * this array will contain information about the errors causing information to be missing
   */
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
