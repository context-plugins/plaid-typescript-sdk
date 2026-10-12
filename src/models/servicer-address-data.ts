import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The address of the student loan servicer. This is generally the remittance address to which
 * payments should be sent.
 */
export type ServicerAddressData = {
  /** The full city name */
  city: string | null;
  /** The region or state Example: `"NC"` */
  region: string | null;
  /** The full street address Example: `"564 Main Street, APT 15"` */
  street: string | null;
  /** The postal code */
  postalCode: string | null;
  /** The ISO 3166-1 alpha-2 country code */
  country: string | null;
};

export const servicerAddressDataSchema: Schema<ServicerAddressData> = s.object<ServicerAddressData>({
  city: s.nullable(s.string()),
  region: s.nullable(s.string()),
  street: s.nullable(s.string()),
  postalCode: s.nullable(s.string()),
  country: s.nullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
});
