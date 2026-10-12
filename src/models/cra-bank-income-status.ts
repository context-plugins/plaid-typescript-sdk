import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the income sources. `ACTIVE`: The income source is active. `INACTIVE`: The income
 * source is inactive. `UNKNOWN`: The income source status is unknown.
 */
export const CraBankIncomeStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Unknown: "UNKNOWN",
} as const;
export type CraBankIncomeStatus =
  | (typeof CraBankIncomeStatus)[keyof typeof CraBankIncomeStatus]
  | (string & {});

export const craBankIncomeStatusSchema: EnumSchema<CraBankIncomeStatus> =
  s.enumOf<CraBankIncomeStatus>(CraBankIncomeStatus);
