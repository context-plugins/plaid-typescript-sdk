import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craEmploymentRefreshReportItemSchema,
  type CraEmploymentRefreshReportItem,
} from "./cra-employment-refresh-report-item.js";

/** An object representing an Employment Refresh Report. */
export type CraEmploymentRefreshReport = {
  /**
   * The date and time when the Employment Refresh Report was created, in ISO 8601 format (e.g.
   * "2018-04-12T03:32:11Z").
   */
  generatedTime: Date;
  /** The number of days of transaction history that the Employment Refresh Report covers. */
  daysRequested: number;
  /** Data returned by Plaid about each of the Items included in the Employment Refresh Report. */
  items: CraEmploymentRefreshReportItem[];
};

export const craEmploymentRefreshReportSchema: Schema<CraEmploymentRefreshReport> =
  s.object<CraEmploymentRefreshReport>({
    generatedTime: s.dateTime(),
    daysRequested: s.float64(),
    items: s.array(s.lazy(() => craEmploymentRefreshReportItemSchema)),
    _keysMap: {
      generatedTime: "generated_time",
      daysRequested: "days_requested",
    },
  });
