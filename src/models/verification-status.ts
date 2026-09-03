import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationStatus = {
  Verified: "VERIFIED",
  Unverified: "UNVERIFIED",
  NeedsInfo: "NEEDS_INFO",
  UnableToVerify: "UNABLE_TO_VERIFY",
  Unknown: "UNKNOWN",
} as const;
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus] | (string & {});

export const verificationStatusSchema: EnumSchema<VerificationStatus> =
  s.enumOf<VerificationStatus>(VerificationStatus);
