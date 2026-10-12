import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current verification status of an Auth Item initiated through Automated or Manual
 * micro-deposits. Returned for Auth Items only.
 *
 * `pending_automatic_verification`: The Item is pending automatic verification.
 *
 * `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items
 * remain in this state until the user successfully verifies the micro-deposit.
 *
 * `automatically_verified`: The Item has successfully been automatically verified.
 *
 * `manually_verified`: The Item has successfully been manually verified.
 *
 * `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar
 * days and will no longer attempt to validate the Item. Users may retry by submitting their
 * information again through Link.
 *
 * `verification_failed`: The Item failed manual micro-deposit verification because the user
 * exhausted all 3 verification attempts. Users may retry by submitting their information again
 * through Link.
 *
 * `database_matched`: (deprecated) The Item has successfully been verified using Plaid's data
 * sources. Only returned for Auth Items created via Database Match.
 */
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
