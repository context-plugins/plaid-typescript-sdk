import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

/** IssuesGetResponse defines the response schema for `/issues/get`. */
export type IssuesGetResponse = {
  /** Information on an issue encountered with financial institution interactions during Linking. */
  issue?: Issue;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const issuesGetResponseSchema: Schema<IssuesGetResponse> = s.object<IssuesGetResponse>({
  issue: s.optional(s.lazy(() => issueSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
