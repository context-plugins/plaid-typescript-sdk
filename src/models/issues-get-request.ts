import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IssuesGetRequest defines the request schema for `/issues/get`. */
export type IssuesGetRequest = {
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
  /** The unique identifier of the issue to retrieve. */
  issueId: string;
};

export const issuesGetRequestSchema: Schema<IssuesGetRequest> = s.object<IssuesGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  issueId: s.string(),
  _keysMap: {
    clientId: "client_id",
    issueId: "issue_id",
  },
});
