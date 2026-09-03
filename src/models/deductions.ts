import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deductionsBreakdownSchema, type DeductionsBreakdown } from "./deductions-breakdown.js";
import { deductionsTotalSchema, type DeductionsTotal } from "./deductions-total.js";
import { totalSchema, type Total } from "./total.js";

export type Deductions = {
  subtotals?: Total[];
  breakdown: DeductionsBreakdown[];
  totals?: Total[];
  total: DeductionsTotal;
};

export const deductionsSchema: Schema<Deductions> = s.object<Deductions>({
  subtotals: s.optional(s.array(s.lazy(() => totalSchema))),
  breakdown: s.array(s.lazy(() => deductionsBreakdownSchema)),
  totals: s.optional(s.array(s.lazy(() => totalSchema))),
  total: deductionsTotalSchema,
});
