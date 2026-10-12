import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has
 * completed. If the user uploaded multiple documents, this webhook will fire when all documents
 * have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the
 * document metadata to see which documents were successfully parsed.
 *
 * `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the
 * verification documentation.
 *
 * `VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to the
 * user for review.
 */
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
