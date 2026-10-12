import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object containing fields describing property address. */
export type MortgagePropertyAddress = {
  /** The city name. */
  city: string | null;
  /** The ISO 3166-1 alpha-2 country code. */
  country: string | null;
  /** The five or nine digit postal code. */
  postalCode: string | null;
  /** The region or state (example "NC"). */
  region: string | null;
  /** The full street address (example "564 Main Street, Apt 15"). */
  street: string | null;
};

export const mortgagePropertyAddressSchema: Schema<MortgagePropertyAddress> =
  s.object<MortgagePropertyAddress>({
    city: s.nullable(s.string()),
    country: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    region: s.nullable(s.string()),
    street: s.nullable(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
