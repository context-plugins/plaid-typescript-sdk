import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserCreateResponse defines the response schema for `/user/create` */
export type UserCreateResponse = {
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userCreateResponseSchema: Schema<UserCreateResponse> = s.object<UserCreateResponse>({
  userToken: s.optional(s.string()),
  userId: s.string(),
  requestId: s.string(),
  _keysMap: {
    userToken: "user_token",
    userId: "user_id",
    requestId: "request_id",
  },
});
