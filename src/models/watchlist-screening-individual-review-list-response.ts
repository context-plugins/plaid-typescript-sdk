import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningReviewSchema,
  type WatchlistScreeningReview,
} from "./watchlist-screening-review.js";

export type WatchlistScreeningIndividualReviewListResponse = {
  watchlistScreeningReviews: WatchlistScreeningReview[];
  nextCursor: string | null;
  requestId: string;
};

export const watchlistScreeningIndividualReviewListResponseSchema: Schema<WatchlistScreeningIndividualReviewListResponse> =
  s.object<WatchlistScreeningIndividualReviewListResponse>({
    watchlistScreeningReviews: s.array(s.lazy(() => watchlistScreeningReviewSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      watchlistScreeningReviews: "watchlist_screening_reviews",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
