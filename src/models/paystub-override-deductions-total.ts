import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the total deductions for the pay period */
export type PaystubOverrideDeductionsTotal = {
  /** Raw amount of the deduction */
  currentAmount?: number | null;
  /** The ISO-4217 currency code of the line item. */
  currency?: string | null;
  /** The year-to-date total amount of the deductions */
  ytdAmount?: number | null;
};

export const paystubOverrideDeductionsTotalSchema: Schema<PaystubOverrideDeductionsTotal> =
  s.object<PaystubOverrideDeductionsTotal>({
    currentAmount: s.optionalNullable(s.float64()),
    currency: s.optionalNullable(s.string()),
    ytdAmount: s.optionalNullable(s.float64()),
    _keysMap: {
      currentAmount: "current_amount",
      ytdAmount: "ytd_amount",
    },
  });
