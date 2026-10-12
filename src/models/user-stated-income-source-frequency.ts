import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The pay frequency of a specified income source */
export const UserStatedIncomeSourceFrequency = {
  Unknown: "UNKNOWN",
  Weekly: "WEEKLY",
  Biweekly: "BIWEEKLY",
  SemiMonthly: "SEMI_MONTHLY",
  Monthly: "MONTHLY",
} as const;
export type UserStatedIncomeSourceFrequency =
  | (typeof UserStatedIncomeSourceFrequency)[keyof typeof UserStatedIncomeSourceFrequency]
  | (string & {});

export const userStatedIncomeSourceFrequencySchema: EnumSchema<UserStatedIncomeSourceFrequency> =
  s.enumOf<UserStatedIncomeSourceFrequency>(UserStatedIncomeSourceFrequency);
