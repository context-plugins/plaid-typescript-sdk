import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsVerificationStatusSchema, type SmsVerificationStatus } from "./sms-verification-status.js";

export type SmsVerification = {
  status: SmsVerificationStatus;
  attempt: number;
  phoneNumber: string | null;
  deliveryAttemptCount: number;
  solveAttemptCount: number;
  initiallySentAt: Date | null;
  lastSentAt: Date | null;
  redactedAt: Date | null;
};

export const smsVerificationSchema: Schema<SmsVerification> = s.object<SmsVerification>({
  status: smsVerificationStatusSchema,
  attempt: s.number(),
  phoneNumber: s.nullable(s.string()),
  deliveryAttemptCount: s.number(),
  solveAttemptCount: s.number(),
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
