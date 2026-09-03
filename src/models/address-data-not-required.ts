import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddressDataNotRequired = {
  city?: string | null;
  region?: string | null;
  street?: string;
  postalCode?: string | null;
  country?: string | null;
};

export const addressDataNotRequiredSchema: Schema<AddressDataNotRequired> = s.object<AddressDataNotRequired>({
  city: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  street: s.optional(s.string()),
  postalCode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
});
