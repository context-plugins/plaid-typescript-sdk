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

/** Contains data for the CRA Credit Profile Report. */
export type CraCreditProfileReport = {
  /** The time when the report was retrieved. */
  dateRetrieved: Date;
  /** The inquiry type of credit profile report. */
  inquiryType: CraCreditProfileInquiryType;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId: string;
  /** The LendScore results for the credit profile report. */
  lendScores: (CraCreditProfileLendScore | null)[];
  /**
   * A map of cash flow attributes, where the key is a string, and the value is a string, float,
   * int, or boolean. The specific list of attributes will depend on the cash flow attributes
   * version used. For a full list of attributes, contact your account manager.
   */
  cashflowInsightsAttributes: Record<string, Record<string, unknown>> | null;
  /**
   * A map of network attributes, where the key is a string, and the value is a float, int, or
   * boolean. For a full list of attributes, contact your account manager.
   */
  networkInsightsAttributes: Record<string, Record<string, unknown>> | null;
  /** Metadata about the CRA Credit Profile Report. */
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
