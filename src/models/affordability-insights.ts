import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expenditureInsightsSchema, type ExpenditureInsights } from "./expenditure-insights.js";
import { incomeInsightsSchema, type IncomeInsights } from "./income-insights.js";

export type AffordabilityInsights = {
  expenditure?: ExpenditureInsights | null;
  income?: IncomeInsights | null;
};

export const affordabilityInsightsSchema: Schema<AffordabilityInsights> = s.object<AffordabilityInsights>({
  expenditure: s.optionalNullable(s.lazy(() => expenditureInsightsSchema)),
  income: s.optionalNullable(s.lazy(() => incomeInsightsSchema)),
});
