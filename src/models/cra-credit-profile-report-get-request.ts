import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import {
  craCreditProfileInquiryTypeSchema,
  type CraCreditProfileInquiryType,
} from "./cra-credit-profile-inquiry-type.js";

export type CraCreditProfileReportGetRequest = {
  clientId?: string;
  secret?: string;
  userId: string;
  consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose;
  clientReportId: string;
  reportType: "QUALIFY";
  inquiryType: CraCreditProfileInquiryType;
  version: "v1";
};

export const craCreditProfileReportGetRequestSchema: Schema<CraCreditProfileReportGetRequest> =
  s.object<CraCreditProfileReportGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.string(),
    consumerReportPermissiblePurpose: consumerReportPermissiblePurposeSchema,
    clientReportId: s.string(),
    reportType: s.literal("QUALIFY"),
    inquiryType: craCreditProfileInquiryTypeSchema,
    version: s.literal("v1"),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
      clientReportId: "client_report_id",
      reportType: "report_type",
      inquiryType: "inquiry_type",
    },
  });
