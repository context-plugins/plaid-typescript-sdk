import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The originator's address. */
export type TransferOriginatorAddress = {
  /** The full city name. */
  city: string;
  /** The full street address. */
  street: string;
  /** The two-letter code for the state or province (e.g., "CA"). */
  region: string;
  /** The postal code (e.g., "94103"). */
  postalCode: string;
  /** ISO-3166-1 alpha-2 country code standard. */
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
