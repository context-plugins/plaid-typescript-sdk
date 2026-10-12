import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IssuesSubscribeRequest defines the request schema for `/issues/subscribe`. */
export type IssuesSubscribeRequest = {
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
  /** The unique identifier of the issue to subscribe to. */
  issueId: string;
  /** The webhook URL where notifications should be sent when the issue status changes. */
  webhook: string;
};

export const issuesSubscribeRequestSchema: Schema<IssuesSubscribeRequest> = s.object<IssuesSubscribeRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  issueId: s.string(),
  webhook: s.string(),
  _keysMap: {
    clientId: "client_id",
    issueId: "issue_id",
  },
});
