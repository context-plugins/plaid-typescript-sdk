import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoanPaymentsMerchantCounts = {
  baselineCount?: number | null;
  currentCount: number;
};

export const loanPaymentsMerchantCountsSchema: Schema<LoanPaymentsMerchantCounts> =
  s.object<LoanPaymentsMerchantCounts>({
    baselineCount: s.optionalNullable(s.number()),
    currentCount: s.number(),
    _keysMap: {
      baselineCount: "baseline_count",
      currentCount: "current_count",
    },
  });
