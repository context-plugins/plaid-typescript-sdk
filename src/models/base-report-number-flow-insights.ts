import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The number of credits or debits out of the account. This field will only be included for
 * depository accounts.
 */
export type BaseReportNumberFlowInsights = {
  /**
   * The start date of this time period. The date will be returned in an ISO 8601 format
   * (YYYY-MM-DD).
   */
  startDate: string;
  /**
   * The end date of this time period. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate: string;
  /** The number of credits or debits out of the account for this time period. */
  count: number;
};

export const baseReportNumberFlowInsightsSchema: Schema<BaseReportNumberFlowInsights> =
  s.object<BaseReportNumberFlowInsights>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    count: s.int(),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
