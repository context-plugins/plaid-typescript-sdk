import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paystubOverrideDeductionsBreakdownSchema,
  type PaystubOverrideDeductionsBreakdown,
} from "./paystub-override-deductions-breakdown.js";
import {
  paystubOverrideDeductionsTotalSchema,
  type PaystubOverrideDeductionsTotal,
} from "./paystub-override-deductions-total.js";

/** An object with the deduction information found on a paystub. */
export type PaystubOverrideDeductions = {
  breakdown?: PaystubOverrideDeductionsBreakdown[];
  /** An object representing the total deductions for the pay period */
  total?: PaystubOverrideDeductionsTotal;
};

export const paystubOverrideDeductionsSchema: Schema<PaystubOverrideDeductions> =
  s.object<PaystubOverrideDeductions>({
    breakdown: s.optional(s.array(s.lazy(() => paystubOverrideDeductionsBreakdownSchema))),
    total: s.optional(s.lazy(() => paystubOverrideDeductionsTotalSchema)),
  });
