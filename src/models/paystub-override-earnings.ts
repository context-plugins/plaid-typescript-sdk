import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paystubOverrideEarningsBreakdownSchema,
  type PaystubOverrideEarningsBreakdown,
} from "./paystub-override-earnings-breakdown.js";
import {
  paystubOverrideEarningsTotalSchema,
  type PaystubOverrideEarningsTotal,
} from "./paystub-override-earnings-total.js";

/** An object representing both a breakdown of earnings on a paystub and the total earnings. */
export type PaystubOverrideEarnings = {
  breakdown?: PaystubOverrideEarningsBreakdown[];
  /**
   * An object representing both the current pay period and year to date amount for an earning
   * category.
   */
  total?: PaystubOverrideEarningsTotal;
};

export const paystubOverrideEarningsSchema: Schema<PaystubOverrideEarnings> =
  s.object<PaystubOverrideEarnings>({
    breakdown: s.optional(s.array(s.lazy(() => paystubOverrideEarningsBreakdownSchema))),
    total: s.optional(s.lazy(() => paystubOverrideEarningsTotalSchema)),
  });
