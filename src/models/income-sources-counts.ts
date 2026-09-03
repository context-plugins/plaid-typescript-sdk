import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeSourcesCounts = {
  baselineCount?: number | null;
  currentCount: number;
};

export const incomeSourcesCountsSchema: Schema<IncomeSourcesCounts> = s.object<IncomeSourcesCounts>({
  baselineCount: s.optionalNullable(s.number()),
  currentCount: s.number(),
  _keysMap: {
    baselineCount: "baseline_count",
    currentCount: "current_count",
  },
});
