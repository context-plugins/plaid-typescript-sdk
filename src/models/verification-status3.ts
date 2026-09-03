import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationStatus3 = {
  VerificationStatusProcessingComplete: "VERIFICATION_STATUS_PROCESSING_COMPLETE",
  VerificationStatusProcessingFailed: "VERIFICATION_STATUS_PROCESSING_FAILED",
  VerificationStatusPendingApproval: "VERIFICATION_STATUS_PENDING_APPROVAL",
} as const;
export type VerificationStatus3 =
  | (typeof VerificationStatus3)[keyof typeof VerificationStatus3]
  | (string & {});

export const verificationStatus3Schema: EnumSchema<VerificationStatus3> =
  s.enumOf<VerificationStatus3>(VerificationStatus3);
