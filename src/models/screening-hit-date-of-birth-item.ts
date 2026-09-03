import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type ScreeningHitDateOfBirthItem = {
  analysis?: MatchSummary;
  data?: DateRange;
};

export const screeningHitDateOfBirthItemSchema: Schema<ScreeningHitDateOfBirthItem> =
  s.object<ScreeningHitDateOfBirthItem>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => dateRangeSchema)),
  });
