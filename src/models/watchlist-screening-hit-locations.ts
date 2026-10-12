import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Location information for the associated watchlist hit */
export type WatchlistScreeningHitLocations = {
  /**
   * The full location string, potentially including elements like street, city, postal codes and
   * country codes. Note that this is not necessarily a complete or well-formatted address.
   */
  full: string;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  country: string;
};

export const watchlistScreeningHitLocationsSchema: Schema<WatchlistScreeningHitLocations> =
  s.object<WatchlistScreeningHitLocations>({
    full: s.string(),
    country: s.string(),
  });
