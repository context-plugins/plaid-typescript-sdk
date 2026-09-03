import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoanPaymentsCounts = {
  baselineCount?: number | null;
  currentCount: number;
};

export const loanPaymentsCountsSchema: Schema<LoanPaymentsCounts> = s.object<LoanPaymentsCounts>({
  baselineCount: s.optionalNullable(s.number()),
  currentCount: s.number(),
  _keysMap: {
    baselineCount: "baseline_count",
    currentCount: "current_count",
  },
});
