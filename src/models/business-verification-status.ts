import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the KYB (Know Your Business) identity assessment check */
export const BusinessVerificationStatus = {
  Active: "active",
  Success: "success",
  Failed: "failed",
} as const;
export type BusinessVerificationStatus =
  | (typeof BusinessVerificationStatus)[keyof typeof BusinessVerificationStatus]
  | (string & {});

export const businessVerificationStatusSchema: EnumSchema<BusinessVerificationStatus> =
  s.enumOf<BusinessVerificationStatus>(BusinessVerificationStatus);
