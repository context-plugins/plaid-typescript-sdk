import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemProductsTerminateResponse defines the response schema for `/item/products/terminate` */
export type ItemProductsTerminateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemProductsTerminateResponseSchema: Schema<ItemProductsTerminateResponse> =
  s.object<ItemProductsTerminateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
