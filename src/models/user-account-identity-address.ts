import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountIdentityAddress = {
  city?: string | null;
  region?: string | null;
  street?: string | null;
  street2?: string | null;
  postalCode?: string | null;
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
