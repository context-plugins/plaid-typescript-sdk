import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningIndividualSchema,
  type WatchlistScreeningIndividual,
} from "./watchlist-screening-individual.js";

export type WatchlistScreeningIndividualListResponse = {
  watchlistScreenings: WatchlistScreeningIndividual[];
  nextCursor: string | null;
  requestId: string;
};

export const watchlistScreeningIndividualListResponseSchema: Schema<WatchlistScreeningIndividualListResponse> =
  s.object<WatchlistScreeningIndividualListResponse>({
    watchlistScreenings: s.array(s.lazy(() => watchlistScreeningIndividualSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      watchlistScreenings: "watchlist_screenings",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
