import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningIndividualReviewCreateRequest = {
  confirmedHits: string[];
  dismissedHits: string[];
  comment?: string | null;
  clientId?: string;
  secret?: string;
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
