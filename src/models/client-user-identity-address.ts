import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** User address information. */
export type ClientUserIdentityAddress = {
  /** First line of street address. */
  street1?: string | null;
  /** Second line of street address. */
  street2?: string | null;
  /** City name. */
  city?: string | null;
  /** State, province or region. */
  region?: string | null;
  /** Country code. */
  country: string;
  /** Postal or ZIP code. */
  postalCode?: string | null;
  /** Indicates whether this is the primary address for the User. */
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
