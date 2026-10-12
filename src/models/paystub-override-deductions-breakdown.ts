import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the deduction line items for the pay period */
export type PaystubOverrideDeductionsBreakdown = {
  /** Raw amount of the deduction */
  currentAmount?: number | null;
  /** Description of the deduction line item */
  description?: string | null;
  /** The ISO-4217 currency code of the line item. */
  currency?: string | null;
  /** The year-to-date amount of the deduction */
  ytdAmount?: number | null;
};

export const paystubOverrideDeductionsBreakdownSchema: Schema<PaystubOverrideDeductionsBreakdown> =
  s.object<PaystubOverrideDeductionsBreakdown>({
    currentAmount: s.optionalNullable(s.float64()),
    description: s.optionalNullable(s.string()),
    currency: s.optionalNullable(s.string()),
    ytdAmount: s.optionalNullable(s.float64()),
    _keysMap: {
      currentAmount: "current_amount",
      ytdAmount: "ytd_amount",
    },
  });
