import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAddress = {
  street?: string | null;
  street2?: string | null;
  city?: string | null;
  region?: string | null;
  postalCode?: string | null;
  country: string;
};

export const userAddressSchema: Schema<UserAddress> = s.object<UserAddress>({
  street: s.optionalNullable(s.string()),
  street2: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  country: s.string(),
  _keysMap: {
    postalCode: "postal_code",
  },
});
