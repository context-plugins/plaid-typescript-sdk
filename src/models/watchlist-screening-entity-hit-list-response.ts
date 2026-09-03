import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningHitSchema,
  type EntityWatchlistScreeningHit,
} from "./entity-watchlist-screening-hit.js";

export type WatchlistScreeningEntityHitListResponse = {
  entityWatchlistScreeningHits: EntityWatchlistScreeningHit[];
  nextCursor: string | null;
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
