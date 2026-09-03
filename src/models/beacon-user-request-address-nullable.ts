import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserRequestAddressNullable = {
  street: string;
  street2?: string | null;
  city: string;
  region?: string | null;
  postalCode?: string | null;
  country: string;
};

export const beaconUserRequestAddressNullableSchema: Schema<BeaconUserRequestAddressNullable> =
  s.object<BeaconUserRequestAddressNullable>({
    street: s.string(),
    street2: s.optionalNullable(s.string()),
    city: s.string(),
    region: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    country: s.string(),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
