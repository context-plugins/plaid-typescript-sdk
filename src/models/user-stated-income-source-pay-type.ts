import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserStatedIncomeSourcePayType = {
  Unknown: "UNKNOWN",
  Gross: "GROSS",
  Net: "NET",
} as const;
export type UserStatedIncomeSourcePayType =
  | (typeof UserStatedIncomeSourcePayType)[keyof typeof UserStatedIncomeSourcePayType]
  | (string & {});

export const userStatedIncomeSourcePayTypeSchema: EnumSchema<UserStatedIncomeSourcePayType> =
  s.enumOf<UserStatedIncomeSourcePayType>(UserStatedIncomeSourcePayType);
