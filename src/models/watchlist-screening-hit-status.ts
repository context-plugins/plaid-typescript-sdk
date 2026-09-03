import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistScreeningHitStatus = {
  Confirmed: "confirmed",
  PendingReview: "pending_review",
  Dismissed: "dismissed",
} as const;
export type WatchlistScreeningHitStatus =
  | (typeof WatchlistScreeningHitStatus)[keyof typeof WatchlistScreeningHitStatus]
  | (string & {});

export const watchlistScreeningHitStatusSchema: EnumSchema<WatchlistScreeningHitStatus> =
  s.enumOf<WatchlistScreeningHitStatus>(WatchlistScreeningHitStatus);
