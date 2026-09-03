import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

export type InstitutionsGetRequestOptions = {
  products?: Products[] | null;
  routingNumbers?: string[] | null;
  oauth?: boolean | null;
  includeOptionalMetadata?: boolean;
  includeAuthMetadata?: boolean;
  includePaymentInitiationMetadata?: boolean;
};

export const institutionsGetRequestOptionsSchema: Schema<InstitutionsGetRequestOptions> =
  s.object<InstitutionsGetRequestOptions>({
    products: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
    routingNumbers: s.optionalNullable(s.array(s.string())),
    oauth: s.optionalNullable(s.boolean()),
    includeOptionalMetadata: s.optional(s.boolean()),
    includeAuthMetadata: s.optional(s.boolean()),
    includePaymentInitiationMetadata: s.optional(s.boolean()),
    _keysMap: {
      routingNumbers: "routing_numbers",
      includeOptionalMetadata: "include_optional_metadata",
      includeAuthMetadata: "include_auth_metadata",
      includePaymentInitiationMetadata: "include_payment_initiation_metadata",
    },
  });
