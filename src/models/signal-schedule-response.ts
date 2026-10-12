import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalScheduleRecommendationSchema,
  type SignalScheduleRecommendation,
} from "./signal-schedule-recommendation.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";

/** SignalScheduleResponse defines the response schema for `/signal/schedule` */
export type SignalScheduleResponse = {
  /**
   * The recommended optimal date to submit the debit entry, formatted in ISO 8601 "YYYY-MM-DD"
   * (e.g., "2024-03-30"). The `optimal_date` is derived from the date with rank = 1 in the
   * following recommendations array.
   *
   * NOTE: The `default_payment_method` field specified in the request will affect the
   * recommendation, since we're accounting for debit settlement time.
   *
   * The debit scheduling evaluation starts from the day the /signal/schedule request is submitted
   * (Day 0) or the next banking day if the submission day is not a banking day, and extends through
   * the following five banking days (Day 1 to Day 5). If no date within this period is considered
   * likely to result in a successful debit attempt, `null` will be returned for the `optimal_date`.
   */
  optimalDate: string | null;
  /**
   * This array provides a date-by-date evaluation of debit submission recommendations within the
   * five banking day evaluation period. Each object in the array represents a retry recommendation
   * for a specific date.
   */
  recommendations: SignalScheduleRecommendation[];
  /**
   * If bank information was not available to be used in the Signal Transaction Scores model, this
   * array contains warnings describing why bank data is missing. If you want to receive an API
   * error instead of scores in the case of missing bank data, file a support ticket or contact your
   * Plaid account manager.
   */
  warnings: SignalWarning[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const signalScheduleResponseSchema: Schema<SignalScheduleResponse> = s.object<SignalScheduleResponse>({
  optimalDate: s.nullable(s.dateOnly()),
  recommendations: s.array(s.lazy(() => signalScheduleRecommendationSchema)),
  warnings: s.array(s.lazy(() => signalWarningSchema)),
  requestId: s.string(),
  _keysMap: {
    optimalDate: "optimal_date",
    requestId: "request_id",
  },
});
