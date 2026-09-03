import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craEmploymentRefreshReportItemSchema,
  type CraEmploymentRefreshReportItem,
} from "./cra-employment-refresh-report-item.js";

export type CraEmploymentRefreshReport = {
  generatedTime: Date;
  daysRequested: number;
  items: CraEmploymentRefreshReportItem[];
};

export const craEmploymentRefreshReportSchema: Schema<CraEmploymentRefreshReport> =
  s.object<CraEmploymentRefreshReport>({
    generatedTime: s.dateTime(),
    daysRequested: s.number(),
    items: s.array(s.lazy(() => craEmploymentRefreshReportItemSchema)),
    _keysMap: {
      generatedTime: "generated_time",
      daysRequested: "days_requested",
    },
  });
