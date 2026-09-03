import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningIndividualReviewListRequest = {
  secret?: string;
  clientId?: string;
  watchlistScreeningId: string;
  cursor?: string | null;
};

export const watchlistScreeningIndividualReviewListRequestSchema: Schema<WatchlistScreeningIndividualReviewListRequest> =
  s.object<WatchlistScreeningIndividualReviewListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    watchlistScreeningId: s.string(),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      watchlistScreeningId: "watchlist_screening_id",
    },
  });
