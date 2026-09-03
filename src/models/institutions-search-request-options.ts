import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionsSearchPaymentInitiationOptionsSchema,
  type InstitutionsSearchPaymentInitiationOptions,
} from "./institutions-search-payment-initiation-options.js";

export type InstitutionsSearchRequestOptions = {
  oauth?: boolean | null;
  includeOptionalMetadata?: boolean;
  includeAuthMetadata?: boolean | null;
  includePaymentInitiationMetadata?: boolean | null;
  paymentInitiation?: InstitutionsSearchPaymentInitiationOptions | null;
};

export const institutionsSearchRequestOptionsSchema: Schema<InstitutionsSearchRequestOptions> =
  s.object<InstitutionsSearchRequestOptions>({
    oauth: s.optionalNullable(s.boolean()),
    includeOptionalMetadata: s.optional(s.boolean()),
    includeAuthMetadata: s.optionalNullable(s.boolean()),
    includePaymentInitiationMetadata: s.optionalNullable(s.boolean()),
    paymentInitiation: s.optionalNullable(s.lazy(() => institutionsSearchPaymentInitiationOptionsSchema)),
    _keysMap: {
      includeOptionalMetadata: "include_optional_metadata",
      includeAuthMetadata: "include_auth_metadata",
      includePaymentInitiationMetadata: "include_payment_initiation_metadata",
      paymentInitiation: "payment_initiation",
    },
  });
