import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

export type ProcessorTokenPermissionsGetResponse = {
  requestId: string;
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
