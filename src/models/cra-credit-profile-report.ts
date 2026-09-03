import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCreditProfileInquiryTypeSchema,
  type CraCreditProfileInquiryType,
} from "./cra-credit-profile-inquiry-type.js";
import {
  craCreditProfileLendScoreSchema,
  type CraCreditProfileLendScore,
} from "./cra-credit-profile-lend-score.js";
import {
  craCreditProfileReportMetadataSchema,
  type CraCreditProfileReportMetadata,
} from "./cra-credit-profile-report-metadata.js";

export type CraCreditProfileReport = {
  dateRetrieved: Date;
  inquiryType: CraCreditProfileInquiryType;
  clientReportId: string;
  lendScores: (CraCreditProfileLendScore | null)[];
  cashflowInsightsAttributes: Record<string, Record<string, unknown>> | null;
  networkInsightsAttributes: Record<string, Record<string, unknown>> | null;
  metadata: CraCreditProfileReportMetadata | null;
};

export const craCreditProfileReportSchema: Schema<CraCreditProfileReport> = s.object<CraCreditProfileReport>({
  dateRetrieved: s.dateTime(),
  inquiryType: craCreditProfileInquiryTypeSchema,
  clientReportId: s.string(),
  lendScores: s.array(s.nullable(s.lazy(() => craCreditProfileLendScoreSchema))),
  cashflowInsightsAttributes: s.nullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  networkInsightsAttributes: s.nullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  metadata: s.nullable(s.lazy(() => craCreditProfileReportMetadataSchema)),
  _keysMap: {
    dateRetrieved: "date_retrieved",
    inquiryType: "inquiry_type",
    clientReportId: "client_report_id",
    lendScores: "lend_scores",
    cashflowInsightsAttributes: "cashflow_insights_attributes",
    networkInsightsAttributes: "network_insights_attributes",
  },
});
