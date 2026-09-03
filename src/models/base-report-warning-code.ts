import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BaseReportWarningCode = {
  IdentityUnavailable: "IDENTITY_UNAVAILABLE",
  TransactionsUnavailable: "TRANSACTIONS_UNAVAILABLE",
  UserFraudAlert: "USER_FRAUD_ALERT",
} as const;
export type BaseReportWarningCode =
  | (typeof BaseReportWarningCode)[keyof typeof BaseReportWarningCode]
  | (string & {});

export const baseReportWarningCodeSchema: EnumSchema<BaseReportWarningCode> =
  s.enumOf<BaseReportWarningCode>(BaseReportWarningCode);
