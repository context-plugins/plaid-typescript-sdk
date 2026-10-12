import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportCreateEmploymentRefreshOptionsSchema,
  type CraCheckReportCreateEmploymentRefreshOptions,
} from "./cra-check-report-create-employment-refresh-options.js";
import {
  craCheckReportVerificationGetReportTypeSchema,
  type CraCheckReportVerificationGetReportType,
} from "./cra-check-report-verification-get-report-type.js";

/** Options for configuring Home Lending Report (Verification Report) generation. */
export type CraCheckReportHomeLendingReportOptions = {
  /** Specifies which types of home lending reports to generate. */
  reportsRequested: CraCheckReportVerificationGetReportType[];
  /** Defines configuration options for the Employment Refresh Report. */
  employmentRefreshOptions?: CraCheckReportCreateEmploymentRefreshOptions | null;
};

export const craCheckReportHomeLendingReportOptionsSchema: Schema<CraCheckReportHomeLendingReportOptions> =
  s.object<CraCheckReportHomeLendingReportOptions>({
    reportsRequested: s.array(s.lazy(() => craCheckReportVerificationGetReportTypeSchema)),
    employmentRefreshOptions: s.optionalNullable(
      s.lazy(() => craCheckReportCreateEmploymentRefreshOptionsSchema),
    ),
    _keysMap: {
      reportsRequested: "reports_requested",
      employmentRefreshOptions: "employment_refresh_options",
    },
  });
