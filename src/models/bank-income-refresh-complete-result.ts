import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the bank income refresh report generation
 *
 * `SUCCESS`: The refreshed report was successfully generated and can be retrieved via
 * `/credit/bank_income/get`.
 *
 * `FAILURE`: The refreshed report failed to be generated
 */
export const BankIncomeRefreshCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type BankIncomeRefreshCompleteResult =
  | (typeof BankIncomeRefreshCompleteResult)[keyof typeof BankIncomeRefreshCompleteResult]
  | (string & {});

export const bankIncomeRefreshCompleteResultSchema: EnumSchema<BankIncomeRefreshCompleteResult> =
  s.enumOf<BankIncomeRefreshCompleteResult>(BankIncomeRefreshCompleteResult);
