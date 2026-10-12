import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payStubDeductionsBreakdownSchema,
  type PayStubDeductionsBreakdown,
} from "./pay-stub-deductions-breakdown.js";
import { payStubDeductionsTotalSchema, type PayStubDeductionsTotal } from "./pay-stub-deductions-total.js";

/** An object with the deduction information found on a pay stub. */
export type CreditPayStubDeductions = {
  breakdown: PayStubDeductionsBreakdown[];
  /** An object representing the total deductions for the pay period */
  total: PayStubDeductionsTotal;
};

export const creditPayStubDeductionsSchema: Schema<CreditPayStubDeductions> =
  s.object<CreditPayStubDeductions>({
    breakdown: s.array(s.lazy(() => payStubDeductionsBreakdownSchema)),
    total: payStubDeductionsTotalSchema,
  });
