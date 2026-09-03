import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportVerificationGetEmploymentRefreshOptionsSchema,
  type CraCheckReportVerificationGetEmploymentRefreshOptions,
} from "./cra-check-report-verification-get-employment-refresh-options.js";
import {
  craCheckReportVerificationGetReportTypeSchema,
  type CraCheckReportVerificationGetReportType,
} from "./cra-check-report-verification-get-report-type.js";

export type CraCheckReportVerificationGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  reportsRequested: CraCheckReportVerificationGetReportType[];
  employmentRefreshOptions?: CraCheckReportVerificationGetEmploymentRefreshOptions | null;
  userToken?: string;
};

export const craCheckReportVerificationGetRequestSchema: Schema<CraCheckReportVerificationGetRequest> =
  s.object<CraCheckReportVerificationGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    reportsRequested: s.array(s.lazy(() => craCheckReportVerificationGetReportTypeSchema)),
    employmentRefreshOptions: s.optionalNullable(
      s.lazy(() => craCheckReportVerificationGetEmploymentRefreshOptionsSchema),
    ),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      reportsRequested: "reports_requested",
      employmentRefreshOptions: "employment_refresh_options",
      userToken: "user_token",
    },
  });
