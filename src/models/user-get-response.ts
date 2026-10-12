import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientUserIdentitySchema, type ClientUserIdentity } from "./client-user-identity.js";

/** UserGetResponse defines the response schema for `/user/get`. */
export type UserGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId: string;
  /** Client provided user ID. */
  clientUserId: string | null;
  /** Timestamp of user creation. */
  createdAt: Date;
  /** Timestamp of last user update. */
  updatedAt?: Date;
  /**
   * The identity fields associated with a user. For a user to be eligible for a Plaid Check
   * Consumer Report, all fields are required except `id_number`. Providing a partial SSN is
   * strongly recommended, and improves the accuracy of matching user records during compliance
   * processes such as file disclosure, dispute, or security freeze requests. If creating a report
   * that will be shared with GSEs such as Fannie or Freddie, a full Social Security Number must be
   * provided via the `id_number` field.
   */
  identity?: ClientUserIdentity | null;
};

export const userGetResponseSchema: Schema<UserGetResponse> = s.object<UserGetResponse>({
  requestId: s.string(),
  userId: s.string(),
  clientUserId: s.nullable(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.optional(s.dateTime()),
  identity: s.optionalNullable(s.lazy(() => clientUserIdentitySchema)),
  _keysMap: {
    requestId: "request_id",
    userId: "user_id",
    clientUserId: "client_user_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
