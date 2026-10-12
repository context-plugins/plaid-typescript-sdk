import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningSchema,
  type EntityWatchlistScreening,
} from "./entity-watchlist-screening.js";

/** Paginated list of entity watchlist screenings */
export type WatchlistScreeningEntityListResponse = {
  /** List of entity watchlist screening */
  entityWatchlistScreenings: EntityWatchlistScreening[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
