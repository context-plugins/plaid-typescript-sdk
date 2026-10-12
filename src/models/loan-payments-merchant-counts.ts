import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details regarding the number of unique loan payment merchants */
export type LoanPaymentsMerchantCounts = {
  /**
   * The number of unique loan payment merchants detected in the 30 days before the subscription
   * date
   *
   * @deprecated
   */
  baselineCount?: number | null;
  /** The current number of unique loan payment merchants detected in the last 30 days */
  currentCount: number;
};

export const loanPaymentsMerchantCountsSchema: Schema<LoanPaymentsMerchantCounts> =
  s.object<LoanPaymentsMerchantCounts>({
    baselineCount: s.optionalNullable(s.float64()),
    currentCount: s.float64(),
    _keysMap: {
      baselineCount: "baseline_count",
      currentCount: "current_count",
    },
  });
