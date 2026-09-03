import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstitutionsGetByIdRequestOptions = {
  includeOptionalMetadata?: boolean;
  includeStatus?: boolean;
  includeAuthMetadata?: boolean;
  includePaymentInitiationMetadata?: boolean;
};

export const institutionsGetByIdRequestOptionsSchema: Schema<InstitutionsGetByIdRequestOptions> =
  s.object<InstitutionsGetByIdRequestOptions>({
    includeOptionalMetadata: s.optional(s.boolean()),
    includeStatus: s.optional(s.boolean()),
    includeAuthMetadata: s.optional(s.boolean()),
    includePaymentInitiationMetadata: s.optional(s.boolean()),
    _keysMap: {
      includeOptionalMetadata: "include_optional_metadata",
      includeStatus: "include_status",
      includeAuthMetadata: "include_auth_metadata",
      includePaymentInitiationMetadata: "include_payment_initiation_metadata",
    },
  });
