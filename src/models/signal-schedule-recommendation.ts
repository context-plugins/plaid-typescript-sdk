import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendationStringSchema, type RecommendationString } from "./recommendation-string.js";

/** Conveys information on if a retry is recommended on a given date */
export type SignalScheduleRecommendation = {
  /**
   * The specific date for submitting the debit entry, formatted in ISO 8601 (e.g., "2025-01-17").
   */
  date?: string;
  /** The recommendation result for that date. */
  recommendation?: RecommendationString;
  /**
   * The rank of the recommendation based on the likelihood of debit success, with 1 representing
   * the most optimal date. Dates with `NOT_RECOMMENDED` or `UNKNOWN` will have rank `null`.
   */
  rank?: number | null;
};

export const signalScheduleRecommendationSchema: Schema<SignalScheduleRecommendation> =
  s.object<SignalScheduleRecommendation>({
    date: s.optional(s.dateOnly()),
    recommendation: s.optional(s.lazy(() => recommendationStringSchema)),
    rank: s.optionalNullable(s.int()),
  });
