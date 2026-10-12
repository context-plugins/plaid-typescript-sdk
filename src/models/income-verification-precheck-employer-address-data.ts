import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data about the components comprising an address. */
export type IncomeVerificationPrecheckEmployerAddressData = {
  /** The full city name */
  city?: string;
  /** The ISO 3166-1 alpha-2 country code */
  country?: string;
  /** The postal code. In API versions 2018-05-22 and earlier, this field is called `zip`. */
  postalCode?: string;
  /**
   * The region or state. In API versions 2018-05-22 and earlier, this field is called `state`.
   * Example: `"NC"`
   */
  region?: string;
  /** The full street address Example: `"564 Main Street, APT 15"` */
  street?: string;
};

export const incomeVerificationPrecheckEmployerAddressDataSchema: Schema<IncomeVerificationPrecheckEmployerAddressData> =
  s.object<IncomeVerificationPrecheckEmployerAddressData>({
    city: s.optional(s.string()),
    country: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    region: s.optional(s.string()),
    street: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
