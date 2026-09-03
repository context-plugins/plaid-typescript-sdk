import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseBusinessAddress = {
  street: string | null;
  street2: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string;
};

export const responseBusinessAddressSchema: Schema<ResponseBusinessAddress> =
  s.object<ResponseBusinessAddress>({
    street: s.nullable(s.string()),
    street2: s.nullable(s.string()),
    city: s.nullable(s.string()),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.string(),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
