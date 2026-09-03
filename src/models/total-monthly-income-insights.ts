import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalMonthlyIncomeInsights = {
  baselineAmount?: number | null;
  currentAmount: number;
};

export const totalMonthlyIncomeInsightsSchema: Schema<TotalMonthlyIncomeInsights> =
  s.object<TotalMonthlyIncomeInsights>({
    baselineAmount: s.optionalNullable(s.number()),
    currentAmount: s.number(),
    _keysMap: {
      baselineAmount: "baseline_amount",
      currentAmount: "current_amount",
    },
  });
