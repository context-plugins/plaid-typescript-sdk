import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemPublicTokenCreateResponse defines the response schema for `/item/public_token/create` */
export type ItemPublicTokenCreateResponse = {
  /** A `public_token` for the particular Item corresponding to the specified `access_token` */
  publicToken: string;
  expiration?: Date;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
