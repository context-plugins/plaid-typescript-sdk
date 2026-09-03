import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubAddress = {
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  region?: string | null;
  street?: string | null;
  line1?: string | null;
  line2?: string | null;
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
