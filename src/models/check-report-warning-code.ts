import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckReportWarningCode = {
  IdentityUnavailable: "IDENTITY_UNAVAILABLE",
  TransactionsUnavailable: "TRANSACTIONS_UNAVAILABLE",
  UserFraudAlert: "USER_FRAUD_ALERT",
} as const;
export type CheckReportWarningCode =
  | (typeof CheckReportWarningCode)[keyof typeof CheckReportWarningCode]
  | (string & {});

export const checkReportWarningCodeSchema: EnumSchema<CheckReportWarningCode> =
  s.enumOf<CheckReportWarningCode>(CheckReportWarningCode);
