import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";
import {
  watchlistScreeningHitLocationsSchema,
  type WatchlistScreeningHitLocations,
} from "./watchlist-screening-hit-locations.js";

export type GenericScreeningHitLocationItems = {
  analysis?: MatchSummary;
  data?: WatchlistScreeningHitLocations;
};

export const genericScreeningHitLocationItemsSchema: Schema<GenericScreeningHitLocationItems> =
  s.object<GenericScreeningHitLocationItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => watchlistScreeningHitLocationsSchema)),
  });
