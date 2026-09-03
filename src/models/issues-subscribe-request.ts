import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssuesSubscribeRequest = {
  clientId?: string;
  secret?: string;
  issueId: string;
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
