import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IssuesSearchRequest defines the request schema for `/issues/search`. */
export type IssuesSearchRequest = {
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
  /** A unique identifier for the Plaid Item. */
  itemId?: string;
  /** A unique identifier for the Link session. */
  linkSessionId?: string;
  /** The `request_id` for the Link session that might have had an institution connection issue. */
  linkSessionRequestId?: string;
};

export const issuesSearchRequestSchema: Schema<IssuesSearchRequest> = s.object<IssuesSearchRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  itemId: s.optional(s.string()),
  linkSessionId: s.optional(s.string()),
  linkSessionRequestId: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    itemId: "item_id",
    linkSessionId: "link_session_id",
    linkSessionRequestId: "link_session_request_id",
  },
});
