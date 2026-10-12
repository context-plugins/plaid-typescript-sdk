import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

/** UserItemsGetResponse defines the response schema for `/user/items/get` */
export type UserItemsGetResponse = {
  items: Item[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userItemsGetResponseSchema: Schema<UserItemsGetResponse> = s.object<UserItemsGetResponse>({
  items: s.array(s.lazy(() => itemSchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
