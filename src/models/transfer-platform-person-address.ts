import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferPlatformPersonAddress = {
  city: string;
  country: string;
  postalCode: string;
  region: string;
  street: string;
  street2?: string;
};

export const transferPlatformPersonAddressSchema: Schema<TransferPlatformPersonAddress> =
  s.object<TransferPlatformPersonAddress>({
    city: s.string(),
    country: s.string(),
    postalCode: s.string(),
    region: s.string(),
    street: s.string(),
    street2: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
