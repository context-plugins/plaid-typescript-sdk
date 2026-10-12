import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the income source. `ACTIVE`: The income source is active. `INACTIVE`: The income
 * source is inactive. `UNKNOWN`: The income source status is unknown.
 */
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
