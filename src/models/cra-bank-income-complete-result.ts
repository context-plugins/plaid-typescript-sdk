import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the bank income report generation
 *
 * `SUCCESS`: The bank income report was successfully generated and can be retrieved via
 * `/credit/bank_income/get`.
 *
 * `FAILURE`: The bank income report failed to be generated
 */
export const CraBankIncomeCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type CraBankIncomeCompleteResult =
  | (typeof CraBankIncomeCompleteResult)[keyof typeof CraBankIncomeCompleteResult]
  | (string & {});

export const craBankIncomeCompleteResultSchema: EnumSchema<CraBankIncomeCompleteResult> =
  s.enumOf<CraBankIncomeCompleteResult>(CraBankIncomeCompleteResult);
