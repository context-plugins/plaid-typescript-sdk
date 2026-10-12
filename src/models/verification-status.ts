import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The verification status. One of the following:
 *
 * `"VERIFIED"`: The information was successfully verified.
 *
 * `"UNVERIFIED"`: The verification has not yet been performed.
 *
 * `"NEEDS_INFO"`: The verification was attempted but could not be completed due to missing
 * information.
 *
 * "`UNABLE_TO_VERIFY`": The verification was performed and the information could not be verified.
 *
 * `"UNKNOWN"`: The verification status is unknown.
 */
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
