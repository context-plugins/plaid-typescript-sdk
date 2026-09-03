import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationStatus4 = {
  AutomaticallyVerified: "automatically_verified",
  PendingAutomaticVerification: "pending_automatic_verification",
  PendingManualVerification: "pending_manual_verification",
  ManuallyVerified: "manually_verified",
  VerificationExpired: "verification_expired",
  VerificationFailed: "verification_failed",
  DatabaseMatched: "database_matched",
} as const;
export type VerificationStatus4 =
  | (typeof VerificationStatus4)[keyof typeof VerificationStatus4]
  | (string & {});

export const verificationStatus4Schema: EnumSchema<VerificationStatus4> =
  s.enumOf<VerificationStatus4>(VerificationStatus4);
