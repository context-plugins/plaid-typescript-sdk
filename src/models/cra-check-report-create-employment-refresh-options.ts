import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCheckReportCreateEmploymentRefreshOptions = {
  daysRequested: number;
};

export const craCheckReportCreateEmploymentRefreshOptionsSchema: Schema<CraCheckReportCreateEmploymentRefreshOptions> =
  s.object<CraCheckReportCreateEmploymentRefreshOptions>({
    daysRequested: s.number(),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
