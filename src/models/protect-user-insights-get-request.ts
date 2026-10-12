import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request object for /protect/user/insights/get */
export type ProtectUserInsightsGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The Plaid User ID. Either `user_id` or `client_user_id` must be provided. */
  userId?: string;
  /**
   * A unique ID representing the end user. Either `user_id` or `client_user_id` must be provided.
   */
  clientUserId?: string;
};

export const protectUserInsightsGetRequestSchema: Schema<ProtectUserInsightsGetRequest> =
  s.object<ProtectUserInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    clientUserId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      clientUserId: "client_user_id",
    },
  });
