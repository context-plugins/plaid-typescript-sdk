import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FdxUpdateReason = {
  BusinessRule: "BUSINESS_RULE",
  SecurityEvent: "SECURITY_EVENT",
  UserAction: "USER_ACTION",
  Other: "OTHER",
} as const;
export type FdxUpdateReason = (typeof FdxUpdateReason)[keyof typeof FdxUpdateReason] | (string & {});

export const fdxUpdateReasonSchema: EnumSchema<FdxUpdateReason> = s.enumOf<FdxUpdateReason>(FdxUpdateReason);
