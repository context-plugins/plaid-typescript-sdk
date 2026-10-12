import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deductionsBreakdownSchema, type DeductionsBreakdown } from "./deductions-breakdown.js";
import { deductionsTotalSchema, type DeductionsTotal } from "./deductions-total.js";
import { totalSchema, type Total } from "./total.js";

/** An object with the deduction information found on a paystub. */
export type Deductions = {
  /**
   * @deprecated
   */
  subtotals?: Total[];
  breakdown: DeductionsBreakdown[];
  /**
   * @deprecated
   */
  totals?: Total[];
  /** An object representing the total deductions for the pay period */
  total: DeductionsTotal;
};

export const deductionsSchema: Schema<Deductions> = s.object<Deductions>({
  subtotals: s.optional(s.array(s.lazy(() => totalSchema))),
  breakdown: s.array(s.lazy(() => deductionsBreakdownSchema)),
  totals: s.optional(s.array(s.lazy(() => totalSchema))),
  total: deductionsTotalSchema,
});
