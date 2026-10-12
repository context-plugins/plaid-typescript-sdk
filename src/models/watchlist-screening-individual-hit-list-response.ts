import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { watchlistScreeningHitSchema, type WatchlistScreeningHit } from "./watchlist-screening-hit.js";

/** Paginated list of individual watchlist screening hits */
export type WatchlistScreeningIndividualHitListResponse = {
  /** List of individual watchlist screening hits */
  watchlistScreeningHits: WatchlistScreeningHit[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
