import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCheckReportVerificationGetEmploymentRefreshOptions = {
  daysRequested: number;
};

export const craCheckReportVerificationGetEmploymentRefreshOptionsSchema: Schema<CraCheckReportVerificationGetEmploymentRefreshOptions> =
  s.object<CraCheckReportVerificationGetEmploymentRefreshOptions>({
    daysRequested: s.number(),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
