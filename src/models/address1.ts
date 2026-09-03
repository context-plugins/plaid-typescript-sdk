import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address1 = {
  street?: string | null;
  street2?: string | null;
  city?: string | null;
  region?: string | null;
  postalCode?: string | null;
  country: string;
};

export const address1Schema: Schema<Address1> = s.object<Address1>({
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
