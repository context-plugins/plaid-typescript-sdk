import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemPublicTokenExchangeResponse defines the response schema for `/item/public_token/exchange` */
export type ItemPublicTokenExchangeResponse = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** The `item_id` value of the Item associated with the returned `access_token` */
  itemId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemPublicTokenExchangeResponseSchema: Schema<ItemPublicTokenExchangeResponse> =
  s.object<ItemPublicTokenExchangeResponse>({
    accessToken: s.string(),
    itemId: s.string(),
    requestId: s.string(),
    _keysMap: {
      accessToken: "access_token",
      itemId: "item_id",
      requestId: "request_id",
    },
  });
