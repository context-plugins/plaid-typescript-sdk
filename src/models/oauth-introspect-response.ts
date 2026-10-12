import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OAuth token introspect response */
export type OAuthIntrospectResponse = {
  /**
   * Boolean indicator of whether or not the presented token is currently active. A `true` value
   * indicates that the token has been issued, has not been revoked, and is within the time window
   * of validity.
   */
  active: boolean;
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
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** Expiration time as UNIX timestamp since January 1 1970 UTC */
  exp?: number;
  /** Issued at time as UNIX timestamp since January 1 1970 UTC */
  iat?: number;
  /** Subject of the token */
  sub?: string;
  /** Audience of the token */
  aud?: string;
  /** Issuer of the token */
  iss?: string;
  /** Type of the token */
  tokenType?: string;
  /** User ID of the token */
  userId?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const oAuthIntrospectResponseSchema: Schema<OAuthIntrospectResponse> =
  s.object<OAuthIntrospectResponse>({
    active: s.boolean(),
    scope: s.optional(s.string()),
    clientId: s.optional(s.string()),
    exp: s.optional(s.int()),
    iat: s.optional(s.int()),
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
