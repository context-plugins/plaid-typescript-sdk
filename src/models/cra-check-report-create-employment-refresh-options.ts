import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines configuration options for the Employment Refresh Report. */
export type CraCheckReportCreateEmploymentRefreshOptions = {
  /**
   * The number of days of data to request for the report. This field is required if an Employment
   * Refresh Report is requested. Maximum is 731.
   */
  daysRequested: number;
};

export const craCheckReportCreateEmploymentRefreshOptionsSchema: Schema<CraCheckReportCreateEmploymentRefreshOptions> =
  s.object<CraCheckReportCreateEmploymentRefreshOptions>({
    daysRequested: s.int(),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
