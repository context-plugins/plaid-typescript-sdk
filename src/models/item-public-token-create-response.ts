import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemPublicTokenCreateResponse = {
  publicToken: string;
  expiration?: Date;
  requestId: string;
};

export const itemPublicTokenCreateResponseSchema: Schema<ItemPublicTokenCreateResponse> =
  s.object<ItemPublicTokenCreateResponse>({
    publicToken: s.string(),
    expiration: s.optional(s.dateTime()),
    requestId: s.string(),
    _keysMap: {
      publicToken: "public_token",
      requestId: "request_id",
    },
  });
