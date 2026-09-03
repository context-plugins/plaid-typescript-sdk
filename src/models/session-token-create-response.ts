import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sessionTokenCreateResponseLinkSchema,
  type SessionTokenCreateResponseLink,
} from "./session-token-create-response-link.js";

export type SessionTokenCreateResponse = {
  requestId: string;
  link?: SessionTokenCreateResponseLink;
};

export const sessionTokenCreateResponseSchema: Schema<SessionTokenCreateResponse> =
  s.object<SessionTokenCreateResponse>({
    requestId: s.string(),
    link: s.optional(s.lazy(() => sessionTokenCreateResponseLinkSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
