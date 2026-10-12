import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details regarding the number of loan payments */
export type LoanPaymentsCounts = {
  /**
   * The number of loan payments made in the 30 days before the subscription date
   *
   * @deprecated
   */
  baselineCount?: number | null;
  /** The current number of loan payments made in the last 30 days */
  currentCount: number;
};

export const loanPaymentsCountsSchema: Schema<LoanPaymentsCounts> = s.object<LoanPaymentsCounts>({
  baselineCount: s.optionalNullable(s.float64()),
  currentCount: s.float64(),
  _keysMap: {
    baselineCount: "baseline_count",
    currentCount: "current_count",
  },
});
