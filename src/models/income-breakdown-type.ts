import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of income. Possible values include: `"regular"`: regular income `"overtime"`: overtime
 * income `"bonus"`: bonus income
 */
export const IncomeBreakdownType = {
  Bonus: "bonus",
  Overtime: "overtime",
  Regular: "regular",
} as const;
export type IncomeBreakdownType =
  | (typeof IncomeBreakdownType)[keyof typeof IncomeBreakdownType]
  | (string & {});

export const incomeBreakdownTypeSchema: EnumSchema<IncomeBreakdownType> =
  s.enumOf<IncomeBreakdownType>(IncomeBreakdownType);
