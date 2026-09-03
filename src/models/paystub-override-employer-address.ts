import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideEmployerAddress = {
  city?: string;
  region?: string;
  street?: string;
  postalCode?: string;
  country?: string;
};

export const paystubOverrideEmployerAddressSchema: Schema<PaystubOverrideEmployerAddress> =
  s.object<PaystubOverrideEmployerAddress>({
    city: s.optional(s.string()),
    region: s.optional(s.string()),
    street: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    country: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
