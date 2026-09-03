import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServicerAddressData = {
  city: string | null;
  region: string | null;
  street: string | null;
  postalCode: string | null;
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
