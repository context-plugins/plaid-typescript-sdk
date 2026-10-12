import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserItemsAssociateResponse defines the response schema for `/user/items/associate` */
export type UserItemsAssociateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userItemsAssociateResponseSchema: Schema<UserItemsAssociateResponse> =
  s.object<UserItemsAssociateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
