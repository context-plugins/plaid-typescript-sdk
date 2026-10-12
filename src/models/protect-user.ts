import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents an end user for `/protect/compute` requests. */
export type ProtectUser = {
  /**
   * The Plaid User ID returned from a previous call to `/user/create`. This or `client_user_id` can
   * be provided, not both.
   */
  userId?: string;
  /**
   * A unique ID representing the end user, previously passed to `/user/create`. Maximum of 128
   * characters. Typically this will be a user ID number from your application. Personally
   * identifiable information, such as an email address or phone number, should not be used in the
   * `client_user_id`.
   */
  clientUserId?: string;
};

export const protectUserSchema: Schema<ProtectUser> = s.object<ProtectUser>({
  userId: s.optional(s.string()),
  clientUserId: s.optional(s.string()),
  _keysMap: {
    userId: "user_id",
    clientUserId: "client_user_id",
  },
});
