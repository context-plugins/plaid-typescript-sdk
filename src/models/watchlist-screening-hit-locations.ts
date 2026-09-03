import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningHitLocations = {
  full: string;
  country: string;
};

export const watchlistScreeningHitLocationsSchema: Schema<WatchlistScreeningHitLocations> =
  s.object<WatchlistScreeningHitLocations>({
    full: s.string(),
    country: s.string(),
  });
