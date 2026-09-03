import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationDocumentAddressResponse = {
  street: string;
  city: string;
  region: string | null;
  postalCode: string | null;
  country: string;
};

export const identityVerificationDocumentAddressResponseSchema: Schema<IdentityVerificationDocumentAddressResponse> =
  s.object<IdentityVerificationDocumentAddressResponse>({
    street: s.string(),
    city: s.string(),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.string(),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
