import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
 * New clients should specify required products when creating the Consumer Report. Existing
 * integrations may continue to pass `employment_refresh_options`.
 */
export type CraCheckReportVerificationGetEmploymentRefreshOptions = {
  /**
   * The number of days of data to request for the report. This field is required if an Employment
   * Refresh Report is requested. Maximum is 731.
   */
  daysRequested: number;
};

export const craCheckReportVerificationGetEmploymentRefreshOptionsSchema: Schema<CraCheckReportVerificationGetEmploymentRefreshOptions> =
  s.object<CraCheckReportVerificationGetEmploymentRefreshOptions>({
    daysRequested: s.int(),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
