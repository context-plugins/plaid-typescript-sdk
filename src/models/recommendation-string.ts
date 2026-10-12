import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The recommendation result for that date. */
export const RecommendationString = {
  Recommended: "RECOMMENDED",
  NotRecommended: "NOT_RECOMMENDED",
  Unknown: "UNKNOWN",
} as const;
export type RecommendationString =
  | (typeof RecommendationString)[keyof typeof RecommendationString]
  | (string & {});

export const recommendationStringSchema: EnumSchema<RecommendationString> =
  s.enumOf<RecommendationString>(RecommendationString);
