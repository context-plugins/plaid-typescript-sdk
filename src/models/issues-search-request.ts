import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssuesSearchRequest = {
  clientId?: string;
  secret?: string;
  itemId?: string;
  linkSessionId?: string;
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
