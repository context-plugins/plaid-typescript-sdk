import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemRemoveResponse defines the response schema for `/item/remove` */
export type ItemRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemRemoveResponseSchema: Schema<ItemRemoveResponse> = s.object<ItemRemoveResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
