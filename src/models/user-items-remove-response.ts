import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserItemsRemoveResponse defines the response schema for `/user/items/remove` */
export type UserItemsRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userItemsRemoveResponseSchema: Schema<UserItemsRemoveResponse> =
  s.object<UserItemsRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
