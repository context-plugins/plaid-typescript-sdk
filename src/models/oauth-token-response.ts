import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthTokenResponse = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  requestId: string;
};

export const oAuthTokenResponseSchema: Schema<OAuthTokenResponse> = s.object<OAuthTokenResponse>({
  accessToken: s.string(),
  refreshToken: s.string(),
  tokenType: s.string(),
  expiresIn: s.number(),
  requestId: s.string(),
  _keysMap: {
    accessToken: "access_token",
    refreshToken: "refresh_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
    requestId: "request_id",
  },
});
