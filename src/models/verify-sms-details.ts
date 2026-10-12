import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsVerificationSchema, type SmsVerification } from "./sms-verification.js";
import { verifySmsDetailsStatusSchema, type VerifySmsDetailsStatus } from "./verify-sms-details-status.js";

/** Additional information for the `verify_sms` step. */
export type VerifySmsDetails = {
  /**
   * The outcome status for the associated Identity Verification attempt's `verify_sms` step. This
   * field will always have the same value as `steps.verify_sms`.
   */
  status: VerifySmsDetailsStatus;
  /**
   * An array where each entry represents a verification attempt for the `verify_sms` step. Each
   * entry represents one user-submitted phone number. Phone number edits, and in some cases error
   * handling due to edge cases like rate limiting, may generate additional verifications.
   */
  verifications: SmsVerification[];
};

export const verifySmsDetailsSchema: Schema<VerifySmsDetails> = s.object<VerifySmsDetails>({
  status: verifySmsDetailsStatusSchema,
  verifications: s.array(s.lazy(() => smsVerificationSchema)),
});
