import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craNetworkInsightsReportSchema,
  type CraNetworkInsightsReport,
} from "./cra-network-insights-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/**
 * CraCheckReportNetworkInsightsGetResponse defines the response schema for
 * `/cra/check_report/network_insights/get`.
 */
export type CraCheckReportNetworkInsightsGetResponse = {
  /** Contains data for the CRA Network Attributes Report. */
  report: CraNetworkInsightsReport;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * If the Network Insights generation was successful but a subset of data could not be retrieved,
   * this array will contain information about the errors causing information to be missing
   */
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
