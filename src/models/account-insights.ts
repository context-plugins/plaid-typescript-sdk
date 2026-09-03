import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { affordabilityInsightsSchema, type AffordabilityInsights } from "./affordability-insights.js";
import { riskIndicatorsSchema, type RiskIndicators } from "./risk-indicators.js";

export type AccountInsights = {
  risk?: RiskIndicators | null;
  affordability?: AffordabilityInsights | null;
};

export const accountInsightsSchema: Schema<AccountInsights> = s.object<AccountInsights>({
  risk: s.optionalNullable(s.lazy(() => riskIndicatorsSchema)),
  affordability: s.optionalNullable(s.lazy(() => affordabilityInsightsSchema)),
});
