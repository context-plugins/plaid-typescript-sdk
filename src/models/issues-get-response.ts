import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

export type IssuesGetResponse = {
  issue?: Issue;
  requestId?: string;
};

export const issuesGetResponseSchema: Schema<IssuesGetResponse> = s.object<IssuesGetResponse>({
  issue: s.optional(s.lazy(() => issueSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
