import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningSchema,
  type EntityWatchlistScreening,
} from "./entity-watchlist-screening.js";

export type WatchlistScreeningEntityListResponse = {
  entityWatchlistScreenings: EntityWatchlistScreening[];
  nextCursor: string | null;
  requestId: string;
};

export const watchlistScreeningEntityListResponseSchema: Schema<WatchlistScreeningEntityListResponse> =
  s.object<WatchlistScreeningEntityListResponse>({
    entityWatchlistScreenings: s.array(s.lazy(() => entityWatchlistScreeningSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      entityWatchlistScreenings: "entity_watchlist_screenings",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
