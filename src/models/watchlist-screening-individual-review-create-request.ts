import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for creating a screening review */
export type WatchlistScreeningIndividualReviewCreateRequest = {
  /**
   * Hits to mark as a true positive after thorough manual review. These hits will never recur or be
   * updated once confirmed. In most cases, confirmed hits indicate that the customer should be
   * rejected.
   */
  confirmedHits: string[];
  /**
   * Hits to mark as a false positive after thorough manual review. These hits will never recur or
   * be updated once dismissed.
   */
  dismissedHits: string[];
  /** A comment submitted by a team member as part of reviewing a watchlist screening. */
  comment?: string | null;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** ID of the associated screening. */
  watchlistScreeningId: string;
};

export const watchlistScreeningIndividualReviewCreateRequestSchema: Schema<WatchlistScreeningIndividualReviewCreateRequest> =
  s.object<WatchlistScreeningIndividualReviewCreateRequest>({
    confirmedHits: s.array(s.string()),
    dismissedHits: s.array(s.string()),
    comment: s.optionalNullable(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    watchlistScreeningId: s.string(),
    _keysMap: {
      confirmedHits: "confirmed_hits",
      dismissedHits: "dismissed_hits",
      clientId: "client_id",
      watchlistScreeningId: "watchlist_screening_id",
    },
  });
