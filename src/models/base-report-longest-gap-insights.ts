import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Largest number of days between sequential transactions per calendar month */
export type BaseReportLongestGapInsights = {
  /**
   * The start date of this time period. The date will be returned in an ISO 8601 format
   * (YYYY-MM-DD).
   */
  startDate?: string;
  /**
   * The end date of this time period. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate?: string;
  /** Largest number of days between sequential transactions for this time period. */
  days?: number | null;
};

export const baseReportLongestGapInsightsSchema: Schema<BaseReportLongestGapInsights> =
  s.object<BaseReportLongestGapInsights>({
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    days: s.optionalNullable(s.int()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
