import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The end customer's address. */
export type PartnerEndCustomerAddress = {
  city?: string;
  street?: string;
  region?: string;
  postalCode?: string;
  /** ISO-3166-1 alpha-2 country code standard. */
  countryCode?: string;
};

export const partnerEndCustomerAddressSchema: Schema<PartnerEndCustomerAddress> =
  s.object<PartnerEndCustomerAddress>({
    city: s.optional(s.string()),
    street: s.optional(s.string()),
    region: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    countryCode: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
      countryCode: "country_code",
    },
  });
