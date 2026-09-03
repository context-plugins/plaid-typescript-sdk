import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserAddress = {
  street: string;
  street2: string | null;
  city: string;
  region: string | null;
  postalCode: string | null;
  country: string;
};

export const beaconUserAddressSchema: Schema<BeaconUserAddress> = s.object<BeaconUserAddress>({
  street: s.string(),
  street2: s.nullable(s.string()),
  city: s.string(),
  region: s.nullable(s.string()),
  postalCode: s.nullable(s.string()),
  country: s.string(),
  _keysMap: {
    postalCode: "postal_code",
  },
});
