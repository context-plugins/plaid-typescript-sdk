import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A representation of where a transaction took place.
 *
 * Use this field to pass in structured location information you may have about your transactions.
 * Providing location data is optional but can increase result quality. If you have unstructured
 * location information, it may be appended to the `description` field.
 */
export type ClientProvidedTransactionLocation = {
  /**
   * The country where the transaction occurred, formatted as an ISO 3166-1 alpha-2 country code
   * ("US" or "CA").
   */
  country?: string;
  /**
   * The region or state where the transaction occurred, formatted as the official two-letter US
   * state or Canadian province postal code, e.g. "CT" or "QC".
   */
  region?: string;
  /** The city where the transaction occurred. */
  city?: string;
  /** The street address where the transaction occurred. */
  address?: string;
  /** The postal code where the transaction occurred. */
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
