import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoResultsSchema,
  type CraPartnerInsightsFicoResults,
} from "./cra-partner-insights-fico-results.js";
import { craPartnerInsightsItemSchema, type CraPartnerInsightsItem } from "./cra-partner-insights-item.js";
import { craPartnerInsightsPrismSchema, type CraPartnerInsightsPrism } from "./cra-partner-insights-prism.js";

export type CraPartnerInsights = {
  reportId?: string;
  generatedTime?: Date;
  clientReportId?: string | null;
  fico?: CraPartnerInsightsFicoResults | null;
  prism?: CraPartnerInsightsPrism | null;
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
