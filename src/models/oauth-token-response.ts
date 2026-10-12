import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OAuth token grant success response */
export type OAuthTokenResponse = {
  /** Access token for OAuth */
  accessToken: string;
  /** Refresh token for OAuth */
  refreshToken: string;
  /** The type of the returned token. `Bearer` for OAuth access tokens. */
  tokenType: string;
  /** Time remaining in seconds before expiration. */
  expiresIn: number;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const oAuthTokenResponseSchema: Schema<OAuthTokenResponse> = s.object<OAuthTokenResponse>({
  accessToken: s.string(),
  refreshToken: s.string(),
  tokenType: s.string(),
  expiresIn: s.int(),
  requestId: s.string(),
  _keysMap: {
    accessToken: "access_token",
    refreshToken: "refresh_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
    requestId: "request_id",
  },
});
