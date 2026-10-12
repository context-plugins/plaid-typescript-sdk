import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OAuth error code */
export const OAuthErrorCode = {
  InvalidRequest: "invalid_request",
  InvalidClient: "invalid_client",
  InvalidGrant: "invalid_grant",
  UnauthorizedClient: "unauthorized_client",
  InvalidScope: "invalid_scope",
  UnsupportedGrantType: "unsupported_grant_type",
} as const;
export type OAuthErrorCode = (typeof OAuthErrorCode)[keyof typeof OAuthErrorCode] | (string & {});

export const oAuthErrorCodeSchema: EnumSchema<OAuthErrorCode> = s.enumOf<OAuthErrorCode>(OAuthErrorCode);
