import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the end user. Required if a root-level `user_id` is not provided. */
export type SessionTokenCreateRequestUser = {
  /**
   * A unique ID representing the end user. Typically this will be a user ID number from your
   * application. Personally identifiable information, such as an email address or phone number,
   * should not be used in the `client_user_id`. It is currently used as a means of searching logs
   * for the given user in the Plaid Dashboard.
   */
  clientUserId: string;
  userId?: string;
};

export const sessionTokenCreateRequestUserSchema: Schema<SessionTokenCreateRequestUser> =
  s.object<SessionTokenCreateRequestUser>({
    clientUserId: s.string(),
    userId: s.optional(s.string()),
    _keysMap: {
      clientUserId: "client_user_id",
      userId: "user_id",
    },
  });
