import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankIncomeRefreshCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type BankIncomeRefreshCompleteResult =
  | (typeof BankIncomeRefreshCompleteResult)[keyof typeof BankIncomeRefreshCompleteResult]
  | (string & {});

export const bankIncomeRefreshCompleteResultSchema: EnumSchema<BankIncomeRefreshCompleteResult> =
  s.enumOf<BankIncomeRefreshCompleteResult>(BankIncomeRefreshCompleteResult);
