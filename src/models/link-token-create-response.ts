import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** LinkTokenCreateResponse defines the response schema for `/link/token/create` */
export type LinkTokenCreateResponse = {
  /**
   * A `link_token`, which can be supplied to Link in order to initialize it and receive a
   * `public_token`, which can be exchanged for an `access_token`.
   */
  linkToken: string;
  /**
   * The expiration date and time for the `link_token`, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format. By default, a `link_token` created to
   * generate a `public_token` that will be exchanged for a new `access_token` expires after 4
   * hours, and a `link_token` created for an existing Item (such as when updating an existing
   * `access_token` by launching Link in update mode) expires after 30 minutes. If using [Hosted
   * Link](https://plaid.com/docs/link/hosted-link/), the `link_token` will expire at the same time
   * as the Hosted Link URL, and you can customize the duration using the
   * `hosted_link.url_lifetime_seconds` option in the request. If using Link Delivery (beta), the
   * `link_token` will expire by default after 24 hours if sent via SMS and after 7 days if sent via
   * email. If using Identity Verification, Link token expiration will not be enforced; an Identity
   * Verification Link session can be created with an expired Link token.
   */
  expiration: Date;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * A URL of a Plaid-hosted Link flow that will use the Link token returned by this request. Only
   * present if the session is enabled for Hosted Link. To enable the session for Hosted Link, send
   * a `hosted_link` object in the request.
   */
  hostedLinkUrl?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const linkTokenCreateResponseSchema: Schema<LinkTokenCreateResponse> =
  s.object<LinkTokenCreateResponse>({
    linkToken: s.string(),
    expiration: s.dateTime(),
    requestId: s.string(),
    hostedLinkUrl: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      linkToken: "link_token",
      requestId: "request_id",
      hostedLinkUrl: "hosted_link_url",
      userId: "user_id",
    },
  });
