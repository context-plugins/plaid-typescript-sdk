import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsVerificationSchema, type SmsVerification } from "./sms-verification.js";
import { verifySmsDetailsStatusSchema, type VerifySmsDetailsStatus } from "./verify-sms-details-status.js";

export type VerifySmsDetails = {
  status: VerifySmsDetailsStatus;
  verifications: SmsVerification[];
};

export const verifySmsDetailsSchema: Schema<VerifySmsDetails> = s.object<VerifySmsDetails>({
  status: verifySmsDetailsStatusSchema,
  verifications: s.array(s.lazy(() => smsVerificationSchema)),
});
