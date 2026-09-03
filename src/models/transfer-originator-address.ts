import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorAddress = {
  city: string;
  street: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

export const transferOriginatorAddressSchema: Schema<TransferOriginatorAddress> =
  s.object<TransferOriginatorAddress>({
    city: s.string(),
    street: s.string(),
    region: s.string(),
    postalCode: s.string(),
    countryCode: s.string(),
    _keysMap: {
      postalCode: "postal_code",
      countryCode: "country_code",
    },
  });
