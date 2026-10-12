import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ItemAccessTokenInvalidateResponse defines the response schema for `/item/access_token/invalidate`
 */
export type ItemAccessTokenInvalidateResponse = {
  /** The access token associated with the Item for which data is being requested. */
  newAccessToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemAccessTokenInvalidateResponseSchema: Schema<ItemAccessTokenInvalidateResponse> =
  s.object<ItemAccessTokenInvalidateResponse>({
    newAccessToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      newAccessToken: "new_access_token",
      requestId: "request_id",
    },
  });
