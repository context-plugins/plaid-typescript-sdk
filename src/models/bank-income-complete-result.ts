import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankIncomeCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type BankIncomeCompleteResult =
  | (typeof BankIncomeCompleteResult)[keyof typeof BankIncomeCompleteResult]
  | (string & {});

export const bankIncomeCompleteResultSchema: EnumSchema<BankIncomeCompleteResult> =
  s.enumOf<BankIncomeCompleteResult>(BankIncomeCompleteResult);
