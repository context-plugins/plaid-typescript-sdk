import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craPartnerInsightsSchema, type CraPartnerInsights } from "./cra-partner-insights.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/**
 * CraCheckReportPartnerInsightsGetResponse defines the response schema for
 * `/cra/check_report/partner_insights/get`.
 */
export type CraCheckReportPartnerInsightsGetResponse = {
  /** The Partner Insights report of the bank data for an end user. */
  report?: CraPartnerInsights;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * If the Partner Insights generation was successful but a subset of data could not be retrieved,
   * this array will contain information about the errors causing information to be missing
   */
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
