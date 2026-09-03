import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incomeBreakdownTypeSchema, type IncomeBreakdownType } from "./income-breakdown-type.js";

export type IncomeBreakdown = {
  type: IncomeBreakdownType | null;
  rate: number | null;
  hours: number | null;
  total: number | null;
};

export const incomeBreakdownSchema: Schema<IncomeBreakdown> = s.object<IncomeBreakdown>({
  type: s.nullable(s.lazy(() => incomeBreakdownTypeSchema)),
  rate: s.nullable(s.number()),
  hours: s.nullable(s.number()),
  total: s.nullable(s.number()),
});
