import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incomeBreakdownTypeSchema, type IncomeBreakdownType } from "./income-breakdown-type.js";

/** An object representing a breakdown of the different income types on the paystub. */
export type IncomeBreakdown = {
  /**
   * The type of income. Possible values include: `"regular"`: regular income `"overtime"`: overtime
   * income `"bonus"`: bonus income
   */
  type: IncomeBreakdownType | null;
  /** The hourly rate at which the income is paid. */
  rate: number | null;
  /** The number of hours logged for this income for this pay period. */
  hours: number | null;
  /** The total pay for this pay period. */
  total: number | null;
};

export const incomeBreakdownSchema: Schema<IncomeBreakdown> = s.object<IncomeBreakdown>({
  type: s.nullable(s.lazy(() => incomeBreakdownTypeSchema)),
  rate: s.nullable(s.float64()),
  hours: s.nullable(s.float64()),
  total: s.nullable(s.float64()),
});
