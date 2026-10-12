import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The income category for a specified income source */
export const UserStatedIncomeSourceCategory = {
  Other: "OTHER",
  Salary: "SALARY",
  Unemployment: "UNEMPLOYMENT",
  Cash: "CASH",
  GigEconomy: "GIG_ECONOMY",
  Rental: "RENTAL",
  ChildSupport: "CHILD_SUPPORT",
  Military: "MILITARY",
  Retirement: "RETIREMENT",
  LongTermDisability: "LONG_TERM_DISABILITY",
  BankInterest: "BANK_INTEREST",
} as const;
export type UserStatedIncomeSourceCategory =
  | (typeof UserStatedIncomeSourceCategory)[keyof typeof UserStatedIncomeSourceCategory]
  | (string & {});

export const userStatedIncomeSourceCategorySchema: EnumSchema<UserStatedIncomeSourceCategory> =
  s.enumOf<UserStatedIncomeSourceCategory>(UserStatedIncomeSourceCategory);
