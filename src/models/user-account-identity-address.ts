import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's address. */
export type UserAccountIdentityAddress = {
  /** The full city name */
  city?: string | null;
  /** The region or state. Example: `"NC"` */
  region?: string | null;
  /** The full street address Example: `"564 Main Street, APT 15"` */
  street?: string | null;
  /** The second line street address */
  street2?: string | null;
  /** The postal code. In API versions 2018-05-22 and earlier, this field is called `zip`. */
  postalCode?: string | null;
  /** The ISO 3166-1 alpha-2 country code */
  country?: string | null;
};

export const userAccountIdentityAddressSchema: Schema<UserAccountIdentityAddress> =
  s.object<UserAccountIdentityAddress>({
    city: s.optionalNullable(s.string()),
    region: s.optionalNullable(s.string()),
    street: s.optionalNullable(s.string()),
    street2: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
