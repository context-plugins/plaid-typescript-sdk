import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientProvidedTransactionLocation = {
  country?: string;
  region?: string;
  city?: string;
  address?: string;
  postalCode?: string;
};

export const clientProvidedTransactionLocationSchema: Schema<ClientProvidedTransactionLocation> =
  s.object<ClientProvidedTransactionLocation>({
    country: s.optional(s.string()),
    region: s.optional(s.string()),
    city: s.optional(s.string()),
    address: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
