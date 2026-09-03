import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeInsightsFilter = {
  includedCategories: string[];
  excludedCategories?: string[];
};

export const incomeInsightsFilterSchema: Schema<IncomeInsightsFilter> = s.object<IncomeInsightsFilter>({
  includedCategories: s.array(s.string()),
  excludedCategories: s.optional(s.array(s.string())),
  _keysMap: {
    includedCategories: "included_categories",
    excludedCategories: "excluded_categories",
  },
});
