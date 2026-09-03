import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraBankIncomeCompleteResult = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type CraBankIncomeCompleteResult =
  | (typeof CraBankIncomeCompleteResult)[keyof typeof CraBankIncomeCompleteResult]
  | (string & {});

export const craBankIncomeCompleteResultSchema: EnumSchema<CraBankIncomeCompleteResult> =
  s.enumOf<CraBankIncomeCompleteResult>(CraBankIncomeCompleteResult);
