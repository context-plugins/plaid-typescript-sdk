import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationRefreshStatus = {
  VerificationRefreshStatusUserPresenceRequired: "VERIFICATION_REFRESH_STATUS_USER_PRESENCE_REQUIRED",
  VerificationRefreshSuccessful: "VERIFICATION_REFRESH_SUCCESSFUL",
  VerificationRefreshNotFound: "VERIFICATION_REFRESH_NOT_FOUND",
} as const;
export type VerificationRefreshStatus =
  | (typeof VerificationRefreshStatus)[keyof typeof VerificationRefreshStatus]
  | (string & {});

export const verificationRefreshStatusSchema: EnumSchema<VerificationRefreshStatus> =
  s.enumOf<VerificationRefreshStatus>(VerificationRefreshStatus);
