import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the total monthly income */
export type TotalMonthlyIncomeInsights = {
  /**
   * The aggregated income for the 30 days prior to subscription date
   *
   * @deprecated
   */
  baselineAmount?: number | null;
  /** The aggregated income of the last 30 days */
  currentAmount: number;
};

export const totalMonthlyIncomeInsightsSchema: Schema<TotalMonthlyIncomeInsights> =
  s.object<TotalMonthlyIncomeInsights>({
    baselineAmount: s.optionalNullable(s.float64()),
    currentAmount: s.float64(),
    _keysMap: {
      baselineAmount: "baseline_amount",
      currentAmount: "current_amount",
    },
  });
