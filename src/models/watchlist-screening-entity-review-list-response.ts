import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningReviewSchema,
  type EntityWatchlistScreeningReview,
} from "./entity-watchlist-screening-review.js";

/** Paginated list of entity watchlist screening reviews */
export type WatchlistScreeningEntityReviewListResponse = {
  /** List of entity watchlist screening reviews */
  entityWatchlistScreeningReviews: EntityWatchlistScreeningReview[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const watchlistScreeningEntityReviewListResponseSchema: Schema<WatchlistScreeningEntityReviewListResponse> =
  s.object<WatchlistScreeningEntityReviewListResponse>({
    entityWatchlistScreeningReviews: s.array(s.lazy(() => entityWatchlistScreeningReviewSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      entityWatchlistScreeningReviews: "entity_watchlist_screening_reviews",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
