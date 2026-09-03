import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessVerificationStatusRiskCheck = {
  Active: "active",
  Success: "success",
  Failed: "failed",
} as const;
export type BusinessVerificationStatusRiskCheck =
  | (typeof BusinessVerificationStatusRiskCheck)[keyof typeof BusinessVerificationStatusRiskCheck]
  | (string & {});

export const businessVerificationStatusRiskCheckSchema: EnumSchema<BusinessVerificationStatusRiskCheck> =
  s.enumOf<BusinessVerificationStatusRiskCheck>(BusinessVerificationStatusRiskCheck);
