import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditPayStubAddress = {
  city: string | null;
  country: string | null;
  postalCode: string | null;
  region: string | null;
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
