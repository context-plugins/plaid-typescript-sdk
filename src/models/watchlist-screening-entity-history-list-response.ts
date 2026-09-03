import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningSchema,
  type EntityWatchlistScreening,
} from "./entity-watchlist-screening.js";

export type WatchlistScreeningEntityHistoryListResponse = {
  entityWatchlistScreenings: EntityWatchlistScreening[];
  nextCursor: string | null;
  requestId: string;
};

export const watchlistScreeningEntityHistoryListResponseSchema: Schema<WatchlistScreeningEntityHistoryListResponse> =
  s.object<WatchlistScreeningEntityHistoryListResponse>({
    entityWatchlistScreenings: s.array(s.lazy(() => entityWatchlistScreeningSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      entityWatchlistScreenings: "entity_watchlist_screenings",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
