import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsVerificationStatusSchema, type SmsVerificationStatus } from "./sms-verification-status.js";

/** Additional information for the individual SMS verification. */
export type SmsVerification = {
  /** The outcome status for the individual SMS verification. */
  status: SmsVerificationStatus;
  /** The attempt field begins with 1 and increments with each subsequent SMS verification. */
  attempt: number;
  /** A phone number in E.164 format. */
  phoneNumber: string | null;
  /**
   * The number of delivery attempts made within the verification to send the SMS code to the user.
   * Each delivery attempt represents the user taking action from the front end UI to request
   * creation and delivery of a new SMS verification code, or to resend an existing SMS verification
   * code. There is a limit of 3 delivery attempts per verification.
   */
  deliveryAttemptCount: number;
  /**
   * The number of attempts made by the user within the verification to verify the SMS code by
   * entering it into the front end UI. There is a limit of 3 solve attempts per verification.
   */
  solveAttemptCount: number;
  /** An ISO8601 formatted timestamp. */
  initiallySentAt: Date | null;
  /** An ISO8601 formatted timestamp. */
  lastSentAt: Date | null;
  /** An ISO8601 formatted timestamp. */
  redactedAt: Date | null;
};

export const smsVerificationSchema: Schema<SmsVerification> = s.object<SmsVerification>({
  status: smsVerificationStatusSchema,
  attempt: s.int(),
  phoneNumber: s.nullable(s.string()),
  deliveryAttemptCount: s.int(),
  solveAttemptCount: s.int(),
  initiallySentAt: s.nullable(s.dateTime()),
  lastSentAt: s.nullable(s.dateTime()),
  redactedAt: s.nullable(s.dateTime()),
  _keysMap: {
    phoneNumber: "phone_number",
    deliveryAttemptCount: "delivery_attempt_count",
    solveAttemptCount: "solve_attempt_count",
    initiallySentAt: "initially_sent_at",
    lastSentAt: "last_sent_at",
    redactedAt: "redacted_at",
  },
});
