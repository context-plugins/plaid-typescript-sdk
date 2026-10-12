import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

/**
 * ProcessorTokenPermissionsGetResponse defines the response schema for
 * `/processor/token/permissions/get`
 */
export type ProcessorTokenPermissionsGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * A list of products the processor token should have access to. An empty list means that the
   * processor has access to all available products, including future products.
   */
  products: Products[];
};

export const processorTokenPermissionsGetResponseSchema: Schema<ProcessorTokenPermissionsGetResponse> =
  s.object<ProcessorTokenPermissionsGetResponse>({
    requestId: s.string(),
    products: s.array(s.lazy(() => productsSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
