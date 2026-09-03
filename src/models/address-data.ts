import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddressData = {
  city: string | null;
  region: string | null;
  street: string;
  postalCode: string | null;
  country: string | null;
};

export const addressDataSchema: Schema<AddressData> = s.object<AddressData>({
  city: s.nullable(s.string()),
  region: s.nullable(s.string()),
  street: s.string(),
  postalCode: s.nullable(s.string()),
  country: s.nullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
});
