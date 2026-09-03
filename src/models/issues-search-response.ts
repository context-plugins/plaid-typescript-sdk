import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

export type IssuesSearchResponse = {
  issues?: Issue[];
  requestId?: string;
};

export const issuesSearchResponseSchema: Schema<IssuesSearchResponse> = s.object<IssuesSearchResponse>({
  issues: s.optional(s.array(s.lazy(() => issueSchema))),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
