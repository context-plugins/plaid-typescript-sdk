import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { earningsBreakdownSchema, type EarningsBreakdown } from "./earnings-breakdown.js";
import { earningsTotalSchema, type EarningsTotal } from "./earnings-total.js";

/** An object representing both a breakdown of earnings on a paystub and the total earnings. */
export type Earnings = {
  /**
   * @deprecated
   */
  subtotals?: EarningsTotal[];
  /**
   * @deprecated
   */
  totals?: EarningsTotal[];
  breakdown?: EarningsBreakdown[];
  /**
   * An object representing both the current pay period and year to date amount for an earning
   * category.
   */
  total?: EarningsTotal;
};

export const earningsSchema: Schema<Earnings> = s.object<Earnings>({
  subtotals: s.optional(s.array(s.lazy(() => earningsTotalSchema))),
  totals: s.optional(s.array(s.lazy(() => earningsTotalSchema))),
  breakdown: s.optional(s.array(s.lazy(() => earningsBreakdownSchema))),
  total: s.optional(s.lazy(() => earningsTotalSchema)),
});
