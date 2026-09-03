import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssuesGetRequest = {
  clientId?: string;
  secret?: string;
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
