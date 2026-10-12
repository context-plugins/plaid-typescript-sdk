import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoResultsSchema,
  type CraPartnerInsightsFicoResults,
} from "./cra-partner-insights-fico-results.js";
import { craPartnerInsightsItemSchema, type CraPartnerInsightsItem } from "./cra-partner-insights-item.js";
import { craPartnerInsightsPrismSchema, type CraPartnerInsightsPrism } from "./cra-partner-insights-prism.js";

/** The Partner Insights report of the bank data for an end user. */
export type CraPartnerInsights = {
  /** A unique identifier associated with the Partner Insights object. */
  reportId?: string;
  /** The time when the Partner Insights report was generated. */
  generatedTime?: Date;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /** The calculated UltraFICO® scores returned as part of the Partner Insights report. */
  fico?: CraPartnerInsightsFicoResults | null;
  /** The Prism Data insights for the user. */
  prism?: CraPartnerInsightsPrism | null;
  /** The list of Items used in the report along with the associated metadata about the Item. */
  items?: CraPartnerInsightsItem[];
};

export const craPartnerInsightsSchema: Schema<CraPartnerInsights> = s.object<CraPartnerInsights>({
  reportId: s.optional(s.string()),
  generatedTime: s.optional(s.dateTime()),
  clientReportId: s.optionalNullable(s.string()),
  fico: s.optionalNullable(s.lazy(() => craPartnerInsightsFicoResultsSchema)),
  prism: s.optionalNullable(s.lazy(() => craPartnerInsightsPrismSchema)),
  items: s.optional(s.array(s.lazy(() => craPartnerInsightsItemSchema))),
  _keysMap: {
    reportId: "report_id",
    generatedTime: "generated_time",
    clientReportId: "client_report_id",
  },
});
