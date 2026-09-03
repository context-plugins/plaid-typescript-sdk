import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthGrantTypeSchema, type OAuthGrantType } from "./oauth-grant-type.js";
import { oAuthSubjectTokenTypeSchema, type OAuthSubjectTokenType } from "./oauth-subject-token-type.js";

export type OAuthTokenRequest = {
  grantType: OAuthGrantType;
  clientId?: string;
  clientSecret?: string;
  secret?: string;
  scope?: string;
  refreshToken?: string;
  resource?: string;
  audience?: string;
  subjectToken?: string;
  subjectTokenType?: OAuthSubjectTokenType;
};

export const oAuthTokenRequestSchema: Schema<OAuthTokenRequest> = s.object<OAuthTokenRequest>({
  grantType: oAuthGrantTypeSchema,
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  secret: s.optional(s.string()),
  scope: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  resource: s.optional(s.string()),
  audience: s.optional(s.string()),
  subjectToken: s.optional(s.string()),
  subjectTokenType: s.optional(s.lazy(() => oAuthSubjectTokenTypeSchema)),
  _keysMap: {
    grantType: "grant_type",
    clientId: "client_id",
    clientSecret: "client_secret",
    refreshToken: "refresh_token",
    subjectToken: "subject_token",
    subjectTokenType: "subject_token_type",
  },
});
