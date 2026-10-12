import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserGetRequest defines the request schema for `/user/get`. */
export type UserGetRequest = {
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
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId: string;
};

export const userGetRequestSchema: Schema<UserGetRequest> = s.object<UserGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.string(),
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
  },
});
