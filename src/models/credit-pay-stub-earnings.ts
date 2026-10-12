import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payStubEarningsBreakdownSchema,
  type PayStubEarningsBreakdown,
} from "./pay-stub-earnings-breakdown.js";
import { payStubEarningsTotalSchema, type PayStubEarningsTotal } from "./pay-stub-earnings-total.js";

/** An object representing both a breakdown of earnings on a pay stub and the total earnings. */
export type CreditPayStubEarnings = {
  breakdown: PayStubEarningsBreakdown[];
  /**
   * An object representing both the current pay period and year to date amount for an earning
   * category.
   */
  total: PayStubEarningsTotal;
};

export const creditPayStubEarningsSchema: Schema<CreditPayStubEarnings> = s.object<CreditPayStubEarnings>({
  breakdown: s.array(s.lazy(() => payStubEarningsBreakdownSchema)),
  total: payStubEarningsTotalSchema,
});
