import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningReviewSchema,
  type WatchlistScreeningReview,
} from "./watchlist-screening-review.js";

/** Paginated list of screening reviews */
export type WatchlistScreeningIndividualReviewListResponse = {
  /** List of screening reviews */
  watchlistScreeningReviews: WatchlistScreeningReview[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
