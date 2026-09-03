import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendationStringSchema, type RecommendationString } from "./recommendation-string.js";

export type SignalScheduleRecommendation = {
  date?: string;
  recommendation?: RecommendationString;
  rank?: number | null;
};

export const signalScheduleRecommendationSchema: Schema<SignalScheduleRecommendation> =
  s.object<SignalScheduleRecommendation>({
    date: s.optional(s.dateOnly()),
    recommendation: s.optional(s.lazy(() => recommendationStringSchema)),
    rank: s.optionalNullable(s.number()),
  });
