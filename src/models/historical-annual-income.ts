import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HistoricalAnnualIncome = {
  baselineAmount?: number | null;
  currentAmount: number;
};

export const historicalAnnualIncomeSchema: Schema<HistoricalAnnualIncome> = s.object<HistoricalAnnualIncome>({
  baselineAmount: s.optionalNullable(s.number()),
  currentAmount: s.number(),
  _keysMap: {
    baselineAmount: "baseline_amount",
    currentAmount: "current_amount",
  },
});
