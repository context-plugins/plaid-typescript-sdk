import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthIntrospectResponse = {
  active: boolean;
  scope?: string;
  clientId?: string;
  exp?: number;
  iat?: number;
  sub?: string;
  aud?: string;
  iss?: string;
  tokenType?: string;
  userId?: string;
  requestId: string;
};

export const oAuthIntrospectResponseSchema: Schema<OAuthIntrospectResponse> =
  s.object<OAuthIntrospectResponse>({
    active: s.boolean(),
    scope: s.optional(s.string()),
    clientId: s.optional(s.string()),
    exp: s.optional(s.number()),
    iat: s.optional(s.number()),
    sub: s.optional(s.string()),
    aud: s.optional(s.string()),
    iss: s.optional(s.string()),
    tokenType: s.optional(s.string()),
    userId: s.optional(s.string()),
    requestId: s.string(),
    _keysMap: {
      clientId: "client_id",
      tokenType: "token_type",
      userId: "user_id",
      requestId: "request_id",
    },
  });
