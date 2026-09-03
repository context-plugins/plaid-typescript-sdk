import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payStubDeductionsBreakdownSchema,
  type PayStubDeductionsBreakdown,
} from "./pay-stub-deductions-breakdown.js";
import { payStubDeductionsTotalSchema, type PayStubDeductionsTotal } from "./pay-stub-deductions-total.js";

export type CreditPayStubDeductions = {
  breakdown: PayStubDeductionsBreakdown[];
  total: PayStubDeductionsTotal;
};

export const creditPayStubDeductionsSchema: Schema<CreditPayStubDeductions> =
  s.object<CreditPayStubDeductions>({
    breakdown: s.array(s.lazy(() => payStubDeductionsBreakdownSchema)),
    total: payStubDeductionsTotalSchema,
  });
