import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientUserIdentityAddress = {
  street1?: string | null;
  street2?: string | null;
  city?: string | null;
  region?: string | null;
  country: string;
  postalCode?: string | null;
  primary: boolean;
};

export const clientUserIdentityAddressSchema: Schema<ClientUserIdentityAddress> =
  s.object<ClientUserIdentityAddress>({
    street1: s.optionalNullable(s.string()),
    street2: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    region: s.optionalNullable(s.string()),
    country: s.string(),
    postalCode: s.optionalNullable(s.string()),
    primary: s.boolean(),
    _keysMap: {
      street1: "street_1",
      street2: "street_2",
      postalCode: "postal_code",
    },
  });
