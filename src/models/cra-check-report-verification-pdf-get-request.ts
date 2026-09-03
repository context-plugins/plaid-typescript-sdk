import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportVerificationPdfReportTypeSchema,
  type CraCheckReportVerificationPdfReportType,
} from "./cra-check-report-verification-pdf-report-type.js";

export type CraCheckReportVerificationPdfGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  thirdPartyUserToken?: string;
  reportRequested?: CraCheckReportVerificationPdfReportType;
  reportsRequested?: CraCheckReportVerificationPdfReportType[];
  hideGseDetails?: boolean;
  userToken?: string;
};

export const craCheckReportVerificationPdfGetRequestSchema: Schema<CraCheckReportVerificationPdfGetRequest> =
  s.object<CraCheckReportVerificationPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    reportRequested: s.optional(s.lazy(() => craCheckReportVerificationPdfReportTypeSchema)),
    reportsRequested: s.optional(s.array(s.lazy(() => craCheckReportVerificationPdfReportTypeSchema))),
    hideGseDetails: s.optional(s.boolean()),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      reportRequested: "report_requested",
      reportsRequested: "reports_requested",
      hideGseDetails: "hide_gse_details",
      userToken: "user_token",
    },
  });
