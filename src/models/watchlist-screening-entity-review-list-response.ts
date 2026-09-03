import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningReviewSchema,
  type EntityWatchlistScreeningReview,
} from "./entity-watchlist-screening-review.js";

export type WatchlistScreeningEntityReviewListResponse = {
  entityWatchlistScreeningReviews: EntityWatchlistScreeningReview[];
  nextCursor: string | null;
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
