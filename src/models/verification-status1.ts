import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status to set the account to. */
export const VerificationStatus1 = {
  AutomaticallyVerified: "automatically_verified",
  VerificationExpired: "verification_expired",
} as const;
export type VerificationStatus1 =
  | (typeof VerificationStatus1)[keyof typeof VerificationStatus1]
  | (string & {});

export const verificationStatus1Schema: EnumSchema<VerificationStatus1> =
  s.enumOf<VerificationStatus1>(VerificationStatus1);
