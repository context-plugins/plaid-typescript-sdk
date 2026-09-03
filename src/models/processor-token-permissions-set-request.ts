import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

export type ProcessorTokenPermissionsSetRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
  products: Products[];
};

export const processorTokenPermissionsSetRequestSchema: Schema<ProcessorTokenPermissionsSetRequest> =
  s.object<ProcessorTokenPermissionsSetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    products: s.array(s.lazy(() => productsSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
