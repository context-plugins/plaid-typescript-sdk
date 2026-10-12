import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data about the components comprising an address. */
export type SignalAddressData = {
  /** The full city name */
  city?: string;
  /** The region or state Example: `"NC"` */
  region?: string | null;
  /** The full street address Example: `"564 Main Street, APT 15"` */
  street?: string;
  /** The postal code */
  postalCode?: string | null;
  /** The ISO 3166-1 alpha-2 country code */
  country?: string | null;
};

export const signalAddressDataSchema: Schema<SignalAddressData> = s.object<SignalAddressData>({
  city: s.optional(s.string()),
  region: s.optionalNullable(s.string()),
  street: s.optional(s.string()),
  postalCode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
});
