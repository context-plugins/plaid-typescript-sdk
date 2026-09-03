import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessVerificationStatusOverall = {
  Active: "active",
  Success: "success",
  Failed: "failed",
} as const;
export type BusinessVerificationStatusOverall =
  | (typeof BusinessVerificationStatusOverall)[keyof typeof BusinessVerificationStatusOverall]
  | (string & {});

export const businessVerificationStatusOverallSchema: EnumSchema<BusinessVerificationStatusOverall> =
  s.enumOf<BusinessVerificationStatusOverall>(BusinessVerificationStatusOverall);
