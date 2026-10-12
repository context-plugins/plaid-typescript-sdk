import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A status enum indicating whether a screening is still pending review, has been rejected, or has
 * been cleared.
 */
export const WatchlistScreeningStatus = {
  Rejected: "rejected",
  PendingReview: "pending_review",
  Cleared: "cleared",
} as const;
export type WatchlistScreeningStatus =
  | (typeof WatchlistScreeningStatus)[keyof typeof WatchlistScreeningStatus]
  | (string & {});

export const watchlistScreeningStatusSchema: EnumSchema<WatchlistScreeningStatus> =
  s.enumOf<WatchlistScreeningStatus>(WatchlistScreeningStatus);
