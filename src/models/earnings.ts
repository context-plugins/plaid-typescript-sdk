import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { earningsBreakdownSchema, type EarningsBreakdown } from "./earnings-breakdown.js";
import { earningsTotalSchema, type EarningsTotal } from "./earnings-total.js";

export type Earnings = {
  subtotals?: EarningsTotal[];
  totals?: EarningsTotal[];
  breakdown?: EarningsBreakdown[];
  total?: EarningsTotal;
};

export const earningsSchema: Schema<Earnings> = s.object<Earnings>({
  subtotals: s.optional(s.array(s.lazy(() => earningsTotalSchema))),
  totals: s.optional(s.array(s.lazy(() => earningsTotalSchema))),
  breakdown: s.optional(s.array(s.lazy(() => earningsBreakdownSchema))),
  total: s.optional(s.lazy(() => earningsTotalSchema)),
});
