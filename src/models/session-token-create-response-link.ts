import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response data for `/session/token/create` intended for use with the Link SDK. */
export type SessionTokenCreateResponseLink = {
  /**
   * A Link token, which can be supplied to Link in order to initialize it and receive a
   * `public_token`.
   */
  linkToken: string;
  /**
   * The expiration date for the `link_token`, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format. A `link_token` created to generate a `public_token` that will be exchanged for a new
   * `access_token` expires after 4 hours. A `link_token` created for an existing Item (such as when
   * updating an existing `access_token` by launching Link in update mode) expires after 30 minutes.
   */
  expiration: Date;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const sessionTokenCreateResponseLinkSchema: Schema<SessionTokenCreateResponseLink> =
  s.object<SessionTokenCreateResponseLink>({
    linkToken: s.string(),
    expiration: s.dateTime(),
    userId: s.optional(s.string()),
    _keysMap: {
      linkToken: "link_token",
      userId: "user_id",
    },
  });
