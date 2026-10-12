import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Address on the pay stub. */
export type CreditPayStubAddress = {
  /** The full city name. */
  city: string | null;
  /** The ISO 3166-1 alpha-2 country code. */
  country: string | null;
  /** The postal code of the address. */
  postalCode: string | null;
  /** The region or state. Example: `"NC"` */
  region: string | null;
  /** The full street address. */
  street: string | null;
};

export const creditPayStubAddressSchema: Schema<CreditPayStubAddress> = s.object<CreditPayStubAddress>({
  city: s.nullable(s.string()),
  country: s.nullable(s.string()),
  postalCode: s.nullable(s.string()),
  region: s.nullable(s.string()),
  street: s.nullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
});
