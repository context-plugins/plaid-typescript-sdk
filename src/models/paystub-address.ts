import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Address on the paystub */
export type PaystubAddress = {
  /** The full city name. */
  city?: string | null;
  /** The ISO 3166-1 alpha-2 country code. */
  country?: string | null;
  /** The postal code of the address. */
  postalCode?: string | null;
  /** The region or state Example: `"NC"` */
  region?: string | null;
  /** The full street address. */
  street?: string | null;
  /**
   * Street address line 1.
   *
   * @deprecated
   */
  line1?: string | null;
  /**
   * Street address line 2.
   *
   * @deprecated
   */
  line2?: string | null;
  /**
   * The region or state Example: `"NC"`
   *
   * @deprecated
   */
  stateCode?: string | null;
};

export const paystubAddressSchema: Schema<PaystubAddress> = s.object<PaystubAddress>({
  city: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  street: s.optionalNullable(s.string()),
  line1: s.optionalNullable(s.string()),
  line2: s.optionalNullable(s.string()),
  stateCode: s.optionalNullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
    stateCode: "state_code",
  },
});
