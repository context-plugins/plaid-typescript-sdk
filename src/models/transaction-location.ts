import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A representation of where a transaction took place. Location data is provided only for
 * transactions at physical locations, not for online transactions. Location data availability
 * depends primarily on the merchant and is most likely to be populated for transactions at large
 * retail chains; small, local businesses are less likely to have location data available.
 */
export type TransactionLocation = {
  /** The street address where the transaction occurred. */
  address: string | null;
  /** The city where the transaction occurred. */
  city: string | null;
  /**
   * The region or state where the transaction occurred. In API versions 2018-05-22 and earlier,
   * this field is called `state`.
   */
  region: string | null;
  /**
   * The postal code where the transaction occurred. In API versions 2018-05-22 and earlier, this
   * field is called `zip`.
   */
  postalCode: string | null;
  /** The ISO 3166-1 alpha-2 country code where the transaction occurred. */
  country: string | null;
  /** The latitude where the transaction occurred. */
  lat: number | null;
  /** The longitude where the transaction occurred. */
  lon: number | null;
  /** The merchant defined store number where the transaction occurred. */
  storeNumber: string | null;
};

export const transactionLocationSchema: Schema<TransactionLocation> = s.object<TransactionLocation>({
  address: s.nullable(s.string()),
  city: s.nullable(s.string()),
  region: s.nullable(s.string()),
  postalCode: s.nullable(s.string()),
  country: s.nullable(s.string()),
  lat: s.nullable(s.float64()),
  lon: s.nullable(s.float64()),
  storeNumber: s.nullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
    storeNumber: "store_number",
  },
});
