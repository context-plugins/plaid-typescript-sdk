import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * UserThirdPartyTokenCreateRequest defines the request schema for `/user/third_party_token/create`
 */
export type UserThirdPartyTokenCreateRequest = {
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
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /**
   * The Plaid API `client_id` of the third-party client the token will be shared with. The token
   * will only be valid for the specified client.
   */
  thirdPartyClientId: string;
  /**
   * The expiration date and time for the third-party user token in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). The expiration is
   * restricted to a maximum of 24 hours from the token's creation time. If not provided, the token
   * will automatically expire after 24 hours.
   */
  expirationTime?: Date | null;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const userThirdPartyTokenCreateRequestSchema: Schema<UserThirdPartyTokenCreateRequest> =
  s.object<UserThirdPartyTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    thirdPartyClientId: s.string(),
    expirationTime: s.optionalNullable(s.dateTime()),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      thirdPartyClientId: "third_party_client_id",
      expirationTime: "expiration_time",
      userId: "user_id",
    },
  });
