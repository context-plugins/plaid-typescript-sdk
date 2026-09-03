import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseReportLongestGapInsights = {
  startDate?: string;
  endDate?: string;
  days?: number | null;
};

export const baseReportLongestGapInsightsSchema: Schema<BaseReportLongestGapInsights> =
  s.object<BaseReportLongestGapInsights>({
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    days: s.optionalNullable(s.number()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
