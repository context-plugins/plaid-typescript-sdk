import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the digital presence check */
export const BusinessVerificationStatusWebPresenceCheck = {
  Active: "active",
  Success: "success",
  Failed: "failed",
  NotApplicable: "not_applicable",
} as const;
export type BusinessVerificationStatusWebPresenceCheck =
  | (typeof BusinessVerificationStatusWebPresenceCheck)[keyof typeof BusinessVerificationStatusWebPresenceCheck]
  | (string & {});

export const businessVerificationStatusWebPresenceCheckSchema: EnumSchema<BusinessVerificationStatusWebPresenceCheck> =
  s.enumOf<BusinessVerificationStatusWebPresenceCheck>(BusinessVerificationStatusWebPresenceCheck);
