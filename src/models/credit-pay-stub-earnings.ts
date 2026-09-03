import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payStubEarningsBreakdownSchema,
  type PayStubEarningsBreakdown,
} from "./pay-stub-earnings-breakdown.js";
import { payStubEarningsTotalSchema, type PayStubEarningsTotal } from "./pay-stub-earnings-total.js";

export type CreditPayStubEarnings = {
  breakdown: PayStubEarningsBreakdown[];
  total: PayStubEarningsTotal;
};

export const creditPayStubEarningsSchema: Schema<CreditPayStubEarnings> = s.object<CreditPayStubEarnings>({
  breakdown: s.array(s.lazy(() => payStubEarningsBreakdownSchema)),
  total: payStubEarningsTotalSchema,
});
