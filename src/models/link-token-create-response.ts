import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateResponse = {
  linkToken: string;
  expiration: Date;
  requestId: string;
  hostedLinkUrl?: string;
  userId?: string;
};

export const linkTokenCreateResponseSchema: Schema<LinkTokenCreateResponse> =
  s.object<LinkTokenCreateResponse>({
    linkToken: s.string(),
    expiration: s.dateTime(),
    requestId: s.string(),
    hostedLinkUrl: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      linkToken: "link_token",
      requestId: "request_id",
      hostedLinkUrl: "hosted_link_url",
      userId: "user_id",
    },
  });
