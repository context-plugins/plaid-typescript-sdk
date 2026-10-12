import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sessionTokenCreateResponseLinkSchema,
  type SessionTokenCreateResponseLink,
} from "./session-token-create-response-link.js";

/** SessionTokenCreateResponse defines the response schema for `/session/token/create` */
export type SessionTokenCreateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** Response data for `/session/token/create` intended for use with the Link SDK. */
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
