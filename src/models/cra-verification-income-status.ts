import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraVerificationIncomeStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Unknown: "UNKNOWN",
} as const;
export type CraVerificationIncomeStatus =
  | (typeof CraVerificationIncomeStatus)[keyof typeof CraVerificationIncomeStatus]
  | (string & {});

export const craVerificationIncomeStatusSchema: EnumSchema<CraVerificationIncomeStatus> =
  s.enumOf<CraVerificationIncomeStatus>(CraVerificationIncomeStatus);
