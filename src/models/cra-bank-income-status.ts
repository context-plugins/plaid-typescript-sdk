import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
