import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object representing the predicted average monthly net income amount. This amount reflects the
 * funds deposited into the account and may not include any withheld income such as taxes or other
 * payroll deductions
 */
export type ForecastedMonthlyIncome = {
  /**
   * The forecasted monthly income at the time of subscription
   *
   * @deprecated
   */
  baselineAmount?: number | null;
  /** The current forecasted monthly income */
  currentAmount: number;
};

export const forecastedMonthlyIncomeSchema: Schema<ForecastedMonthlyIncome> =
  s.object<ForecastedMonthlyIncome>({
    baselineAmount: s.optionalNullable(s.float64()),
    currentAmount: s.float64(),
    _keysMap: {
      baselineAmount: "baseline_amount",
      currentAmount: "current_amount",
    },
  });
