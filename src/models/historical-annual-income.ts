import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the historical annual income amount. */
export type HistoricalAnnualIncome = {
  /**
   * The historical annual income at the time of subscription
   *
   * @deprecated
   */
  baselineAmount?: number | null;
  /** The current historical annual income */
  currentAmount: number;
};

export const historicalAnnualIncomeSchema: Schema<HistoricalAnnualIncome> = s.object<HistoricalAnnualIncome>({
  baselineAmount: s.optionalNullable(s.float64()),
  currentAmount: s.float64(),
  _keysMap: {
    baselineAmount: "baseline_amount",
    currentAmount: "current_amount",
  },
});
