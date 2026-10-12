import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The address associated with the account holder. */
export type TransferUserAddressInResponse = {
  /** The street number and name (i.e., "100 Market St."). */
  street: string | null;
  /** Ex. "San Francisco" */
  city: string | null;
  /** The state or province (e.g., "CA"). */
  region: string | null;
  /** The postal code (e.g., "94103"). */
  postalCode: string | null;
  /** A two-letter country code (e.g., "US"). */
  country: string | null;
};

export const transferUserAddressInResponseSchema: Schema<TransferUserAddressInResponse> =
  s.object<TransferUserAddressInResponse>({
    street: s.nullable(s.string()),
    city: s.nullable(s.string()),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.nullable(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
