import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkTokenGetMetadataResponseSchema,
  type LinkTokenGetMetadataResponse,
} from "./link-token-get-metadata-response.js";
import {
  linkTokenGetSessionsResponseSchema,
  type LinkTokenGetSessionsResponse,
} from "./link-token-get-sessions-response.js";

/** LinkTokenGetResponse defines the response schema for `/link/token/get` */
export type LinkTokenGetResponse = {
  /**
   * A `link_token`, which can be supplied to Link in order to initialize it and receive a
   * `public_token`, which can be exchanged for an `access_token`.
   */
  linkToken: string;
  /**
   * The creation timestamp for the `link_token`, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: Date | null;
  /**
   * The expiration timestamp for the `link_token`, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  expiration: Date | null;
  /**
   * Information about Link sessions created using this `link_token`. Session data will be provided
   * for up to six hours after the session has ended.
   */
  linkSessions?: LinkTokenGetSessionsResponse[];
  /** An object specifying the arguments originally provided to the `/link/token/create` call. */
  metadata: LinkTokenGetMetadataResponse;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const linkTokenGetResponseSchema: Schema<LinkTokenGetResponse> = s.object<LinkTokenGetResponse>({
  linkToken: s.string(),
  createdAt: s.nullable(s.dateTime()),
  expiration: s.nullable(s.dateTime()),
  linkSessions: s.optional(s.array(s.lazy(() => linkTokenGetSessionsResponseSchema))),
  metadata: linkTokenGetMetadataResponseSchema,
  userId: s.optional(s.string()),
  requestId: s.string(),
  _keysMap: {
    linkToken: "link_token",
    createdAt: "created_at",
    linkSessions: "link_sessions",
    userId: "user_id",
    requestId: "request_id",
  },
});
