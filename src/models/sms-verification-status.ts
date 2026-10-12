import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The outcome status for the individual SMS verification. */
export const SmsVerificationStatus = {
  Pending: "pending",
  Success: "success",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type SmsVerificationStatus =
  | (typeof SmsVerificationStatus)[keyof typeof SmsVerificationStatus]
  | (string & {});

export const smsVerificationStatusSchema: EnumSchema<SmsVerificationStatus> =
  s.enumOf<SmsVerificationStatus>(SmsVerificationStatus);
