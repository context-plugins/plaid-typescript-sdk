import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

/** IssuesSearchResponse defines the response schema for `/issues/search`. */
export type IssuesSearchResponse = {
  /**
   * A list of issues affecting the Item, session, or request passed in, conforming to the Issues
   * data model. An empty list indicates that no matching issues were found.
   */
  issues?: Issue[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const issuesSearchResponseSchema: Schema<IssuesSearchResponse> = s.object<IssuesSearchResponse>({
  issues: s.optional(s.array(s.lazy(() => issueSchema))),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
