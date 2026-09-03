import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideDeductionsTotal = {
  currentAmount?: number | null;
  currency?: string | null;
  ytdAmount?: number | null;
};

export const paystubOverrideDeductionsTotalSchema: Schema<PaystubOverrideDeductionsTotal> =
  s.object<PaystubOverrideDeductionsTotal>({
    currentAmount: s.optionalNullable(s.number()),
    currency: s.optionalNullable(s.string()),
    ytdAmount: s.optionalNullable(s.number()),
    _keysMap: {
      currentAmount: "current_amount",
      ytdAmount: "ytd_amount",
    },
  });
