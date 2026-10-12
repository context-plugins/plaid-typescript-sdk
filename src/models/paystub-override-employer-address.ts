import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The address of the employer. */
export type PaystubOverrideEmployerAddress = {
  /** The full city name. */
  city?: string;
  /** The region or state Example: `"NC"` */
  region?: string;
  /** The full street address Example: `"564 Main Street, APT 15"` */
  street?: string;
  /** 5 digit postal code. */
  postalCode?: string;
  /** The country of the address. */
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
