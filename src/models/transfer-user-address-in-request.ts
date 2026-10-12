import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The address associated with the account holder. */
export type TransferUserAddressInRequest = {
  /** The street number and name (i.e., "100 Market St."). */
  street?: string;
  /** Ex. "San Francisco" */
  city?: string;
  /** The state or province (e.g., "CA"). */
  region?: string;
  /** The postal code (e.g., "94103"). */
  postalCode?: string;
  /** A two-letter country code (e.g., "US"). */
  country?: string;
};

export const transferUserAddressInRequestSchema: Schema<TransferUserAddressInRequest> =
  s.object<TransferUserAddressInRequest>({
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    region: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    country: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
