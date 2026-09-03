import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkTokenGetMetadataResponseSchema,
  type LinkTokenGetMetadataResponse,
} from "./link-token-get-metadata-response.js";
import {
  linkTokenGetSessionsResponseSchema,
  type LinkTokenGetSessionsResponse,
} from "./link-token-get-sessions-response.js";

export type LinkTokenGetResponse = {
  linkToken: string;
  createdAt: Date | null;
  expiration: Date | null;
  linkSessions?: LinkTokenGetSessionsResponse[];
  metadata: LinkTokenGetMetadataResponse;
  userId?: string;
  requestId: string;
};

export const linkTokenGetResponseSchema: Schema<LinkTokenGetResponse> = s.object<LinkTokenGetResponse>({
  linkToken: s.string(),
  createdAt: s.nullable(s.dateTime()),
  expiration: s.nullable(s.dateTime()),
  linkSessions: s.optional(s.array(s.lazy(() => linkTokenGetSessionsResponseSchema))),
  metadata: linkTokenGetMetadataResponseSchema,
  userId: s.optional(s.string()),
  requestId: s.string(),
  _keysMap: {
    linkToken: "link_token",
    createdAt: "created_at",
    linkSessions: "link_sessions",
    userId: "user_id",
    requestId: "request_id",
  },
});
