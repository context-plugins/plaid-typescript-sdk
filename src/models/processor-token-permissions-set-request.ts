import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

/**
 * ProcessorTokenPermissionsSetRequest defines the request schema for
 * `/processor/token/permissions/set`
 */
export type ProcessorTokenPermissionsSetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The processor token obtained from the Plaid integration partner. Processor tokens are in the
   * format: `processor-<environment>-<identifier>`
   */
  processorToken: string;
  /**
   * A list of products the processor token should have access to. An empty list will grant access
   * to all products.
   */
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
