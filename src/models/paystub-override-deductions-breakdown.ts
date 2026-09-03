import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideDeductionsBreakdown = {
  currentAmount?: number | null;
  description?: string | null;
  currency?: string | null;
  ytdAmount?: number | null;
};

export const paystubOverrideDeductionsBreakdownSchema: Schema<PaystubOverrideDeductionsBreakdown> =
  s.object<PaystubOverrideDeductionsBreakdown>({
    currentAmount: s.optionalNullable(s.number()),
    description: s.optionalNullable(s.string()),
    currency: s.optionalNullable(s.string()),
    ytdAmount: s.optionalNullable(s.number()),
    _keysMap: {
      currentAmount: "current_amount",
      ytdAmount: "ytd_amount",
    },
  });
