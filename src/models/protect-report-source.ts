import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProtectReportSource = {
  InternalReview: "INTERNAL_REVIEW",
  UserSelfReported: "USER_SELF_REPORTED",
  BankFeedback: "BANK_FEEDBACK",
  NetworkFeedback: "NETWORK_FEEDBACK",
  AutomatedSystem: "AUTOMATED_SYSTEM",
  ThirdPartyAlert: "THIRD_PARTY_ALERT",
  Other: "OTHER",
} as const;
export type ProtectReportSource =
  | (typeof ProtectReportSource)[keyof typeof ProtectReportSource]
  | (string & {});

export const protectReportSourceSchema: EnumSchema<ProtectReportSource> =
  s.enumOf<ProtectReportSource>(ProtectReportSource);
