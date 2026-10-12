import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The verification refresh status. One of the following:
 *
 * `"VERIFICATION_REFRESH_STATUS_USER_PRESENCE_REQUIRED"` User presence is required to refresh an
 * income verification. `"VERIFICATION_REFRESH_SUCCESSFUL"` The income verification refresh was
 * successful. `"VERIFICATION_REFRESH_NOT_FOUND"` No new data was found after the income
 * verification refresh.
 */
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
