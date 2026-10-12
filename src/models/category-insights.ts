import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryInsightDetailsSchema, type CategoryInsightDetails } from "./category-insight-details.js";

/** Insights on a user's top personal finance categories. */
export type CategoryInsights = {
  /** List of insights of top primary personal finance categories ranked by outflow. */
  primaryCategoryInsights?: CategoryInsightDetails[];
  /** List of insights of top detailed personal finance categories ranked by outflow. */
  detailedCategoryInsights?: CategoryInsightDetails[];
};

export const categoryInsightsSchema: Schema<CategoryInsights> = s.object<CategoryInsights>({
  primaryCategoryInsights: s.optional(s.array(s.lazy(() => categoryInsightDetailsSchema))),
  detailedCategoryInsights: s.optional(s.array(s.lazy(() => categoryInsightDetailsSchema))),
  _keysMap: {
    primaryCategoryInsights: "primary_category_insights",
    detailedCategoryInsights: "detailed_category_insights",
  },
});
