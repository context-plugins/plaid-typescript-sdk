import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SandboxUserResetLoginRequest defines the request schema for `/sandbox/user/reset_login` */
export type SandboxUserResetLoginRequest = {
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
   * An array of `item_id`s associated with the User to be reset. If empty or `null`, this field
   * will default to resetting all Items associated with the User.
   */
  itemIds?: string[] | null;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const sandboxUserResetLoginRequestSchema: Schema<SandboxUserResetLoginRequest> =
  s.object<SandboxUserResetLoginRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    itemIds: s.optionalNullable(s.array(s.string())),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      itemIds: "item_ids",
      userId: "user_id",
    },
  });
