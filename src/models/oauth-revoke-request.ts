import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OAuth token revoke request */
export type OAuthRevokeRequest = {
  /** An OAuth token of any type (`refresh_token`, `access_token`, etc) */
  token: string;
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
};

export const oAuthRevokeRequestSchema: Schema<OAuthRevokeRequest> = s.object<OAuthRevokeRequest>({
  token: s.string(),
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
  },
});
