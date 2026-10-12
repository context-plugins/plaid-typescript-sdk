import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserProductsTerminateResponse defines the response schema for `/user/products/terminate` */
export type UserProductsTerminateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userProductsTerminateResponseSchema: Schema<UserProductsTerminateResponse> =
  s.object<UserProductsTerminateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
