import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthGrantTypeSchema, type OAuthGrantType } from "./oauth-grant-type.js";
import { oAuthSubjectTokenTypeSchema, type OAuthSubjectTokenType } from "./oauth-subject-token-type.js";

/** OAuth token grant request. */
export type OAuthTokenRequest = {
  /**
   * The type of OAuth grant being requested:
   *
   * `client_credentials` allows exchanging a client id and client secret for a refresh and access
   * token. `refresh_token` allows refreshing an access token using a refresh token. When using this
   * grant type, only the `refresh_token` field is required (along with the `client_id` and
   * `client_secret`). `urn:ietf:params:oauth:grant-type:token-exchange` allows exchanging a subject
   * token for an OAuth token. When using this grant type, the `audience`, `subject_token` and
   * `subject_token_type` fields are required. These grants are defined in their respective RFCs.
   * `refresh_token` and `client_credentials` are defined in RFC 6749 and
   * `urn:ietf:params:oauth:grant-type:token-exchange` is defined in RFC 8693.
   */
  grantType: OAuthGrantType;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body as either `secret` or `client_secret`.
   */
  clientSecret?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body as either `secret` or `client_secret`.
   */
  secret?: string;
  /**
   * A space-separated list of scopes associated with this token, in the format described in
   * [https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3).
   * Currently accepted values are:
   *
   * `user:read` allows reading user data. `user:write` allows writing user data. `exchange` allows
   * exchanging a token using the `urn:plaid:params:oauth:user-token` subject token type.
   * `mcp:dashboard` allows access to the MCP dashboard server.
   */
  scope?: string;
  /** Refresh token for OAuth */
  refreshToken?: string;
  /** URI of the target resource server */
  resource?: string;
  /**
   * Used when exchanging a token. The meaning depends on the `subject_token_type`:
   *
   * - For `urn:plaid:params:tokens:user`: Must be the same as the `client_id`.
   * - For `urn:plaid:params:oauth:user-token`: The other `client_id` to exchange tokens to.
   * - For `urn:plaid:params:credit:multi-user`: a `client_id` or one of the supported CRA partner
   *   URNs: `urn:plaid:params:cra-partner:experian`, `urn:plaid:params:cra-partner:fannie-mae`, or
   *   `urn:plaid:params:cra-partner:freddie-mac`.
   */
  audience?: string;
  /**
   * Token representing the subject. The meaning depends on the `subject_token_type`. For
   * `urn:plaid:params:tokens:user`, the `subject_token` must be a Plaid-issued user token from the
   * `/user/create` endpoint. For `urn:plaid:params:oauth:user-token`, the `subject_token` must be
   * an OAuth refresh token issued from the `/oauth/token` endpoint.
   */
  subjectToken?: string;
  /**
   * The type of the subject token. `urn:plaid:params:tokens:user` allows exchanging a Plaid-issued
   * user token for an OAuth token. When using this token type, `audience` must be the same as the
   * `client_id`. `subject_token` must be a Plaid-issued user token issued from the `/user/create`
   * endpoint. `urn:plaid:params:oauth:user-token` allows exchanging a refresh token for an OAuth
   * token to another `client_id`. The other `client_id` is provided in `audience`. `subject_token`
   * must be an OAuth refresh token issued from the `/oauth/token` endpoint.
   * `urn:plaid:params:credit:multi-user` allows exchanging a Plaid-issued user token for an OAuth
   * token. When using this token type, `audience` may be a client id or a supported CRA partner
   * URN. `audience` supports a comma-delimited list of clients. When multiple clients are specified
   * in the `audience` a multi-party token is created which can be used by all parties in the
   * audience in conjunction with their `client_id` and `client_secret`.
   */
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
