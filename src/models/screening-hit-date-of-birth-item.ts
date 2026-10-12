import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

/** Analyzed date of birth for the associated hit */
export type ScreeningHitDateOfBirthItem = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /** A date range with a start and end date */
  data?: DateRange;
};

export const screeningHitDateOfBirthItemSchema: Schema<ScreeningHitDateOfBirthItem> =
  s.object<ScreeningHitDateOfBirthItem>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => dateRangeSchema)),
  });
