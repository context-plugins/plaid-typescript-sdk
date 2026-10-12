import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the number of income sources */
export type IncomeSourcesCounts = {
  /**
   * The number of income sources detected at the subscription date
   *
   * @deprecated
   */
  baselineCount?: number | null;
  /** The number of income sources currently detected */
  currentCount: number;
};

export const incomeSourcesCountsSchema: Schema<IncomeSourcesCounts> = s.object<IncomeSourcesCounts>({
  baselineCount: s.optionalNullable(s.float64()),
  currentCount: s.float64(),
  _keysMap: {
    baselineCount: "baseline_count",
    currentCount: "current_count",
  },
});
