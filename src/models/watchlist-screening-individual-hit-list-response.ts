import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { watchlistScreeningHitSchema, type WatchlistScreeningHit } from "./watchlist-screening-hit.js";

export type WatchlistScreeningIndividualHitListResponse = {
  watchlistScreeningHits: WatchlistScreeningHit[];
  nextCursor: string | null;
  requestId: string;
};

export const watchlistScreeningIndividualHitListResponseSchema: Schema<WatchlistScreeningIndividualHitListResponse> =
  s.object<WatchlistScreeningIndividualHitListResponse>({
    watchlistScreeningHits: s.array(s.lazy(() => watchlistScreeningHitSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      watchlistScreeningHits: "watchlist_screening_hits",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
