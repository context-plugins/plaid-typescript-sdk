import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningHitSchema,
  type EntityWatchlistScreeningHit,
} from "./entity-watchlist-screening-hit.js";

/** Paginated list of entity watchlist screening hits */
export type WatchlistScreeningEntityHitListResponse = {
  /** List of entity watchlist screening hits */
  entityWatchlistScreeningHits: EntityWatchlistScreeningHit[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const watchlistScreeningEntityHitListResponseSchema: Schema<WatchlistScreeningEntityHitListResponse> =
  s.object<WatchlistScreeningEntityHitListResponse>({
    entityWatchlistScreeningHits: s.array(s.lazy(() => entityWatchlistScreeningHitSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      entityWatchlistScreeningHits: "entity_watchlist_screening_hits",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
